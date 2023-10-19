import Button from '@qoruz/components/Button';
import CampaignBrief from '@qoruz/components/campaign-brief/CampaignBrief';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';

import ReelsStyled, { Figure, Info } from './Reels.style';

const Reels = () => {
  const [openForm, setOpenForm] = useState(false);

  const popupCloseHandler = (e: any) => {
    setOpenForm(e);
    document.body.classList.remove('stop-scroll-body');
  };
  return (
    <>
      <ReelsStyled className='reels flex items-center'>
        <Container className='container'>
          <h2>
            How <mark>Qoruz Paid Collabs</mark> works?
          </h2>
          <p className='lead'>
            Get started with your campaign in 3 easy steps.
          </p>
          <Row className='row'>
            <Col sm={12} lg={5}>
              <Info className='info'>
                <h3>
                  Post
                  <br />
                  Campaign
                  <br />
                  Brief
                </h3>
                <p className='details'>
                  Post your requirement with your{' '}
                  <mark>
                    campaign objective, budget & influencer demography
                  </mark>{' '}
                  (category, location) and forecast the result of your campaign.
                </p>
                <Button // FIXME - Button FIX
                  type='button'
                  onClick={() => {
                    setOpenForm(true);
                  }}
                  variant='primary'
                  showIcon={true}
                >
                  Post a campaign brief
                </Button>
              </Info>
            </Col>
            <Col sm={12} lg={7} className='flex items-center'>
              <Figure className='figure flex items-center justify-center'>
                <Image
                  src={joinS3(
                    'images/paid-collaboration/paid-collab/campaign-breif.png'
                  )}
                  alt='Reels1'
                  width={696.33}
                  height={498.89}
                />
              </Figure>
            </Col>
          </Row>
        </Container>
        {openForm ? (
          <CampaignBrief show={openForm} onClose={popupCloseHandler} />
        ) : null}
      </ReelsStyled>
      <ReelsStyled className='reels flex items-center'>
        <Container className='container'>
          <h2>
            How <mark>Qoruz Paid Collabs</mark> works?
          </h2>
          <p className='lead'>
            Get started with your campaign in 3 easy steps.
          </p>
          <Row className='row'>
            <Col sm={12} lg={5}>
              <Info className='info'>
                <h3>
                  Select
                  <br />
                  Relevant
                  <br />
                  Influencers
                </h3>
                <p className='details'>
                  Based on your requirement,{' '}
                  <mark>Qoruz Paid Collabs suggest a list of influencers</mark>.
                  Handpick influencers from the list and replace/add influencers
                  of your choice.
                </p>
                <Button // FIXME - Button FIX
                  type='button'
                  variant='primary'
                  onClick={() => {
                    setOpenForm(true);
                  }}
                  showIcon={true}
                >
                  Post a campaign brief
                </Button>
              </Info>
            </Col>
            <Col sm={12} lg={7} className='flex items-center'>
              <Figure className='figure flex items-center justify-center'>
                <Image
                  src={joinS3(
                    'images/paid-collaboration/paid-collab/relevent-creator.png'
                  )}
                  alt='Reels2'
                  width={696.33}
                  height={498.89}
                />
              </Figure>
            </Col>
          </Row>
        </Container>
      </ReelsStyled>
      <ReelsStyled className='reels flex items-center'>
        <Container className='container'>
          <h2>
            How <mark>Qoruz Paid Collabs</mark> works?
          </h2>
          <p className='lead'>
            Get started with your campaign in 3 easy steps.
          </p>
          <Row className='row'>
            <Col sm={12} lg={5}>
              <Info className='info'>
                <h3>
                  Push
                  <br />
                  Campaign
                  <br />
                  Live
                </h3>
                <p className='details'>
                  Qoruz Paid Collabs works with the influencers and{' '}
                  <mark>executes the campaign on your behalf.</mark> If there
                  are any changes from your end, they get it sorted for you.
                </p>
                <Button // FIXME - Button FIX
                  type='button'
                  variant='primary'
                  onClick={() => {
                    setOpenForm(true);
                  }}
                  showIcon={true}
                >
                  Post a campaign brief
                </Button>
              </Info>
            </Col>
            <Col sm={12} lg={7} className='flex items-center'>
              <Figure className='figure flex items-center justify-center'>
                <Image
                  src={joinS3(
                    'images/paid-collaboration/paid-collab/camoaign-roi.png'
                  )}
                  alt='Reels3'
                  width={696.33}
                  height={498.89}
                />
              </Figure>
            </Col>
          </Row>
        </Container>
      </ReelsStyled>
      <ReelsStyled className='reels flex items-center'>
        <Container className='container'>
          <h2>
            How <mark>Qoruz Paid Collabs</mark> works?
          </h2>
          <p className='lead'>
            Get started with your campaign in 3 easy steps.
          </p>
          <Row className='row'>
            <Col sm={12} lg={5}>
              <Info className='info'>
                <h3>
                  Measure
                  <br />
                  Campaign
                  <br />
                  ROI
                </h3>
                <p className='details'>
                  <mark>Measure the campaign performance individually</mark> or
                  holistically via the tracker that’s enabled for your campaign
                  and optimize the campaign.
                </p>
                <Button // FIXME - Button FIX
                  type='button'
                  onClick={() => {
                    setOpenForm(true);
                  }}
                  variant='primary'
                  showIcon={true}
                >
                  Post a campaign brief
                </Button>
              </Info>
            </Col>
            <Col sm={12} lg={7} className='flex items-center'>
              <Figure className='figure flex items-center justify-center'>
                <Image
                  src={joinS3(
                    'images/paid-collaboration/paid-collab/campaign-live.png'
                  )}
                  alt='Reels4'
                  width={696.33}
                  height={498.89}
                />
              </Figure>
            </Col>
          </Row>
        </Container>
      </ReelsStyled>
    </>
  );
};

export default Reels;
