import Button from '@qoruz/components/Button';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Container } from 'react-grid-system';
const CampaignBrief = dynamic(
  () => import('../../components/campaign-brief/CampaignBrief')
);
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';

import HeaderStyled, {
  NavList,
  NavListItem,
  Options,
  ToggleMenu,
} from './header.style';

const options = [
  { link: '/qoruz-business-suite', label: 'Qoruz Business Suite' },
  { link: '/paid-collaboration', label: 'Qoruz Paid Collabs' },
  { link: '/coming-soon', label: 'Qoruz Perks' },
];

const Header = ({ pinned, height }: any) => {
  const [openForm, setOpenForm] = useState(false);

  const popupCloseHandler = (e: any) => {
    setOpenForm(e);
    document.body.classList.remove('stop-scroll-body');
  };

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div
      ref={(el) => {
        el?.clientHeight;
        height(el?.scrollHeight);
      }}
      className={`new-body header flex items-center ${
        pinned !== true ? 'pinned' : ''
      } `}
    >
      <HeaderStyled>
        <Container className='container flex items-center'>
          <div className='wow fadeInUp'>
            <Link href='/' className='brand'>
              <Image
                className='logo'
                src={joinS3('images/common/logo.png')}
                alt='Logo'
                width={118.83}
                height={40.98}
              />
            </Link>
          </div>
          <ToggleMenu
            className='toggle-menu'
            onClick={() => setNavOpen(!navOpen)}
          >
            <Image
              className='menu-bar'
              src={joinS3('images/common/toggle-menu.svg')}
              width={19}
              height={18}
              alt='Logo'
            />
          </ToggleMenu>
          <NavList className={`nav-list items-center ${navOpen ? 'open' : ''}`}>
            <NavListItem className='nav-list-item wow fadeInUp'>
              <div className='flex items-center justify-between'>
                <Link target='_blank' href='https://creators.qoruz.com'>
                  {' '}
                  For Influencers
                </Link>
                <ToggleMenu
                  className='toggle-menu'
                  onClick={() => setNavOpen(!navOpen)}
                >
                  <Image
                    className='menu-bar'
                    src={joinS3('images/common/toggle-close-menu.svg')}
                    width={20}
                    height={20}
                    alt='Logo'
                  />
                </ToggleMenu>
              </div>
            </NavListItem>
            <NavListItem className='wow fadeInUp nav-list-item menu-item'>
              For Brands
              <ul className='sub-menu'>
                {options.map((Options: any, index: any) => (
                  <li key={index} className='list-item'>
                    <Link href={Options.link} target='_self'>
                      {Options.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavListItem>
            <NavListItem className='nav-list-item mobile wow fadeInUp'>
              <Button
                type='link'
                target='_blank'
                href='https://app.qoruz.com/login'
                variant='simple'
              >
                Sign in
              </Button>

              <Button
                text='Sign up'
                href='https://app.qoruz.com/signup'
                showIcon={true}
                size='md'
                type='link'
                variant='outline'
              />
            </NavListItem>
          </NavList>
          <Options className='options desktop wow fadeInUp flex items-center justify-end'>
            <Button
              type='link'
              target='_blank'
              href='https://app.qoruz.com/login'
              variant='simple'
            >
              Sign in
            </Button>
            <Button
              text='Sign up'
              href='https://app.qoruz.com/signup'
              showIcon={true}
              size='md'
              type='link'
              variant='outline'
            />
            <Button
              type='button'
              variant='primary'
              showIcon={true}
              size='md'
              onClick={() => {
                setOpenForm(true);
              }}
            >
              <span>Post a campaign brief</span>
            </Button>
          </Options>
        </Container>
      </HeaderStyled>
      {openForm ? (
        <CampaignBrief show={openForm} onClose={popupCloseHandler} />
      ) : null}
    </div>
  );
};

export default Header;
