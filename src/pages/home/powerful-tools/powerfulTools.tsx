import QoruzButton from '@qoruz/components/QoruzButton/QoruzButton';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import PowerfulToolsStyled, {
  Content,
  CounterList,
  CounterListItem,
  CounterWrapper,
  Figure,
  FigureWrapper,
  IconHolder,
  Parent,
  PartnersList,
  PartnersListItem,
  PartnersWraper,
  TabContent,
  TabList,
  TabListItem,
} from './powerfulTools.style';

const TOOLS = [
  {
    id: 1,
    title: 'Influencer Search',
    icon: joinS3('images/powerful-tools/creator-search.svg'),
    content: 'Find your perfect influencers in minutes.',
    mainImage: joinS3('images/powerful-tools/creator-search.png'),
    // mainImage: <Image className='main' src={CreatorSearchNew} alt='One' />,
    leftImage: joinS3('images/powerful-tools/1-left.svg'),
    rightImage: joinS3('images/powerful-tools/1-right.svg'),
    className: 'one',
    mobile: joinS3('images/powerful-tools/one-mobile.png'),
  },
  {
    id: 2,
    title: 'Influencer Profiles',
    icon: joinS3('images/powerful-tools/creator-profiles.svg'),
    content: 'View influencers profiles and their social media stats.',
    mainImage: joinS3('images/powerful-tools/creator-profile.png'),
    // mainImage: <Image className='main' src={CreatorProfileNew} alt='One' />,
    leftImage: joinS3('images/powerful-tools/2-left.svg'),
    rightImage: joinS3('images/powerful-tools/2-right.svg'),
    className: 'two',
    mobile: joinS3('images/powerful-tools/two-mobile.png'),
  },
  {
    id: 3,
    title: 'Influencer Outreach',
    icon: joinS3('images/powerful-tools/creator-outreach.svg'),
    content: 'Reach out to influencers and start collaborating.',
    mainImage: joinS3('images/powerful-tools/creator-outreach.png'),
    // mainImage: <Image className='main' src={CreatorOutreachNew} alt='One' />,
    leftImage: joinS3('images/powerful-tools/3-left.svg'),
    rightImage: joinS3('images/powerful-tools/3-right.svg'),
    className: 'three',
    mobile: joinS3('images/powerful-tools/three-mobile.png'),
  },
  {
    id: 4,
    title: 'Campaign Reporting',
    icon: joinS3('images/powerful-tools/campaign-reporting.svg'),
    content: 'Track campaign performance and ROI.',
    mainImage: joinS3('images/powerful-tools/creator-reporting.png'),
    // mainImage: <Image className='main' src={CreatorReportingNew} alt='One' />,
    leftImage: joinS3('images/powerful-tools/4-left.svg'),
    rightImage: joinS3('images/powerful-tools/4-right.svg'),
    className: 'four',
    mobile: joinS3('images/powerful-tools/four-mobile.png'),
  },
];

const Partners = [
  {
    id: 1,
    image: joinS3('images/sponsor/snapdeal.svg'),
  },
  {
    id: 2,
    image: joinS3('images/sponsor/wow.svg'),
  },
  {
    id: 3,
    image: joinS3('images/sponsor/bajaj.svg'),
  },
  {
    id: 4,
    image: joinS3('images/sponsor/arm.svg'),
  },
  {
    id: 5,
    image: joinS3('images/sponsor/madison-media.svg'),
  },
  {
    id: 6,
    image: joinS3('images/sponsor/amazon-mini.svg'),
  },
  {
    id: 7,
    image: joinS3('images/sponsor/msl.svg'),
  },
  {
    id: 8,
    image: joinS3('images/sponsor/itc.svg'),
  },
];

const Counters = [
  {
    id: 1,
    value: '375k+',
    name: 'Creators & Influencers',
    img: joinS3('images/powerful-tools/creator-influencers.svg'),
  },
  {
    id: 2,
    value: '189k+',
    name: 'Campaigns created',
    img: joinS3('images/powerful-tools/campaigns-created.svg'),
  },
  {
    id: 3,
    value: '₹89.7cr',
    name: 'Marketing budget saved',
    img: joinS3('images/powerful-tools/marketing-budget.svg'),
  },
];

