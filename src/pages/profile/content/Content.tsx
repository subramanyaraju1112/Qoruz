import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import ContentIcon from 'public/images/svg/contentSegments';
import React from 'react';

import ContentStyled, {
  ActionList,
  ActionListItem,
  ContentBlock,
  ContentHastags,
  ContentHeader,
  ContentInfo,
  ContentList,
  ContentListItem,
  Figure,
  HastagList,
  HastagListItem,
  IconCopy,
  TabList,
  TabListItem,
} from './Content.style';

const HasTags = [
  {
    id: 1,
    name: '#luvranjan',
  },
  {
    id: 2,
    name: '#bhushankumar',
  },
  {
    id: 3,
    name: '#malang',
  },
  {
    id: 4,
    name: '#drools',
  },
  {
    id: 5,
    name: '#fossilstyle',
  },
  {
    id: 6,
    name: '#feedrealfeedclean',
  },
  {
    id: 7,
    name: '#luvranjan',
  },
  {
    id: 8,
    name: '#bhushankumar',
  },
  {
    id: 9,
    name: '#malang',
  },
  {
    id: 10,
    name: '#drools',
  },
  {
    id: 11,
    name: '#fossilstyle',
  },
  {
    id: 12,
    name: '#feedrealfeedclean',
  },
];

const Tabs = [
  {
    id: 1,
    name: 'Top posts',
  },
  {
    id: 2,
    name: 'Recent posts',
  },
  {
    id: 3,
    name: 'Brand posts',
  },
];

const Brands = [
  {
    id: 1,
    name: 'Bookmyshow',
    contribution: '5 contributions',
    score: '8.8',
    picture: joinS3('images/profile/model1.svg'),
    url: 'https://app.qoruz.com/profile/tejasdhoke',
  },
  {
    id: 2,
    name: 'Bookmyshow',
    contribution: '5 contributions',
    score: '8.8',
    picture: joinS3('images/profile/model2.svg'),
    url: 'https://app.qoruz.com/profile/tejasdhoke',
  },
  {
    id: 3,
    name: 'Bookmyshow',
    contribution: '5 contributions',
    score: '8.8',
    picture: joinS3('images/profile/model3.svg'),
    url: 'https://app.qoruz.com/profile/tejasdhoke',
  },
  {
    id: 4,
    name: 'Bookmyshow',
    contribution: '5 contributions',
    score: '8.8',
    picture: joinS3('images/profile/model4.svg'),
    url: 'https://app.qoruz.com/profile/tejasdhoke',
  },
  {
    id: 5,
    name: 'Bookmyshow',
    contribution: '5 contributions',
    score: '8.8',
    picture: joinS3('images/profile/model5.svg'),
    url: 'https://app.qoruz.com/profile/tejasdhoke',
  },
  {
    id: 6,
    name: 'Bookmyshow',
    contribution: '5 contributions',
    score: '8.8',
    picture: joinS3('images/profile/model6.svg'),
    url: 'https://app.qoruz.com/profile/tejasdhoke',
  },
  {
    id: 7,
    name: 'Bookmyshow',
    contribution: '5 contributions',
    score: '8.8',
    picture: joinS3('images/profile/model7.svg'),
    url: 'https://app.qoruz.com/profile/tejasdhoke',
  },
  {
    id: 8,
    name: 'Bookmyshow',
    contribution: '5 contributions',
    score: '8.8',
    picture: joinS3('images/profile/model8.svg'),
    url: 'https://app.qoruz.com/profile/tejasdhoke',
  },
];

const Content = () => {
  return (
    <ContentBlock
      className='content-block flex-column flex'
      id='content'
      style={{ scrollMarginTop: '20px' }}
    >
      {/* <ContentDetailsHide className='wow fadeInUp'>
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
      </ContentDetailsHide> */}
      <ContentStyled className='content flex-column wow fadeInUp flex'>
        <ContentHeader className='content-header wow fadeInUp flex items-center justify-between'>
          <h4 className='flex items-center'>
            <ContentIcon />
            Content Break Down
          </h4>
          <TabList className='tab-list flex items-center'>
            {Tabs.map((tab, index) => (
              <TabListItem className='tab-list-item' key={`tab-list-${index}`}>
                <span>{tab.name}</span>
              </TabListItem>
            ))}
          </TabList>
        </ContentHeader>
        <ContentList className='content-list flex flex-wrap'>
          {Brands.map((Brand, index) => (
            <ContentListItem
              className='content-list-item wow fadeInUp'
              key={`content-${index}`}
            >
              <Link
                target='_blank'
                href={`${Brand.url}`}
                className='flex-column flex'
              >
                <Figure className='figure'>
                  <Image
                    src={Brand.picture}
                    alt='image'
                    width={136}
                    height={136}
                  />
                  <IconCopy className='copy-icon'>
                    <Image
                      src={joinS3('images/profile/copy.svg')}
                      alt='CopyIcon'
                      width={16}
                      height={16}
                    />
                  </IconCopy>
                </Figure>
                <ContentInfo className='content-info flex-column flex'>
                  <ActionList className='action-list flex flex-wrap items-center'>
                    <ActionListItem className='action-list-item flex items-center'>
                      <Image
                        src={joinS3('images/profile/like.svg')}
                        alt='like'
                        width={12}
                        height={12}
                      />
                      <span>4.2m</span>
                    </ActionListItem>
                    <ActionListItem className='action-list-item flex items-center'>
                      <Image
                        src={joinS3('images/profile/message.svg')}
                        alt='message'
                        width={12}
                        height={12}
                      />
                      <span>4.2m</span>
                    </ActionListItem>
                  </ActionList>
                </ContentInfo>
              </Link>
            </ContentListItem>
          ))}
        </ContentList>
      </ContentStyled>
      <ContentHastags className='content-hastags flex-column wow fadeInUp flex'>
        <h5>Content hastags</h5>
        <HastagList className='has-tags-list flex flex-wrap items-center'>
          {HasTags.map((hasTag, index) => (
            <HastagListItem
              className='has-tags-list-item wow fadeInUp flex items-center'
              key={`content-${index}`}
            >
              <span>{hasTag.name}</span>
            </HastagListItem>
          ))}
        </HastagList>
      </ContentHastags>
    </ContentBlock>
  );
};

export default Content;
