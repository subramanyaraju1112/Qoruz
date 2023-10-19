/* eslint-disable unused-imports/no-unused-vars */
// import Seo from '@qoruz/components/Seo';
import ComingSoon from '@qoruz/components/coming-soon';
import Footer from '@qoruz/pages/footer/footer';
import SecondHeader from '@qoruz/pages/profile/header/header';
import Influencer from '@qoruz/pages/profile/Influencer/influencer';
import ProfileContentArea from '@qoruz/pages/profile/profileContentArea/ProfileContentArea';
import React, { useEffect, useState } from 'react';

import ProfileHero from '../profile/hero/hero';
import Share from '../profile/share/Share';
const Profile = ({ data, content }: any) => {
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
      {status === -1 && <ComingSoon is301={true} />}
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

export default Profile;

export async function getServerSideProps(context: any) {
  const { res } = context;
  res.setHeader('Cache-Control', 'no-store, must-revalidate');
  try {
    const code = context.req.url.split('/').reverse()[0];
    const resCode = await fetch(
      `https://data.qoruz.com/api/getShortCodeUrl?short_code=${code}`
    );
    const data = await resCode.json();
    if (data.ok) {
      return {
        redirect: {
          destination: data.url,
          permanent: false,
        },
      };
    }
    const [handle] = context.req.url.split('/').reverse();
    const formatHandle = handle.slice(1);
    let responseData: any = null;
    const resp = await fetch(
      `https://data.qoruz.com/api/profile.landing_page?handle=${formatHandle}&social_platform=instagram`
    );
    responseData = await resp.json();

    if (responseData.ok === false) {
      return {
        props: {
          data: '404',
          content: responseData.content || null,
        },
      };
    } else {
      return {
        props: {
          data: responseData.data[0],
          content: responseData.content || null,
        },
      };
    }
    // else {
    //   return {
    //     props: {
    //       data: 'not_found',
    //       content: null,
    //     },
    //   };
    // }
  } catch (err: any) {
    /*eslint no-empty: "error"*/
    return {
      props: {
        data: 'not_found',
        content: null,
      },
    };
  }
}

// CODE FOR SHORTCODE THING: <--!!PLEASE DONT REMOVE!!-->

// export async function getServerSideProps(context: any) {

// }