const PowerfulTools = () => {
  const [active, setActive] = useState(1);
  const [mobileActive, setMobileActive] = useState(false);
  const swiperRef = useRef<any>(null);
  const handleTabClick = (id: any) => {
    setActive(id);
    swiperRef?.current?.swiper?.slideTo(id - 1);
  };

  useEffect(() => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    const handleScroll = () => {
      const y = window.scrollY;
      parallaxElements.forEach((el: any) => {
        const top = el.offsetTop;
        el.style.transform = `translateY(-${y > top ? y / 8 : 0}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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

  // useEffect(() => {
  //   const element = document.querySelector('.monster');
  //   const observer = new IntersectionObserver((entries) => {
  //     element?.classList.toggle('animation', entries[0].isIntersecting);
  //   });

  //   observer.observe(element);
  // }, []);

  // const containerRef = useRef(null);
  // const [visible, setVisible] = useState(false);
  // const callbackFunction = (entries: any) => {
  //   const [entry] = entries;
  //   setVisible(entry.isIntersecting);
  // };

  // const options = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 1.0,
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunction, options);
  //   if (containerRef.current) observer.observe(containerRef.current);

  //   return () => {
  //     if (containerRef.current) observer.unobserve(containerRef.current);
  //   };
  // }, [containerRef, options]);

  return (
    <>
      <PartnersWraper className='partners wow fadeInUp flex-center text flex'>
        <Container className='container'>
          <PartnersList className='partners-list flex items-center justify-around'>
            {Partners.map((partner, index) => (
              <PartnersListItem
                className='partners-list-item flex-center flex'
                key={index}
              >
                <Image src={partner.image} alt='Snapdeal' fill />
              </PartnersListItem>
            ))}
          </PartnersList>
        </Container>
      </PartnersWraper>
      <CounterWrapper className='counter wow fadeInUp text'>
        <Container className='container'>
          <CounterList className='counter-list flex items-center justify-around'>
            {Counters.map((counter, index) => (
              <CounterListItem className='counter-list-item flex' key={index}>
                <IconHolder className='icon-holder'>
                  <Image src={counter.img} alt='Creator Influencers' fill />
                </IconHolder>
                <h2 className='flex-column flex'>
                  {counter.value}
                  <span>{counter.name}</span>
                </h2>
              </CounterListItem>
            ))}
          </CounterList>
        </Container>
      </CounterWrapper>

      {mobileActive ? (
        <PowerfulToolsStyled className='powerful-tools mobile'>
          <Container className='container'>
            <Row>
              <Col lg={6} className='powerful-tool-left'>
                <h2 className='wow fadeInUp'>
                  Powerful tools to find, connect, and collaborate
                </h2>
                <TabList className='wow fadeInUp tab-list text flex'>
                  {TOOLS.map((tool, index) => {
                    return (
                      <TabListItem
                        className={`tab-list-item flex items-center ${
                          active - 1 === index ? 'active' : ''
                        } text wow fadeInUp`}
                        key={index}
                        onClick={() => handleTabClick(tool.id)}
                      >
                        <Image
                          className='tab-icon '
                          src={tool.icon}
                          alt={tool.title}
                          width={49}
                          height={54}
                        />
                        <Content className='content'>
                          <h4 className='flex-column inline-flex'>
                            {tool.title}
                          </h4>
                          {active - 1 === index && (
                            <p className='details'>{tool.content}</p>
                          )}
                        </Content>
                      </TabListItem>
                    );
                  })}
                </TabList>
              </Col>
              <Col lg={6}>
                <Swiper
                  ref={swiperRef}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                    el: '.tab-list',
                    bulletClass: 'tab-list-item',
                    bulletActiveClass: 'active',
                  }}
                  modules={[Pagination, Autoplay]}
                  // loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  onSlideChange={(swiper) => {
                    mobileActive && setActive(swiper.activeIndex + 1);
                  }}
                >
                  {TOOLS.map((tool, index) => (
                    <SwiperSlide key={index}>
                      <TabContent className='tab-content wow fadeInUp'>
                        <Parent
                          className={`tab-content-inner ${tool.className}`}
                        >
                          <FigureWrapper className='figure-wrapper'>
                            <Figure className='figure'>
                              <Image
                                className='main'
                                src={tool.mobile}
                                alt='One'
                                width={360}
                                height={360}
                              />
                              {/* <Image
                              className='small left'
                              src={tool.leftImage}
                              alt='One Left'
                            />
                            <Image
                              className='small right'
                              src={tool.rightImage}
                              alt='One Right'
                            /> */}
                            </Figure>
                          </FigureWrapper>
                          <Content className='content'>
                            <h4>{tool.title}</h4>
                            <p className='details'>{tool.content}</p>
                          </Content>
                        </Parent>
                      </TabContent>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Col>
            </Row>
          </Container>
        </PowerfulToolsStyled>
      ) : (
        <PowerfulToolsStyled className='powerful-tools desktop'>
          <Container className='container'>
            <Row>
              <Col lg={6} className='powerful-tool-left'>
                <h2 className='wow fadeInUp text wow fadeInUp'>
                  Powerful tools to find, connect, and collaborate
                  <QoruzButton />
                </h2>
                <TabList className='tab-list text wow fadeInUp flex'>
                  {TOOLS.map((tool, index) => (
                    <TabListItem
                      className={`tab-list-item flex items-center ${
                        active === tool.id ? 'active' : ''
                      } wow fadeInUp`}
                      key={index}
                      onClick={() => handleTabClick(tool.id)}
                    >
                      <Image
                        className='tab-icon '
                        src={tool.icon}
                        alt={tool.title}
                        width={49}
                        height={54}
                      />
                      <Content className='content'>
                        <h4 className='flex-column inline-flex'>
                          {tool.title}
                        </h4>
                        {active - 1 === index && (
                          <p className='details'>{tool.content}</p>
                        )}
                      </Content>
                    </TabListItem>
                  ))}
                </TabList>
              </Col>
              <Col lg={6}>
                <TabContent className='tab-content text wow fadeInUp'>
                  <Parent
                    className={`tab-content-inner ${
                      TOOLS[active - 1]?.className
                    }`}
                  >
                    <FigureWrapper className='figure-wrapper' data-parallax>
                      <Figure className='figure'>
                        <Image
                          className='main'
                          src={TOOLS[active - 1]?.mainImage}
                          alt='One'
                          width={1200}
                          height={1400}
                        />
                        <Image
                          className='small left'
                          src={TOOLS[active - 1]?.leftImage}
                          alt='One Left'
                          width={196}
                          height={218}
                        />
                        <Image
                          className='small right'
                          src={TOOLS[active - 1]?.rightImage}
                          alt='One Right'
                          width={196}
                          height={218}
                        />
                      </Figure>
                    </FigureWrapper>
                    <Content className='content'>
                      <h4>{TOOLS[active - 1]?.title}</h4>
                      <p className='details'>{TOOLS[active - 1]?.content}</p>
                    </Content>
                  </Parent>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </PowerfulToolsStyled>
      )}
    </>
  );
};

export default PowerfulTools;
