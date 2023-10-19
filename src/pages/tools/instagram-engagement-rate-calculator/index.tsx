// import YoutubeCalculatorContent from '@qoruz/pages/tools/youtubeCalculatorContent/youtubeCalculatorContent';
import Seo from '@qoruz/components/Seo';
import Footer from '@qoruz/pages/footer/footer';
import EngagementRateLitmus from '@qoruz/pages/tools/engagementRateLitmus/EngagementRateLitmus';
import Faq from '@qoruz/pages/tools/faq/faq';
import InstagramCalculatorContent from '@qoruz/pages/tools/instagramCalculatorContent/instagramCalculatorContent';
import RateHeroSearch from '@qoruz/pages/tools/searchHero';
import React from 'react';

import { IercFaqdata } from '../../../utils/faqData';

const EngagementRateCalculator = () => {
  const redirect = (url: string) => {
    window.open(`/tools/${url}`, '_self');
  };
  return (
    <>
      <Seo
        title='Instagram Influencer Engagement Rate Calculator | Qoruz'
        description='Optimize your instagram influencer collaborations with our free engagement rate calculator. Measure engagement accurately and make informed decisions for impactful influencer marketing campaigns '
      />
      <RateHeroSearch
        selected='0'
        onChange={() => {
          redirect('youtube-engagement-rate-calculator');
        }}
        pageTitle='Instagram Influencer Engagement Rate Calculator'
        api='https://data.qoruz.com/api/influencer.engagement.calc.details?platform=platformPlaceholder&url=handlePlaceholder'
        section='engagement-insta'
      />
      <InstagramCalculatorContent />
      <EngagementRateLitmus />
      <Faq data={IercFaqdata} />
      <Footer />
    </>
  );
};

export default EngagementRateCalculator;
