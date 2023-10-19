import Seo from '@qoruz/components/Seo';
import Footer from '@qoruz/pages/footer/footer';
import EngagementRateLitmus from '@qoruz/pages/tools/engagementRateLitmus/EngagementRateLitmus';
import Faq from '@qoruz/pages/tools/faq/faq';
import FollowerCount from '@qoruz/pages/tools/influencer-follower-count-checker/followerCountChecker/followerCount';
import HeroSearch from '@qoruz/pages/tools/searchHero';
import React from 'react';

import { IfccFaqData } from '../../../utils/faqData';

const InfluencerFollowerChecker = () => {
  const redirect = (url: string) => {
    window.open(`/tools/${url}`, '_self');
  };

  return (
    <>
      <Seo
        title='Instagram Followers Count Checker | Qoruz'
        description='Optimize influencer collaborations with our follower count checker. Monitor growth rate and determine ROI potential for successful partnerships.
'
      />
      <HeroSearch
        pageTitle='Influencer Follower Count Checker'
        api='https://data.qoruz.com/api/influencer.engagement.calc.details?platform=platformPlaceholder&url=handlePlaceholder'
        selected='0'
        section='engagement-insta'
        onChange={() => {
          redirect('youtube-subscriber-count-checker');
        }}
      />
      <FollowerCount />
      <EngagementRateLitmus />
      <Faq data={IfccFaqData} />
      <Footer />
    </>
  );
};

export default InfluencerFollowerChecker;
