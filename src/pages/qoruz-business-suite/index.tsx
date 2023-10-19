import Footer from '@app/footer/footer';
import Seo from '@qoruz/components/Seo';
import Customer from '@qoruz/pages/qoruz-business-suite/customer/customer';
import ForYou from '@qoruz/pages/qoruz-business-suite/for-you/forYou';
import Hero from '@qoruz/pages/qoruz-business-suite/hero/hero';
import KeyFeatures from '@qoruz/pages/qoruz-business-suite/key-features/keyFeatures';
import PartnersSection from '@qoruz/pages/qoruz-business-suite/partners/partners';
import QoruzMakes from '@qoruz/pages/qoruz-business-suite/qoruz-makes/qoruzMakes';
import SecondaryHeader from '@qoruz/pages/qoruz-business-suite/secondary-header/secondaryHeader';
import WhatYouNeed from '@qoruz/pages/qoruz-business-suite/what-you-need/whatYouNeed';
import WhatYouNeedMobile from '@qoruz/pages/qoruz-business-suite/what-you-need-mobile';
import useHeader from '@qoruz/utils/useHeader';
import React from 'react';

const BusinessSuite = () => {
  const { isPinned, getInnerHeight } = useHeader();
  return (
    <div className='app' id='app'>
      <Seo
        title='Influencer Marketing Platform For Enterprise Brands | Qoruz'
        description='Qoruz - the ultimate influencer marketing platform for enterprise brands. Amplify your brand, connect with top influencers, and track campaign success. Maximize visibility and engagement.'
      />
      <SecondaryHeader pinned={isPinned} height={getInnerHeight} />
      <main>
        <Hero />
        <PartnersSection />
        <QoruzMakes />
        <KeyFeatures />
        <ForYou />
        <Customer />
        <WhatYouNeed />
        <WhatYouNeedMobile />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessSuite;
