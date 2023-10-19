import Button from '@qoruz/components/Button';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
// import Food from 'public/images/curated-list/food.svg';
// import Fork from 'public/images/curated-list/fork.svg';
// import Glass from 'public/images/curated-list/glass.svg';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';

import ConnectCreatorStyled, { Info } from './ConnectCreator.style';

const ConnectCreator = ({ category }: any) => {
  const [mobileActive, setMobileActive] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 991) {
        setMobileActive(true);
      } else {
        setMobileActive(false);
      }
    });
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      window.removeEventListener('resize', () => {});
    };
  }, [mobileActive]);

  useEffect(() => {
    if (window.innerWidth < 991) {
      setMobileActive(true);
    } else {
      setMobileActive(false);
    }
  }, []);
  // useWOW();
  return (
    <>
      <ConnectCreatorStyled className='wow fadeInUp'>
        <Container className='container'>
          <Row className='row connect-cta items-center'>
            <Col sm={12} lg={7} className='items-center'>
              {!mobileActive && (
                <>
                  <div className='rgt-info wow fadeInUp flex items-center'>
                    <h3>Connect with {category}</h3>
                  </div>
                </>
              )}
              {mobileActive && (
                <>
                  <Image
                    src={joinS3(
                      'images/curated-list/mobile-connect-creator.png'
                    )}
                    alt='connect influencer'
                    width={112}
                    height={32}
                  />
                  <div className='rgt-info flex items-center'>
                    <h3>Connect with {category}</h3>
                  </div>
                </>
              )}
            </Col>
            <Col sm={12} lg={5} className='button-col'>
              <Info className='btn-cconnect'>
                <Button
                  type='link'
                  href='https://app.qoruz.com/signup'
                  target='_blank'
                  size='lg'
                  showIcon
                  showShadow
                  className='white-icon'
                >
                  Connect with Influencers
                </Button>
              </Info>
            </Col>
          </Row>
        </Container>
      </ConnectCreatorStyled>
    </>
  );
};

export default ConnectCreator;
