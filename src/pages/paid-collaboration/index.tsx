import Seo from '@qoruz/components/Seo';
import Footer from '@qoruz/pages/footer/footer';
import CampaignTypes from '@qoruz/pages/paid-collaboration/campaignTypes/CampaignTypes';
import ClientStories from '@qoruz/pages/paid-collaboration/clientStories/ClientStories';
import Customers from '@qoruz/pages/paid-collaboration/customers/Customers';
import Faq from '@qoruz/pages/paid-collaboration/faq/Faq';
import GrowBetter from '@qoruz/pages/paid-collaboration/growBetter/GrowBetter';
import HowCollabWork from '@qoruz/pages/paid-collaboration/howCollabWork/HowCollabWork';
import KeyFeatures from '@qoruz/pages/paid-collaboration/keyFeatures/KeyFeature';
import QoruzPaid from '@qoruz/pages/paid-collaboration/qoruzPaid/QoruzPaid';
import HeaderMain from '@qoruz/pages/paid-collaboration/secondary-header/';
import useHeader from '@qoruz/utils/useHeader';

export default function PaidCollaboration() {
  const { isPinned, getInnerHeight } = useHeader();
  return (
    <>
      <Seo
        title="Influencer Marketing Platform For Paid collaboration | Qoruz"
        description="Tap into the largest database of 3,44,307+ indian influencers. Collaborate now to expand your brand's reach and create impactful campaigns that resonate with your target audience."
      />
      <HeaderMain pinned={isPinned} height={getInnerHeight} />
      <main>
        <QoruzPaid />
        <Customers />
        <HowCollabWork />
        <CampaignTypes />
        <KeyFeatures />
        <ClientStories />
        <Faq />
        <GrowBetter />
      </main>
      <Footer />
    </>
  );
}
