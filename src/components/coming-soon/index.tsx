import Button from '@qoruz/components/Button';
import ComingSoonStyled from '@qoruz/components/coming-soon/style';
import Seo from '@qoruz/components/Seo';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import ComingSoonImg from 'public/images/svg/coming-soon';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

const ComingSoon = ({ is301, newProfileUrl }: any) => {
  return (
    <>
      <Seo />
      <ComingSoonStyled>
        <Container className='height-full container'>
          <Row className='align-center height-full'>
            <Col lg={6}>
              <h1 className='small-heading'>
                {is301 ? '301 error' : '404 error'}
              </h1>
              <h2 className='sub-heading'>We will be landing soon.</h2>
              {is301 ? null : (
                <p className='details'>
                  Don’t worry! Our developers are building the website.{' '}
                  <Image
                    src={joinS3('images/coming-soon/fire.svg')}
                    alt='image'
                    width={19}
                    height={25}
                  />{' '}
                  We’ll get back soon!
                </p>
              )}
              {is301 ? (
                <Button
                  text='New Profile Page'
                  href={`/${newProfileUrl}`}
                  showIcon={true}
                  size='md'
                  type='link'
                  variant='primary'
                  target='_blank'
                />
              ) : (
                <Button
                  text='Back to home page'
                  href='/'
                  showIcon={true}
                  size='md'
                  type='link'
                  variant='primary'
                />
              )}
            </Col>
            <Col lg={6} className='image-animation'>
              <ComingSoonImg />
            </Col>
          </Row>
        </Container>
      </ComingSoonStyled>
    </>
  );
};

export default ComingSoon;
