import Button from '@qoruz/components/Button';
import CampaignBrief from '@qoruz/components/campaign-brief/CampaignBrief';
import SectionStyled, {
  Figure,
  Info,
  InfoMobile,
  WorkDetails,
} from '@qoruz/pages/paid-collaboration/howCollabWork/HowCollabWork.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
// import {Figure, Info,} from '@qoruz/pages/paid-collaboration/reels/Reels.style';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
// import required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Work = [
  {
    id: 1,
    title: 'Post Campaign Brief',
    content:
      'Post your requirement with your campaign objective, budget & influencer demography (category, location) and forecast the result of your campaign.',
    mainImage: joinS3(
      'images/paid-collaboration/paid-collab/campaign-breif.png'
    ),
    className: 'one',
  },
  {
    id: 2,
    title: 'Select Relevant Influencer',
    content:
      'Based on your requirement, Qoruz Paid Collabs suggest a list of influencers. Handpick influencers from the list and replace/add influencers of your choice.',
    mainImage: joinS3(
      'images/paid-collaboration/paid-collab/relevent-creator.png'
    ),
    className: 'two',
  },
  {
    id: 3,
    title: 'Measure Campaign ROI',
    content:
      'Measure the campaign performance individually or holistically via the tracker that’s enabled for your campaign and optimize the campaign.',
    mainImage: joinS3('images/paid-collaboration/paid-collab/camoaign-roi.png'),
    className: 'three',
  },
  {
    id: 4,
    title: 'Push Campaign Live',
    content:
      'Qoruz Paid Collabs works with the influencers and executes the campaign on your behalf. If there are any changes from your end, they get it sorted for you.',
    mainImage: joinS3(
      'images/paid-collaboration/paid-collab/campaign-live.png'
    ),
    className: 'four',
  },
];

