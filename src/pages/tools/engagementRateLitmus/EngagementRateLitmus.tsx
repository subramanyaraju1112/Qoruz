import RateLitmus, {
  LitmusMark,
  LitmusStrip,
} from '@qoruz/pages/tools/engagementRateLitmus/EngagementRateLitmus.style';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';

const EngagementRateLitmus = () => {
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
  return (
    <RateLitmus>
      <Container className='container'>
        {!mobileActive && (
          <LitmusStrip>
            <Row className='stripwidth flex justify-between'>
              <LitmusMark>
                <p className='detail'>Low Engagement Rate</p>
              </LitmusMark>
              <LitmusMark>
                <p className='detail'>High Engagement Rate</p>
              </LitmusMark>
            </Row>
            <Row className='mt-1'>
              <Col className='width-10 grade1'>
                <span className='tooltiptext'>
                  <span className='influence-percentage'>0.5%-1%</span>
                  <span className='influence-area'>Celebrity Influencers</span>
                </span>
              </Col>
              <Col className='width-10 grade2'>
                <span className='tooltiptext'>
                  <span className='influence-percentage'>1%-2%</span>
                  <span className='influence-area'>Mega Influencers</span>
                </span>
              </Col>
              <Col className='width-10 grade3'></Col>
              <Col className='width-10 grade4'>
                <span className='tooltiptext'>
                  <span className='influence-percentage'>3%-4%</span>
                  <span className='influence-area'>Macro influencers</span>
                </span>
              </Col>
              <Col className='width-10 grade5'></Col>
              <Col className='width-10 grade6'>
                <span className='tooltiptext'>
                  <span className='influence-percentage'>6%-7%</span>
                  <span className='influence-area'>Micro-influencers</span>
                </span>
              </Col>
              <Col className='width-10 grade7'></Col>
              <Col className='width-10 grade8'></Col>
              <Col className='width-10 grade9'>
                <span className='tooltiptext'>
                  <span className='influence-percentage'>8.8%-9%</span>
                  <span className='influence-area'>Nano Influencers</span>
                </span>
              </Col>
              <Col className='width-10 grade10'></Col>
            </Row>
            <p className='detailsmall'>
              Hover anywhere in the scale to view the engagement rates
            </p>
          </LitmusStrip>
        )}
        {mobileActive && (
          <ul className='tools-list'>
            <li>
              Nano influencers have the highest engagement rate, which varies
              between 8.8-9%
            </li>
            <li>
              Micro-influencers are right behind nano-influencers in terms of
              engagement rate between 6-7%
            </li>
            <li>
              Macro influencers have a lower engagement rate than
              micro-influencers which varies between 3-4%
            </li>
            <li>
              Mega influencers have an even lower engagement rate, between 1-2%
            </li>
            <li>
              And celebrity influencers have the lowest engagement rate, between
              0.5-1%.
            </li>
          </ul>
        )}
      </Container>
    </RateLitmus>
  );
};

export default EngagementRateLitmus;
