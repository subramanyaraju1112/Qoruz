import Seo from '@qoruz/components/Seo';
import Footer from '@qoruz/pages/footer/footer';
import EngagementRateLitmus from '@qoruz/pages/tools/engagementRateLitmus/EngagementRateLitmus';
import Faq from '@qoruz/pages/tools/faq/faq';
import CostCount from '@qoruz/pages/tools/influencer-cost-checker/cost/costCount';
import HeroSearch from '@qoruz/pages/tools/searchHero';
import React from 'react';

import { IccFaqData } from '../../../utils/faqData';

const InfluencerFollowerChecker = () => {
  return (
    <>
      <Seo
        title='Influencer Cost Checker | Qoruz'
        description='Assess the cost of collaborating with influencers using qoruz. Align your marketing budget for optimal roi and impactful partnerships.'
      />
      <HeroSearch
        pageTitle='Influencer Cost Checker'
        section='cost-checker'
        api='https://data.qoruz.com/api/influencer.engagement.calc.details?platform=platformPlaceholder&url=handlePlaceholder'
        selected='0'
      />
      <CostCount />
      <EngagementRateLitmus />
      <Faq data={IccFaqData} />
      <Footer />
    </>
  );
};

export default InfluencerFollowerChecker;
