import RateCalculatorCard, {
  CalculatorCard,
} from '@qoruz/pages/tools/rateCalculatorCard/rateCalculatorCard.style';
import React from 'react';

const CardRateCalculator = () => {
  return (
    <RateCalculatorCard className='flex justify-center'>
      <CalculatorCard className='flex justify-between'>
        <h3 className='card-heading'>Follower count</h3>
        <p className='card-content'>
          Everyone can use this method to calculate the engagement rate of any
          account
        </p>
        <p className='calculation-box'>
          <span className='box-inner'>
            <span className='calculation'>
              (((Likes + comments + saves) / followers) / 10) * 100
            </span>
          </span>
        </p>
      </CalculatorCard>
      <CalculatorCard className='flex justify-between'>
        <h3 className='card-heading'>Using impressions</h3>
        <p className='card-content'>
          This method can only be used when you have access to the influencer’s
          account.
        </p>
        <p className='calculation-box'>
          <span className='box-inner'>
            <span className='calculation'>
              (((Likes + comments + saves) / impressions) / 10) * 100
            </span>
          </span>
        </p>
      </CalculatorCard>
    </RateCalculatorCard>
  );
};
export default CardRateCalculator;
