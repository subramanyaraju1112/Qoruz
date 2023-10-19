import Seo from '@qoruz/components/Seo';
import Footer from '@qoruz/pages/footer/footer';
import EngagementRateLitmus from '@qoruz/pages/tools/engagementRateLitmus/EngagementRateLitmus';
import Faq from '@qoruz/pages/tools/faq/faq';
import HeroSearch from '@qoruz/pages/tools/searchHero';
import YoutubeCount from '@qoruz/pages/tools/youtube-subscriber-count-checker/youtube/youtubeCount';
import React from 'react';

import { YsccFaqdata } from '../../../utils/faqData';

const InfluencerFollowerChecker = () => {
  const redirect = (url: string) => {
    window.open(`/tools/${url}`, '_self');
  };

  return (
    <>
      <Seo
        title='Youtube Subscriber Cout Checker | Qoruz'
        description="Measure your favorite influencer's subscriber count. Analyze engagement rate, follower count, and total posts for actionable insights."
      />
      <HeroSearch
        pageTitle='Youtube Subscriber Count Checker'
        onChange={() => {
          redirect('influencer-follower-count-checker');
        }}
        api='https://data.qoruz.com/api/influencer.engagement.calc.details?platform=platformPlaceholder&url=handlePlaceholder'
      />
      <YoutubeCount />
      <EngagementRateLitmus />
      <Faq data={YsccFaqdata} />
      <Footer />
    </>
  );
};

export default InfluencerFollowerChecker;