const HowCollabWork = () => {
  const [pinned, setPinned] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [scrolll, setScrolll] = useState(false);

  const popupCloseHandler = (e: any) => {
    setOpenForm(e);
    document.body.classList.remove('stop-scroll-body');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3000) {
        // const element = document.getElementsByClassName('heading-top');
        // element[0].classList.remove('pinned');
        setPinned(false);
      } else {
        // const element = document.getElementsByClassName('heading-top');
        // element[0].classList.add('pinned');
        setPinned(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 3000 && window.scrollY > 1000) {
        // const element = document.getElementsByClassName('heading-top');
        // element[0].classList.remove('pinned');
        setScrolll(true);
      } else {
        // const element = document.getElementsByClassName('heading-top');
        // element[0].classList.add('pinned');
        setScrolll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <SectionStyled
        id='howColabWorks'
        className='how-collab-works desktop-only'
      >
        <div className='heading'>
          <Container className='header-container'>
            <div
              className={`heading-top ${pinned ? 'pinned' : 'hide-heading'}`}
            >
              <h2>
                How Paid Collab Works?
                <Image
                  src={joinS3('images/paid-collaboration/paid-collab-line.png')}
                  alt='paid collab line'
                  className='paid-line'
                  width={266}
                  height={19}
                />
              </h2>

              <p className='lead'>
                Get started with your campaign in 3 easy steps.
              </p>

              <div className='top-scroll mask-scroll'></div>
            </div>

            <WorkDetails className='collab-works flex'>
              <div className='flex-column left-info flex'>
                <Row className='row left-info-row' key={1}>
                  <Col
                    sm={12}
                    lg={12}
                    className='left left-text-container'
                    dir='row'
                  >
                    <Info className='info flex-column flex'>
                      <h3 className='work-heading'>Post Campaign Brief</h3>
                      <p className='work-content'>
                        Post your requirement with your campaign objective,
                        budget & influencer demography (category, location) and{' '}
                        <b>forecast the result of your campaign.</b>
                      </p>
                    </Info>
                  </Col>
                  <Col
                    sm={12}
                    lg={6}
                    className='figure-container flex items-center'
                  >
                    <Figure className='figure flex items-center justify-center'>
                      <Image
                        src={joinS3('images/paid-collaboration/paid-collab/campaign-breif.png'
                        )}
                        alt=''
                        width={1198}
                        height={674}
                      />
                    </Figure>
                  </Col>
                </Row>

                <Row className='row left-info-row' key={2}>
                  <Col
                    sm={12}
                    lg={12}
                    className='left left-text-container'
                    dir='row'
                  >
                    <Info className='info flex-column flex'>
                      <h3 className='work-heading'>
                        Select Relevant Influencer
                      </h3>
                      <p className='work-content'>
                        Based on your requirement,{' '}
                        <b>Qoruz Paid Collabs suggest a list of influencers.</b>{' '}
                        Handpick influencers from the list and replace/add
                        influencers of your choice.
                      </p>
                    </Info>
                  </Col>
                  <Col
                    sm={12}
                    lg={6}
                    className='figure-container flex items-center'
                  >
                    <Figure className='figure flex items-center justify-center'>
                      <Image
                        src={joinS3(
                          'images/paid-collaboration/paid-collab/relevent-creator.png'
                        )}
                        alt=''
                        width={1212}
                        height={674}
                      />
                    </Figure>
                  </Col>
                </Row>

                <Row className='row left-info-row' key={3}>
                  <Col
                    sm={12}
                    lg={12}
                    className='left left-text-container'
                    dir='row'
                  >
                    <Info className='info flex-column flex'>
                      <h3 className='work-heading'>Measure Campaign ROI</h3>
                      <p className='work-content'>
                        <b>Measure the campaign performance individually</b> or
                        holistically via the tracker that’s enabled for your
                        campaign and optimize the campaign.
                      </p>
                    </Info>
                  </Col>
                  <Col
                    sm={12}
                    lg={6}
                    className='figure-container flex items-center'
                  >
                    <Figure className='figure flex items-center justify-center'>
                      <Image
                        src={joinS3(
                          'images/paid-collaboration/paid-collab/camoaign-roi.png'
                        )}
                        alt=''
                        width={1212}
                        height={674}
                      />
                    </Figure>
                  </Col>
                </Row>

                <Row className='row left-info-row' key={4}>
                  <Col
                    sm={12}
                    lg={12}
                    className='left left-text-container'
                    dir='row'
                  >
                    <Info className='info flex-column flex'>
                      <h3 className='work-heading'>Push Campaign Live</h3>
                      <p className='work-content'>
                        Qoruz Paid Collabs works with the influencers and{' '}
                        <b>executes the campaign on your behalf.</b> If there
                        are any changes from your end, they get it sorted for
                        you.
                      </p>
                    </Info>
                  </Col>
                  <Col
                    sm={12}
                    lg={6}
                    className='figure-container flex items-center'
                  >
                    <Figure className='figure flex items-center justify-center'>
                      <Image
                        src={joinS3(
                          'images/paid-collaboration/paid-collab/campaign-live.png'
                        )}
                        alt=''
                        width={1212}
                        height={674}
                      />
                    </Figure>
                  </Col>
                </Row>
              </div>
              <div className='right-background hide'>
                <div className='h-top h-10'>
                  {/* <div className='background-display'></div> */}
                </div>

                {/* <div className='h-bottom h-10'></div> */}
              </div>
              <div className='background-right'>
                <div className='background-display'></div>
              </div>
            </WorkDetails>
            <CampaignBrief show={openForm} onClose={popupCloseHandler} />
            <div
              className={`bottom-scroll mask-scroll ${
                scrolll ? '' : 'hide-shadow'
              }`}
            ></div>
            <div className={`button-section ${scrolll ? 'scroll-btn' : ''}`}>
              <Button
                type='button'
                showShadow
                variant='primary'
                size='lg'
                className='hide-btn'
                showIcon={true}
                onClick={() => {
                  setOpenForm(true);
                }}
              >
                Post a campaign brief
              </Button>
            </div>
          </Container>
        </div>
      </SectionStyled>
      <SectionStyled className='mobile-only'>
        <h2>
          How Qoruz Paid Collabs works?
          <Image
            src={joinS3('images/paid-collaboration/paid-collab-line.svg')}
            alt='paid collab line'
            className='paid-line'
            width={134}
            height={10}
          />
        </h2>

        <p className='lead'>Get started with your campaign in 3 easy steps.</p>
        <div className='lunchbox'>
          <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
            {Work.map((works, index) => (
              <SwiperSlide
                className={`row left-info-row slide-${index}`}
                key={index}
              >
                <Col
                  sm={12}
                  lg={10}
                  className='left left-text-container'
                  dir='row'
                >
                  <InfoMobile className='info flex-column imfo-mobile flex'>
                    <h3 className='work-heading-mobile'>{works.title}</h3>
                    <p className='work-content-mobile'>{works.content}</p>
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
                  </InfoMobile>
                </Col>
                <Col
                  sm={12}
                  lg={7}
                  className='figure-container flex items-center'
                >
                  <Figure className='figure flex items-center justify-center'>
                    <Image
                      src={works.mainImage}
                      alt=''
                      width={375}
                      height={208.54}
                    />
                  </Figure>
                </Col>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div> */}
        </div>
        {openForm ? (
          <CampaignBrief show={openForm} onClose={popupCloseHandler} />
        ) : null}
      </SectionStyled>
    </>
  );
};

export default HowCollabWork;
