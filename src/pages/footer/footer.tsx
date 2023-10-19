import Button from '@qoruz/components/Button';
import CampaignBrief from '@qoruz/components/campaign-brief/CampaignBrief';
import Facebook from '@qoruz/components/svg/facebook';
import Instagram from '@qoruz/components/svg/instagram';
import LinkedIn from '@qoruz/components/svg/linkedin';
import Twitter from '@qoruz/components/svg/twitter';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Container } from 'react-grid-system';

import FooterStyled, {
  BottomSticky,
  CopyRights,
  FooterInfo,
  FooterInner,
  FooterList,
  FooterListItem,
  FooterNav,
  FooterNavigation,
  SocialList,
  SocialListItem,
} from './footer.style';

const DATA = [
  {
    id: 2,
    title: 'Company',
    list: [
      {
        id: 1,
        title: 'About us',
        link: '/coming-soon',
        target: '_self',
      },
      {
        id: 3,
        title: 'Careers',
        link: '/coming-soon',
        target: '_self',
      },
      {
        id: 4,
        title: 'Contact us',
        link: '/contact',
        target: '_self',
      },
      {
        id: 5,
        title: 'Terms of Use',
        list: [
          {
            id: 5,
            title: 'Brand',
            link: '/coming-soon',
            target: '_self',
          },
          {
            id: 6,
            title: 'Influencers',
            link: '/coming-soon',
            target: '_self',
          },
        ],
      },
      {
        id: 7,
        title: 'Privacy Policy',
        link: '/coming-soon',
        target: '_self',
      },
    ],
  },
  {
    id: 3,
    title: 'Resources',
    list: [
      {
        id: 1,
        title: 'Case Studies',
        link: '/coming-soon',
        target: '_self',
      },
      {
        id: 2,
        title: 'Reports',
        link: '/coming-soon',
        target: '_self',
      },
      {
        id: 3,
        title: 'Blog',
        link: 'http://www.qoruz.com/blog',
        target: '_blank',
      },
      {
        id: 4,
        title: 'Playbooks',
        link: '/coming-soon',
        target: '_self',
      },
      {
        id: 5,
        title: 'Compare',
        link: '/coming-soon',
        target: '_self',
      },
      {
        id: 6,
        title: 'Find influencers',
        link: '/find-influencers',
        target: '_self',
      },
      {
        id: 7,
        title: 'Tools',
        link: '/tools',
        target: '_self',
      },
      {
        id: 8,
        title: 'Templates',
        link: '/coming-soon',
        target: '_self',
      },
    ],
  },
];

