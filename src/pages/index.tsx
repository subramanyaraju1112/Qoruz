import Footer from '@app/footer/footer';
import BusinessGoals from '@app/home/business-goals/businessGoals';
import Hero from '@app/home/hero/hero';
import MoreEffective from '@app/home/more-effective/moreEffective';
import PowerfulTools from '@app/home/powerful-tools/powerfulTools';
import StartExploring from '@app/home/start-exploring/startExploring';
import Testimonial from '@app/home/testimonial/testimonial';
import TopCreators from '@app/home/top-creators/topCreators';
import Seo from '@qoruz/components/Seo';
import dynamic from 'next/dynamic';
const EventFormPopup = dynamic(
  () => import('../components/WebinarPopupForm/form')
);
import {
  hasValidHideWebinarPopupStorage,
  setHideWebinarPopupStorage,
} from '@qoruz/utils/storage';
import React from 'react';

const MemoizedHero = React.memo(Hero);
const MemoizedPowerfulTools = React.memo(PowerfulTools);
const MemoizedTopCreators = React.memo(TopCreators);
const MemoizedMoreEffective = React.memo(MoreEffective);
const MemoizedBusinessGoals = React.memo(BusinessGoals);
const MemoizedTestimonial = React.memo(Testimonial);
const MemoizedStartExploring = React.memo(StartExploring);
const MemoizedFooter = React.memo(Footer);

export default function Home() {
  const [showPopup, setShowPopup] = React.useState(false);
  React.useEffect(() => {
    const currentDate = new Date();
    const expiryDate = new Date('2023-06-29');

    if (currentDate > expiryDate || hasValidHideWebinarPopupStorage()) {
      setShowPopup(false);
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {};
    }
    const isFirstTimeUser = !hasValidHideWebinarPopupStorage();

    if (isFirstTimeUser) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);
  const handleFormClose = (): void => {
    setHideWebinarPopupStorage();
    setShowPopup(false);
  };
  return (
    <div className='app' id='app'>
      {showPopup ? (
        <div className='webinar-popup'>
          <EventFormPopup onClose={handleFormClose} />
        </div>
      ) : null}
      <Seo
        title='Find 3,44,307+ Indian Influencers | Collaborate Now!
'
        description="Tap into the largest database of 3,44,307+ indian influencers. Collaborate now to expand your brand's reach and create impactful campaigns that resonate with your target audience.
"
      />
      <div className='header-background'></div>
      <main>
        <MemoizedHero />
        <MemoizedPowerfulTools />
        <MemoizedTopCreators />
        <MemoizedMoreEffective />
        <MemoizedBusinessGoals />
        <MemoizedTestimonial />
        <MemoizedStartExploring />
      </main>
      <MemoizedFooter />
    </div>
  );
}
