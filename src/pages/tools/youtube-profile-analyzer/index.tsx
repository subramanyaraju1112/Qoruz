import Seo from '@qoruz/components/Seo';
import Footer from '@qoruz/pages/footer/footer';
import EngagementRateLitmus from '@qoruz/pages/tools/engagementRateLitmus/EngagementRateLitmus';
import Faq from '@qoruz/pages/tools/faq/faq';
import HeroSearch from '@qoruz/pages/tools/searchHero';
import YoutubeAnalysis from '@qoruz/pages/tools/youtube-profile-analyzer/yt-profile/yt-profile';
import React from 'react';

import { YpatFaqdata } from '../../../utils/faqData';

const InfluencerFollowerChecker = () => {
  const redirect = (url: string) => {
    window.open(`/tools/${url}`, '_self');
  };
  return (
    <>
      <Seo
        title='Youtube Influencer Analysis Tool | Qoruz'
        description='Gain valuable insights into youtube influencers with our analysis tool. Deep dive into metrics for informed collaboration decisions. Maximize success with data-driven analysis.'
      />
      <HeroSearch
        pageTitle='Youtube Influencer Profile Analysis Tool'
        selected='1'
        onChange={() => {
          redirect('instagram-profile-analyzer');
        }}
        api='https://data.qoruz.com/api/influencer.engagement.calc.details?platform=platformPlaceholder&url=handlePlaceholder'
      />
      <YoutubeAnalysis />
      <EngagementRateLitmus />
      <Faq data={YpatFaqdata} />
      <Footer />
    </>
  );
};

export default InfluencerFollowerChecker;
