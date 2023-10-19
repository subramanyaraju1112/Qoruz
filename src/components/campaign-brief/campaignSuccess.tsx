import Main, {
  CampaignSuccess,
  Wrapper,
} from '@qoruz/components/campaign-brief/CampaignBrief.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-grid-system';

import popupStylesS from './custom-success-popup.module.css';

const CampaignBriefSuccess = (props: any) => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setShowSuccess(props.showSuccess);
  }, [props.showSuccess]);

  return (
    <>
      <Main
        style={{
          visibility: showSuccess ? 'visible' : 'hidden',
          opacity: showSuccess ? '1' : '0',
        }}
        className={popupStylesS.overlayS}
      >
        <Wrapper className={popupStylesS.popupS}>
          <Container>
            <CampaignSuccess>
              <Image
                src={joinS3('images/campaign-brief/success.svg')}
                alt='success'
                width={51}
                height={50}
              />
              <h3>Thanks for submitting your campaign brief! </h3>
              <p className='text-success'>
                We're excited to start working with you.
              </p>
            </CampaignSuccess>
          </Container>
        </Wrapper>
      </Main>
    </>
  );
};

export default CampaignBriefSuccess;
