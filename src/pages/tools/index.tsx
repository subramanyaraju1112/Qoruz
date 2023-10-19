import Seo from '@qoruz/components/Seo';
import Footer from '@qoruz/pages/footer/footer';
import FreeMarketingTools from '@qoruz/pages/tools/freeMarketingTools/FreeMarketingTools';
import Hero from '@qoruz/pages/tools/hero/hero';
import React from 'react';

const MarketingTool = () => {
  return (
    <>
      <Seo
        title='Free Influencer Marketing Tools | Qoruz'
        description='Unlock the power of free influencer marketing tools with Qoruz. Access tools like engagement rate calculator, fake follower checker, cost checker, and profile analyzer. Maximize the effectiveness of your influencer marketing campaigns and make data-driven decisions.'
      />
      <Hero />
      <FreeMarketingTools />
      <Footer />
    </>
  );
};

export default MarketingTool;
