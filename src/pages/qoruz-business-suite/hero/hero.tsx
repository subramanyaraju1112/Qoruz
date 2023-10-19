import Button from '@qoruz/components/Button';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

import HeroStyled, {
  Dot,
  InnerOrbit,
  MiddleOrbit,
  OrbitWrapper,
  OuterOrbit,
} from './hero.style';

const Hero = () => {
  return (
    <HeroStyled className='home-hero flex'>
      <Container className='container'>
        <Row>
          <Col lg={6} className='banner-content justify-center'>
            <h1 className='wow fadeInUp'>
              Next-Generation Influencer Marketing Platform
            </h1>
            <p className='lead wow fadeInUp'>
              Be it conversions, engagement, reach or views, Qoruz Business
              Suite has your back.
            </p>
            <div className='button-wrapper wow fadeInUp'>
              <Button
                type='link'
                href='https://app.qoruz.com/signup'
                target='_blank'
                variant='primary'
                size='lg'
                showIcon={true}
              >
                Get Started for Free
              </Button>
            </div>
          </Col>
          <Col lg={6} className='right-orbit'>
            <OrbitWrapper className='orbit-wrapper flex-center flex'>
              <OuterOrbit className='outter-orbit flex-center flex'>
                <Dot className='dot dot-yellow' />
                <Dot className='dot dot-green' />
                <Dot className='dot dot-blue' />
                <Link href='' className='avatar avatar-1'>
                  <Image
                    src={joinS3(
                      'images/solution/hero-orbit/outer/outer-avatar-1.png'
                    )}
                    alt='Outer Avatar 1'
                    width={50.87}
                    height={50.87}
                  />
                  <div className='info'>
                    <span className='left'>Most Liked</span>
                    <span className='likes'>
                      <Image
                        src={joinS3(
                          'images/solution/hero-orbit/like_m2oxfw.svg'
                        )}
                        alt='Likes'
                        width={11}
                        height={10}
                      />
                      33.3M
                    </span>
                  </div>
                </Link>
                <Link href='' className='avatar avatar-2'>
                  <Image
                    src={joinS3(
                      'images/solution/hero-orbit/outer/outer-avatar-2.png'
                    )}
                    alt='Outer Avatar 2'
                    width={40.69}
                    height={40.69}
                  />
                  <div className='info'>
                    <span className='left'>Most Liked</span>
                    <span className='likes'>
                      <Image
                        src={joinS3('images/solution/hero-orbit/like.svg')}
                        alt='Likes'
                        width={11}
                        height={10}
                      />
                      33.3M
                    </span>
                  </div>
                </Link>
                <Link href='' className='avatar avatar-3'>
                  <Image
                    src={joinS3(
                      'images/solution/hero-orbit/outer/outer-avatar-3.png'
                    )}
                    alt='Outer Avatar 3'
                    width={50.87}
                    height={50.87}
                  />
                  <div className='info'>
                    <span className='left'>Most Liked</span>
                    <span className='likes'>
                      <Image
                        src={joinS3('images/solution/hero-orbit/like.svg')}
                        alt='Likes'
                        width={11}
                        height={10}
                      />
                      33.3M
                    </span>
                  </div>
                </Link>
                <Link href='' className='avatar avatar-4'>
                  <Image
                    src={joinS3(
                      'images/solution/hero-orbit/outer/outer-avatar-4.png'
                    )}
                    alt='Outer Avatar 4'
                    width={50.87}
                    height={50.87}
                  />
                  <div className='info'>
                    <span className='left'>Most Liked</span>
                    <span className='likes'>
                      <Image
                        src={joinS3('images/solution/hero-orbit/like.svg')}
                        alt='Likes'
                        width={11}
                        height={10}
                      />
                      33.3M
                    </span>
                  </div>
                </Link>
              </OuterOrbit>

              <MiddleOrbit className='middle-orbit flex-center flex '>
                <Link href='' className='avatar avatar-1'>
                  <Image
                    src={joinS3(
                      'images/solution/hero-orbit/middle/middle-avatar-1.png'
                    )}
                    alt='Middle Avatar 1'
                    width={40.69}
                    height={40.69}
                  />
                  <div className='info'>
                    <span className='left'>Most Liked</span>
                    <span className='likes'>
                      <Image
                        src={joinS3('images/solution/hero-orbit/like.svg')}
                        alt='Likes'
                        width={11}
                        height={10}
                      />
                      33.3M
                    </span>
                  </div>
                </Link>
                <Link href='' className='avatar avatar-2'>
                  <Image
                    src={joinS3(
                      'images/solution/hero-orbit/middle/middle-avatar-2.png'
                    )}
                    alt='Middle Avatar 2'
                    width={32.55}
                    height={32.55}
                  />
                  <div className='info'>
                    <span className='left'>Most Liked</span>
                    <span className='likes'>
                      <Image
                        src={joinS3('images/solution/hero-orbit/like.svg')}
                        alt='Likes'
                        width={11}
                        height={10}
                      />
                      33.3M
                    </span>
                  </div>
                </Link>
                <Link href='' className='avatar avatar-3'>
                  <Image
                    src={joinS3(
                      'images/solution/hero-orbit/middle/middle-avatar-3.png'
                    )}
                    alt='Middle Avatar 3'
                    width={32.55}
                    height={32.55}
                  />
                  <div className='info'>
                    <span className='left'>Most Liked</span>
                    <span className='likes'>
                      <Image
                        src={joinS3('images/solution/hero-orbit/like.svg')}
                        alt='Likes'
                        width={11}
                        height={10}
                      />
                      33.3M
                    </span>
                  </div>
                </Link>
              </MiddleOrbit>
              <InnerOrbit className='inner-orbit orbit-path flex-center flex'>
                <Image
                  className='inner-orbit-icon icon-1'
                  src={joinS3(
                    'images/solution/hero-orbit/inner/orbit-inner-icon-1.svg'
                  )}
                  alt='icon-1'
                  width={81.38}
                  height={81.38}
                />
                <Image
                  className='inner-orbit-icon icon-2'
                  src={joinS3(
                    'images/solution/hero-orbit/inner/orbit-inner-icon-2.svg'
                  )}
                  alt='icon-2'
                  width={81.38}
                  height={81.38}
                />
                <Image
                  className='inner-orbit-icon icon-3'
                  src={joinS3(
                    'images/solution/hero-orbit/inner/orbit-inner-icon-3.svg'
                  )}
                  alt='icon-3'
                  width={81.38}
                  height={81.38}
                />
                <Image
                  className='inner-orbit-icon icon-4'
                  src={joinS3(
                    'images/solution/hero-orbit/inner/orbit-inner-icon-4.svg'
                  )}
                  alt='icon-4'
                  width={81.38}
                  height={81.38}
                />
                <Link href='' className='avatar avatar-1'>
                  <Image
                    src={joinS3(
                      'images/solution/hero-orbit/inner/inner-avatar-1.png'
                    )}
                    alt='Inner Avatar 1'
                    width={48.83}
                    height={48.83}
                  />
                  <div className='info'>
                    <span className='left'>Most Liked</span>
                    <span className='likes'>
                      <Image
                        src={joinS3('images/solution/hero-orbit/like.svg')}
                        alt='Likes'
                        width={11}
                        height={10}
                      />
                      33.3M
                    </span>
                  </div>
                </Link>
                <Link href='' className='avatar avatar-2'>
                  <Image
                    src={joinS3(
                      'images/solution/hero-orbit/inner/inner-avatar-2.png'
                    )}
                    alt='Inner Avatar 2'
                    width={32.55}
                    height={32.55}
                  />
                  <div className='info'>
                    <span className='left'>Most Liked</span>
                    <span className='likes'>
                      <Image
                        src={joinS3('images/solution/hero-orbit/like.svg')}
                        alt='Likes'
                        width={11}
                        height={10}
                      />
                      33.3M
                    </span>
                  </div>
                </Link>
              </InnerOrbit>
              <h3>
                Get <br /> the right Influencer
              </h3>
            </OrbitWrapper>
          </Col>
        </Row>
      </Container>
    </HeroStyled>
  );
};

export default Hero;
