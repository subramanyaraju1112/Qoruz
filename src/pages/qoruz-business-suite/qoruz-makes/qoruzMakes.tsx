import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';

import QoruzMakesStyled, {
  Content,
  ContentM,
  Figure,
  FigureM,
  Indicator,
  IndicatorM,
  Line,
  Parent,
  QoruzMakesIntro,
  TabContent,
  TabList,
  TabListItem,
  TabListItemM,
  TabListM,
  Title,
} from './qoruzMakes.style';

const TOOLS = [
  {
    id: 1,
    title: 'Make influencer list',
    content:
      'Discover relevant influencers from our extensive database of over 300,000. Filter them by category, location, follower range, and more.',
    mainImage: joinS3('images/solution/qoruz-makes-1.png'),
    className: 'one',
    mobile: joinS3('images/solution/qoruz-makes-1.png'),
  },
  {
    id: 2,
    title: 'Request to collaborate',
    content:
      'Contact influencers directly via WhatsApp or phone call to discuss your campaign and receive immediate responses, unlike Instagram DMs.',
    mainImage: '/images/solution/request-to-collaborate.png',
    className: 'two',
    mobile: '/images/solution/request-to-collaborate.png',
  },
  {
    id: 3,
    title: 'Negotiate cost',
    content:
      "Save costs on influencer collaborations by knowing their estimated pricing beforehand with Qoruz. Ensure you don't overpay.",
    mainImage: '/images/solution/negotiate-cost.png',
    className: 'three',
    mobile: '/images/solution/negotiate-cost.png',
  },
  {
    id: 4,
    title: 'Measure result',
    content:
      'Instantly measure campaign ROI without the need for extensive spreadsheet creation, saving you valuable time and effort.',
    mainImage: '/images/solution/measure-result.png',
    className: 'four',
    mobile: '/images/solution/measure-result.png',
  },
];

const QoruzMakes = () => {
  const [active, setActive] = useState(1);
  const [mobileActive, setMobileActive] = useState(false);
  const swiperRef = useRef<any>(null);
  const handleTabClick = (id: any) => {
    setActive(id);
    swiperRef?.current?.swiper?.slideTo(id - 1);
  };

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
      window.removeEventListener('resize', () => { });
    };
  }, [mobileActive]);

  useEffect(() => {
    if (window.innerWidth < 991) {
      setMobileActive(true);
    } else {
      setMobileActive(false);
    }
  }, []);

  useEffect(() => {
    let interval: any;
    if (window.innerWidth > 991 && !mobileActive) {
      interval = setInterval(() => {
        if (active === 4) {
          setActive(1);
        } else {
          setActive(active + 1);
        }
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [active, mobileActive]);

  return (
    <>
      <QoruzMakesIntro className='qoruz-makes-intro' id='why-business-suite'>
        <Container className='container'>
          <Row>
            <Col lg={5} className='qoruz-makes-intro-left'>
              <h2 className='wow fadeInUp'>
                <Line className='line flex-column inline-flex'>
                  <Title className='flex-column flex'>
                    <span>The difference</span>
                    <h2>Qoruz makes</h2>
                  </Title>
                  <Image
                    src={joinS3('images/solution/line.svg')}
                    alt='Line Heading'
                    width={133}
                    height={9}
                  />
                </Line>
              </h2>
            </Col>
            <Col lg={7} className='qoruz-makes-intro-right'>
              <p className='description wow fadeInUp'>
                Qoruz gives a simplified experience at every step of your
                journey to run measurable influencer campaigns. Even with low
                bandwidth, no expertise & limited budget.
              </p>
            </Col>
          </Row>
        </Container>
      </QoruzMakesIntro>
      {!mobileActive ? (
        <QoruzMakesStyled className=' desktop'>
          <Container className='container'>
            <Row>
              <Col lg={4} className='powerful-tool-left'>
                <TabList className='tab-list wow fadeInUp flex'>
                  {TOOLS.map((tool, index) => (
                    <TabListItem
                      className={`tab-list-item wow fadeInUp flex ${active === tool.id ? 'active' : ''
                        }`}
                      key={index}
                      onClick={() => handleTabClick(tool.id)}
                    >
                      <Indicator className='indicator' />
                      <Content className='content'>
                        <h4 className='flex-column inline-flex'>
                          {tool.title}
                        </h4>
                        <p
                          className={`details ${active - 1 === index ? 'active' : ''
                            }`}
                        >
                          {tool.content}
                        </p>
                      </Content>
                    </TabListItem>
                  ))}
                </TabList>
              </Col>
              <Col lg={8}>
                <TabContent className='tab-content wow fadeInUp'>
                  <Parent
                    className={`tab-content-inner ${TOOLS[active - 1]?.className
                      }`}
                  >
                    <Figure className='figure'>
                      <img
                        className='main'
                        src={TOOLS[active - 1]?.mainImage}
                        alt='One'
                      />
                    </Figure>
                    <Content className='content'>
                      <h4>{TOOLS[active - 1]?.title}</h4>
                      <p className='details'>{TOOLS[active - 1]?.content}</p>
                    </Content>
                  </Parent>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </QoruzMakesStyled>
      ) : (
        <QoruzMakesStyled className='qorz-makes mobile'>
          <Container className='container'>
            <Row className='main-container' style={{ display: 'flex' }}>
              <Col lg={4} className='powerful-tool-left'>
                <TabListM className='tab-list tab-list-mobile wow fadeInUp flex'>
                  {TOOLS.map((tool, index) => (
                    <TabListItemM
                      className={`tab-list-item mobile wow fadeInUp flex ${active === tool.id ? 'active' : ''
                        }`}
                      key={index}
                      onClick={() => handleTabClick(tool.id)}
                    >
                      <IndicatorM className='indicator' />
                      <ContentM className='content'>
                        <h4 className='flex-column inline-flex'>
                          {tool.title}
                        </h4>
                        <p
                          className={`details ${active - 1 === index ? 'active' : ''
                            }`}
                        >
                          {tool.content}
                          <FigureM className='figure'>
                            <img
                              className='main'
                              src={TOOLS[active - 1]?.mainImage}
                              alt='One'
                            />
                          </FigureM>
                        </p>
                      </ContentM>
                    </TabListItemM>
                  ))}
                </TabListM>
              </Col>
            </Row>
          </Container>
        </QoruzMakesStyled>
      )}
      {/* {mobileActive && (
       
      )} */}
    </>
  );
};

export default QoruzMakes;
