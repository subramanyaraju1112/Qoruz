import Button from '@qoruz/components/Button';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Container } from 'react-grid-system';

import ForYouStyled, {
  ImageSection,
  Intro,
  LeftSection,
  RightSection,
} from './forYou.style';

const Left = [
  {
    id: 1,
    image: joinS3('images/solution/for-you/left-1.png'),
    className: 'left-one',
  },
  {
    id: 2,
    image: joinS3('images/solution/for-you/left-2.png'),
    className: 'left-two',
  },
  {
    id: 3,
    image: joinS3('images/solution/for-you/left-3.png'),
    className: 'left-three',
  },
  {
    id: 4,
    image: joinS3('images/solution/for-you/left-4.png'),
    className: 'left-four',
  },
  {
    id: 5,
    image: joinS3('images/solution/for-you/left-5.png'),
    className: 'left-five',
  },
];

const Right = [
  {
    id: 1,
    image: joinS3('images/solution/for-you/right-1.png'),
    className: 'right-one',
  },
  {
    id: 2,
    image: joinS3('images/solution/for-you/right-2.png'),
    className: 'right-two',
  },
  {
    id: 3,
    image: joinS3('images/solution/for-you/right-3.png'),
    className: 'right-three',
  },
  {
    id: 4,
    image: joinS3('images/solution/for-you/right-4.png'),
    className: 'right-four',
  },
  {
    id: 5,
    image: joinS3('images/solution/for-you/right-5.png'),
    className: 'right-five',
  },
];

// const useMousePosition = () => {
//   const [mousePosition, setMousePosition] = React.useState({
//     x: null,
//     y: null,
//   });

//   React.useEffect(() => {
//     const updateMousePosition = (ev: any) => {
//       setMousePosition({ x: ev.clientX, y: ev.clientY });
//     };

//     window.addEventListener('mousemove', updateMousePosition);

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//     };
//   }, []);

//   return mousePosition;
// };

const ForYou = () => {
  useEffect(() => {
    const handleMouseMove = ({ x, y }: { x: number; y: number }) => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);
        if (cards) {
          cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
        }
        Array.from(images).forEach((image: HTMLElement) => {
          image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
        });

        Array.from(backgrounds).forEach((background: HTMLElement) => {
          background.style.backgroundPosition = `${
            parseFloat(xValue) * 0.2
          }px ${-yValue * 0.2}px`;
        });
      });
    };

    const cards = document.querySelector<HTMLElement>('.image-section');
    const images = document.querySelectorAll<HTMLElement>('.avatar-collection');
    const backgrounds = document.querySelectorAll<HTMLElement>('.card_bg');
    const range = 20;

    const calcValue = (a: number, b: number): string =>
      ((a / b) * range - range / 2).toFixed(1);

    let timeout: number;

    document.addEventListener('mousemove', handleMouseMove, false);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove, false);
    };
  }, []);
  return (
    <ForYouStyled className='for-you-section'>
      <Container className='container'>
        <Intro className='intro flex-column flex'>
          <h3 className='flex-column wow fadeInUp'>
            <p>Low to No experience running influencer campaigns?</p>
          </h3>
          <h2 className='wow fadeInUp'>Qoruz is for you!</h2>
          <div className='flex-column wow fadeInUp'>
            <Button
              type='link'
              href='https://app.qoruz.com/signup'
              target='_blank'
              variant='primary'
              size='lg'
              showIcon={true}
            >
              Get Started for Free
            </Button>
          </div>
          <p className='intro-text wow fadeInUp'>
            You don’t necessarily need prior experience to run influencer
            campaigns. With Qoruz, get all the tools required to run influencer
            campaigns in a simple, process-oriented way like how a hardcore
            influencer marketer does.
          </p>
        </Intro>
      </Container>
      <ImageSection className='image-section'>
        <div className='card_bg'></div>
        <LeftSection className='left-avatar-collection avatar-collection'>
          {Left.map((left, index) => (
            <figure
              className={`flex-center tilt flex ${left.className}`}
              key={index}
            >
              <Image
                className={`avatar-image avatar-${left.className}`}
                src={left.image}
                alt={left.className}
                width={161}
                height={161}
              />
            </figure>
          ))}
        </LeftSection>
        <RightSection className='right-avatar-collection avatar-collection'>
          {Right.map((right, index) => (
            <figure
              className={`flex-center tilt flex ${right.className}`}
              key={index}
            >
              <Image
                className={`avatar-image avatar-${right.className}`}
                src={right.image}
                alt={right.className}
                width={161}
                height={161}
              />
            </figure>
          ))}
        </RightSection>
      </ImageSection>
    </ForYouStyled>
  );
};

export default ForYou;
