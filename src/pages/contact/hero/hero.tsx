import FacebookOutline from '@qoruz/components/svg/outline-facebook';
import InstaOutline from '@qoruz/components/svg/outline-Instagram';
import LinkedinOutline from '@qoruz/components/svg/outline-linkedin';
import TwitterOutline from '@qoruz/components/svg/outline-twitter';
import HeroContainer, {
  Content,
  HeadLine,
  HeroBackground,
  SocialMedia,
  TagLine,
} from '@qoruz/pages/contact/hero/hero.style';
import React, { useEffect, useState } from 'react';

export default function Hero() {
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
      <HeroContainer
        className={`${mobileActive ? 'mobile-active' : 'desktop-active'}`}
      >
        <HeroBackground>
          <Content>
            <HeadLine>
              <p className='headline'>Let’s have a talk</p>
            </HeadLine>
            <TagLine>
              <p className='tagline'>
                We are just a message away. We'd love to hear from you
              </p>
            </TagLine>
            <SocialMedia>
              <a
                href='https://www.instagram.com/qoruz_/'
                rel='noreferrer'
                target='_blank'
                className='social-icon'
              >
                {' '}
                <InstaOutline />
                {/* <Image
                  src={InstagramIcon}
                  alt='instagram'
                  width={24}
                  height={24}
                /> */}
              </a>
              <a
                href='https://twitter.com/Qoruz_'
                rel='noreferrer'
                target='_blank'
                className='social-icon'
              >
                {' '}
                <TwitterOutline />
                {/* <Image
                  src={TwitterIcon}
                  className='twitter'
                  alt='instagram'
                  width={24}
                  height={24}
                /> */}
              </a>
              <a
                href='https://www.facebook.com/Qoruz/'
                rel='noreferrer'
                target='_blank'
                className='social-icon'
              >
                <FacebookOutline />
                {/* <Image
                  src={FacebookIcon}
                  className='facebook'
                  alt='facebook'
                  width={24}
                  height={24}
                /> */}
              </a>
              <a
                href='https://www.linkedin.com/company/qoruz/'
                rel='noreferrer'
                target='_blank'
                className='social-icon'
              >
                {' '}
                <LinkedinOutline />
                {/* <Image
                  src={LinkedInIcon}
                  className='linkedin'
                  alt='linkedin'
                  width={24}
                  height={24}
                /> */}
              </a>
            </SocialMedia>
          </Content>
        </HeroBackground>
      </HeroContainer>
    </>
  );
}
