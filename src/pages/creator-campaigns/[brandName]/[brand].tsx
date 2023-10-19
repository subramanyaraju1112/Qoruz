import ComingSoon from '@qoruz/components/coming-soon';
import CreatorForm from '@qoruz/pages/creator-campaigns/form/form';
import Categories from '@qoruz/pages/creator-campaigns/influencer-campaign/Categories/category';
import Hero from '@qoruz/pages/creator-campaigns/influencer-campaign/Hero/hero';
import { SingleCampaignDetail } from '@qoruz/pages/creator-campaigns/influencer-campaign/influencerCampaign.style';
import OtherCampaign from '@qoruz/pages/creator-campaigns/influencer-campaign/Other-Campaign/other-campaign';
import InfluencerCampaign from '@qoruz/pages/creator-campaigns/influencer-campaign/Title/title';
import VoteAndShare from '@qoruz/pages/creator-campaigns/influencer-campaign/Vote-Share/vote-share';
import { SuccessForm } from '@qoruz/pages/creator-campaigns/style';
import Footer from '@qoruz/pages/footer/footer';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import CampaignData from 'src/utils/campaign.json';

export default function InfluencerCampaignPage({ data, shuffledData }: any) {
  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);
  const [showCreatorsCampaignForm, setShowCreatorsCampaignForm] =
    useState(false);

  useEffect(() => {
    if (localStorage.getItem('creatorsCampaignFormSubmitted') === 'true') {
      document.body.classList.remove('stop-scroll-body');
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {};
    }
    if (!formSubmitSuccess) {
      document.body.classList.add('stop-scroll-body');
    } else {
      document.body.classList.remove('stop-scroll-body');
    }
    return () => {
      document.body.classList.remove('stop-scroll-body');
    };
  }, [formSubmitSuccess]);

  React.useEffect(() => {
    if (hasCreatorsCampaignFormSubmitted()) {
      setShowCreatorsCampaignForm(false);
    } else {
      setShowCreatorsCampaignForm(true);
    }
  }, []);

  const hasCreatorsCampaignFormSubmitted = (): boolean => {
    return localStorage.getItem('creatorsCampaignFormSubmitted') === 'true';
  };

  const setCreatorsCampaignFormSubmitted = (): void => {
    localStorage.setItem('creatorsCampaignFormSubmitted', 'true');
  };

  const trackFormSuccess = (newState: any) => {
    setFormSubmitSuccess(newState);
    setCreatorsCampaignFormSubmitted();
    setShowCreatorsCampaignForm(false);
  };
  return (
    <>
      {!data ? (
        <ComingSoon />
      ) : (
        <>
          {showCreatorsCampaignForm ? (
            <SuccessForm
              className={`${formSubmitSuccess ? 'hide' : 'back-background'}`}
            >
              <CreatorForm handleSuccess={trackFormSuccess} />
            </SuccessForm>
          ) : null}
          <Container className='container'>
            <InfluencerCampaign
              title={data?.CampaignTitle}
              brandName={data?.BrandName}
              logoUrl={data?.URL}
              InfluencersName={data?.InfluencersInvolved}
            />
            <SingleCampaignDetail>
              <Row>
                <Col lg={9} className='left-col'>
                  <Hero
                    brandName={data?.BrandName}
                    objective={data?.Objective}
                    strategy={data?.Strategy}
                    InfluencersName={data?.InfluencersInvolved}
                    QoruzProfileURL={data?.QoruzProfileLink}
                    link={
                      data?.id === 43 || data?.id === 96
                        ? data?.CampaignImage
                        : data?.CampaignVideo?.includes('www.youtube.com') ||
                          data?.CampaignVideo?.includes('//youtu.be/')
                          ? data?.CampaignVideo
                          : data.CampaignImage
                    }
                    isVideo={
                      data?.id === 43 || data?.id === 96
                        ? false
                        : data?.CampaignVideo?.includes('www.youtube.com') ||
                          data?.CampaignVideo?.includes('//youtu.be/')
                          ? true
                          : false
                    }
                  />
                </Col>
                <Col lg={3} className='right-col'>
                  <Categories data={data} />
                </Col>
              </Row>
            </SingleCampaignDetail>
            <VoteAndShare />
          </Container>
          <OtherCampaign shuffled={shuffledData} />
          <Footer />
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const id = context.req.url.split('/').reverse()[1];
    const data = JSON.parse(JSON.stringify(CampaignData));
    const res = data.find((obj: any) => obj.BrandURL === id);
    const shuffled = data.sort(() => 0.5 - Math.random());
    const shuffledData = shuffled.slice(0, 5);
    return {
      props: {
        data: res || null,
        shuffledData: shuffledData,
      },
    };
  } catch (err: any) {
    /*eslint no-empty: "error"*/
  }
}
