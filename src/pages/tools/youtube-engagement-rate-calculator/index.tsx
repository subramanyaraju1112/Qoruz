import Seo from '@qoruz/components/Seo';
import Footer from '@qoruz/pages/footer/footer';
import EngagementRateLitmus from '@qoruz/pages/tools/engagementRateLitmus/EngagementRateLitmus';
import Faq from '@qoruz/pages/tools/faq/faq';
import RateHeroSearch from '@qoruz/pages/tools/searchHero';
import YoutubeCalculatorContent from '@qoruz/pages/tools/youtubeCalculatorContent/youtubeCalculatorContent';
import React from 'react';

import { YercFaqData } from '../../../utils/faqData';

const EngagementRateCalculator = () => {
  const redirect = (url: string) => {
    window.open(`/tools/${url}`, '_self');
  };

  return (
    <>
      <Seo
        title='Youtube Influencer Engagement Rate Calculator | Qoruz'
        description="Measure your favorite influencer's engagement with our influencer engagement rate calculator. Analyze engagement rate, follower count, and total posts for informed decisions."
      />
      <RateHeroSearch
        selected='1'
        onChange={() => {
          redirect('instagram-engagement-rate-calculator');
        }}
        pageTitle='Youtube Engagement Rate Calculator'
        api='https://data.qoruz.com/api/influencer.engagement.calc.details?platform=platformPlaceholder&url=handlePlaceholder'
        section='engagament-yt'
      />
      <YoutubeCalculatorContent />
      <EngagementRateLitmus />
      <Faq data={YercFaqData} />
      <Footer />
    </>
  );
};

export default EngagementRateCalculator;
