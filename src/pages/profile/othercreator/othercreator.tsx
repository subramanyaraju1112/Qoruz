import CreatorCard from '@qoruz/components/cretorsCard/CreatorCard';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

import OtherCreatorStyled from './othercreator.style';

const InfluencerLists = [
  {
    id: 1,
    catname: 'Entertainment',
    heading: 'Female Actors from Tamilnadu',
    url: 'https://qoruz.com/category/entertainment',
  },
  {
    id: 2,
    catname: 'Entertainment',
    heading: 'Dancers',
    url: 'https://qoruz.com/category/entertainment',
  },
  {
    id: 2,
    catname: 'Family',
    heading: 'Top parenting influencers',
    url: 'https://qoruz.com/category/family',
  },
  {
    id: 2,
    catname: 'Music',
    heading: 'Male Musicians',
    url: 'https://qoruz.com/category/music',
  },
  {
    id: 2,
    catname: 'General',
    heading: 'Dancers',
    url: 'https://qoruz.com/category/general',
  },
  {
    id: 2,
    catname: 'Family',
    heading: 'Mom celebrities',
    url: 'https://qoruz.com/category/family',
  },
  {
    id: 2,
    catname: 'Music',
    heading: 'Female Musicians',
    url: 'https://qoruz.com/category/music',
  },
];

const OtherCreator = () => {
  return (
    <>
      <OtherCreatorStyled className='wow fadeInUp'>
        <Container className='container'>
          <h2 className='heading wow fadeInUp'>
            Other influencers in our network
          </h2>
          <p className='detailswow fadeInUp'>
            After you’ve finalized the list of Indian food influencers and
            bloggers to work on your influencer campaign, the next crucial step
            is to find the contact details of the Indian food influencers you’ve
            finalized. So you can reach out, connect and understand commercials
            and deliverables before collaborating with the influencer.
          </p>
          <Row className='row othercreator'>
            <CreatorCard list={InfluencerLists} />
            <Col sm={12} lg={3}>
              <Link
                target='_blank'
                href='/post-campaign'
                className='cat-card flex-center lastcard flex'
              >
                <Image
                  className='icon-button'
                  src={joinS3('images/common/more_dhdys3.svg')}
                  alt='Grow Better Image'
                  width={20}
                  height={24}
                />
                <p className='more-cat'>See more categories</p>
              </Link>
            </Col>
          </Row>
        </Container>
      </OtherCreatorStyled>
    </>
  );
};

export default OtherCreator;
