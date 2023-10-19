import CreatorOther from '@qoruz/components/cretorsCard/CreatorCard.style';
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
    heading: 'Actors from Tamilnadu',
    url: '/find-influencers/top-tamil-nadu-influencers-bloggers-instagram',
  },
  {
    id: 2,
    catname: 'Entertainment',
    heading: 'Dancers',
    url: '/find-influencers/top-dance-bloggers-influencers-instagram-india',
  },
  {
    id: 3,
    catname: 'Family',
    heading: 'Top parenting influencers',
    url: '/find-influencers/top-mom-bloggers-in-india',
  },
  {
    id: 4,
    catname: 'Music',
    heading: 'Male Musicians',
    url: '/find-influencers/top-music-bloggers-influencers-instagram-india',
  },
  {
    id: 5,
    catname: 'General',
    heading: 'Dancers',
    url: '/find-influencers/top-dance-bloggers-influencers-instagram-india',
  },
  {
    id: 6,
    catname: 'Family',
    heading: 'Mom celebrities',
    url: '/find-influencers/top-mom-fashion-bloggers-india',
  },
  {
    id: 7,
    catname: 'Music',
    heading: 'Female Musicians',
    url: '/find-influencers/top-music-bloggers-influencers-instagram-india',
  },
];

const NewCreators = [
  {
    id: 1,
    creatorimage: joinS3('images/curated-list/other-creator/image1.png'),
  },
  {
    id: 2,
    creatorimage: joinS3('images/curated-list/other-creator/image2.png'),
  },
  {
    id: 3,
    creatorimage: joinS3('images/curated-list/other-creator/image3.png'),
  },
  {
    id: 4,
    creatorimage: joinS3('images/curated-list/other-creator/image4.png'),
  },
  {
    id: 5,
    creatorimage: joinS3('images/curated-list/other-creator/image5.png'),
  },
];

const OtherCreator = ({ category }: any) => {
  return (
    <>
      <OtherCreatorStyled className='wow fadeInUp'>
        <Container className='container'>
          <h2 className='heading wow fadeInUp'>
            Other influencers in our network
          </h2>
          <p className='details wow fadeInUp'>
            After you’ve finalized the list of {category} to work on your
            influencer campaign, the next crucial step is to find the contact
            details of the {category} you’ve finalized. So you can reach out,
            connect and understand commercials and deliverables before
            collaborating with the influencer.
          </p>
          <div className='creaator-row'>
            <Row className='row othercreator'>
              {InfluencerLists.slice(0, 4).map((item, index) => (
                <Col
                  sm={3}
                  md={3}
                  lg={3}
                  key={`creator-card-${index}`}
                  className='single-creator-card'
                >
                  <Link
                    target='_blank'
                    href={item.url}
                    className='cat-card flex-column flex justify-between'
                  >
                    <div className='card-detail wow fadeInUp'>
                      <p className={`cat-name text-${item.catname}`}>
                        {item.catname}
                      </p>
                      <h3>{item.heading}</h3>
                    </div>
                    <div
                      className={`card-bottom bg wow fadeInUp-${item.catname}`}
                    >
                      <CreatorOther className='other-creator'>
                        {NewCreators.map((item, index) => (
                          <span className='creator-image' key={index}>
                            <Image
                              className='icon-button'
                              src={item.creatorimage}
                              alt='Grow Better Image'
                              width={40}
                              height={40}
                            />
                          </span>
                        ))}
                        <span className='more-creator'>15+</span>
                      </CreatorOther>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
            <Row className='row othercreator'>
              {InfluencerLists.slice(4, 8).map((item, index) => (
                <Col
                  sm={3}
                  md={3}
                  lg={3}
                  key={`creator-card-${index}`}
                  className='single-creator-card'
                >
                  <Link
                    target='_self'
                    href={item.url}
                    className='cat-card flex-column flex justify-between'
                  >
                    <div className='card-detail wow fadeInUp'>
                      <p className={`cat-name text-${item.catname}`}>
                        {item.catname}
                      </p>
                      <h3>{item.heading}</h3>
                    </div>
                    <div
                      className={`card-bottom bg wow fadeInUp-${item.catname}`}
                    >
                      <CreatorOther className='other-creator'>
                        {NewCreators.map((item, index) => (
                          <span className='creator-image' key={index}>
                            <Image
                              className='icon-button'
                              src={item.creatorimage}
                              alt='Grow Better Image'
                              width={40}
                              height={40}
                            />
                          </span>
                        ))}
                        <span className='more-creator'>15+</span>
                      </CreatorOther>
                    </div>
                  </Link>
                </Col>
              ))}
              <Col sm={3} md={3} lg={3} className='single-creator-card'>
                <Link
                  target='_blank'
                  href='https://app.qoruz.com/signup'
                  className='cat-card flex-center lastcard flex'
                >
                  <Image
                    className='icon-button'
                    src={joinS3('images/common/more.svg')}
                    alt='Grow Better Image'
                    width={20}
                    height={24}
                  />
                  <p className='more-cat'>See more categories</p>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </OtherCreatorStyled>
    </>
  );
};

export default OtherCreator;
