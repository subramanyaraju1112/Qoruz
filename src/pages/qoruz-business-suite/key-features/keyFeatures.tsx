import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';
import { Container } from 'react-grid-system';

import KeyFeaturesStyled, {
  Figure,
  Intro,
  KeyFeaturesBlock,
  KeyFeaturesSingle,
} from './keyFeatures.style';

const Data = [
  {
    id: 1,
    icon: joinS3('images/powerful-tools/creator-search.svg'),
    title: 'Influencer Search',
    info: 'Search 3 lac+ unique influencers.',
    desc: 'Influencer Search helps you find and shortlist relevant influencers according to your niche. Shortlist influencers based on cost, location, follower range, engagement rate to audience demographics and more.',
    image: joinS3('images/solution/creator-search.png'),
  },
  {
    id: 2,
    icon: joinS3('images/powerful-tools/creator-profiles.svg'),
    title: 'Influencer Profile',
    info: 'Validate your Influencers.',
    desc: 'Influencer Profile allows you to validate influencers social following, past brand associations, fake followers, and audience demographics like age group and city. On top of it, you can see Influencers estimated costs and contact details to directly connect and collaborate.',
    image: joinS3('images/solution/creator-profile.png'),
  },
  {
    id: 3,
    icon: joinS3('images/powerful-tools/creator-outreach.svg'),
    title: 'Influencer Outreach',
    info: 'Contact Influencer at a scale',
    desc: 'You might not have the bandwidth to connect individually with all Influencers. Influencer Outreach lets you contact Influencers at a scale. Send campaign briefs to multiple Influencers all at once.',
    image: joinS3('images/solution/creator-outreach.png'),
  },
  {
    id: 4,
    icon: joinS3('images/powerful-tools/campaign-reporting.svg'),
    title: 'Campaign Reporting',
    info: 'Generate reports instantly',
    desc: 'Taking a step ahead in saving you from the trouble of making multiple excels while preparing reports. Now generate reports instantly with the campaign reporting tool. Dashboard helps to measure campaign effectiveness, we have one for your influencer campaigns.',
    image: joinS3('images/solution/campaign-reporting.png'),
  },
];

const KeyFeatures = () => {
  return (
    <KeyFeaturesStyled id='our-feature' className='key-features'>
      <Container className='flex-column container flex'>
        <Intro className='intro flex-column flex-center flex text-center'>
          <h2>Key Features</h2>
          <p className='intro-text'>
            You are all covered with Qoruz, from finding influencers, and
            collaborating to measuring the campaign ROI. We have every tool
            required to run a successful influencer campaign.
          </p>
        </Intro>
        <KeyFeaturesBlock className='flex flex-wrap justify-center'>
          {Data.map((item, index) => (
            <KeyFeaturesSingle
              className='key-feature-block flex-column flex'
              key={index}
            >
              <Image
                className='icon'
                src={item.icon}
                alt={item.title}
                width={77}
                height={84.45}
              />
              <h3>{item.title}</h3>
              <small>{item.info}</small>
              <p className='lead'>{item.desc}</p>
              <Figure className='figure'>
                <Image src={item.image} alt={item.title} fill />
              </Figure>
            </KeyFeaturesSingle>
          ))}
        </KeyFeaturesBlock>
      </Container>
    </KeyFeaturesStyled>
  );
};

export default KeyFeatures;
