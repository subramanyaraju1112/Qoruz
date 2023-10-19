import EngagementRate, {
  CalculatorContentSection,
} from '@qoruz/pages/tools/instagramCalculatorContent/instagramCalculatorContent.style';
import CardRateCalculator from '@qoruz/pages/tools/rateCalculatorCard/rateCalculatorCard';
import React from 'react';
import { Container } from 'react-grid-system';

const InstagramCalculatorContent = () => {
  return (
    <CalculatorContentSection>
      <Container className='container'>
        <EngagementRate>
          <h2 className='tool-sub-heading border-title'>
            How To Calculate Engagement Rate?
          </h2>
          <p className='cards-title mt-12'>
            There are two ways to calculate the Instagram engagement rate.
          </p>

          <CardRateCalculator />

          <p className='tools-content'>
            Instagram engagement rate is a metric that measures the level of
            engagement of a specific Instagram account. It is calculated by
            dividing an account's total number of likes and comments by the
            number of followers. A higher engagement rate indicates that many of
            the account's followers are interacting with the content.
          </p>
        </EngagementRate>
        <EngagementRate>
          <h2 className='tool-sub-heading border-title'>
            Why is engagement rate important in instagram influencer marketing?
          </h2>
          <p className='tools-content'>
            Tracking engagement rates can be important because it provides
            insight into the content's effectiveness and ability to connect with
            the audience. A high engagement rate indicates that the followers
            relate to the content, leading to more visibility, followers, and,
            ultimately, more conversions for the brands which have collaborated
            with them. On the other hand, a low engagement rate signals that the
            influencer could be doing better. An Instagram engagement rate
            calculator easily calculates the engagement rate of any Instagram
            handle in a few seconds.
          </p>
          <p className='tools-content'>
            Besides, getting an idea about influencers' performance among their
            followers, engagement rate also helps to flag fake influencers and
            calculate the approximate ROI of the collaboration.
          </p>
        </EngagementRate>
        <EngagementRate>
          <h2 className='tool-sub-heading border-title'>
            Relation with Instagram's Algorithm
          </h2>
          <p className='tools-content'>
            Engagement rate can have a significant impact on reach and
            visibility on Instagram. The algorithm prioritizes content that
            receives high engagement, meaning that posts with high engagement
            rates are more likely to be shown in the feeds of an influencer's
            followers.
          </p>
          <p className='tools-content'>
            Overall, engagement rate is an important metric to track because it
            can be a major driver of reach and visibility on Instagram and
            ultimately lead to more growth and success for an account.
          </p>
        </EngagementRate>
        <EngagementRate>
          <h2 className='tool-sub-heading border-title'>
            Which factors go into engagement rates?
          </h2>
          <p className='tools-content'>
            Apart from the influencer's performance among their followers, there
            is more nuance in the engagement rate. It differs greatly according
            to the influencer's following size as well.
          </p>
          <p className='tools-content'>
            For example, a micro-influencer will have a much higher engagement
            rate than a macro or mega-influencer because micro-influencers are
            more intimately connected to their followers. Same goes for
            different industry and niches because some have higher engagement
            rate than others.
          </p>
        </EngagementRate>
        <EngagementRate>
          <h2 className='tool-sub-heading border-title'>
            What is the average engagement rate of different influencers on
            Instagram in 2022?
          </h2>
          <p className='tools-content'>
            The average engagement rate on <b>Instagram is 0.67%</b>, but
            influencers with various follower counts have a different range of
            engagement that is considered good.
          </p>
          <p className='cards-title mt-8'>
            Average engagement rate of different size influencers:
          </p>
        </EngagementRate>
      </Container>
    </CalculatorContentSection>
  );
};

export default InstagramCalculatorContent;
