import CreatorOther from '@qoruz/components/cretorsCard/CreatorCard.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col } from 'react-grid-system';
// import OtherCreatorStyled from './othercreator.style';

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

const CreatorCard = (props: any) => {
  const { list } = props;

  return (
    <>
      {list.slice(0, 4).map((item: any, index: any) => {
        return (
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
              <div className={`card-bottom bg wow fadeInUp-${item.catname}`}>
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
        );
      })}
    </>
  );
};

export default CreatorCard;
