import Seo from '@qoruz/components/Seo';
import Info from '@qoruz/pages/contact/Contactinfo/info';
import Hero from '@qoruz/pages/contact/hero/hero';
import Footer from '@qoruz/pages/footer/footer';
import React from 'react';

export default function ContactUs() {
  return (
    <>
      <Seo title='Contact Us | Find Influencers in India | 3,16,895 Influencers - Free Access'/>
      <Hero />
      <Info />
      <Footer />
    </>
  );
}
