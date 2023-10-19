import Button from '@qoruz/components/Button';
import CampaignBrief from '@qoruz/components/campaign-brief/CampaignBrief';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import CampaignTypesStyled, {
  CampaignTypesBlock,
  CampaignTypesStyledM,
  Figcaption,
  Figure,
  Info,
  Intro,
  Overlay,
} from './CampaignTypes.style';

const Campaign = [
  {
    id: 1,
    title: 'Product Launch',
    desc: 'Create buzz for a new product launch.',
    image: joinS3('images/paid-collaboration/campaign-1.png'),
    url: '/',
  },
  {
    id: 2,
    title: 'Get Reviews',
    desc: 'Get reviews on Amazon & Flipkart, etc.',
    image: joinS3('images/paid-collaboration/campaign-2.png'),
    url: '/',
  },
  {
    id: 3,
    title: 'Creating Word of Mouth',
    desc: 'Make people aware about your product.',
    image: joinS3('images/paid-collaboration/campaign-3.png'),
    url: '/',
  },
  {
    id: 4,
    title: 'Product Demonstration',
    desc: 'Increase product awareness & trust.',
    image: joinS3('images/paid-collaboration/campaign-4.png'),
    url: '/',
  },
  {
    id: 5,
    title: 'Reposting Content',
    desc: 'Improve engagement on social media.',
    image: joinS3('images/paid-collaboration/campaign-5.png'),
    url: '/',
  },
];

