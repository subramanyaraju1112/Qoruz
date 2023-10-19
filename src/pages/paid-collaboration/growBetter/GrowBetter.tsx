import Button from '@qoruz/components/Button';
import CampaignBrief from '@qoruz/components/campaign-brief/CampaignBrief';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';

import GrowBetterStyled, { Info } from './GrowBetter.style';

const GrowBetter = () => {
  const [openForm, setOpenForm] = useState(false);

  const popupCloseHandler = (e: any) => {
    setOpenForm(e);
    document.body.classList.remove('stop-scroll-body');
  };
  return (
    <>
      <GrowBetterStyled className='grow-better flex items-center'>
        <Container className='container'>
          <div className='grow-container'>
            <Row className='row connect-cta items-center'>
              <Col sm={12} lg={6} className='items-center'>
                <div className='rgt-info flex items-center'>
                  <h3>Grow better with Qoruz Paid Collab today.</h3>
                </div>
              </Col>
              <Col sm={12} lg={6}>
                <Info className='btn-cconnect'>
                  <Button
                    type='button'
                    className='grow-btn'
                    size='lg'
                    onClick={() => {
                      setOpenForm(true);
                    }}
                    showIcon={true}
                  >
                    Post a campaign brief
                  </Button>
                </Info>
              </Col>
            </Row>
          </div>
          <p className='detail'>
            With tools to make every part of the influencer collaboration process
            more human and a support team excited to help you, starting with
            Qoruz has never been easier.
          </p>
        </Container>
        {openForm ? (
          <CampaignBrief show={openForm} onClose={popupCloseHandler} />
        ) : null}
      </GrowBetterStyled>
    </>
  );
};

export default GrowBetter;
