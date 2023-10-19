import AdvanceFilter from '@qoruz/pages/creator-campaigns/advance-search/advanceSearch';
import CampaignContent from '@qoruz/pages/creator-campaigns/campaign-content/campaignContent';
import Hero from '@qoruz/pages/creator-campaigns/hero/hero';
import SearchFilter from '@qoruz/pages/creator-campaigns/Search/search';
import CampaignContents, {
  CampaignRow
} from '@qoruz/pages/creator-campaigns/style';
import Footer from '@qoruz/pages/footer/footer';
import React, { useState } from 'react';
import CampaignData from 'src/utils/campaign.json';

const CampaignPowerhouse = () => {
  const [mainState, setMainState]: any = useState({
    notEmpty: false,
    campaign: '',
    social: '',
    asset: '',
    industry: '',
  });
  const [searchData, setSearchData] = useState([]);
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [filteredCards, setFilteredCards] = React.useState<any>(
    JSON.parse(JSON.stringify(CampaignData))
  );


  const handleSearch = (searchTerm: any) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredData = CampaignData?.filter(
      (card) =>
        card.CampaignTitle.toLowerCase().includes(lowerCaseSearchTerm) ||
        card.BrandName.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredCards(filteredData);
  };

  const cards = JSON.parse(JSON.stringify(CampaignData));
  const objectiveData = CampaignData.map((item: any) => {
    return item.CampaignObjective;
  });
  // const socialData = CampaignData.map((item: any) => {
  //   return item.SocialPlatforms;
  // });
  const assetTypeData = CampaignData.map((item: any) => {
    return item.AssetType;
  });
  const industryTypeData = CampaignData.map((item: any) => {
    return item.IndustryType;
  });

  const campaignObjectives = Array.from(new Set(objectiveData));
  const campaignSocial = Array.from(
    new Set(
      CampaignData.flatMap((item) =>
        item.SocialPlatforms.split(',').map((platform) => platform.trim())
      )
    )
  );

  const campaignAsset = Array.from(new Set(assetTypeData));
  const campaignIndustry = Array.from(new Set(industryTypeData));
  const [selectedCampaignObjectives, setSelectedCampaignObjectives] =
    useState<any>([]);
  const [selectedCampaignSocials, setSelectedCampaignSocials] = useState<any>(
    []
  );
  const [selectedCampaignAssets, setSelectedCampaignAssets] = useState<any>([]);
  const [selectedCampaignIndustry, setSelectedCampaignIndustry] = useState<any>(
    []
  );

  const filteredCards2 =
    selectedCampaignObjectives.length === 0
      ? cards
      : cards?.filter((card: any) =>
        selectedCampaignObjectives.includes(card.CampaignObjective)
      );

  const filteredCards3 =
    selectedCampaignSocials.length === 0
      ? cards
      : cards?.filter((card: any) =>
        selectedCampaignSocials.includes(card.SocialPlatforms.split(',')[0])
      );

  const filteredCards4 =
    selectedCampaignAssets.length === 0
      ? cards
      : cards?.filter((card: any) =>
        selectedCampaignAssets.includes(card.AssetType)
      );
  const filteredCards5 =
    selectedCampaignIndustry.length === 0
      ? cards
      : cards?.filter((card: any) =>
        selectedCampaignIndustry.includes(card.IndustryType)
      );

  const handleCampaignObjectiveSelect = (option: any) => {
    if (selectedCampaignObjectives.includes(option)) {
      setSelectedCampaignObjectives(
        selectedCampaignObjectives.filter((filter: any) => filter !== option)
      );
    } else {
      setSelectedCampaignObjectives([...selectedCampaignObjectives, option]);
    }
  };

  const handleCampaignSocialSelect = (option: any) => {
    if (selectedCampaignSocials.includes(option)) {
      setSelectedCampaignSocials(
        selectedCampaignSocials.filter((filter: any) => filter !== option)
      );
    } else {
      setSelectedCampaignSocials([...selectedCampaignSocials, option]);
    }
  };
  const handleCampaignAssetSelect = (option: any) => {
    if (selectedCampaignAssets.includes(option)) {
      setSelectedCampaignAssets(
        selectedCampaignAssets.filter((filter: any) => filter !== option)
      );
    } else {
      setSelectedCampaignAssets([...selectedCampaignAssets, option]);
    }
  };
  const handleCampaignIndustrySelect = (option: any) => {
    if (selectedCampaignIndustry.includes(option)) {
      setSelectedCampaignIndustry(
        selectedCampaignIndustry.filter((filter: any) => filter !== option)
      );
    } else {
      setSelectedCampaignIndustry([...selectedCampaignIndustry, option]);
    }
  };
  const handleReset = () => {
    // setSelectedCampaignObjectives([]);
    // setSelectedSocialPlatforms([]);
    setSelectedCampaignAssets([]);
    setSelectedCampaignIndustry([]);
    setSelectedCampaignObjectives([]);
    setSelectedCampaignSocials([]);
  };
  return (
    <>
      {/* {!formSubmitSuccess ? (
        <CreatorForm handleSuccess={trackFormSuccess} />
      ) : ( */}
      <>
        
        <Hero />
        <SearchFilter
          setAdvancedSearch={setAdvancedSearch}
          advancedSearch={advancedSearch}
          setMainState={setMainState}
          setSearchData={setSearchData}
          onSearch={handleSearch}
        />
        <CampaignContents>
          <CampaignRow>
            {advancedSearch && (
              <AdvanceFilter
                filterOptions={campaignObjectives}
                selectedFilters={selectedCampaignObjectives}
                onFilterSelect={handleCampaignObjectiveSelect}
                filterOptions2={campaignSocial}
                selectedFilters2={selectedCampaignSocials}
                onFilterSelect2={handleCampaignSocialSelect}
                filterOptions3={campaignAsset}
                selectedFilters3={selectedCampaignAssets}
                onFilterSelect3={handleCampaignAssetSelect}
                filterOptions4={campaignIndustry}
                selectedFilters4={selectedCampaignIndustry}
                onFilterSelect4={handleCampaignIndustrySelect}
                onReset={handleReset}
              />
            )}
            <CampaignContent
              mainState={mainState}
              setMainState={setMainState}
              searchData={searchData}
              cards={filteredCards}
              advancedSearchActive={advancedSearch}
              cards2={filteredCards2}
              cards3={filteredCards3}
              cards4={filteredCards4}
              cards5={filteredCards5}
            />
          </CampaignRow>
        </CampaignContents>
        <Footer />
      </>
      {/* )} */}
    </>
  );
};
export default CampaignPowerhouse;
