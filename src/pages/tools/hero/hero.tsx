import ToolHeroStyled from '@qoruz/pages/tools/hero/hero.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <ToolHeroStyled>
      <Image
        src={joinS3('images/common/patterns-bg.svg')}
        alt='tools hero section'
        className='bg-image'
        width={1688}
        height={400}
      />
    </ToolHeroStyled>
  );
};

export default Hero;
