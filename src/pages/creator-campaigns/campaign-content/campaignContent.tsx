/* eslint-disable indent */
import Card from '@qoruz/components/Card';
import NextArrow from '@qoruz/components/svg/nextarrow';
import CampaignCardStyled, {
  NoData,
  RowCard,
} from '@qoruz/pages/creator-campaigns/campaign-content/campaignContent.style';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
const CampaignContent = ({
  mainState,
  // eslint-disable-next-line unused-imports/no-unused-vars
  searchData,
  setMainState,
  cards,
  advancedSearchActive,
  cards2,
  cards3,
  cards4,
  cards5,
}: any) => {
  // const [imageLoaded, setImageLoaded] = useState<any>([]);
  const [noCards, setNoCards] = useState(false);
  const getUrl = (link: any) => {
    return `https://img.youtube.com/vi/${link?.slice(-11)}/hqdefault.jpg`;
  };
  const router = useRouter();
  // const handleImageError = (index: any) => {
  //   setImageLoaded((prevLoaded: any) => {
  //     const loadedArray = [...prevLoaded];
  //     loadedArray[index] = false;
  //     return loadedArray;
  //   });
  // };

  // React.useEffect(() => {

  //   const cardData =JSON.parse(JSON.stringify(CampaignData))

  //   const initialLoadedState = Array(cardData.length).fill(false);
  //   setImageLoaded(initialLoadedState);

  //   // Reset imageLoaded state when component unmounts
  //   return () => {
  //     setImageLoaded([]);
  //   };
  // }, []);

  const intersection = cards2
    ?.filter((item1: any) => cards3.some((item2: any) => item2.id === item1.id))
    ?.filter((item1: any) => cards4.some((item3: any) => item3.id === item1.id))
    ?.filter((item1: any) => cards.some((item3: any) => item3.id === item1.id))
    ?.filter((item1: any) =>
      cards5.some((item3: any) => item3.id === item1.id)
    );

  useEffect(() => {
    // Run the querySelectorAll logic whenever the filter state changes
    const campaignCards = document.querySelectorAll('.campaign-card');

    // Filter the cards based on the current filter state
    if (campaignCards.length === 0) {
      setNoCards(true);
    } else {
      setNoCards(false);
    }
  }, [
    mainState,
    searchData,
    setMainState,
    cards,
    advancedSearchActive,
    cards2,
    cards3,
    cards4,
    cards5,
  ]);

  return (
    <CampaignCardStyled>
      <RowCard
        className={`grid-row ${!advancedSearchActive ? 'no-side-filter' : ''} ${
          noCards ? 'no-data' : ''
        }`}
      >
        {noCards ? (
          <NoData>No Data Found</NoData>
        ) : (
          intersection?.map((item: any, index: any) => {
            return mainState?.notEmpty === false ? (
              <Card
                className={`campaign-card ${
                  item?.id === 43 || item?.id === 96
                    ? 'static-image'
                    : item?.CampaignVideo?.includes('www.youtube.com') ||
                      item?.CampaignVideo?.includes('//youtu.be/')
                    ? 'thumbnail-image'
                    : 'static-image'
                }`}
                key={index}
                onClick={() => {
                  router.push({
                    pathname: `/creator-campaigns/${item?.BrandURL}/${item?.PageURL}-campaign`,
                  });
                }}
              >
                <div className='image-box'>
                  <Image
                    src={
                      // imageLoaded[index]
                      // ?
                      item?.id === 43 || item?.id === 96
                        ? item?.CampaignImage
                        : item?.CampaignVideo?.includes('www.youtube.com') ||
                          item?.CampaignVideo?.includes('//youtu.be/')
                        ? getUrl(item?.CampaignVideo)
                        : item?.CampaignImage

                      // transformUrl('Influencer-Campaign/Campaign%20Images/PV_sindhu_zd9uhk.jpg')
                    }
                    alt=''
                    className='influ-image'
                    width={300}
                    height={200}
                    // onError={() => handleImageError(index)}
                  />
                </div>
                <div className='campaing-detail'>
                  <div className='campaign-content'>
                    <p className='brand-name'>{item?.BrandName}</p>
                    <p className='campaign-title'>{item?.CampaignTitle}</p>
                    <p className='agency'>Industry: {item?.IndustryType}</p>
                  </div>
                  <p className='nav-arrow'>
                    <NextArrow />
                  </p>
                </div>
              </Card>
            ) : (
              (mainState?.campaign !== ''
                ? item?.CampaignObjective === mainState?.campaign
                : mainState?.social !== ''
                ? item.SocialPlatforms === mainState?.social
                : mainState?.asset !== ''
                ? item?.AssetType === mainState?.asset
                : item?.IndustryType === mainState?.industry) && (
                <Card
                  className='campaign-card'
                  key={index}
                  onClick={() => {
                    router.push({
                      pathname: `/creator-campaigns/${item?.BrandURL}/${item?.PageURL}-campaign`,
                    });
                  }}
                >
                  <div className='image-box'>
                    <Image
                      src={
                        // imageLoaded[index]
                        // ?
                        item?.id === 43 || item?.id === 96
                          ? item?.CampaignImage
                          : item?.CampaignVideo?.includes('www.youtube.com') ||
                            item?.CampaignVideo?.includes('//youtu.be/')
                          ? getUrl(item?.CampaignVideo)
                          : item?.CampaignImage

                        // transformUrl('Influencer-Campaign/Campaign%20Images/PV_sindhu_zd9uhk.jpg')
                      }
                      alt=''
                      className='influ-image'
                      width={300}
                      height={200}
                      // onError={() => handleImageError(index)}
                    />
                  </div>
                  <div className='campaing-detail'>
                    <div className='campaign-content'>
                      <p className='brand-name'>{item?.BrandName}</p>
                      <p className='campaign-title'>{item?.CampaignTitle}</p>
                      <p className='agency'>Industry: {item?.IndustryType}</p>
                    </div>
                    <p className='nav-arrow'>
                      <NextArrow />
                    </p>
                  </div>
                </Card>
              )
            );
          })
        )}
      </RowCard>
    </CampaignCardStyled>
  );
};

export default CampaignContent;
