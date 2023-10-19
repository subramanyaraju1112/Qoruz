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
} from './header.style';

const Headermain = ({ pinned, height }: any) => {
  const [navOpen, setNavOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const popupCloseHandler = (e: any) => {
    setOpenForm(e);
    document.body.classList.remove('stop-scroll-body');
  };

  return (
    <div
      className={`new-body secondary-header ${pinned ? 'pinned' : ''}`}
      ref={(el) => {
        el?.clientHeight;
        height(el?.scrollHeight);
      }}
    >
      {openForm ? (
        <CampaignBrief show={openForm} onClose={popupCloseHandler} />
      ) : null}
      <SecondaryHeader
        className={`secondary-header ${pinned ? 'pinned' : ''}`}
        ref={(el) => {
          el?.clientHeight;
          height(el?.scrollHeight);
        }}
      >
        <Container className='container flex items-center justify-between'>
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
              src={joinS3('images/paid-collaboration/paid-collab.png')}
              alt='QoruzPaidLogo'
              width={207}
              height={57}
            />
          </Link>
          <NavList className={`nav-list items-center ${navOpen ? 'open' : ''}`}>
            <NavListItem className='nav-list-item'>
              <a href='#howColabWorks'>How It Works?</a>
            </NavListItem>
            <NavListItem className='nav-list-item'>
              <a href='#campaignTypes'>Use Cases</a>
            </NavListItem>
            <NavListItem className='nav-list-item'>
              <a href='#keyFeatures'>Key Features</a>
            </NavListItem>
            <NavListItem className='nav-list-item'>
              <a href='#clientStories'>Customer</a>
            </NavListItem>
            <NavListItem className='nav-list-item'>
              <a href='#faq'>FAQs</a>
            </NavListItem>
          </NavList>
          <Button
            type='button'
            showIcon={true}
            className='button primary sm primary-button post-campaign'
            size='md'
            onClick={() => {
              setOpenForm(true);
            }}
          >
            <span>Post a campaign brief</span>
          </Button>
        </Container>
      </SecondaryHeader>
      {/* </HeadRoom> */}
    </div>
  );
};

export default Headermain;
