import Button from '@qoruz/components/Button';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

import ConnectBloggerStyled, { Figure, Info } from './ConnectBlogger.style';

const ConnectBlogger = ({ category }: any) => {
  // useWOW();
  return (
    <>
      <ConnectBloggerStyled className='grow-better wow fadeInUp flex items-center'>
        <Container className='container'>
          <Row className='row'>
            <Col sm={12} lg={6} className='flex items-center'>
              <Figure className='figure mobile-hide wow fadeInUp flex items-center justify-center'>
                <Image
                  className='icon-button blogger-banner'
                  src={joinS3('images/curated-list/connect-blogger.png')}
                  alt='Grow Better Image'
                  width={585}
                  height={449.66}
                />
              </Figure>
            </Col>
            <Col sm={12} lg={6}>
              <Info className='info wow fadeInUp'>
                <h2>Connect with {category}</h2>
                <Figure className='figure desktop-hide wow fadeInUp flex items-center justify-center'>
                  <Image
                    className='icon-button blogger-banner'
                    src={joinS3('images/curated-list/connect-blogger.png')}
                    alt='Grow Better Image'
                    width={585}
                    height={449.66}
                  />
                </Figure>
                <p className='lead'>
                  After you’ve finalized the list of {category} to work on your
                  influencer campaign, the next crucial step is to find the
                  contact details of the {category} you’ve finalized. So you can
                  reach out, connect and understand commercials and deliverables
                  before collaborating with the influencer.
                </p>
                <Button
                  type='link'
                  href='https://app.qoruz.com/signup'
                  target='_blank'
                  variant='primary'
                  size='lg'
                  showIcon
                  showShadow
                >
                  Get Started for Free
                </Button>
              </Info>
            </Col>
          </Row>
        </Container>
      </ConnectBloggerStyled>
    </>
  );
};

export default ConnectBlogger;
