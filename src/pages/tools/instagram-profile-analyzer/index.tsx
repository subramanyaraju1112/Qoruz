import Seo from '@qoruz/components/Seo';
import Footer from '@qoruz/pages/footer/footer';
import EngagementRateLitmus from '@qoruz/pages/tools/engagementRateLitmus/EngagementRateLitmus';
import Faq from '@qoruz/pages/tools/faq/faq';
import InstagramAnalysis from '@qoruz/pages/tools/instagram-profile-analyzer/insta-profile/insta-profile';
import HeroSearch from '@qoruz/pages/tools/searchHero';
import React from 'react';

import { IpatFaqdata } from '../../../utils/faqData';

const InfluencerFollowerChecker = () => {
  const redirect = (url: string) => {
    window.open(`/tools/${url}`, '_self');
  };
  return (
    <>
      <Seo
        title='Instagram Influencer Analysis Tool | Qoruz'
        description="Manually analyzing an influencer's profile is time-consuming and often inaccurate. An instagram influencer analysis tool helps make data-driven decisions on whom to collaborate with."
      />
      <HeroSearch
        pageTitle='Instagram Influencer Profile Analysis Tool '
        selected='0'
        onChange={() => {
          redirect('youtube-profile-analyzer');
        }}
        api='https://data.qoruz.com/api/influencer.engagement.calc.details?platform=platformPlaceholder&url=handlePlaceholder'
        section='engagement-insta'
      />
      <InstagramAnalysis />
      <EngagementRateLitmus />
      <Faq data={IpatFaqdata} />
      <Footer />
    </>
  );
};

export default InfluencerFollowerChecker;
