/* eslint-disable react-hooks/rules-of-hooks */
import Button from '@qoruz/components/Button';
import CampaignBrief from '@qoruz/components/campaign-brief/CampaignBrief';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Container } from 'react-grid-system';

import SecondaryHeader, {
  NavList,
  NavListItem,
  ToggleMenu,
} from './secondaryHeader.style';

const secondaryHeader = ({ pinned, height }: any) => {
  const [navOpen, setNavOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const popupCloseHandler = (e: any) => {
    setOpenForm(e);
    document.body.classList.remove('stop-scroll-body');
  };

  return (
    <>
      {openForm ? (
        <CampaignBrief show={openForm} onClose={popupCloseHandler} />
      ) : null}
      <SecondaryHeader
        ref={(el) => {
          el?.clientHeight;
          height(el?.scrollHeight);
        }}
        className={`secondary-header ${pinned ? 'pinned' : ''}`}
      >
        <Container className='wow fadeInUp container flex items-center justify-between'>
          <ToggleMenu
            className='toggle-menu desktop-only'
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
          <Link href='' className='brand paid-collab'>
            <Image
              className='qoruz-paid-logo'
              src={joinS3('images/solution/business-suite.png')}
              alt='QoruzPaidLogo'
              width={197.4}
              height={57}
            />
          </Link>
          <NavList className={`nav-list items-center ${navOpen ? 'open' : ''}`}>
            <NavListItem className='nav-list-item'>
              <a href='#why-business-suite'>Why Business Suite?</a>
            </NavListItem>
            <NavListItem className='nav-list-item'>
              <a href='#our-feature'>Our Feature</a>
            </NavListItem>
            <NavListItem className='nav-list-item'>
              <a href='#testimonials'>Testimonials</a>
            </NavListItem>
            <NavListItem className='nav-list-item'>
              <a href='#pricing'>Pricing</a>
            </NavListItem>
          </NavList>
          {/* <Button
            type='button'
            variant='primary'
            showIcon={true}
            className='post-campaign'
            size='md'
            onClick={() => {
              setOpenForm(true);
            }}
          >
            <span>Post a campaign brief</span>
          </Button> */}
          <Button
            text='Sign up'
            href='https://app.qoruz.com/signup'
            showIcon={true}
            className='post-campaign'
            size='md'
            type='link'
            variant='outline'
            target='_blank'
          />
        </Container>
      </SecondaryHeader>
    </>
  );
};

export default secondaryHeader;
