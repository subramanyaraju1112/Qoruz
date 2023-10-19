import FollowerCountStyle from '@qoruz/pages/tools/influencer-follower-count-checker/followerCountChecker/followerCount.style';
import { CalculatorContentSection } from '@qoruz/pages/tools/instagramCalculatorContent/instagramCalculatorContent.style';
import React from 'react';
import { Container } from 'react-grid-system';

const FollowerCount = () => {
  return (
    <CalculatorContentSection>
      <Container className='container'>
        <FollowerCountStyle>
          <p className='sub-heading'>
            The follower count of an Instagram influencer is a crucial factor to
            determine the success of brand-influencer collaboration. That's
            where Instagram follower count checker tools come in handy. These
            tools help you measure the success of brand campaigns, identify
            influencers worth investing in, and track follower growth over time.
          </p>
        </FollowerCountStyle>
        <FollowerCountStyle>
          <h2 className='tool-sub-heading border-title'>
            Identifying Real Followers
          </h2>

          <p className='tools-content'>
            Instagram engagement rate is a metric that measures the level of
            engagement of a specific Instagram account. It is calculated by
            dividing an account's total number of likes and comments by the
            number of followers. A higher engagement rate indicates that many of
            the account's followers are interacting with the content.
          </p>
        </FollowerCountStyle>
        <FollowerCountStyle>
          <h2 className='tool-sub-heading border-title'>
            Measuring the Growth Rate
          </h2>
          <p className='tools-content'>
            Brands can measure the growth rate of an influencer’s following
            using the instagram follower count checker. This helps brands
            analyze the rate at which an influencer’s audience is growing and
            their spikes or drops in growth. This part of analysis helps brands
            get an overview of how quickly they can reach their target audience
            through the influencer’s content.
          </p>
        </FollowerCountStyle>
        <FollowerCountStyle>
          <h2 className='tool-sub-heading border-title'>
            Tracking Audience Demographics
          </h2>
          <p className='tools-content'>
            Identifying the age, gender, location, and other demographics of an
            influencer’s follower helps determine whether the influencer
            audience aligns with the brand's target demographics. The Instagram
            follower count checker tool ensures brands to collaborate with
            influencers who can help them reach their target audience.
          </p>
        </FollowerCountStyle>
        <FollowerCountStyle>
          <h2 className='tool-sub-heading border-title'>
            Evaluating Influencer's Engagement Rate
          </h2>
          <p className='tools-content'>
            An engagement rate is a measure of how actively followers engage
            with an influencer's content. Using a follower count checker tool,
            brands can analyze an influencer's engagement rate to determine how
            active their followers are. Brands can use this information to
            assess the effectiveness of the influencer's content and determine
            if they would be a good brand and campaign fit.
          </p>
        </FollowerCountStyle>
      </Container>
    </CalculatorContentSection>
  );
};

export default FollowerCount;
