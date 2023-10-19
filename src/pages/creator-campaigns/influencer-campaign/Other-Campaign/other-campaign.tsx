import Card from '@qoruz/components/Card';
import NextArrow from '@qoruz/components/svg/nextarrow';
import CampaignCardStyled from '@qoruz/pages/creator-campaigns/campaign-content/campaignContent.style';
import Image from 'next/image';
import React from 'react';

const OtherCampaign = ({ shuffled }: any) => {
  const getUrl = (link: any) => {
    return `https://img.youtube.com/vi/${link?.slice(-11)}/hqdefault.jpg`;
  };
  // const handleOpen = (one: any, two: any) => {
  //   window.open(`/creator-campaigns/${one}/${two}-campaign`);
  // };
  // const router = useRouter();
  return (
    <>
      <CampaignCardStyled>
        <div className='influencer-wrapper'>
          <div className='heading'>
            <p className='other-influencer'>Other Influencer Campaigns</p>
          </div>

          <div
            className='card-wrapper'
            style={{
              justifyContent: '',
            }}
          >
            {shuffled?.map((item: any, index: any) => (
              <Card
                className='campaign-card'
                key={index}
                onClick={() => {
                  window.open(
                    `/creator-campaigns/${item?.BrandURL}/${item?.PageURL}-campaign`,
                    '_self'
                  );
                }}
              >
                <Image
                  src={
                    item?.CampaignVideo?.includes('www.youtube.com') ||
                    item?.CampaignVideo?.includes('//youtu.be/')
                      ? getUrl(item?.CampaignVideo)
                      : item?.CampaignImage
                  }
                  alt=''
                  className='influ-image'
                  width={275}
                  height={206}
                />
                <div className='campaing-detail'>
                  <p className='brand-name'>{item?.BrandName}</p>
                  <p className='campaign-title'>{item?.CampaignTitle}</p>
                  <p className='agency'>{item?.AgencyName}</p>
                  <p className='nav-arrow'>
                    <NextArrow />
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </CampaignCardStyled>
    </>
  );
};

export default OtherCampaign;
