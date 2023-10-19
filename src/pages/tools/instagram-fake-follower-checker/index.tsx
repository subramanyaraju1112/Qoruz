import Seo from '@qoruz/components/Seo';
import Footer from '@qoruz/pages/footer/footer';
import EngagementRateLitmus from '@qoruz/pages/tools/engagementRateLitmus/EngagementRateLitmus';
import Faq from '@qoruz/pages/tools/faq/faq';
import InstaFakeFollowers from '@qoruz/pages/tools/instagram-fake-follower-checker/instagram-fake-follower-checker/instaFake';
import HeroSearch from '@qoruz/pages/tools/searchHero';
import React from 'react';

import { Iffcfaqdata } from '../../../utils/faqData';

const InfluencerFollowerChecker = () => {
  const redirect = (url: string) => {
    window.open(`/tools/${url}`, 'noreferrer');
  };

  return (
    <>
      <Seo
        title='Free Instagram Fake Follower Checker | Qoruz'
        description="Determining an influencer's credibility before collaboration can be challenging for brands. Our instagram fake follower checker analyzes if the following is real or fake, helping you make informed decisions and ensure authentic partnerships."
      />
      <HeroSearch
        selected='0'
        onChange={() => {
          redirect('youtube-engagement-rate-calculator');
        }}
        pageTitle='Instagram Fake Follower Checker'
        api='https://data.qoruz.com/api/influencer.engagement.calc.details?platform=platformPlaceholder&url=handlePlaceholder'
        section='engagement-insta fake-follower'
        fakePage={true}
      />
      <InstaFakeFollowers />
      <EngagementRateLitmus />
      <Faq data={Iffcfaqdata} />
      <Footer />
    </>
  );
};

export default InfluencerFollowerChecker;
