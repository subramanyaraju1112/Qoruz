import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';
import { Container } from 'react-grid-system';

import PartnersWrapper, {
  PartnersList,
  PartnersListItem,
} from './Customers.style';

const Partners = [
  {
    id: 1,
    image: joinS3('images/paid-collaboration/customers/bare-anatonmy.svg'),
    title: 'BareAnatomy',
    // width: 90,
    // height: 31,
  },
  {
    id: 2,
    image: joinS3('images/paid-collaboration/customers/goodness.svg'),
    title: 'Goodness',
    // width: 78,
    // height: 31,
  },
  {
    id: 3,
    image: joinS3('images/paid-collaboration/customers/chit-chat-chai.svg'),
    title: 'ChitChatChai',
    // width: 82,
    // height: 41,
  },
  {
    id: 5,
    image: joinS3(
      'images/paid-collaboration/customers/wellbeing-nutrition.svg'
    ),
    title: 'WellbeingNutrition',
    // width: 45,
    // height: 41,
  },
  {
    id: 7,
    image: joinS3('images/paid-collaboration/customers/licious.svg'),
    title: 'Licious',
    // width: 78,
    // height: 29,
  },
  {
    id: 8,
    image: joinS3('images/paid-collaboration/customers/ogilvy.svg'),
    title: 'Ogilvy',
    // width: 87,
    // height: 41,
  },
  {
    id: 9,
    image: joinS3('images/paid-collaboration/customers/schbang.svg'),
    title: 'Schbang',
    // width: 172,
    // height: 41,
  },
  {
    id: 7,
    image: joinS3('images/paid-collaboration/customers/dentsu-webchutney.svg'),
    title: 'DentsuWebchutney',
    // width: 102,
    // height: 41,
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
