import Seo from '@qoruz/components/Seo';
import EventForm from '@qoruz/pages/events/drive-roi-through-content/form/form';
import Hero from '@qoruz/pages/events/drive-roi-through-content/Hero/hero';
import Team from '@qoruz/pages/events/drive-roi-through-content/Team/team';
import WebinarDetail from '@qoruz/pages/events/drive-roi-through-content/webinarDetal/webinarDetail';
import WebinarPoints from '@qoruz/pages/events/drive-roi-through-content/WebinarPoints/webinarPoints';
import Footer from '@qoruz/pages/footer/footer';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';

const DriveROI = () => {
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
    <>
      <Seo
        title='[Panel Discussion] How to drive ROI with content'
        description='Drive ROI by leveraging relevant content that aligns with your goals to engage with your target audience.'
        image='https://d1ks0pavw8unez.cloudfront.net/public/images/meta_images/drive_roi_with_content.png'
      />
      <Hero />
      <Container className='webinar-campaign container'>
        <Row>
          <Col sm={12} lg={7}>
            <WebinarDetail />
            {mobileActive && <EventForm />}
            <WebinarPoints />
            <Team />
          </Col>
          {!mobileActive && (
            <Col lg={5} className='desktop'>
              <EventForm />
            </Col>
          )}
        </Row>
      </Container>
      <Footer hideSticky={true} />
    </>
  );
};

export default DriveROI;
