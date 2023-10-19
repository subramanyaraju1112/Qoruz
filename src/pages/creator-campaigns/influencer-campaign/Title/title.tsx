import TitleWrapper from '@qoruz/pages/creator-campaigns/influencer-campaign/influencerCampaign.style';
import Image from 'next/image';
import React from 'react';

const Title = ({ title, brandName, logoUrl }: any) => {
  return (
    <TitleWrapper>
      <Image
        src={logoUrl}
        className='spotify-logo'
        alt='spotify-logo'
        width={64}
        height={64}
      />
      <div className='spotify'>
        <p className='spotify-name'>{brandName}</p>
        <h1 className='heading'>{title}</h1>
        <p className='date'>May 8, 2023</p>
      </div>
    </TitleWrapper>
  );
};

export default Title;