const Footer = ({ hideSticky }: any) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [influencerOpen, setInfluencerOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const popupCloseHandler = (e: any) => {
    setOpenForm(e);
    document.body.classList.remove('stop-scroll-body');
  };

  useEffect(() => {
    if (hideSticky) {
      const element = document.getElementsByClassName('bottom-sticky');
      element[0].classList.add('hide');
      return;
    }
    const handleScroll = () => {
      if (window.scrollY > 4500) {
        const element = document.getElementsByClassName('bottom-sticky');
        element[0].classList.add('hide');
      } else {
        const element = document.getElementsByClassName('bottom-sticky');
        element[0].classList.remove('hide');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      {openForm ? (
        <CampaignBrief show={openForm} onClose={popupCloseHandler} />
      ) : null}
      <FooterStyled className='footer footer-sticky '>
        <Container className='container flex flex-wrap'>
          <FooterInfo className='footer-info wow fadeInUp'>
            <Link href='/'>
              <Image
                src={joinS3('images/common/logo.png')}
                width={145}
                height={50}
                alt='Logo'
              />
            </Link>
            <p className='details'>
              Qoruz is an influencer marketing and intelligence platform, that
              enables superior influencer discovery, quick and easy influencer
              outreach.
            </p>
            <SocialList className='social-list flex items-center'>
              <SocialListItem className='social-list-item'>
                <Link href='https://www.facebook.com/Qoruz/' target='_blank'>
                  <Facebook />
                </Link>
              </SocialListItem>
              <SocialListItem className='social-list-item'>
                <Link href='https://www.instagram.com/qoruz_/' target='_blank'>
                  <Instagram />
                </Link>
              </SocialListItem>
              <SocialListItem className='social-list-item'>
                <Link href='https://twitter.com/Qoruz_' target='_blank'>
                  <Twitter />
                </Link>
              </SocialListItem>
              <SocialListItem className='social-list-item'>
                <Link
                  href='https://www.linkedin.com/company/qoruz/'
                  target='_blank'
                >
                  <LinkedIn />
                </Link>
              </SocialListItem>
            </SocialList>
          </FooterInfo>
          <FooterNav className='footer-nav flex flex-wrap'>
            <FooterNavigation className='footer-navigation flex-column flex'>
              <FooterInner className='footer-innner flex-column wow fadeInUp flex'>
                <h5
                  className={`flex items-center ${businessOpen ? 'open' : ''}`}
                  onClick={() => {
                    setBusinessOpen(!businessOpen);
                    setOpen(false);
                    setInfluencerOpen(false);
                    setActive(0);
                  }}
                >
                  For Business
                  <Image
                    src={joinS3('images/common/down-arrow.svg')}
                    width={13}
                    height={8}
                    alt='Arrow'
                  />
                </h5>
                <FooterList
                  className={`footer-list flex-column ${
                    businessOpen ? 'open' : ''
                  }`}
                >
                  <FooterListItem className='footer-list-item'>
                    <Link href='/qoruz-business-suite'>
                      Qoruz Business Suite
                    </Link>
                  </FooterListItem>
                  <FooterListItem className='footer-list-item'>
                    <Link href='/paid-collaboration'>Qoruz Paid Collabs</Link>
                  </FooterListItem>
                  <FooterListItem className='footer-list-item'>
                    <Link href='/coming-soon'>Qoruz Perks</Link>
                  </FooterListItem>
                  {/* <FooterListItem className='footer-list-item'>
                  <Link target='_blank' href='/'>
                    Qoruz Flex
                  </Link>
                </FooterListItem> */}
                </FooterList>
              </FooterInner>
              <FooterInner className='footer-innner flex-column for-influencers wow fadeInUp flex'>
                <h5
                  className={`flex items-center ${
                    influencerOpen ? 'open' : ''
                  }`}
                  onClick={() => {
                    setInfluencerOpen(!influencerOpen);
                    setBusinessOpen(false);
                    setOpen(false);
                    setActive(0);
                  }}
                >
                  For Influencers
                  <Image
                    src={joinS3('images/common/down-arrow.svg')}
                    width={13}
                    height={8}
                    alt='Arrow'
                  />
                </h5>
                <FooterList
                  className={`footer-list flex-column ${
                    influencerOpen ? 'open' : ''
                  }`}
                >
                  <FooterListItem className='footer-list-item'>
                    {/* <Button
                      type='link'
                      variant='primary'
                      target='_blank'
                      className='mobile'
                      href='https://creators.qoruz.com/'
                    >
                      Create My Profile
                    </Button> */}
                    {/* <Link
                    className='desktop button lg primary primary-button'
                    target='_blank'
                    href='https://creators.qoruz.com/'
                  >
                    Create My Profile
                    <LinkIcon />
                  </Link> */}
                    <Button
                      type='link'
                      variant='primary'
                      target='_blank'
                      href='https://creators.qoruz.com/'
                    >
                      Create My Profile
                    </Button>
                  </FooterListItem>
                </FooterList>
              </FooterInner>
            </FooterNavigation>
            {DATA.map((item, index) => (
              <FooterNavigation
                className='footer-navigation flex-column wow fadeInUp flex'
                key={item.id}
              >
                <h5
                  className={`flex items-center ${
                    open && active === index ? 'open' : ''
                  }`}
                  onClick={() => {
                    if (active === index) {
                      setOpen(!open);
                    } else {
                      setOpen(true);
                      setActive(index);
                    }
                    setBusinessOpen(false);
                    setInfluencerOpen(false);
                  }}
                >
                  {item.title}
                  <Image
                    src={joinS3('images/common/down-arrow.svg')}
                    width={13}
                    height={8}
                    alt='Arrow'
                  />
                </h5>
                <FooterList
                  className={`footer-list flex-column ${
                    open && active === index ? 'open' : ''
                  }`}
                >
                  {item.list.map((listItem) => (
                    <FooterListItem
                      key={listItem.id}
                      className='footer-list-item'
                    >
                      {listItem.link ? (
                        <Link target={listItem.target} href={listItem.link}>
                          {listItem.title}
                        </Link>
                      ) : (
                        <FooterNavigation>
                          <h5
                            className={`terms flex items-center ${
                              termsOpen ? 'open' : ''
                            }`}
                            onClick={() => {
                              setTermsOpen(!termsOpen);
                            }}
                          >
                            {listItem.title}
                          </h5>
                          <FooterList
                            className={`footer-list flex-column ${
                              open && active === index ? 'open' : ''
                            }`}
                          >
                            {listItem?.list?.map((item) => (
                              <FooterListItem
                                key={item.id}
                                className='footer-list-item'
                              >
                                <Link target={listItem.target} href={item.link}>
                                  {item.title}
                                </Link>
                              </FooterListItem>
                            ))}
                          </FooterList>
                        </FooterNavigation>
                      )}
                    </FooterListItem>
                  ))}
                </FooterList>
              </FooterNavigation>
            ))}
          </FooterNav>
          <CopyRights className='copy-rights wow fadeInUp flex items-center'>
            <span>{`Datrux Systems Pvt. Ltd. © ${new Date().getFullYear()}`}</span>
          </CopyRights>
          <BottomSticky className='bottom-sticky'>
            <Button
              type='link'
              href='https://app.qoruz.com/signup'
              text='Start now'
              showIcon
              variant='primary'
            />
            <Button
              type='button'
              showIcon={true}
              variant='primary'
              size='md'
              onClick={() => {
                setOpenForm(true);
              }}
            >
              <span>Post a campaign brief</span>
            </Button>
          </BottomSticky>
        </Container>
      </FooterStyled>
    </>
  );
};

export default Footer;
