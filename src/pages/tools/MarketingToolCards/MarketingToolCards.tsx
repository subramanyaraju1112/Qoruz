// import ButtonPrimary from '@qoruz/components/link-buttons/buttonPrimary';
import Button from '@qoruz/components/Button';
import FreeTool, {
  CardBottom,
} from '@qoruz/pages/tools/MarketingToolCards/MarketingToolCards.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-grid-system';

import Card from '../../../components/Card';

const MatketingTool = [
  {
    id: 1,
    image: joinS3('images/marketing-tools/engagement-rate.png'),
    pagetype: 'Influencer Marketing Tools',
    tooltype: 'Engagement Rate Calculator',
    content: 'Measure content success. Likes, comments, shares, and views.',
    buttontext: 'Check Now',
    url: '/tools/instagram-engagement-rate-calculator',
  },
  {
    id: 2,
    image: joinS3('images/marketing-tools/follower-count-checker.png'),
    pagetype: 'Influencer Marketing Tools',
    tooltype: 'Follower Count Checker',
    content: 'Check follower count instantly with our easy-to-use tool.',
    buttontext: 'Check Now',
    url: '/tools/influencer-follower-count-checker',
  },
  {
    id: 3,
    image: joinS3('images/marketing-tools/influencer-cost-checker.png'),
    pagetype: 'Influencer Marketing Tools',
    tooltype: 'Influencer Cost Checker',
    content: 'Calculate influencer cost. Get accurate pricing for deliverables',
    buttontext: 'Check Now',
    url: '/tools/influencer-cost-checker',
  },
  {
    id: 4,
    image: joinS3('images/marketing-tools/profile-analysis-tool.png'),
    pagetype: 'Influencer Marketing Tools',
    tooltype: 'Profile Analysis Tool',
    content:
      'Analyze influencer profiles. Get insights for effective partnerships.',
    buttontext: 'Check Now',
    url: '/tools/instagram-profile-analyzer',
  },
  {
    id: 5,
    image: joinS3('images/marketing-tools/fake-follower-checker.png'),
    pagetype: 'Influencer Marketing Tools',
    tooltype: 'Fake Follower Checker',
    content: 'Ensure authentic engagement and detect fake followers.',
    buttontext: 'Check Now',
    url: '/tools/instagram-fake-follower-checker',
  },
];

const MarketingToolCard = () => {
  return (
    <FreeTool>
      <Row className='card-gap'>
        <Col md={6} lg={6} xl={4} className='card-col'>
          <Card className='card flex-column flex'>
            <span className='plugin-tip'>Chrome Extension</span>
            <figure className='flex-center toolimage flex'>
              <Image
                src={joinS3('images/marketing-tools/chrome-extension.png')}
                alt='chrome-extension'
                width={375}
                height={189}
              />
            </figure>
            <small className='toolpage'>INFLUENCER Marketing TOOLS</small>
            <h5 className='toolname'>Qoruz Chrome Extension</h5>
            <p className='details'>
              Analyze influencers instantly with Qoruz Chrome extension.
            </p>
            <CardBottom className='card-bottom flex items-end justify-between'>
              <Button
                type='link'
                href='https://chrome.google.com/webstore/detail/qoruz-influencer-discover/aeloopdamjgdlilelganlcdoeilnpagf'
                target='_blank'
                variant='secondary'
                size='md'
                showShadow
              >
                Get the extension
              </Button>
            </CardBottom>
          </Card>
        </Col>
        {MatketingTool.map((Tool: any, index: any) => (
          <Col md={6} lg={6} xl={4} className='card-col' key={index}>
            <Card className='card flex-column flex'>
              <figure className='flex-center toolimage flex'>
                <Image
                  src={Tool.image}
                  alt='chrome-extension'
                  width={375}
                  height={189}
                />
              </figure>
              <small className='toolpage'>{Tool.pagetype}</small>
              <h5 className='toolname'>{Tool.tooltype}</h5>
              <p className='details'>{Tool.content}</p>
              <CardBottom className='card-bottom flex items-end justify-between'>
                <Button
                  type='link'
                  href={Tool.url}
                  variant='secondary'
                  size='md'
                  showShadow
                >
                  {Tool.buttontext}
                </Button>
              </CardBottom>
            </Card>
          </Col>
        ))}
      </Row>
    </FreeTool>
  );
};

export default MarketingToolCard;
