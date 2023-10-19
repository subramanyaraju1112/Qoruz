import ComingSoon from '@qoruz/components/coming-soon';
import Seo from '@qoruz/components/Seo';
import ConnectCreator from '@qoruz/pages/find-influencers/connectCreator/ConnectCreator';
import Faq from '@qoruz/pages/find-influencers/faq/Faq';
import SecondHeader from '@qoruz/pages/find-influencers/header/header';
import OtherCreator from '@qoruz/pages/find-influencers/othercreator/othercreator';
import ShareList from '@qoruz/pages/find-influencers/shareList/ShareList';
import Footer from '@qoruz/pages/footer/footer';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useState } from 'react';

import ConnectBlogger from './connectBlogger/ConnectBlogger';
import CuratedHero from './hero/hero';
import InfluencerDetails from './influencerdetails/InfluencerDetails';

const CuratedList = ({ data }: any) => {
  const router = useRouter();
  const name = router.query.pageName;

  const [pageName, setPageName] = useState('');

  useEffect(() => {
    setPageName(window.location.href.split('/').reverse()[0]);
  }, []);

  const [sharedState, setSharedState] = React.useState<any>(null);

  return (
    <div className='app' id='app'>
      <Seo
        title={data.curated_list_seo.list_name}
        description={data.curated_list_seo.meta_description}
        keywords={data.curated_list_seo.meta_keywords}
        image={data.curated_list_seo.meta_image_url}
      />
      <SecondHeader
        path={router.asPath}
        header={data.curated_list_seo.list_name}
        listName={data.curated_list_seo.list_name}
      />
      {sharedState == -1 ? (
        <ComingSoon />
      ) : (
        <main>
          <ShareList />
          {data.curated_list_seo.list_name ? (
            <CuratedHero
              header={data.curated_list_seo.list_name}
              description={data.curated_list_seo.in_article_description}
              headline={data.curated_list_seo.seo_category}
            />
          ) : null}
          {name && (
            <InfluencerDetails
              currentStatus={(val: any) => {
                setSharedState(val);
              }}
              data={data}
              page={pageName}
            />
          )}
          <ConnectCreator category={data.curated_list_seo.list_name} />
          <OtherCreator category={data.curated_list_seo.list_name} />
          <ConnectBlogger category={data.curated_list_seo.list_name} />
          <Faq />
        </main>
      )}
      <Footer />
    </div>
  );
};

export default CuratedList;

export async function getServerSideProps(context: any) {
  const { pageName } = context.query;
  const response = await fetch(
    `https://data.qoruz.com/api/curatedList/landingPage?perma_link=${pageName}`
  );
  const data = await response.json();
  return {
    props: {
      data: data.data,
    },
  };
}
