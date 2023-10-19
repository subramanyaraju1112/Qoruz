import CreatorOther from '@qoruz/components/cretorsCard/CreatorCard.style';
import RootPageStyled from '@qoruz/pages/find-influencers/rootPage/rootPage.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

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

const RootPage = ({ cards }: any) => {
  return (
    <RootPageStyled>
      <Container className='creaator-row container'>
        <div className='top-list'>
          <h4 className='heading'>Featured Top Influencer Lists</h4>
        </div>
        <Row className='othercreator'>
          {cards?.slice(150, 154).map((item: any, index: any) => (
            <Col
              sm={6}
              md={6}
              lg={3}
              key={`creator-card-${index}`}
              className='single-creator-card wow fadeInUp'
            >
              <Link
                target='_self'
                href={item?.CuratedLink}
                className='cat-card flex-column flex justify-between'
              >
                <div className='card-detail'>
                  <p className='cat-name text-entertainment'>
                    {item?.CategoryName}
                  </p>
                  <h3>{item?.CuratedName}</h3>
                </div>
                <div
                  className={`card-bottom bg-${item?.CategoryName}`}
                >
                  <CreatorOther className='other-creator'>
                    {NewCreators.map((item, index) => (
                      <span className='creator-image' key={index}>
                        <Image
                          className='icon-button'
                          src={item?.creatorimage}
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
        <div className='all-list'>
          <h4 className='heading'>All Influencer Lists</h4>
        </div>
        <Row className='othercreator'>
          {cards?.map((item: any, index: any) => (
            <Col
              sm={6}
              md={6}
              lg={3}
              key={`creator-card-${index}`}
              className='single-creator-card wow fadeInUp'
            >
              <Link
                target='_blank'
                href={item.CuratedLink}
                className='cat-card flex-column flex justify-between'
              >
                <div className='card-detail'>
                  <p className='cat-name text-entertainment'>
                    {item?.CategoryName}
                  </p>
                  <h3>{item?.CuratedName}</h3>
                </div>
                <div
                  className={`card-bottom bg fadeInUp-${item?.CategoryName}`}
                >
                  <CreatorOther className='other-creator'>
                    {NewCreators.map((item, index) => (
                      <span className='creator-image' key={index}>
                        <Image
                          className='icon-button'
                          src={item?.creatorimage}
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
      </Container>
    </RootPageStyled>
  );
};

export default RootPage;
