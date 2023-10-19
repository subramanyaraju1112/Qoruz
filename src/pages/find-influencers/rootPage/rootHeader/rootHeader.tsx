import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Container } from 'react-grid-system';
import HeadRoom from 'react-headroom';

import SecondaryHeader, {
  NavList,
  NavListItem,
  ToggleMenu,
} from './rootHeader.style';

const SecondHeader = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <HeadRoom
        className='head-room head-room-paid-collaboration'
        pinStart={82}
      >
        <SecondaryHeader className='secondary-header'>
          <Container className='container flex items-center justify-between'>
            <ToggleMenu
              className='toggle-menu'
              onClick={() => setNavOpen(!navOpen)}
            >
              <Image
                className='menu-bar'
                src={joinS3('images/common/toggle-menu.svg')}
                alt='Logo'
                width={19}
                height={18}
              />
            </ToggleMenu>
            <div className='breadcrumb hide-mobile'>
              <Link href='/' className='crumb'>
                Home
              </Link>{' '}
              ›{' '}
              <Link href='' className='crumb'>
                Find Influencers
              </Link>
            </div>
            <NavList
              className={`nav-list items-center ${navOpen ? 'open' : ''}`}
            >
              <NavListItem className='nav-list-item'>
                <a
                  href='/find-influencers/top-100-instagram-influencers-india'
                  target='_blank'
                >
                  Top 100
                  <br className='break' /> Instagram influencers
                </a>
              </NavListItem>
              <NavListItem className='nav-list-item'>
                <a
                  href='/find-influencers/top-youtube-influencers-india'
                  target='_blank'
                >
                  Top 100
                  <br className='break' /> Youtube influencers
                </a>
              </NavListItem>
              <NavListItem className='nav-list-item'>
                <a
                  href='/find-influencers/top-100-micro-influencers-india'
                  target='_blank'
                >
                  Top 100
                  <br className='break' /> Micro influencers
                </a>
              </NavListItem>
              <NavListItem className='nav-list-item'>
                <a
                  href='/find-influencers/top-macro-influencers-instagram'
                  target='_blank'
                >
                  Top 100
                  <br className='break' /> Macro influencers
                </a>
              </NavListItem>
            </NavList>
          </Container>
        </SecondaryHeader>
      </HeadRoom>
    </>
  );
};

export default SecondHeader;
