import InstagramProfileStyle from '@qoruz/pages/tools/instagram-profile-analyzer/insta-profile/insta-profile.style';
import { CalculatorContentSection } from '@qoruz/pages/tools/instagramCalculatorContent/instagramCalculatorContent.style';
import React from 'react';
import { Container } from 'react-grid-system';

const InstagramAnalysis = () => {
  return (
    <CalculatorContentSection>
      <Container className='container'>
        <InstagramProfileStyle>
          <p className='sub-heading'>
            With so many influencers out there, it can be hard to know which
            ones will work best for your brand. Influencer profile analysis
            helps just with that, making your decision-making process easier and
            more efficient. Instagram influencer profile analysis tool analyzes
            an influencer's profile and determines key metrics, such as
            engagement rates, follower growth, and audience demographics.
          </p>
        </InstagramProfileStyle>
        <InstagramProfileStyle>
          <h2 className='heading'>
            Benefits of an Influencer Profile Analysis
          </h2>
        </InstagramProfileStyle>
        <InstagramProfileStyle>
          <h2 className='tool-sub-heading border-title'>
            Saves Time and Effort
          </h2>

          <p className='tools-content'>
            Analyzing an influencer's profile manually can be time-consuming and
            challenging. Using a tool can save time and effort, allowing brands
            to focus on other aspects of the marketing strategy.
          </p>
        </InstagramProfileStyle>
        <InstagramProfileStyle>
          <h2 className='tool-sub-heading border-title'>
            Provides Valuable Insights
          </h2>
          <p className='tools-content'>
            Brands can see the influencer's number of followers, engagement
            rates, and audience. The valuable insights into an influencer's
            performance are a gold mine for brands to shortlist and finalize
            which influencers to partner with.
          </p>
        </InstagramProfileStyle>
        <InstagramProfileStyle>
          <h2 className='tool-sub-heading border-title'>
            Improves the Effectiveness of Your Campaigns
          </h2>
          <p className='tools-content'>
            Influencer profile analysis tools let brands compare different
            influencers and find the best fit for them, ensuring that the brand
            engages with its target audience while generating desired ROI.
          </p>
        </InstagramProfileStyle>
        <InstagramProfileStyle>
          <h2 className='tool-sub-heading border-title'>Increases ROI</h2>
          <p className='tools-content'>
            By working with the right influencers, brands can increase the ROI
            of their marketing campaigns. The influencer analysis tool helps
            find the influencer who has your target audience following,
            eventually bringing more leads and conversions to the brand.
          </p>
        </InstagramProfileStyle>
        <InstagramProfileStyle>
          <h2 className='tool-sub-heading border-title'>
            Offers a Competitive Advantage
          </h2>
          <p className='tools-content'>
            Brands can have a competitive advantage over their competitors with
            the ability to collaborate with the right influencers and engage
            with the target audience.
          </p>
        </InstagramProfileStyle>
      </Container>
    </CalculatorContentSection>
  );
};

export default InstagramAnalysis;
