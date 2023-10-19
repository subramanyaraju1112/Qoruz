/* eslint-disable unused-imports/no-unused-vars */
// import Seo from '@qoruz/components/Seo';
import ComingSoon from '@qoruz/components/coming-soon';
import { usePageReload } from '@qoruz/hooks/usePageReload';
// import ComingSoon from '@qoruz/components/coming-soon';
import Footer from '@qoruz/pages/footer/footer';
import SecondHeader from '@qoruz/pages/profile/header/header';
import Influencer from '@qoruz/pages/profile/Influencer/influencer';
import ProfileContentArea from '@qoruz/pages/profile/profileContentArea/ProfileContentArea';
import React, { useEffect, useState } from 'react';

import ProfileHero from '../profile/hero/hero';
import Share from '../profile/share/Share';
const ProfileInner = ({ data, newProfileUrl, content }: any) => {
  const [platform, setPlatform] = useState('instagram');
  const [render, setRender] = useState(false);
  useEffect(() => {
    if (data !== null) {
      setRender(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (val: any) => {
    setPlatform(val);
  };
  if (data === '404') {
    return <ComingSoon />;
  }
  const getStatus = (data: any) => {
    if (data === null) {
      return 0;
    }
    if (data === 'not_found') {
      return -1;
    } else {
      return 1;
    }
  };

  const status = getStatus(data);
  return render ? (
    <div className='app' id='app'>
      {/* <Seo title={data ? data.name : 'Profile'} /> */}
      {/* {data === '404' ? <ComingSoon /> : null} */}
      {status === -1 && (
        <ComingSoon is301={true} newProfileUrl={newProfileUrl} />
      )}
      {status === 0 ? null : (
        <>
          <SecondHeader />

          <main>
            <Share />
            <ProfileHero />
            {status == 1 && (
              <>
                <Influencer profileData={data} platform={platform} />
                <ProfileContentArea
                  onChange={handleChange}
                  profileData={data}
                  content={content}
                />
              </>
            )}
          </main>
        </>
      )}
      <Footer />
    </div>
  ) : null;
};

export default ProfileInner;

export async function getServerSideProps(context: any) {
  const { res } = context;
  res.setHeader('Cache-Control', 'no-store, must-revalidate');
  const [currHandle, currPlatform] = context.req.url.split('/').reverse();
  const validPlatforms = ['instagram', 'youtube', 'facebook', 'twitter'];
  if (validPlatforms.includes(currPlatform)) {
    return {
      redirect: {
        destination: `/@${currHandle}/${currPlatform}`,
        permanent: false,
      },
    };
  }
  if (!validPlatforms.includes(currPlatform) && !currPlatform.includes('@')) {
    return {
      redirect: {
        destination: `/@${currPlatform}/${currHandle}`,
        permanent: false,
      },
    };
  }
  try {
    const [platform, handleWithAt] = context.req.url.split('/').reverse();
    const handle = handleWithAt.slice(1);
    // if (
    //   platform !== 'youtube' &&
    //   platform !== 'twitter' &&
    //   platform !== 'facebook' &&
    //   platform !== 'instagram'
    // ) {
    //   return {
    //     props: {
    //       data: 'not_found',
    //       newProfileUrl: `@${currHandle}/${currPlatform}`,
    //     },
    //   };
    // }
    let responseData: any = null;
    const resp = await fetch(
      `https://data.qoruz.com/api/profile.landing_page?handle=${handle}&social_platform=instagram`
    );
    responseData = await resp.json();

    if (responseData.ok === false) {
      return {
        props: {
          data: '404',
          newProfileUrl: `@${currHandle}/${currPlatform}`,
          content: responseData.content || null,
        },
      };
    } else {
      return {
        props: {
          data: responseData.data[0],
          newProfileUrl: `@${currHandle}/${currPlatform}`,
          content: responseData.content || null,
        },
      };
    }
    // else {
    //   return {
    //     props: {
    //       data: 'not_found',
    //       newProfileUrl: `@${currHandle}/${currPlatform}`,
    //       content: null,
    //     },
    //   };
    // }
  } catch (err: any) {
    /*eslint no-empty: "error"*/
    return {
      props: {
        data: 'not_found',
        newProfileUrl: `@${currHandle}/${currPlatform}`,
        content: null,
      },
    };
  }
}
