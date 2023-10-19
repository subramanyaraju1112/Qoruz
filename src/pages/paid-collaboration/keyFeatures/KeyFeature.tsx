import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';

import KeyFeatureStyled, {
  Content,
  ContentM,
  Figure,
  FigureM,
  Indicator,
  IndicatorM,
  KeyFeaureIntro,
  Parent,
  TabContent,
  TabList,
  TabListItem,
  TabListItemM,
  TabListM,
} from './keyFeatures.style';

const TOOLS = [
  {
    id: 1,
    title: 'Forecast Campaign Outcome',
    content:
      'Qoruz Paid Collabs tool allows you to easily spot which influencers meet the ROI and bring you the most relevant prospects, before going live.',
    point1: 'Campaign Budget vs. Expected Returns',
    point2: 'Campaign Budget vs. Influencer Type',
    point3: 'Influencer Type vs. Expected Returns',
    mainImage: joinS3('images/paid-collaboration/forecast-campaign.png'),
    className: 'one',
    mobile: joinS3('images/paid-collaboration/forecast-campaign.png'),
  },
  {
    id: 2,
    title: 'Simplify Campaign Measurement',
    content:
      'With Qoruz, you can generate standardized reports for all campaigns. It can be shared with team members to measure the campaign outcome.',
    point1: 'Budget vs. Campaign Reach',
    point2: 'Reach (Historical vs. Actual)',
    point3: 'Influencer’s CPV & CPE',
    mainImage: joinS3('images/paid-collaboration/simplify-campaign.png'),
    className: 'two',
    mobile: joinS3('images/paid-collaboration/simplify-campaign.png'),
  },
  {
    id: 3,
    title: 'Accelerate Campaign Launch',
    content:
      'Handover the time consuming influencer collaboration process to Qoruz Paid Collabs. Go live, no matter how urgent the campaign is. ',
    point1: 'Automate influencer requests',
    point2: 'Fast influencer response',
    point3: 'Strong influencer relationship',
    mainImage: joinS3('images/paid-collaboration/accelerate-campaign.png'),
    className: 'three',
    mobile: joinS3('images/paid-collaboration/accelerate-campaign.png'),
  },
  {
    id: 4,
    title: 'Overcome Bandwidth Limitation',
    content:
      'Focus on selecting influencers & measuring performance. Delegate the heavy campaign execution process to Qoruz Paid Collabs.',
    point1: 'Influencer list based on your objective',
    point2: 'Negotiation for best costs',
    point3: 'Influencer follow-ups (content, guidelines, payment)',
    mainImage: joinS3('images/paid-collaboration/overcome-bandwidth.png'),
    className: 'four',
    mobile: joinS3('images/paid-collaboration/overcome-bandwidth.png'),
  },
];

