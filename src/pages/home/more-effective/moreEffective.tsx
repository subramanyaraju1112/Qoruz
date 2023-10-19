import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

import MoreEffectiveStyled, {
  MoreEffectiveBlock,
  MoreEffectiveInfo,
  MoreEffectiveIntro,
} from './moreEffective.style';

const MoreEffective = () => {
  return (
    <MoreEffectiveStyled className='more-effective'>
      <Container className='container'>
        <Row>
          <Col lg={6} className='flex items-center'>
            <MoreEffectiveIntro className='more-effective-intro wow fadeInUp'>
              <Image
                className='more-effective-icon'
                src={joinS3('images/more-effective/more-effective.svg')}
                alt='More Effective'
                width={405}
                height={219}
                // fill
              />
              <h2 className='flex-column flex'>
                3x more effective
                <span>than traditional advertising.</span>
              </h2>
            </MoreEffectiveIntro>
          </Col>
          <Col lg={6}>
            <div className='wow fadeInUp effective-div'>
              <MoreEffectiveBlock className='more-effective-block wow fadeInUp'>
                <Image
                  className='more-effective-block-icon'
                  src={joinS3('images/more-effective/better-conversions.svg')}
                  alt='Better Conversions'
                  width={80}
                  height={85}
                />
                <MoreEffectiveInfo className='more-effective-info flex-column flex'>
                  <h3>Better conversions</h3>
                  <small>Unique influencers. Better conversions.</small>
                  <p className='details'>
                    Influencer-led marketing drives more conversions at a lower
                    cost than other advertising channels.
                  </p>
                </MoreEffectiveInfo>
              </MoreEffectiveBlock>
              <MoreEffectiveBlock className='more-effective-block wow fadeInUp'>
                <Image
                  className='more-effective-block-icon'
                  src={joinS3('images/more-effective/higher-engagrment.svg')}
                  alt='Higher Engagrment'
                  width={80}
                  height={85}
                />
                <MoreEffectiveInfo className='more-effective-info>'>
                  <h3>Higher Engagement</h3>
                  <small>Build trust. Brand ambassadors.</small>
                  <p className='details'>
                    Build trust and deeper relationships with your audience with
                    the help of brand ambassadors they connect with.
                  </p>
                </MoreEffectiveInfo>
              </MoreEffectiveBlock>
              <MoreEffectiveBlock className='more-effective-block wow fadeInUp'>
                <Image
                  className='more-effective-block-icon'
                  src={joinS3('images/more-effective/reduced-costs.svg')}
                  alt='Reduced Costs'
                  width={80}
                  height={85}
                />
                <MoreEffectiveInfo className='more-effective-info>'>
                  <h3>Reduced Costs</h3>
                  <small>Save money. Brand visibility.</small>
                  <p className='details'>
                    Save money on expensive ad campaigns while increasing brand
                    visibility with the help of top influencer talent.
                  </p>
                </MoreEffectiveInfo>
              </MoreEffectiveBlock>
            </div>
          </Col>
        </Row>
      </Container>
    </MoreEffectiveStyled>
  );
};

export default MoreEffective;
