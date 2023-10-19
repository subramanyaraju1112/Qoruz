import Button from '@qoruz/components/Button';
import CampaignBrief from '@qoruz/components/campaign-brief/CampaignBrief';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';

import QoruzPaidStyled, {
  Dot,
  HeroCTA,
  InnerOrbit,
  Intro,
  MiddleOrbit,
  OrbitWrapper,
  OuterOrbit,
  Reels,
  Video,
} from './QoruzPaid.style';

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const QoruzPaid = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const textState = useMemo(() => ['istyping', 'isdeleting'], []);
  const [shownText, setShownText] = useState('');
  const [typing, setTyping] = useState(textState[0]);
  const texts = ['Rapid', 'Scalable', 'Predictable'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[currentIndex]);
  const [openForm, setOpenForm] = useState(false);

  const popupCloseHandler = (e: any) => {
    setOpenForm(e);
    document.body.classList.remove('stop-scroll-body');
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (shownText.length == 1) {
        const settingIndex =
          currentIndex + 1 == texts.length ? 0 : currentIndex + 1;
        setCurrentText(texts[settingIndex]);
        setCurrentIndex(settingIndex);
        setShownText(texts[settingIndex].slice(0, 1));
      } else {
        setShownText(currentText.slice(0, shownText.length));
      }
    }, 100);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shownText]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === 'istyping' && shownText !== currentText) {
        setShownText(currentText.slice(0, shownText.length + 1));
      } else if (shownText === currentText && typing === 'istyping') {
        sleep(2000).then(() => {
          setTyping(textState[1]);
        });
      } else if (
        (shownText === currentText && typing === 'isdeleting') ||
        typing === 'isdeleting'
      ) {
        setShownText(currentText.slice(0, shownText.length - 1));
        if (shownText.length <= 2) {
          setTyping(textState[0]);
        }
      }
    }, 100);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shownText, textState, typing]);

  return (
    <QoruzPaidStyled className='qoruz-paid' id='paid-collab'>
      <Container className='container'>
        <Row className='row'>
          <Col sm={12} lg={5} xxl={5}>
            <Intro className='qoruz-paid-intro'>
              <h1>
                Run <span className='typewriter'>{shownText}</span> <br />
                Influencers Campaigns.
              </h1>
              <p className='lead'>
                Push your campaign live in less than 5 days.
              </p>
              <HeroCTA className='hero-cta flex-column flex-center inline-flex'>
                <Button
                  type='button'
                  className='theme'
                  size='lg'
                  showIcon={true}
                  onClick={() => {
                    setOpenForm(true);
                  }}
                >
                  Post a campaign brief
                </Button>
              </HeroCTA>
            </Intro>
          </Col>
          <Col sm={12} lg={7} xxl={7} className='orbit-column'>
            <OrbitWrapper className='orbit-wrapper flex-center flex'>
              <OuterOrbit className='outter-orbit flex-center flex'>
                <Dot className='dot dot-yellow' />
                <Dot className='dot dot-green' />
                <Dot className='dot dot-blue' />
              </OuterOrbit>
              <MiddleOrbit className='middle-orbit flex-center flex '></MiddleOrbit>
              <InnerOrbit className='inner-orbit orbit-path flex-center flex'></InnerOrbit>
            </OrbitWrapper>
            <Reels className='reels'>
              <Video className='video'>
                <video
                  loop
                  muted
                  autoPlay
                  onClick={(e) => {
                    if (isVideoPlaying) {
                      e.currentTarget.pause();
                      setIsVideoPlaying(false);
                    } else {
                      e.currentTarget.play();
                      setIsVideoPlaying(true);
                    }
                  }}
                >
                  <source src='https://d1ks0pavw8unez.cloudfront.net/public/videos/sample.mp4' />
                </video>
                {!isVideoPlaying ? (
                  <div
                    className='play-button'
                    onClick={(e) => {
                      e.currentTarget.parentNode
                        ?.querySelector('video')
                        ?.play();
                      setIsVideoPlaying(true);
                    }}
                  >
                    Play
                  </div>
                ) : null}
                <Image
                  src={joinS3('images/paid-collaboration/influencers.svg')}
                  className='influencers'
                  alt='Influencers'
                  width={520}
                  height={116}
                />
              </Video>
            </Reels>
          </Col>
        </Row>
        {openForm ? (
          <CampaignBrief show={openForm} onClose={popupCloseHandler} />
        ) : null}
      </Container>
    </QoruzPaidStyled>
  );
};

export default QoruzPaid;
