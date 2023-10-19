/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import LinkedIn from '@qoruz/components/svg/linkedin';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Container } from 'react-grid-system';
import Select from 'react-select';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import TestimonialStyled, {
  Author,
  AuthorDetails,
  FilterSlider,
  LineSelect,
  TestimonialCard,
  TestimonialDetails,
} from './testimonial.style';

const TestimonialData: Record<string, any[]> = {
  All: [],
  Technology: [
    {
      id: 1,
      name: 'MEGHA PANJABI',
      designation: 'Senior Brand Manager, OMS Digital',
      content: `Qoruz is the most effective influencer platform in terms of cost, effort, and convenience. Their multi-filter features and detailed influencer database helps us make informed decisions while suggesting branded content plans. Most importantly, they have a super responsive team that constantly helps us with issues if any.`,
      image: joinS3('images/testimonials-brand/times-internet.png'),
      avatar: joinS3('images/paid-collaboration/megha-times-internet.jpeg'),
      company: 'Times Internet',
      link: 'https://www.linkedin.com/in/megha-panjabi-3630aa99/',
    },
  ],
  Gaming: [
    {
      id: 1,
      name: 'SANKALP DUA',
      designation: 'Brand Management and Partnership',
      content: `The Qoruz platform not only helps us reach out to influencers for marketing campaigns but also helps us monitor the campaign and understand how each influencer is performing to draw better insights.`,
      image: joinS3('images/testimonials-brand/khel-groups.png'),
      avatar: joinS3('images/paid-collaboration/sankalp-khel-group.jpg'),
      company: 'The Khel Group',
      link: 'https://www.linkedin.com/in/sankalp-dua/',
    },
  ],
  Beauty: [
    {
      id: 1,
      name: 'SAURABH SHIRUDE',
      designation: 'Growth & Marketing Manager',
      content: `Our goal was to reach out to influencers and offer exclusive access to our tech products. Qoruz has been very useful to find and connect with influencers basis their categories and subscribers base. It is very easy to use and the database is quite updated.`,
      image: joinS3('images/testimonials-brand/supershare.png'),
      avatar: joinS3(
        'images/paid-collaboration/saurabh-shirude-supershare.jpg'
      ),
      company: 'Supershare',
      link: 'https://www.linkedin.com/in/saurabh-shirude/',
    },
  ],
  Agency: [
    {
      id: 1,
      name: 'VISHAL SINGH PACHERA',
      designation: 'Account Controller',
      content: `Qoruz's robust database helps find any category of influencers be it nano, micro, macro, mega, or celebrity and the direct outreach feature helps us provide cost efficiency to our clients. Our Goal was to create a one-stop solution for our clients and Qoruz has enabled us to achieve our goal.`,
      image: joinS3('images/testimonials-brand/madison- world.png'),
      avatar: joinS3(
        'images/paid-collaboration/vishal-singh-pachera-madison.jpg'
      ),
      company: 'Madison World',
      link: 'https://www.linkedin.com/in/vishalsinghpachera/',
    },
  ],
  Lifestyle: [
    {
      id: 1,
      name: 'AKSHIT JAIN',
      designation: 'Growth Lead',
      content: `Qoruz has helped us immensely by providing a
      dashboard of influencers to quickly find the right influencers for our business - saved a lot of time & effort of scouting influencers manually. Really happy with the god speed of account managers.
      `,
      image: joinS3('images/testimonials-brand/pep.png'),
      avatar: joinS3('images/paid-collaboration/akshit-jain-pep.jpg'),
      company: 'Pep.Live',
      link: 'https://www.linkedin.com/in/akshit-jain-aba81136/',
    },
  ],
};

const MainOption = [
  {
    value: 'All',
    label: 'All',
  },
  {
    value: 'Technology',
    label: 'Technology',
  },
  {
    value: 'Gaming',
    label: 'Gaming',
  },
  {
    value: 'Beauty',
    label: 'Beauty',
  },
  {
    value: 'Agency',
    label: 'Agency',
  },
  {
    value: 'Lifestyle',
    label: 'Lifestyle',
  },
];