const KeyFeatures = () => {
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
      <KeyFeaureIntro id='keyFeatures' className='key-feature-intro'>
        <h2>Key Features</h2>
        <Image
          src={joinS3('images/paid-collaboration/key-features-line.svg')}
          alt='Line'
          width={158}
          height={11}
        />
      </KeyFeaureIntro>
      {!mobileActive ? (
        <KeyFeatureStyled className='powerful-tools desktop'>
          <Container className='container'>
            <Row>
              <Col lg={5} className='powerful-tool-left'>
                <TabList className='tab-list wow fadeInUp flex'>
                  {TOOLS.map((tool, index) => (
                    <TabListItem
                      className={`tab-list-item wow fadeInUp flex ${
                        active === tool.id ? 'active' : ''
                      }`}
                      key={index}
                      onClick={() => handleTabClick(tool.id)}
                    >
                      <Indicator className='indicator' />
                      <Content className='content'>
                        <h4 className='flex-column inline-flex'>
                          {tool.title}
                        </h4>
                        {/* {active - 1 === index && ( */}
                        <div
                          className={`content-inner ${
                            active - 1 === index ? 'active' : ''
                          }`}
                        >
                          <p className='details'>{tool.content}</p>
                          <ul className='list-points'>
                            <li>
                              <Image
                                src={joinS3(
                                  'images/paid-collaboration/list.svg'
                                )}
                                alt='list icon'
                                width={13}
                                height={15}
                              />
                              {tool.point1}
                            </li>
                            <li>
                              <Image
                                src={joinS3(
                                  'images/paid-collaboration/list.svg'
                                )}
                                alt='list icon'
                                width={13}
                                height={15}
                              />
                              {tool.point2}
                            </li>
                            <li>
                              <Image
                                src={joinS3(
                                  'images/paid-collaboration/list.svg'
                                )}
                                alt='list icon'
                                width={13}
                                height={15}
                              />
                              {tool.point3}
                            </li>
                          </ul>
                        </div>
                        {/* )} */}
                      </Content>
                    </TabListItem>
                  ))}
                </TabList>
              </Col>
              <Col lg={7}>
                <TabContent className='tab-content wow fadeInUp'>
                  <Parent
                    className={`tab-content-inner ${
                      TOOLS[active - 1]?.className
                    }`}
                  >
                    <Figure className='figure'>
                      <Image
                        className='main'
                        src={TOOLS[active - 1]?.mainImage}
                        alt='One'
                        width={1292}
                        height={945}
                      />
                    </Figure>
                    {/* <Content className='content'>
                      <h4>{TOOLS[active - 1]?.title}</h4>
                      <p className='details'>{TOOLS[active - 1]?.content}</p>
                    </Content> */}
                  </Parent>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </KeyFeatureStyled>
      ) : (
        <KeyFeatureStyled className='qorz-makes powerful-tools mobile'>
          <Container className='container'>
            <Row className='main-container' style={{ display: 'flex' }}>
              <Col lg={4} className='powerful-tool-left'>
                <TabListM className='tab-list tab-list-mobile wow fadeInUp flex'>
                  {TOOLS.map((tool, index) => (
                    <TabListItemM
                      className={`tab-list-item mobile wow fadeInUp flex ${
                        active === tool.id ? 'active' : ''
                      }`}
                      key={index}
                      onClick={() => handleTabClick(tool.id)}
                    >
                      <IndicatorM className='indicator' />
                      <ContentM className='content'>
                        <h4 className='flex-column inline-flex'>
                          {tool.title}
                        </h4>
                        {/* {active - 1 === index && ( */}
                        <div
                          className={`content-inner ${
                            active - 1 === index ? 'active' : ''
                          }`}
                        >
                          <p className='details'>{tool.content}</p>
                          <ul className='list-points'>
                            <li>
                              <Image
                                src={joinS3(
                                  'images/paid-collaboration/list.svg'
                                )}
                                alt='list icon'
                                width={13}
                                height={15}
                              />
                              {tool.point1}
                            </li>
                            <li>
                              <Image
                                src={joinS3(
                                  'images/paid-collaboration/list.svg'
                                )}
                                alt='list icon'
                                width={13}
                                height={15}
                              />
                              {tool.point2}
                            </li>
                            <li>
                              <Image
                                src={joinS3(
                                  'images/paid-collaboration/list.svg'
                                )}
                                alt='list icon'
                                width={13}
                                height={15}
                              />
                              {tool.point3}
                            </li>
                          </ul>
                          <FigureM className='figure'>
                            <Image
                              className='main'
                              src={TOOLS[active - 1]?.mainImage}
                              alt='One'
                              width={1292}
                              height={945}
                            />
                          </FigureM>
                        </div>
                      </ContentM>
                    </TabListItemM>
                  ))}
                </TabListM>
              </Col>
            </Row>
          </Container>
        </KeyFeatureStyled>
      )}
      {/* {mobileActive && (
       
      )} */}
    </>
  );
};

export default KeyFeatures;
