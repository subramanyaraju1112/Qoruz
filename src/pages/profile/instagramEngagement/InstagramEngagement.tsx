import ButtonPrimary from '@qoruz/components/link-buttons/buttonPrimary';
import SocialProfileData from '@qoruz/pages/profile/socialProfileData/SocialProfileData';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';

import InstagramEngagementStyled, {
  BlockWrapper,
  ContentDetailsHide,
} from './InstagramEngagement.style';

// const Brands = [
//   {
//     id: 1,
//     label: 'Avg. Views',
//     count: '1.6m',
//   },
//   {
//     id: 2,
//     label: 'Avg. Views',
//     count: '1.6m',
//   },
//   {
//     id: 3,
//     label: 'Avg. Views',
//     count: '1.6m',
//   },
//   {
//     id: 4,
//     label: 'Avg. Views',
//     count: '1.6m',
//   },
//   {
//     id: 5,
//     label: 'Avg. Views',
//     count: '1.6m',
//   },
// ];

const InstagramEngagement = ({ imageName, data, platform }: any) => {
  return (
    <InstagramEngagementStyled className='instagram-engagement flex-column wow fadeInUp flex'>
      {/* <h4 className='flex items-center'>
        <InstagramEngagementIcon />
        Instagram Engagement
      </h4>
      <OptionsList className='options-list flex flex-wrap items-center'>
        {Options.map((option, index) => (
          <OptionsListItem
            className='options-list-item flex-column flex'
            key={`options-${index}`}
          >
            <Icon className='icon'>
              <Image
                src={option.icon}
                alt='Views Icon'
                width={32}
                height={32}
              />
            </Icon>
            <span>{option.label}</span>
            <Group className='flex-column group flex'>
              <h4>{option.count}</h4>
              <small>{option.unit}</small>
            </Group>
          </OptionsListItem>
        ))}
      </OptionsList> */}
      <BlockWrapper className='block-wrapper flex-column flex'>
        {imageName == 'engagement' && (
          <SocialProfileData data={data} platform={platform} />
        )}
        {imageName == 'audience' && (
          <div id='audience' style={{ scrollMarginTop: '20px' }}>
            <ContentDetailsHide className='wow fadeInUp'>
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
            </ContentDetailsHide>
            <Image
              src={joinS3('images/profile/audience_q2kcbc.png')}
              alt='insta-engagement'
              width={564}
              height={492}
              className='fullwidth'
            />
          </div>
        )}
        {imageName == 'group' && (
          <div id='growth' style={{ scrollMarginTop: '20px' }}>
            <ContentDetailsHide className='wow fadeInUp'>
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
            </ContentDetailsHide>
            <Image
              src={joinS3('images/profile/commercial-details/group_u7ndq0.png')}
              alt='insta-engagement'
              width={564}
              height={492}
              className='fullwidth'
            />
          </div>
        )}
      </BlockWrapper>
    </InstagramEngagementStyled>
  );
};

export default InstagramEngagement;
