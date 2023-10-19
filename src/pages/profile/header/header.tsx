import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
// import QoruzPaidLogo from 'public/images/paid-collaboration/qoruz-paid-logo.svg';
import { useState } from 'react';
import { Container } from 'react-grid-system';
import HeadRoom from 'react-headroom';

import SecondaryHeader, {
  NavList,
  NavListItem,
  ToggleMenu,
} from './header.style';

const SecondHeader = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <HeadRoom
        className='head-room head-room-paid-collaboration profile-headroom'
        pinStart={82}
      >
        <SecondaryHeader className='secondary-header'>
          <Container className='wow fadeInUp container flex items-center justify-between'>
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
            <div className='breadcrumb'>
              <Link href='/' className='crumb'>
                Home
              </Link>{' '}
              ›{' '}
              <Link
                href='/find-influencers'
                className='crumb'
              >
                Find Influencers
              </Link>{' '}
              ›{' '}
              <Link
                href='/find-influencers/top-100-instagram-influencers-india'
                style={{ textDecoration: 'none' }}
              >
                <span className='crumb'>Top 100 Instagram Influ...</span>
              </Link>
            </div>
            {/* <Image
                className='qoruz-paid-logo'
                src={QoruzPaidLogo}
                alt='QoruzPaidLogo'
              /> */}
            <NavList
              className={`nav-list items-center ${navOpen ? 'open' : ''}`}
            >
              <NavListItem className='nav-list-item'>
                <Link href='/find-influencers/top-100-instagram-influencers-india'>
                  Top 100
                  <br /> Instagram Influencers
                </Link>
              </NavListItem>
              <NavListItem className='nav-list-item'>
                <Link href='/find-influencers/top-youtube-influencers-india'>
                  Top 100
                  <br /> Youtube Influencers
                </Link>
              </NavListItem>
              <NavListItem className='nav-list-item'>
                <Link href='/find-influencers/top-100-micro-influencers-india'>
                  Top 100
                  <br /> Micro Influencers
                </Link>
              </NavListItem>
              <NavListItem className='nav-list-item'>
                <Link href='/find-influencers/top-macro-influencers-instagram'>
                  Top 100
                  <br /> Macro Influencers
                </Link>
              </NavListItem>
              {/* <NavListItem className='nav-list-item'>
                <a href='#faq'>FAQs</a>
              </NavListItem> */}
            </NavList>
            {/* <Link
              target='_blank'
              href='/post-campaign'
              className='button md theme'
            >
              Post a campaign brief
              <LinkIcon />
            </Link> */}
          </Container>
        </SecondaryHeader>
      </HeadRoom>
    </>
  );
};

export default SecondHeader;
