import React, { useEffect, useState } from 'react';
import { Container } from 'react-grid-system';

import ProfileHeroStyled, { ProfileHeroIntro } from './hero.style';

const ProfileHero = () => {
  const [mobileActive, setMobileActive] = useState(false);

  useEffect(() => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    const handleScroll = () => {
      const y = window.scrollY;
      parallaxElements.forEach((el: any) => {
        const top = el.offsetTop;
        el.style.transform = `translateY(+${y > top ? y / 3 : 0}px)`;
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
  return (
    <>
      {!mobileActive && (
        <ProfileHeroStyled className='start-exploring'>
          <Container className='first container'>
            <ProfileHeroIntro className='start-exploring-info flex-column wow fadeInUp flex'></ProfileHeroIntro>
          </Container>
        </ProfileHeroStyled>
      )}
    </>
  );
};

export default ProfileHero;
