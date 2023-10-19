import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import BrandCollabration from 'public/images/svg/brandCollabration';
import ContentSegments from 'public/images/svg/contentSegments';
import PlatformStats from 'public/images/svg/platformStats';
import Summary from 'public/images/svg/summary';
import React, { useState } from 'react';

import AsideStyled, {
  AsideList,
  AsideListItem,
  AsideNavBlock,
} from './Aside.style';

const summaryData = [
  {
    title: 'Platform stats',
    icon: <PlatformStats />,
  },
  {
    title: 'Brand collabrations',
    icon: <BrandCollabration />,
  },
  {
    title: 'Content segments',
    icon: <ContentSegments />,
  },
];

const instaData = [
  {
    title: 'Engagement',
    icon: <PlatformStats />,
  },
  {
    title: 'Audience',
    icon: <BrandCollabration />,
  },
  {
    title: 'Growth',
    icon: <ContentSegments />,
  },
  {
    title: 'Content',
    icon: <PlatformStats />,
  },
  {
    title: 'Brands',
    icon: <BrandCollabration />,
  },
  {
    title: '@shirleysetia',
    icon: <ContentSegments />,
  },
];

const Aside = () => {
  const [open, setOpen] = useState(1);
  const handleOpen = (toOpen: any) => {
    toOpen == open ? setOpen(0) : setOpen(toOpen);
  };

  return (
    <AsideStyled id='aside' className='aside flex-column wow fadeInUp flex'>
      <AsideNavBlock
        className='aside-nav-block open wow fadeInUp'
        onClick={() => handleOpen(1)}
      >
        <h5 className='flex items-center'>
          <Summary />
          <span>Summary</span>
        </h5>
        {open === 1 && (
          <AsideList className='aside-list wow fadeInUp'>
            {summaryData.map((item, index) => (
              <AsideListItem
                className='aside-list-item wow fadeInUp flex items-center'
                key={`faq-item-${index}`}
              >
                {item.icon}
                <span>{item.title}</span>
              </AsideListItem>
            ))}
          </AsideList>
        )}
      </AsideNavBlock>

      <AsideNavBlock
        className='aside-nav-block wow fadeInUp'
        onClick={() => handleOpen(2)}
      >
        <h5 className='flex items-center'>
          <Image
            src={joinS3('images/profile/profile-insta.svg')}
            alt='instagram'
            width={20}
            height={20}
          />
          <span>shirleysetia</span>
        </h5>
        {open === 2 && (
          <AsideList className='aside-list wow fadeInUp'>
            {instaData.map((item, index) => (
              <AsideListItem
                className='aside-list-item wow fadeInUp flex items-center'
                key={`faq-item-${index}`}
              >
                {item.icon}
                <span>{item.title}</span>
              </AsideListItem>
            ))}
          </AsideList>
        )}
      </AsideNavBlock>

      <AsideNavBlock
        className='aside-nav-block wow fadeInUp'
        onClick={() => handleOpen(3)}
      >
        <h5 className='flex items-center'>
          <Image
            src={joinS3('images/profile/profile-twitter.svg')}
            alt='twitter'
            width={20}
            height={20}
          />
          <span>shirleys</span>
        </h5>
        {open === 3 && (
          <AsideList className='aside-list wow fadeInUp'>
            {instaData.map((item, index) => (
              <AsideListItem
                className='aside-list-item wow fadeInUp flex items-center'
                key={`faq-item-${index}`}
              >
                {item.icon}
                <span>{item.title}</span>
              </AsideListItem>
            ))}
          </AsideList>
        )}
      </AsideNavBlock>
      <AsideNavBlock
        className='aside-nav-block wow fadeInUp'
        onClick={() => handleOpen(4)}
      >
        <h5 className='flex items-center'>
          <Image
            src={joinS3('images/profile/profile-fb.svg')}
            alt='facebok'
            width={20}
            height={20}
          />
          <span>setia_everyone</span>
        </h5>
        {open === 4 && (
          <AsideList className='aside-list wow fadeInUp'>
            {instaData.map((item, index) => (
              <AsideListItem
                className='aside-list-item wow fadeInUp flex items-center'
                key={`faq-item-${index}`}
              >
                {item.icon}
                <span>{item.title}</span>
              </AsideListItem>
            ))}
          </AsideList>
        )}
      </AsideNavBlock>
      <AsideNavBlock
        className='aside-nav-block wow fadeInUp'
        onClick={() => handleOpen(5)}
      >
        <h5 className='flex items-center'>
          <Image
            src={joinS3('images/profile/profile-youtube.svg')}
            alt='youtube'
            width={20}
            height={20}
          />
          <span>watchshirley</span>
        </h5>
        {open === 5 && (
          <AsideList className='aside-list wow fadeInUp'>
            {instaData.map((item, index) => (
              <AsideListItem
                className='aside-list-item wow fadeInUp flex items-center'
                key={`faq-item-${index}`}
              >
                {item.icon}
                <span>{item.title}</span>
              </AsideListItem>
            ))}
          </AsideList>
        )}
      </AsideNavBlock>
    </AsideStyled>
  );
};

export default Aside;
