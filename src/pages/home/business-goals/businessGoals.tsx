import Button from '@qoruz/components/Button';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from 'react-grid-system';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import BusinessGoalsStyled, { CardBottom } from './businessGoals.style';
import Card from '../../../components/Card';

const Goals = [
  {
    id: 1,
    title: 'Find relevant influencers faster',
    content:
      'Find influencers from your niche faster. Don’t compromise time by googling the list of influencers or waiting for the influencer list from an external agency.',
    image: joinS3('images/business-goals/images/1.svg'),
    url: '/playbooks/find-influencers-faster',
  },
  {
    id: 2,
    title: 'Find influencers with less effort',
    content:
      'Find influencers from your niche without much effort. Invest your or resource’s effort in productive stuff instead.',
    image: joinS3('images/business-goals/images/2.svg'),
    url: '/playbooks/find-influencers-effortless',
  },
  {
    id: 3,
    title: 'Get influencer contact in less than 5 secs',
    content:
      'Why DM influencers manually for their contact details? Get their contact details instantly and negotiate on the go.',
    image: joinS3('images/business-goals/images/3.svg'),
    url: '/playbooks/get-influencer-contact-details',
  },
  {
    id: 4,
    title: 'Speak with influencers directly',
    content:
      'Communicate with the influencers directly about the cost, campaign changes etc. Avoid relying on agencies or vendors.',
    image: joinS3('images/business-goals/images/4.svg'),
    url: '/playbooks/direct-influencer-interaction',
  },
  {
    id: 5,
    title: 'Verify if the influencer cost quoted by the agency is legit',
    content:
      'Stop paying additional costs to the agency for your influencer campaign. Evaluating their actual cost before paying the agency.',
    image: joinS3('images/business-goals/images/5.svg'),
    url: '/playbooks/influencer-cost-verification',
  },
  {
    id: 6,
    title: 'Reduce up to 50% of your influencer campaign budget',
    content:
      'Get transparency in the influencer cost when you outsource your influencer campaigns. Spend your campaign budget wisely.',
    image: joinS3('images/business-goals/images/6.svg'),
    url: '/playbooks/reduce-influencer-campaign-budget',
  },
  {
    id: 7,
    title: 'Get influencer cost in less than 5 secs',
    content:
      'Why wait for days to receive the influencer cost by DMing them manually? Get the influencer cost on the go.',
    image: joinS3('images/business-goals/images/7.svg'),
    url: '/playbooks/get-influencers-cost',
  },
  {
    id: 8,
    title: 'Validate if the influencer has worked with similar brands',
    content:
      'Decide whether or not to collaborate with an influencer by validating the brands the influencer has collaborated with before.',
    image: joinS3('images/business-goals/images/8.svg'),
    url: '/playbooks/influencer-validation-based-on-brand-association',
  },
];

const redirect = () => {
  window.open('https://app.qoruz.com/signup', '_blank', 'noreferrer');
};

const BusinessGoals = () => {
  const swiperRef = React.useRef<any>(null);
  return (
    <BusinessGoalsStyled className='businees-goals'>
      <Container className='container'>
        <h2 className='flex-column wow fadeInUp'>
          <span className='wow fadeInUp'>What do you want to achieve?</span>
          <div className='wow fadeInUp'>
            Get to <mark>your business goals</mark> faster with Qoruz.
          </div>
        </h2>
      </Container>
      <Swiper
        spaceBetween={30}
        watchSlidesProgress={true}
        slidesPerView='auto'
        ref={swiperRef}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
        }}
        className='business-goals carousel-container'
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        style={{
          marginTop: '40px',
        }}
      >
        {Goals.map((goal, index) => (
          <SwiperSlide key={index} className='card-slider'>
            <Link
              target='_blank'
              className='flex'
              href={goal.url}
            >
              <Card className='card flex-column flex'>
                <figure className='flex-center flex'>
                  <Image
                    className='business-goals-image'
                    src={goal.image}
                    alt={goal.title}
                    width={78}
                    height={85}
                  />
                </figure>
                <small>Agency</small>
                <h5>{goal.title}</h5>
                <p className='details'>{goal.content}</p>
                <span>Read More</span>
                <CardBottom className='card-bottom flex items-end justify-between'>
                  <Button type='button' variant='outline-light'>
                    <p className='use-this-flow' onClick={redirect}>
                      {' '}
                      Use This flow
                    </p>
                  </Button>
                </CardBottom>
              </Card>
            </Link>
          </SwiperSlide>

        ))}
      </Swiper>
    </BusinessGoalsStyled>
  );
};

export default BusinessGoals;