const CampaignTypes = () => {
  const [openForm, setOpenForm] = useState(false);

  const popupCloseHandler = (e: any) => {
    setOpenForm(e);
    document.body.classList.remove('stop-scroll-body');
  };
  return (
    <>
      <CampaignTypesStyled
        id='campaignTypes'
        className='Campaign-types desktop-only'
      >
        <Container className='main-container container'>
          <Row className='align-center'>
            <Col lg={5}>
              <Intro className='intro flex-column flex'>
                <h2>Campaign Types</h2>
                <Image
                  src={joinS3('images/paid-collaboration/paid-collab-line.png')}
                  alt='Line'
                  width={158}
                  height={11}
                />
                <p className='details'>
                  Qoruz Paid Collabs works with the influencers and{' '}
                  <b>executes the campaign on your behalf.</b> If there are any
                  changes from your end, they get it sorted for you.{' '}
                </p>
                <Button
                  type='button'
                  showShadow
                  variant='primary'
                  size='lg'
                  showIcon={true}
                  onClick={() => {
                    setOpenForm(true);
                  }}
                >
                  Post a campaign brief
                </Button>

                {/* <Button
                    type='link'
                    href='/post-campaign'
                    target='_blank'
                    variant='primary'
                    size='lg'
                    showIcon={true}
                    showShadow
                    margin
                    className='mt-4'
                  >
                    Post a campaign brief
                  </Button> */}
              </Intro>
            </Col>
            <Col lg={7}>
              <CampaignTypesBlock className='Campaign-types-block flex flex-wrap items-center justify-center'>
                {/* <div className='wrapper wrapper--vertical'>
                  <div className='marquee marquee--vertical'>
                    <div className='marquee__group'>
                      {[...Campaign, ...Campaign, ...Campaign].map(
                        (item, index: number) => (
                          <Link
                            target='_blank'
                            href='/'
                            className='Campaign-single flex-column flex'
                            key={index}
                          >
                            <Figure className='figure'>
                              <Image
                                src={item.image}
                                width={250}
                                height={320}
                                alt={item.title}
                                className='card-image'
                              />
                              <Figcaption className='fig-caption flex items-end'>
                                <Overlay className='fig-overlay flex items-center'>
                                  <Info className='info flex-column flex'>
                                    <h4>{item.title}</h4>
                                    <span>{item.desc}</span>
                                  </Info>
                                </Overlay>
                              </Figcaption>
                            </Figure>
                          </Link>

                        )
                      )}
                    </div>
                  </div>
                  <div className='marquee marquee--reverse marquee--vertical'>
                    <div className='marquee__group'>
                      {[...Campaign, ...Campaign, ...Campaign].map(
                        (item, index: number) => (
                          <Link
                            target='_blank'
                            href='/'
                            className='Campaign-single flex-column flex'
                            key={index}
                          >
                            <Figure className='figure'>
                              <Image
                                src={item.image}
                                width={250}
                                height={320}
                                alt={item.title}
                                className='card-image'
                              />
                              <Figcaption className='fig-caption flex items-end'>
                                <Overlay className='fig-overlay flex items-center'>
                                  <Info className='info flex-column flex'>
                                    <h4>{item.title}</h4>
                                    <span>{item.desc}</span>
                                  </Info>
                                </Overlay>
                              </Figcaption>
                            </Figure>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div> */}
                <div className='campaign-wrapper wrapper--vertical'>
                  <div className='vertical-marquee marquee--vertical'>
                    <div className='marquee__group'>
                      {[...Campaign, ...Campaign, ...Campaign].map(
                        (item, index: number) => (
                          <Link
                            target='_blank'
                            href='/'
                            className='Campaign-single flex-column flex'
                            key={index}
                          >
                            <Figure className='figure'>
                              <Image
                                src={item.image}
                                width={250}
                                height={320}
                                alt={item.title}
                                className='card-image'
                              />
                              <Figcaption className='fig-caption flex items-end'>
                                <Overlay className='fig-overlay flex items-center'>
                                  <Info className='info flex-column flex'>
                                    <h4>{item.title}</h4>
                                    <span>{item.desc}</span>
                                  </Info>
                                </Overlay>
                              </Figcaption>
                            </Figure>
                          </Link>
                        )
                      )}
                    </div>
                    <div aria-hidden='true' className='marquee__group'>
                      {[...Campaign, ...Campaign, ...Campaign].map(
                        (item, index: number) => (
                          <Link
                            target='_blank'
                            href='/'
                            className='Campaign-single flex-column flex'
                            key={index}
                          >
                            <Figure className='figure'>
                              <Image
                                src={item.image}
                                width={250}
                                height={320}
                                alt={item.title}
                                className='card-image'
                              />
                              <Figcaption className='fig-caption flex items-end'>
                                <Overlay className='fig-overlay flex items-center'>
                                  <Info className='info flex-column flex'>
                                    <h4>{item.title}</h4>
                                    <span>{item.desc}</span>
                                  </Info>
                                </Overlay>
                              </Figcaption>
                            </Figure>
                          </Link>
                        )
                      )}
                    </div>
                  </div>

                  <div className='marquee marquee--reverse marquee--vertical'>
                    <div className='marquee__group'>
                      {[...Campaign, ...Campaign, ...Campaign].map(
                        (item, index: number) => (
                          <Link
                            target='_blank'
                            href='/'
                            className='Campaign-single flex-column flex'
                            key={index}
                          >
                            <Figure className='figure'>
                              <Image
                                src={item.image}
                                width={250}
                                height={320}
                                alt={item.title}
                                className='card-image'
                              />
                              <Figcaption className='fig-caption flex items-end'>
                                <Overlay className='fig-overlay flex items-center'>
                                  <Info className='info flex-column flex'>
                                    <h4>{item.title}</h4>
                                    <span>{item.desc}</span>
                                  </Info>
                                </Overlay>
                              </Figcaption>
                            </Figure>
                          </Link>
                        )
                      )}
                    </div>
                    <div aria-hidden='true' className='marquee__group'>
                      {[...Campaign, ...Campaign, ...Campaign].map(
                        (item, index: number) => (
                          <Link
                            target='_blank'
                            href='/'
                            className='Campaign-single flex-column flex'
                            key={index}
                          >
                            <Figure className='figure'>
                              <Image
                                src={item.image}
                                width={250}
                                height={320}
                                alt={item.title}
                                className='card-image'
                              />
                              <Figcaption className='fig-caption flex items-end'>
                                <Overlay className='fig-overlay flex items-center'>
                                  <Info className='info flex-column flex'>
                                    <h4>{item.title}</h4>
                                    <span>{item.desc}</span>
                                  </Info>
                                </Overlay>
                              </Figcaption>
                            </Figure>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </CampaignTypesBlock>
            </Col>
          </Row>
        </Container>
        {openForm ? (
          <CampaignBrief show={openForm} onClose={popupCloseHandler} />
        ) : null}
      </CampaignTypesStyled>

      <CampaignTypesStyledM className='mobile-only'>
        <Intro className='intro flex-column flex'>
          <h2>Campaign Types</h2>
          <Image
            src={joinS3('images/paid-collaboration/paid-collab-line.png')}
            alt='Line'
            width={158}
            height={11}
          />
          <p className='lead'>Select Campaign Type Based on Your Objective</p>
          <Button
            type='button'
            showShadow
            variant='primary'
            size='lg'
            showIcon={true}
            onClick={() => {
              setOpenForm(true);
            }}
          >
            Post a campaign brief
          </Button>
        </Intro>
        {[...Campaign].map((item, index: number) => (
          <Link
            target='_blank'
            href='/'
            className='Campaign-single-mobile flex-column flex'
            key={index}
          >
            <Figure className='figure'>
              <Image
                src={item.image}
                alt={item.title}
                width={250}
                height={320}
                className='card-image'
              />
              <Figcaption className='fig-caption flex items-end'>
                <Overlay className='fig-overlay flex items-center'>
                  <Info className='info flex-column flex'>
                    <h4>{item.title}</h4>
                    <span>{item.desc}</span>
                  </Info>
                </Overlay>
              </Figcaption>
            </Figure>
          </Link>
        ))}
        {openForm ? (
          <CampaignBrief show={openForm} onClose={popupCloseHandler} />
        ) : null}
      </CampaignTypesStyledM>
    </>
  );
};

export default CampaignTypes;
