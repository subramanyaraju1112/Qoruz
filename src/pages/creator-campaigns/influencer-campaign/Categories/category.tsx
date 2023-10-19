import { CategoryWrapper } from '@qoruz/pages/creator-campaigns/influencer-campaign/influencerCampaign.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';

const Categories = ({ data }: any) => {
  return (
    <CategoryWrapper>
      <p className='category'>Categories</p>
      <div className='category-detail'>
        <Image
          src={joinS3('images/Influencer-Campaign/stream-icon_po4ibm.png')}
          alt='stream-icon'
          width={22}
          height={22}
        />
        <p className='pill-flex'>
          <span className='category-pill'>{data?.BrandName}</span>
        </p>
      </div>
      <div className='category-detail'>
        <Image
          src={joinS3('images/Influencer-Campaign/promotion-icon_vjepda.png')}
          alt='promotion-icon'
          width={24}
          height={18.82}
        />
        <p className='pill-flex'>
          <span className='category-pill'>{data?.CampaignObjective}</span>
        </p>
      </div>
      <div className='category-detail'>
        <Image
          src={joinS3('images/Influencer-Campaign/media-type.svg')}
          alt='multimedia-icon'
          width={24}
          height={24}
        />
        <p className='pill-flex'>
          <span className='category-pill'>{data?.AssetType}</span>
          {/* <span className='category-pill'>Images</span> */}
        </p>
      </div>
      <div className='category-detail'>
        <Image
          src={joinS3('images/Influencer-Campaign/films-icon_jwnlkv.png')}
          alt='film-icon'
          width={24}
          height={24}
        />
        <p className='pill-flex'>
          <span className='category-pill'>{data?.IndustryType}</span>
          {/* <span className='category-pill'>Film</span> */}
          <Image
            src={joinS3('images/Influencer-Campaign/three-dots_icow4q.png')}
            alt='three-dots'
            width={19}
            height={5}
          />
        </p>
      </div>
      <div className='category-detail'>
        <Image
          src={joinS3('images/Influencer-Campaign/socio-icon_nmwe9a.png')}
          alt='socio-scout-icon'
          width={24}
          height={24}
        />
        <p className='pill-flex'>
          <span className='category-pill'>SocioScout</span>
        </p>
      </div>
      <div className='category-detail'>
        <Image
          src={joinS3('images/Influencer-Campaign/location-icon_inryel.png')}
          alt='location-icon'
          width={24}
          height={24}
        />
        <p className='pill-flex'>
          <span className='category-pill'>India</span>
        </p>
      </div>
      <div className='category-detail'>
        <Image
          src={joinS3('images/influencer-campaign/web-icon.svg')}
          alt='insta-fb-icon'
          width={24}
          height={24}
        />
        <p className='pill-flex'>
          {data?.SocialPlatforms.split(' ').map((item: any, index: any) => (
            <span key={index} className='category-pill'>
              {item}
            </span>
          ))}
          {/* <span className='category-pill'>{data?.SocialPlatforms}</span> */}
          {/* <span className='category-pill'>Facebook</span> */}
        </p>
      </div>
    </CategoryWrapper>
  );
};

export default Categories;
