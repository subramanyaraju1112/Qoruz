import { CalculatorContentSection } from '@qoruz/pages/tools/instagramCalculatorContent/instagramCalculatorContent.style';
import YoutubeSubscriberStyle from '@qoruz/pages/tools/youtube-subscriber-count-checker/youtube/youtubeCount.style';
import React from 'react';
import { Container } from 'react-grid-system';

const YoutubeCount = () => {
  return (
    <CalculatorContentSection>
      <Container className='container'>
        <YoutubeSubscriberStyle>
          <p className='sub-heading'>
            How do brands analyze if an influencer is the right fit? The answer
            lies in the influencer's subscriber count. A YouTube subscriber
            count checker is an invaluable tool that brands can use to analyze
            an influencer profile and its potential reach.
          </p>
        </YoutubeSubscriberStyle>
        <YoutubeSubscriberStyle>
          <h2 className='tool-sub-heading border-title'>
            Analyzing Influencer Profiles
          </h2>

          <p className='tools-content'>
            A follower checker for YouTube allows you to analyze an influencer's
            profile. You can view their subscriber count, engagement rate, and
            other essential metrics to help determine if an influencer is right
            for your brand. This information enables you to make more informed
            decisions about which influencers to collaborate with and can save
            your brand valuable time and resources.
          </p>
        </YoutubeSubscriberStyle>
        <YoutubeSubscriberStyle>
          <h2 className='tool-sub-heading border-title'>
            Assessing Influencer Growth
          </h2>
          <p className='tools-content'>
            A YouTube subscriber count checker helps a brand assess an
            influencer's growth over time. You can see how many new subscribers
            they've gained over the past week, month, or year. Influencers
            continuously growing their subscriber count are likely to continue
            doing so in the future. Subscriber count checkers can help you
            identify influencers who are consistently growing their audience,
            enabling you to collaborate with them for the long term.
          </p>
        </YoutubeSubscriberStyle>
        <YoutubeSubscriberStyle>
          <h2 className='tool-sub-heading border-title'>
            Determining Influencer Engagement
          </h2>
          <p className='tools-content'>
            An influencer's engagement rate shows how much their audience
            interacts with their content. A high engagement rate indicates that
            an influencer's audience actively engages with their content.
            Subscriber count checkers can help brands determine an influencer's
            engagement rate, enabling them to collaborate with influencers with
            an engaged audience that is more likely to take action on their
            content.
          </p>
        </YoutubeSubscriberStyle>
        <YoutubeSubscriberStyle>
          <h2 className='tool-sub-heading border-title'>
            Choosing the Right Influencers for Your Brand
          </h2>
          <p className='tools-content'>
            Using a subscriber count checker can help brands choose the right
            influencers. By analyzing an influencer's subscriber count, growth
            rate, and engagement rate, you can identify influencers who align
            with your brand's values, have an engaged audience, and have the
            potential to help your brand grow. You can make more informed
            decisions about the influencers you collaborate with, ensuring that
            your campaigns are more effective and yield better results.
          </p>
        </YoutubeSubscriberStyle>
      </Container>
    </CalculatorContentSection>
  );
};

export default YoutubeCount;
