import { CalculatorContentSection } from '@qoruz/pages/tools/instagramCalculatorContent/instagramCalculatorContent.style';
import YoutubeProfileStyle from '@qoruz/pages/tools/youtube-profile-analyzer/yt-profile/yt-profile.style';
import React from 'react';
import { Container } from 'react-grid-system';

const YoutubeAnalysis = () => {
  return (
    <CalculatorContentSection>
      <Container className='container'>
        <YoutubeProfileStyle>
          <p className='sub-heading'>
            Influencer marketing on YouTube is a great way to build your brand
            into a household name, with millions of people talking about your
            product or service. YouTube profile analysis is a powerful resource
            for analyzing an influencer's profile and reaching a more
            comprehensive target network for your brand.
          </p>
        </YoutubeProfileStyle>
        <YoutubeProfileStyle>
          <h2 className='heading'>
            Benefits of an Influencer Profile Analysis
          </h2>
        </YoutubeProfileStyle>
        <YoutubeProfileStyle>
          <h2 className='tool-sub-heading border-title'>
            Data-driven Insights
          </h2>

          <p className='tools-content'>
            YouTube Profile Analysis tool provides data-driven insights into
            influencers' subscriber demographics, video performance, and
            competitor analysis. Based on metrics such as engagement rates,
            subscriber growth, and views, brands can identify which channels are
            most influential and are a good fit for collaboration that can
            create videos that resonate with their audience.
          </p>
        </YoutubeProfileStyle>
        <YoutubeProfileStyle>
          <h2 className='tool-sub-heading border-title'>
            Exposure to Wider Influencer Network
          </h2>
          <p className='tools-content'>
            Analyzing the channels of other influencers and brands within your
            industry, you can identify potential partners for cross-promotion
            and collaboration, resulting in greater exposure and a broader reach
            for your brand.
          </p>
        </YoutubeProfileStyle>
        <YoutubeProfileStyle>
          <h2 className='tool-sub-heading border-title'>Competitor Analysis</h2>
          <p className='tools-content'>
            Brands can identify areas of improvement by analyzing competitor
            profiles. The Youtube analysis tool helps brands analyze the type of
            content competitors produce and the engagement levels to understand
            and adjust strategy to better meet the target audience's needs.
          </p>
        </YoutubeProfileStyle>
        <YoutubeProfileStyle>
          <h2 className='tool-sub-heading border-title'>Engagement Analysis</h2>
          <p className='tools-content'>
            The engagement levels of potential influencers' videos and brands
            can determine how engaged their audience is and how likely they are
            to take action on behalf of the brand. This can help brands identify
            which influencers are most likely to drive results for their
            marketing campaigns.
          </p>
        </YoutubeProfileStyle>
      </Container>
    </CalculatorContentSection>
  );
};

export default YoutubeAnalysis;
