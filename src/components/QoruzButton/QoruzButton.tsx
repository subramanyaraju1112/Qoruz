'use client';
import LinkIcon from '@qoruz/components/svg/linkIcon';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';

import QoruzButtonStyled, {
  HoverEffect,
  Info,
  QoruzButtonWrapper,
} from './QoruzButton.style';

const QoruzButton = () => {
  return (
    <QoruzButtonWrapper
      className='qoruz-button-wrapper'
      href='/qoruz-business-suite'
      target='_self'
    >
      <HoverEffect className='hover-effect' />
      <QoruzButtonStyled className='qoruz-button flex items-center'>
        <Image
          src={joinS3('images/common/qoruz-business-suite-icon.svg')}
          alt='Qoruz Button Icon'
          width={55}
          height={60}
        />
        <Info className='info flex-column flex items-start'>
          <small>Explore our powerful tools</small>
          <h3>Qoruz Business Suite</h3>
        </Info>
        <LinkIcon />
      </QoruzButtonStyled>
    </QoruzButtonWrapper>
  );
};

export default QoruzButton;
