/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';
import { Container } from 'react-grid-system';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import CustomerStyled, {
  Author,
  AuthorDetails,
  CustomerCard,
} from './customer.style';

const Data = [
  {
    id: 1,
    name: 'Sophia Christina',
    designation: 'Manager, Brand PR & COPCOM',
    content: `Qoruz is quite a simple and easy to use influencer marketing platform and has been very helpful in planning our influencer outreach campaigns, by putting together the right plans and identifying the right people to work with`,
    image: joinS3('images/solution/marico.png'),
    avatar: joinS3('images/solution/sophia-christina.jpg'),
    link: 'https://www.linkedin.com/in/sophiachristina/ ',
  },
  {
    id: 2,
    name: 'Mithun Cotha',
    designation: 'Vice President',
    content: `From identifying the ‘right’ influencer, to managing them, to measuring impact – influencer marketing platform, Qoruz has made my team’s life much comfortable. It’s amazing to partner with them!`,
    image: joinS3('images/solution/autumn-grey.png'),
    avatar: joinS3('images/solution/mithun.jpg'),
    link: 'https://www.linkedin.com/in/mithuncotha/ ',
  },
];

const Customer = () => {
  return (
    <CustomerStyled className='customer-section' id='testimonials'>
      <Container>
        <h3 className='flex-column wow fadeInUp flex'>
          Customer Love
          <Image
            src={joinS3('images/solution/customer-line.svg')}
            alt='customer-line'
            width={157}
            height={11}
          />
        </h3>
        <Swiper
          spaceBetween={10}
          className='customer'
          slidesPerView='auto'
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          style={{
            marginTop: '40px',
          }}
        >
          {Data.map((item, index) => (
            <SwiperSlide key={index} className='swiper-slide-customer'>
              <CustomerCard
                key={index}
                style={{
                  opacity: 1,
                }}
              >
                <AuthorDetails className='customer-author flex items-center'>
                  <Image
                    className='avatar'
                    src={item.avatar}
                    alt={item.name}
                    width={120}
                    height={120}
                  />
                  <Author className='author flex-column flex'>
                    <Image
                      src={item.image}
                      alt='customer logo'
                      width={60}
                      height={60}
                    />
                    <b>{item.name}</b>
                    <span>{item.designation}</span>
                  </Author>
                </AuthorDetails>
                <p className='note'>{item.content}</p>
              </CustomerCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </CustomerStyled>
  );
};

export default Customer;
