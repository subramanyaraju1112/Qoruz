/* eslint-disable @next/next/no-img-element */
import Button from '@qoruz/components/Button';
import {
  NextButton,
  PrevButton,
} from '@qoruz/components/EmblaCarousel/EmblaCarouselArrowsDotsButtons';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Container } from 'react-grid-system';
import { Autoplay, FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import TopCreatorsStyled, {
  Line,
  MessageHere,
  Overlay,
  Polygon,
  Title,
  TopCreator,
} from './topCreators.style';

const TopCreatorsList = [
  {
    id: 1,
    category: 'Travel',
    fName: 'Aakash',
    lName: 'Malhotra',
    score: '9.13',
    avatar: joinS3('images/top-creators/aakash-malhotra.jpg'),
    url: 'https://app.qoruz.com/profile/wanderwithsky',
  },
  {
    id: 2,
    category: 'Travel',
    fName: 'Ankita',
    lName: 'Kumar',
    score: '8.01',
    avatar: joinS3('images/top-creators/ankita-kumar.jpg'),
    url: 'https://app.qoruz.com/profile/monkeyinc13',
  },
  {
    id: 3,
    category: 'Travel',
    fName: 'Anunay',
    lName: 'Sood',
    score: '8.97',
    avatar: joinS3('images/top-creators/anunay-sood.jpeg'),
    url: 'https://app.qoruz.com/profile/anunaysood',
  },
  {
    id: 4,
    category: 'Travel',
    fName: 'Isa',
    lName: 'Khan',
    score: '8.53',
    avatar: joinS3('images/top-creators/isa-khan.jpg'),
    url: 'https://app.qoruz.com/profile/khan.isa_1',
  },
  {
    id: 5,
    category: 'Fashion',
    fName: 'Karon',
    lName: 'Dhingra',
    score: '8.72',
    avatar: joinS3('images/top-creators/karron-dhingra.jpg'),
    url: 'https://app.qoruz.com/profile/theformaledit',
  },
  {
    id: 6,
    category: 'Health & Fitness',
    fName: 'Rohit',
    lName: 'Khandelwal',
    score: '8.55',
    avatar: joinS3('images/top-creators/rohit-khandelwal.jpg'),
    url: 'https://app.qoruz.com/profile/rohit_khandelwal77',
  },
  {
    id: 7,
    category: 'Beauty',
    fName: 'Saloni',
    lName: 'Sehra',
    score: '8.13',
    avatar: joinS3('images/top-creators/saloni-sehra.jpg'),
    url: 'https://app.qoruz.com/profile/saloniseh',
  },
  {
    id: 8,
    category: 'Food',
    fName: 'Shivesh',
    lName: 'Bhatia',
    score: '8.51',
    avatar: joinS3('images/top-creators/shivesh-bhatia.jpg'),
    url: 'https://app.qoruz.com/profile/bakewithshivesh',
  },
  {
    id: 9,
    category: 'Fashion',
    fName: 'Suraj',
    lName: 'Pal Singh',
    score: '8.99',
    avatar: joinS3('images/top-creators/suraj-pal-singh.jpg'),
    url: 'https://app.qoruz.com/profile/suraj.palsingh.961',
  },
  {
    id: 10,
    category: 'Dance',
    fName: 'Tejas',
    lName: 'Dhoke',
    score: '7.91',
    avatar: joinS3('images/top-creators/tejas-dhoke.jpg'),
    url: 'https://app.qoruz.com/profile/tejasdhoke',
  },
];

const TopCreators = () => {
  const swiperRef = React.useRef<any>(null);
  useEffect(() => {
    let lastScrollTop = 0;
    const tempRef = swiperRef.current;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener(
      'scroll',
      function () {
        // or window.addEventListener("scroll"....
        const st = window.pageYOffset || document.documentElement.scrollTop;
        const translate = swiperRef.current.swiper.getTranslate();
        // console.log(translate);
        if (st > lastScrollTop) {
          // downscroll code
          swiperRef.current.swiper.translateTo(translate - 100);
        } else if (st < lastScrollTop) {
          // upscroll code
          swiperRef.current.swiper.slidePrev();
          swiperRef.current.swiper.translateTo(translate + 100);
        }
        lastScrollTop = st <= 0 ? 0 : st;
      },
      false
    );
    return () => {
      tempRef?.swiper?.translateTo(0);
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <TopCreatorsStyled className='top-creators wow fadeInUp'>
      <Container className='flex-column flex-center container flex'>
        <Line className='line flex-column flex-center flex'>
          <Title className='flex-column flex'>
            <span>Collaborate with</span>
            <h2>top influencers</h2>
          </Title>
          <Image
            src={joinS3('images/top-creators/line.svg')}
            alt='Line Heading'
            width={248.83}
            height={10}
          />
        </Line>
        <Button
          type='link'
          text='See all influencers'
          href='/find-influencers'
          size='lg'
          variant='primary'
          showIcon={true}
        />
      </Container>
      <Swiper
        slidesPerView='auto'
        spaceBetween={10}
        ref={swiperRef}
        loop={true}
        modules={[Autoplay, Pagination, FreeMode]}
        className='carousel-container'
        freeMode={true}
      >
        {[...TopCreatorsList, ...TopCreatorsList, ...TopCreatorsList].map(
          (item, index: number) => (
            <SwiperSlide key={index} className='top'>
              <Link
                className='embla__slide embla__class-names'
                href={item.url}
                target='_blank'
                key={item.id}
                style={{
                  opacity: 1,
                }}
              >
                <TopCreator className='top-creator'>
                  <MessageHere className='message flex items-end justify-center'>
                    <Image
                      src={joinS3('images/top-creators/message.svg')}
                      alt='Message Icon'
                      width={18}
                      height={18}
                    />
                    <span>Message</span>
                  </MessageHere>
                  <Image
                    src={item.avatar}
                    alt={item.fName}
                    width={200}
                    height={320}
                  />
                  <Polygon className='polygon flex-center flex'>
                    {item.score}
                  </Polygon>
                  <Overlay className='top-creator-overlay flex-column flex items-start justify-end'>
                    <small>{item.category}</small>
                    <span>
                      {item.fName} {item.lName}
                    </span>
                  </Overlay>
                </TopCreator>
              </Link>
            </SwiperSlide>
          )
        )}
        <PrevButton
          onClick={() => {
            const translate = swiperRef.current.swiper.getTranslate();
            swiperRef.current.swiper.translateTo(translate + 210);
          }}
          enabled={true}
        />
        <NextButton
          onClick={() => {
            const translate = swiperRef.current.swiper.getTranslate();
            swiperRef.current.swiper.translateTo(translate - 210);
            swiperRef.current.swiper.slideNext();
          }}
          enabled={true}
        />
      </Swiper>
    </TopCreatorsStyled>
  );
};

export default TopCreators;
