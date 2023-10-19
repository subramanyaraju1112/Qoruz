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
} from './header.style';

const SecondHeader = ({
  path,
  header,
  listName,
}: {
  path?: any;
  header?: any;
  listName: any;
}) => {
  const [navOpen, setNavOpen] = useState(false);

  const formatListName = (sentence: string) => {
    const words = sentence?.split(' ');

    // Check if the sentence has at least five words
    if (words?.length >= 5) {
      // Get the three words starting from index 2
      return words?.slice(2, 4).join(' ');
    }
  };
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
              <Link
                href='/find-influencers/top-100-instagram-influencers-india'
                className='crumb'
              >
                Find influencers
              </Link>{' '}
              ›{' '}
              <span className='crumb header-div'>
                {formatListName(listName)}
              </span>{' '}
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
                  <br /> Instagram influencers
                </a>
              </NavListItem>
              <NavListItem className='nav-list-item'>
                <a
                  href='/find-influencers/top-youtube-influencers-india'
                  target='_blank'
                >
                  Top 100
                  <br /> Youtube influencers
                </a>
              </NavListItem>
              <NavListItem className='nav-list-item'>
                <a
                  href='/find-influencers/top-100-micro-influencers-india'
                  target='_blank'
                >
                  Top 100
                  <br /> Micro influencers
                </a>
              </NavListItem>
              <NavListItem className='nav-list-item'>
                <a
                  href='/find-influencers/top-macro-influencers-instagram'
                  target='_blank'
                >
                  Top 100
                  <br /> Macro influencers
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
