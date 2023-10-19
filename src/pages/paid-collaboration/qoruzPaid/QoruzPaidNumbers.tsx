import React from 'react';

import NumberInformation from './QoruzPaid.style';

const details = [
  {
    id: 1,
    number: '100k+',
    name: 'Influencers'
  },
  {
    id: 2,
    number: '500+',
    name: 'Brands'
  },
  {
    id: 3,
    number: '2000+',
    name: 'Campaigns'
  },
  {
    id: 4,
    number: '500k+',
    name: 'Collaborations'
  },
];

const QoruzPaidNumber = () => {
  return(
    <NumberInformation className='flex number-information'>
      {details.map((detail, index) => (
        <div className='single-detail' key={index}>
          <h5>{detail.number}</h5>
          <p>{detail.name}</p>
        </div>
      ))};
    </NumberInformation>
  );
};

export default QoruzPaidNumber;