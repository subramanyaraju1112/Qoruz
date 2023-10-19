import AdvanceFilterStyled, {
  AdvanceFilterType,
} from '@qoruz/pages/creator-campaigns/advance-search/advanceSearch.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React, { useState } from 'react';
import CampaignData from 'src/utils/campaign.json';

// const objectiveData = CampaignData.map((item: any) => {
//   return item.CampaignObjective;
// });

// const socialData = CampaignData.map((item: any) => {
//   return item.SocialPlatforms;
// });

// const assetData = CampaignData.map((item: any) => {
//   return item.AssetType;
// });

const industryData = CampaignData.map((item: any) => {
  return item.IndustryType;
});

// const campaignObjective = Array.from(new Set(objectiveData));
// const campaignSocial = Array.from(new Set(socialData));
// const campaignAsset = Array.from(new Set(assetData));
const campaignIndustry = Array.from(new Set(industryData));
// const fourIndustries = campaignIndustry.splice(0, 4);

const AdvanceFilter = ({
  etc,
  filterOptions,
  selectedFilters,
  onFilterSelect,
  filterOptions2,
  selectedFilters2,
  onFilterSelect2,
  filterOptions3,
  selectedFilters3,
  onFilterSelect3,
  filterOptions4,
  selectedFilters4,
  onFilterSelect4,
  onReset,
}: any) => {
  const [inputValue, setInputValue] = useState('');
  const [objectiveShow, setObjectiveShow] = useState(false);
  const [socialShow, setSocialShow] = useState(false);
  const [industryShow, setindustryShow] = useState(false);
  const keyword = inputValue.toLowerCase();
  const filtered_names = campaignIndustry?.filter(function (user) {
    user = user.toLowerCase();
    return user.indexOf(keyword) > -1;
  });
  // const limit = 4;

  return (
    <AdvanceFilterStyled>
      <div className='border-area'>
        <div className='flex justify-between'>
          <small>Filter by </small>
          <small className='reset-btn' onClick={onReset}>
            Reset
          </small>
        </div>
        <AdvanceFilterType className='objective-search'>
          <h3 className='type-heading'>
            <Image
              src={joinS3('images/common/campaign-objective.svg')}
              alt='Campaign Object Image'
              width={24}
              height={24}
            />{' '}
            Campaign Objective
          </h3>
          <ul className='pill-list'>
            {filterOptions?.map((label: any, index: any) => {
              if (!objectiveShow) {
                if (index > 4) return;
              }
              return (
                <li
                  className={`tag-pill ${
                    selectedFilters.includes(label) ? 'selected' : ''
                  }`}
                  onClick={() => onFilterSelect(label)}
                  key={index}
                >
                  {label}
                </li>
              );
            })}
            <span
              className='extra-option'
              onClick={() => setObjectiveShow(!objectiveShow)}
            >
              {objectiveShow ? '-' : '+'}
            </span>
          </ul>
        </AdvanceFilterType>
        <AdvanceFilterType>
          <h3 className='type-heading'>
            <Image
              src={joinS3('images/common/social-platforms.svg')}
              alt='Social Type Image'
              width={24}
              height={24}
            />{' '}
            Social Platforms
          </h3>
          <ul className='pill-list'>
            {filterOptions2?.map((label: any, index: any) => {
              if (!socialShow) {
                if (index > 4) return;
              }
              return (
                <li
                  className={`tag-pill ${
                    selectedFilters2.includes(label) ? 'selected' : ''
                  }`}
                  key={index}
                  onClick={() => onFilterSelect2(label)}
                >
                  {label}
                </li>
              );
            })}
            <span
              className='extra-option'
              onClick={() => setSocialShow(!socialShow)}
            >
              {socialShow ? '-' : '+'}
              {filterOptions2?.length - 4}
            </span>
          </ul>
        </AdvanceFilterType>
        <AdvanceFilterType>
          <h3 className='type-heading'>
            <Image
              src={joinS3('images/common/asset-type.svg')}
              alt='Asset Type Image'
              width={24}
              height={24}
            />{' '}
            Asset Type
          </h3>
          <ul className='pill-list'>
            {filterOptions3?.map((label: any, index: any) => (
              <li
                className={`tag-pill ${
                  selectedFilters3.includes(label) ? 'selected' : ''
                }`}
                key={index}
                onClick={() => onFilterSelect3(label)}
              >
                {label}
              </li>
            ))}
          </ul>
        </AdvanceFilterType>
        <AdvanceFilterType>
          <h3 className='type-heading'>
            <Image
              src={joinS3('images/common/industry-type.svg')}
              alt='Industry Type Image'
              width={24}
              height={24}
            />{' '}
            Industry Type
          </h3>
          <ul className='pill-list'>
            {filterOptions4?.map((label: any, index: any) => {
              if (!industryShow) {
                if (index > 4) return;
              }
              return (
                <li
                  className={`tag-pill ${
                    selectedFilters4.includes(label) ? 'selected' : ''
                  }`}
                  onClick={() => onFilterSelect4(label)}
                  key={index}
                >
                  {label}
                </li>
              );
            })}
          </ul>
          <span
            className='extra-option'
            onClick={() => setindustryShow(!industryShow)}
          >
            {industryShow ? '-' : '+'}
            {filterOptions4?.length - 4}
          </span>
          <input
            className='search-industry'
            type='text'
            placeholder='Search industries'
            onChange={(e) => setInputValue(e.target.value)}
          />
          {inputValue !== '' && (
            <div className='show-search'>
              {filtered_names?.map((item: any, index: any) => {
                return (
                  <p className='search-drop' key={index}>
                    {item}
                  </p>
                );
              })}
            </div>
          )}
        </AdvanceFilterType>
      </div>
    </AdvanceFilterStyled>
  );
};

export default AdvanceFilter;
