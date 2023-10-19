import HeroContainer from '@qoruz/pages/events/drive-roi-through-content/Hero/hero.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

const Hero = () => {
  return (
    <HeroContainer>
      <div className='powerful-tools btn-text desktop'>
        <p className='button'>EXPERT TALKS</p>
      </div>
      <Container className='container'>
        <Row className='image-row'>
          <Col lg={6} className='mobile--col'>
            <Image
              src={joinS3(
                'images/events/drive-roi-through-content/hero-up-arrow.svg'
              )}
              alt='webinar-up-arrow'
              className='hero-image'
              width={210}
              height={150}
            />
          </Col>
        </Row>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
