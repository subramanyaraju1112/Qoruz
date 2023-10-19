import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Link from 'next/link';
import React from 'react';

import PeopleViewedStyled, {
  PeopleViewdList,
  PeopleViewdListItem,
  PeopleViewedInfo,
  Polygon,
} from './PeopleViewed.style';

const People = [
  {
    id: 1,
    name: 'Karon Dhingra',
    userName: '@karon',
    score: '8.72',
    picture: joinS3('images/top-creators/karron-dhingra.jpg'),
    url: 'https://app.qoruz.com/profile/theformaledit',
  },
  {
    id: 2,
    name: 'Suraj Pal Singh',
    userName: '@suraj',
    score: '8.99',
    picture: joinS3('images/top-creators/suraj-pal-singh.jpg'),
    url: 'https://app.qoruz.com/profile/suraj.palsingh.961',
  },
  {
    id: 3,
    name: 'Saloni Sehra',
    userName: '@saloni',
    score: '8.13',
    picture: joinS3('images/top-creators/saloni-sehra.jpg'),
    url: 'https://app.qoruz.com/profile/saloniseh',
  },
  {
    id: 4,
    name: 'Anunay Sood',
    userName: '@anunay',
    score: '8.97',
    picture: joinS3('images/top-creators/anunay-sood.jpeg'),
    url: 'https://app.qoruz.com/profile/anunaysood',
  },
  {
    id: 5,
    name: 'Isa Khan',
    userName: '@isa',
    score: '8.53',
    picture: joinS3('images/top-creators/isa-khan.jpg'),
    url: 'https://app.qoruz.com/profile/khan.isa_1',
  },
  {
    id: 6,
    name: 'Rohit Khandelwal',
    userName: '@rohit',
    score: '8.55',
    picture: joinS3('images/top-creators/rohit-khandelwal.jpg'),
    url: 'https://app.qoruz.com/profile/rohit_khandelwal77',
  },
];

const PeopleViewed = () => {
  return (
    <PeopleViewedStyled className='people-viewed flex-column wow fadeInUp flex'>
      <h4>People also viewed</h4>
      <PeopleViewdList className='people-viewed-list wow fadeInUp flex flex-wrap'>
        {People.map((ppl, index) => (
          <PeopleViewdListItem
            className='people-viewed-list-item wow fadeInUp'
            key={`people-viewed-${index}`}
          >
            <Link
              target='_blank'
              href={`${ppl.url}`}
              style={{ backgroundImage: `url(${ppl.picture})` }}
              className='flex-column flex justify-between'
            >
              <Polygon className='polygon flex-center flex'>8.8</Polygon>
              <PeopleViewedInfo className='people-viewed-info flex-column flex'>
                <span>{ppl.name}</span>
                <small>{ppl.userName}</small>
              </PeopleViewedInfo>
            </Link>
          </PeopleViewdListItem>
        ))}
      </PeopleViewdList>
    </PeopleViewedStyled>
  );
};

export default PeopleViewed;
