import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import BrandCollabrationIcon from 'public/images/svg/brandCollabration';
import React, { useEffect, useState } from 'react';

import BrandCollaborationsStyled, {
  BrandCollaborationsInfo,
  BrandCollabrationList,
  BrandCollabrationListItem,
  Figure,
  TabList,
  TabListItem,
} from './BrandCollaborations.style';

const Tabs = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Ecommerce',
  },
  {
    id: 3,
    name: 'TV channels',
  },
  {
    id: 4,
    name: 'Device',
  },
  {
    id: 5,
    name: 'Automobile',
  },
  {
    id: 5,
    name: 'Airlines',
  },
];

const Brands = [
  {
    id: 1,
    name: 'Bookmyshow',
    contribution: '5 contributions',
    score: '8.8',
    picture: joinS3('images/profile/bms.svg'),
    url: 'https://app.qoruz.com/signup',
  },
  {
    id: 2,
    name: 'MTV India',
    contribution: '7 contributions',
    score: '8.8',
    picture: joinS3('images/profile/mtv.svg'),
    url: 'https://app.qoruz.com/signup',
  },
  {
    id: 3,
    name: 'Vivo',
    contribution: '8 contributions',
    score: '8.8',
    picture: joinS3('images/profile/vivo.svg'),
    url: 'https://app.qoruz.com/signup',
  },
  {
    id: 4,
    name: 'Amazon',
    contribution: '3 contributions',
    score: '8.8',
    picture: joinS3('images/profile/amazon.svg'),
    url: 'https://app.qoruz.com/signup',
  },
  {
    id: 5,
    name: 'Colors',
    contribution: '3 contributions',
    score: '8.8',
    picture: joinS3('images/profile/colors.svg'),
    url: 'https://app.qoruz.com/signup',
  },
  {
    id: 6,
    name: 'Hotstar',
    contribution: '11 contributions',
    score: '8.8',
    picture: joinS3('images/profile/hotstar.svg'),
    url: 'https://app.qoruz.com/signup',
  },
  {
    id: 7,
    name: 'Playstation',
    contribution: '4 contributions',
    score: '8.8',
    picture: joinS3('images/profile/ps.svg'),
    url: 'https://app.qoruz.com/signup',
  },
  {
    id: 8,
    name: 'Sony Entertainment',
    contribution: '5 contributions',
    score: '8.8',
    picture: joinS3('images/profile/sony.svg'),
    url: 'https://app.qoruz.com/signup',
  },
];

const BrandCollaborations = () => {
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
    <BrandCollaborationsStyled
      className='brand-collaboration flex-column wow fadeInUp flex'
      id='branded'
      style={{ scrollMarginTop: '20px' }}
    >
      {/* <ProfileDetailsHide className='wow fadeInUp'>
        <div className='blur-detail flex'>
          <p>Sign up and let the exploration begin</p>
          <ButtonPrimary
            text='Sign up'
            redirectUrl='https://app.qoruz.com/signup'
            invertColors={false}
            withLinkIcon={true}
            size='sm'
            icon='linkIcon'
          />
        </div>
      </ProfileDetailsHide> */}
      <h4 className='flex items-center'>
        <BrandCollabrationIcon />
        Historical Brand Collaborations
      </h4>
      <TabList className='tab-list wow fadeInUp flex items-center'>
        {Tabs.map((tab, index) => (
          <TabListItem className='tab-list-item' key={`tab-list-${index}`}>
            <span>{tab.name}</span>
          </TabListItem>
        ))}
      </TabList>
      <BrandCollabrationList className='brand-collaboration-list wow fadeInUp flex flex-wrap'>
        {Brands.map((Brand, index) => (
          <BrandCollabrationListItem
            className={`brand-collaboration-list-item wow fadeInUp ${
              mobileActive ? 'list-item-mobile' : ''
            }`}
            key={`brand-collaboration-${index}`}
          >
            <Link
              target='_blank'
              href={`${Brand.url}`}
              className='flex items-center'
            >
              <Figure className='figure'>
                <Image src={Brand.picture} alt='image' width={52} height={52} />
              </Figure>
              <BrandCollaborationsInfo className='brand-collaboration-info flex-column flex'>
                <span>{Brand.name}</span>
                <small>{Brand.contribution}</small>
              </BrandCollaborationsInfo>
            </Link>
          </BrandCollabrationListItem>
        ))}
      </BrandCollabrationList>
    </BrandCollaborationsStyled>
  );
};

export default BrandCollaborations;
