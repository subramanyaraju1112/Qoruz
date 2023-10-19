import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';
import { Container } from 'react-grid-system';

import PartnersWrapper, {
  PartnersList,
  PartnersListItem,
} from './partners.style';

const Partners = [
  {
    id: 1,
    image: joinS3('images/sponsor/snapdeal.svg'),
    title: 'Snapdeal',
  },
  {
    id: 2,
    image: joinS3('images/sponsor/wow.svg'),
    title: 'Wow',
  },
  {
    id: 3,
    image: joinS3('images/sponsor/bajaj.svg'),
    title: 'Bajaj',
  },
  {
    id: 4,
    image: joinS3('images/sponsor/arm.svg'),
    title: 'Arm',
  },
  {
    id: 5,
    image: joinS3('images/sponsor/madison-media.svg'),
    title: 'MadisonMedia',
  },
  {
    id: 6,
    image: joinS3('images/sponsor/amazon-mini.svg'),
    title: 'AmazonMini',
  },
  {
    id: 7,
    image: joinS3('images/sponsor/msl.svg'),
    title: 'Msl',
  },
  {
    id: 7,
    image: joinS3('images/sponsor/itc.svg'),
    title: 'Itc',
  },
];

const PartnersSection = () => {
  return (
    <PartnersWrapper className='partners-section flex-center wow fadeInUp flex'>
      <Container className='container'>
        <PartnersList className='partners-list flex items-center justify-around'>
          {Partners.map((partner, index) => (
            <PartnersListItem
              className='partners-list-item flex-center flex'
              key={index}
            >
              <Image src={partner.image} alt={partner.title} fill />
            </PartnersListItem>
          ))}
        </PartnersList>
      </Container>
    </PartnersWrapper>
  );
};

export default PartnersSection;
