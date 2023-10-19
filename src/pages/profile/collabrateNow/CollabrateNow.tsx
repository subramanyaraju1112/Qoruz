import Button from '@qoruz/components/Button';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';

import CollabrateNowStyled, { IntroCollabrateNow } from './CollabrateNow.style';

const CollabrateNow = ({ influencerName, imageUrl }: any) => {
  return (
    <CollabrateNowStyled
      id='collabrateNowStyled'
      className='collabrate-now flex-column wow fadeInUp flex'
      style={{
        backgroundImage: joinS3('images/top-creators/suraj-pal-singh.jpg'),
      }}
      // style={{ backgroundColor: 'red' }}
    >
      <div className='collaborate-intro flex flex-row'>
        <IntroCollabrateNow className='intro-collabrate flex-column flex'>
          <h2>Looking to collaborate with {influencerName}?</h2>
        </IntroCollabrateNow>
        <div className='pic-influencer'>
          <Image
            src={imageUrl}
            alt='influencer photo'
            className='influencer-pic'
            width={149}
            height={149}
          />
        </div>
      </div>

      <Button
        text='Collabrate now'
        href='https://app.qoruz.com/signup'
        target='_blank'
        showIcon={true}
        size='md'
        type='link'
        className='collab-button'
      />
    </CollabrateNowStyled>
  );
};

export default CollabrateNow;