const Testimonial = () => {
  // const [opacity, setOpacity] = useState<any>([]);
  // const [optionChanged, setOptionChanged] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string;
  }>(MainOption[0]);

  // const handleTweenValues = (styles: number[]) => {
  //   // setOpacity(styles);
  // };
  // const handleOptionChange = () => {
  //   setOptionChanged(false);
  // };
  //get all slides in an array
  const slides = () => {
    const allSlides: any[] = [];
    for (const slide in TestimonialData) {
      allSlides.push(...TestimonialData[slide]);
    }
    return allSlides;
  };
  const swiperRef = React.useRef<any>(null);

  return (
    <TestimonialStyled className='testimonial'>
      <Container>
        <h3 className='flex-column wow fadeInUp flex'>
          <span className='wow fadeInUp'>What make us special —</span>
          <FilterSlider className='filter-slider wow fadeInUp flex flex-wrap'>
            <span>Trusted by</span>
            <LineSelect className='line-select flex items-end justify-center'>
              <Select
                options={MainOption}
                value={selectedOption}
                onChange={(e: any) => {
                  setSelectedOption(e);
                  // setOptionChanged(true);
                }}
                className='business'
                isSearchable={false}
                classNamePrefix='business'
              />
              <Image
                src={joinS3('images/common/line-yellow.svg')}
                alt='Line'
                width={97}
                height={9}
              />
            </LineSelect>
            <span>businesses</span>
          </FilterSlider>
        </h3>
      </Container>
      {/* <EmblaCarousel
        slides={
          selectedOption.value === 'All'
            ? slides()
            : TestimonialData[selectedOption.value]
        }
        options={OPTIONS}
        className='testimonial'
        arrows={false}
        dots={true}
        // tweenFunction={handleTweenValues}
        optionChanged={optionChanged}
        handleOptionChange={handleOptionChange}
        count={
          selectedOption.value === 'All'
            ? slides().length
            : TestimonialData[selectedOption.value].length
        }
        autoplay={true}
        duration={3000}
      > */}
      <Swiper
        spaceBetween={30}
        className='customer carousel-container'
        watchSlidesProgress={true}
        pagination={{ clickable: true }}
        ref={swiperRef}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination]}
        style={{
          marginTop: '40px',
        }}
        initialSlide={0}
        breakpoints={{
          991:{
            centeredSlides: true,
            freeMode: false,
            slidesPerView: 1.4, 
          },
          320:{
            centeredSlides: false,
            freeMode: true,
            slidesPerView: 'auto', 
          }
        }}
      >
        {selectedOption.value === 'All'
          ? slides().map((testimonial: any, index: number) => (
              <SwiperSlide key={index} className=''>
                <div
                  className='embla__slide embla__class-names'
                  key={index}
                  style={{
                    // ...(opacity.length > 1 && { opacity: opacity[index] }),
                    opacity: 1,
                    zIndex: -99,
                  }}
                >
                  <TestimonialCard className='testimonial-card flex-center flex'>
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={400}
                      height={400}
                    />
                    <TestimonialDetails className='testimonial-details flex'>
                      <p className='note'>{testimonial.content}</p>
                      <AuthorDetails className='testimonial-author flex items-center'>
                        <Image
                          src={testimonial.image}
                          alt='testimonial logo'
                          width={54}
                          height={43}
                        />
                        <Author className='author flex-column flex'>
                          <b>
                            {testimonial.name}
                            <Link
                              target='_blank'
                              href={testimonial.link}
                              className='linkedin'
                            >
                              <LinkedIn />
                            </Link>
                          </b>
                          <span>{testimonial.designation}</span>
                          <span className='company'>{testimonial.company}</span>
                        </Author>
                      </AuthorDetails>
                    </TestimonialDetails>
                  </TestimonialCard>
                </div>
              </SwiperSlide>
            ))
          : TestimonialData[selectedOption.value].map(
              (testimonial: any, index: number) => (
                <div
                  className='embla__slide embla__class-names'
                  key={index}
                  style={{
                    // ...(opacity.length > 1 && { opacity: opacity[index] }),
                    opacity: 1,
                  }}
                >
                  <TestimonialCard className='testimonial-card flex-center flex'>
                    <Image src={testimonial.avatar} alt={testimonial.name} />
                    <TestimonialDetails className='testimonial-details flex-column flex'>
                      <p className='note'>{testimonial.content}</p>
                      <AuthorDetails className='testimonial-author flex items-center'>
                        <Image
                          src={testimonial.image}
                          alt='testimonial logo'
                          width={54}
                          height={54}
                        />
                        <Author className='author flex-column flex'>
                          <b>
                            {testimonial.name}
                            <Link
                              target='_blank'
                              href={testimonial.link}
                              className='linkedin'
                            >
                              <LinkedIn />
                            </Link>
                          </b>
                          <span>{testimonial.designation}</span>
                          <span className='company'>{testimonial.company}</span>
                        </Author>
                      </AuthorDetails>
                    </TestimonialDetails>
                  </TestimonialCard>
                </div>
              )
            )}
        {/* </EmblaCarousel> */}
      </Swiper>
    </TestimonialStyled>
  );
};

export default Testimonial;
