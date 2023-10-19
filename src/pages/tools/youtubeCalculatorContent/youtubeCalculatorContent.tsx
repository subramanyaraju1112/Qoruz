import InfluencerFilterReason from '@qoruz/pages/tools/influencerFilterReason/InfluencerFilterReason';
import { CalculatorContentSection } from '@qoruz/pages/tools/instagramCalculatorContent/instagramCalculatorContent.style';
import EngagementRate from '@qoruz/pages/tools/youtubeCalculatorContent/youtubeCalculatorContent.style';
import React from 'react';
import { Container } from 'react-grid-system';

const YoutubeCalculatorContent = () => {
  return (
    <CalculatorContentSection>
      <Container className='container'>
        <EngagementRate>
          <h2 className='tool-sub-heading border-title'>
            What is an Influencer Engagement Rate?
          </h2>
          <p className='tools-content'>
            Engagement rate is the involvement you receive on your post from
            your followers or audience. It is calculated in percentage.
          </p>
          <p className='tools-content'>
            The engagement rate gives an average idea of how well your content
            is doing on social media. It does not necessarily depend on the
            number of followers. The response you receive through likes,
            comments, and shares drive the engagement rate. Here is a quick
            example for you to understand the engagement rate better; Suppose a
            celebrity posted a video on Youtube but you scrolled through it, in
            this case, you did not engage with the celebrity’s video. If you
            would have liked and commented, it is considered engaging with the
            post.
          </p>
        </EngagementRate>
        <EngagementRate>
          <h2 className='tool-sub-heading border-title'>
            Why Should You Calculate Engagement Rate?
          </h2>
          <p className='tools-content'>
            Let’s just take a moment and understand that not all engagement
            rates are built equal.
          </p>
          <p className='tools-content'>
            As an account grows in terms of followers, the engagement rate could
            drop. Micro and nano-influencers tend to have an engagement rate.
            This is because the audience root for their favorite micro and
            nano-influencers.
          </p>
          <p className='tools-content'>
            You would want to choose an influencer based on their engagement
            rate and here’s why:
          </p>
          <InfluencerFilterReason />
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
            Apart from the influencer's performance among thier followers, there
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
            The average engagement rate on Instagram is 0.67%, but influencers
            with various follower counts have a different range of engagement
            that is considered good.
          </p>
          <p className='cards-title mt-8'>
            Average engagement rate of different size influencers:
          </p>
        </EngagementRate>
      </Container>
    </CalculatorContentSection>
  );
};

export default YoutubeCalculatorContent;
