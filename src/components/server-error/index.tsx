import LinkIcon from '@qoruz/components/svg/linkIcon';
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-grid-system';

import ForYouStyled, { Intro } from './style';

const ServerError = ({ errorMessage }: any) => {
  return (
    <ForYouStyled className='for-you-section'>
      <Container className='container'>
        <Intro className='intro flex-column flex'>
          <h2>{errorMessage}</h2>
          <div className='flex-column'>
            <Link
              href='/'
              // target='_blank'
              className='primary lg button primary-button'
            >
              Back to HomePage
              <LinkIcon />
            </Link>
          </div>
          <p className='intro-text'></p>
        </Intro>
      </Container>
    </ForYouStyled>
  );
};

export default ServerError;
