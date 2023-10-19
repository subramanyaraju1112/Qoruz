/* eslint-disable indent */
import Button from '@qoruz/components/Button';
import MessageIcon from '@qoruz/components/svg/message';
import { ProfileHeroIntro } from '@qoruz/pages/profile/hero/hero.style';
import InfluencerProfile, {
  Bio,
  DetailsWrapper,
  IconBox,
  InfluencerBox,
  InfluencerDetails,
  InfluencerDetailsM,
  InfluencerPhoto,
  Message,
  MobileProfileHero,
  Name,
  Polygon,
  PolygonTool,
  ProfileStyledM,
  Stream3,
  Streams,
  UpperIcons,
} from '@qoruz/pages/profile/Influencer/influencer.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import { formatDecimal } from '@qoruz/utils/formatDecimal';
import { formatLargeNumber } from '@qoruz/utils/formatLargeNumber';
import Image from 'next/image';
import { useState } from 'react';
import { Container } from 'react-grid-system';

const WebProfile = ({ profileData: userData, platform }: any) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [moreClicked, setMoreClicked] = useState(false);
  const showFirstNWords = (paragraph: any, n: any) => {
    const words = paragraph.split(' ');
    const firstNWords = words.slice(0, n).join(' ');
    return firstNWords;
  };

  const fullBio = `Here are ${platform} account statistics for ${
    userData?.name
  }.
  The${' '}
  ${
    platform == 'instagram'
      ? 'follower'
      : platform == 'youtube'
      ? 'subscriber'
      : platform == 'facebook'
      ? 'page likes'
      : 'follower'
  }${' '}
  count on ${userData?.name}'s account is${' '}
  ${formatLargeNumber(
    platform == 'instagram'
      ? userData?.instagram?.followers_count
      : platform == 'youtube'
      ? userData?.youtube?.subscriber_count
      : platform == 'facebook'
      ? userData?.facebook?.page_likes
      : ' - '
  )}
  . The account has the majority of the following from India.
  The Qoruz score of ${userData?.name}'s account is${' '}
  ${formatDecimal(userData?.instagram?.score)}. The average no
  of video views on ${userData?.name}'s account is
  ${formatLargeNumber(
    platform == 'instagram'
      ? userData?.instagram?.average_views
      : platform == 'youtube'
      ? userData?.youtube?.average_views
      : platform == 'facebook'
      ? userData?.facebook?.average_likes
      : ' - '
  )}
  . The average number of likes on ${userData?.name}'s account
  is ${formatLargeNumber(
    userData?.instagram?.average_likes
  )} and the average number of comments on the account is${' '}
  ${formatLargeNumber(userData?.instagram?.average_comments)}.
  The majority of the posts on ${userData?.name}'s Instagram
  account fall under ${userData?.category} category.`;
  return (
    <InfluencerProfile className='influencer-profile'>
      <InfluencerPhoto>
        <Image
          src={userData?.profile_image}
          className='influencer-photo'
          alt='influencer-photo'
          width={200}
          height={200}
        />
        <PolygonTool>
          <Polygon className='flex-center listscore flex'>
            <Image
              src={joinS3('images/profile/polygon-bg.svg')}
              alt='background polygon'
              width={88}
              height={98}
              className={
                showTooltip ? 'background-polygon' : 'hide-background-polygon'
              }
            />
            <p className='polygon'>
              {formatDecimal(userData?.instagram?.score)}
            </p>
            <p className={showTooltip ? 'tool-tip' : 'hide tool-tip'}>
              <span className='heading'>Qoruz Score</span>
              <span className='paragraph'>
                Qoruz score is a single comprehensive value defining a
                influencers value.
              </span>
            </p>
          </Polygon>
          <Image
            src={joinS3('images/profile/reverse-exclamation.svg')}
            alt='indicator'
            width={16}
            height={16}
            className='absolute-exclamation'
            onClick={() => {
              setShowTooltip(!showTooltip);
            }}
          />
        </PolygonTool>
      </InfluencerPhoto>
      <InfluencerDetails
        className={`minimized ${moreClicked ? 'expanded' : ''}`}
      >
        <DetailsWrapper>
          <InfluencerBox>
            <Name>
              <p className='influencer-name'>{userData?.name}</p>
              <Image
                src={joinS3('images/profile/verified.svg')}
                className='verified-icon'
                alt='verified'
                width={85}
                height={24}
              />
            </Name>

            <p>{userData?.location}</p>

            {!moreClicked && <p>{showFirstNWords(fullBio, 23)}...</p>}

            <Bio>
              <p className={`bio minimized ${moreClicked ? 'expanded' : ''}`}>
                {fullBio}
              </p>
            </Bio>
            <p
              className='close-bio'
              onClick={() => {
                setMoreClicked(!moreClicked);
              }}
            >
              {moreClicked ? '- Close bio' : '+ Read bio'}
            </p>
            <Streams>
              <Stream3>{userData?.category}</Stream3>
            </Streams>
          </InfluencerBox>
          <IconBox className={`minimized ${moreClicked ? 'expanded' : ''}`}>
            <UpperIcons>
              <Message>
                <MessageIcon />
              </Message>
              <Button
                type='link'
                href='https://app.qoruz.com/signup'
                target='_blank'
                size='lg'
                showIcon
                variant='primary'
                showShadow
              >
                Collaborate Now
              </Button>
            </UpperIcons>
          </IconBox>
        </DetailsWrapper>
      </InfluencerDetails>
    </InfluencerProfile>
  );
};

const MobileProfile = ({ profileData: userData, platform }: any) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [moreClicked, setMoreClicked] = useState(false);
  const showFirstNWords = (paragraph: any, n: any) => {
    const words = paragraph.split(' ');
    const firstNWords = words.slice(0, n).join(' ');
    return firstNWords;
  };

  const fullBio = `Here are ${platform} account statistics for ${
    userData?.name
  }.
  The${' '}
  ${
    platform == 'instagram'
      ? 'follower'
      : platform == 'youtube'
      ? 'subscriber'
      : platform == 'facebook'
      ? 'page likes'
      : 'follower'
  }${' '}
  count on ${userData?.name}'s account is${' '}
  ${formatLargeNumber(
    platform == 'instagram'
      ? userData?.instagram?.followers_count
      : platform == 'youtube'
      ? userData?.youtube?.subscriber_count
      : platform == 'facebook'
      ? userData?.facebook?.page_likes
      : ' - '
  )}
  . The account has the majority of the following from India.
  The Qoruz score of ${userData?.name}'s account is${' '}
  ${formatDecimal(userData?.instagram?.score)}. The average no
  of video views on ${userData?.name}'s account is
  ${formatLargeNumber(
    platform == 'instagram'
      ? userData?.instagram?.average_views
      : platform == 'youtube'
      ? userData?.youtube?.average_views
      : platform == 'facebook'
      ? userData?.facebook?.average_likes
      : ' - '
  )}
  . The average number of likes on ${userData?.name}'s account
  is ${formatLargeNumber(
    userData?.instagram?.average_likes
  )} and the average number of comments on the account is${' '}
  ${formatLargeNumber(userData?.instagram?.average_comments)}.
  The majority of the posts on ${userData?.name}'s Instagram
  account fall under ${userData?.category} category.`;
  return (
    <ProfileStyledM className='start-exploring'>
      <MobileProfileHero>
        <Container className='first container'>
          <ProfileHeroIntro className='start-exploring-info flex-column flex'></ProfileHeroIntro>
        </Container>
      </MobileProfileHero>
      <div className='image-section flex'>
        <InfluencerPhoto>
          <Image
            src={userData?.profile_image}
            className='influencer-photo'
            alt='influencer-photo'
            width={200}
            height={200}
          />
          <PolygonTool>
            <Polygon className='flex-center listscore flex'>
              <Image
                src={joinS3('images/profile/polygon-bg.svg')}
                alt='background polygon'
                width={88}
                height={98}
                className={
                  showTooltip ? 'background-polygon' : 'hide-background-polygon'
                }
              />
              <p className='polygon'>
                {formatDecimal(userData?.instagram?.score)}
              </p>
              <p className={showTooltip ? 'tool-tip' : 'hide tool-tip'}>
                <span className='heading'>Qoruz Score</span>
                <span className='paragraph'>
                  Qoruz score is a single comprehensive value defining a
                  influencers value.
                </span>
              </p>
            </Polygon>
            <Image
              src={joinS3('images/profile/reverse-exclamation.svg')}
              alt='indicator'
              width={16}
              height={16}
              className='absolute-exclamation'
              onClick={() => {
                setShowTooltip(!showTooltip);
              }}
            />
          </PolygonTool>
        </InfluencerPhoto>
      </div>
      <InfluencerDetailsM>
        <p className='influencer-name'>
          {userData?.name}
          <Image
            src={joinS3('images/profile/verified-old.svg')}
            className='verified-icon'
            alt='verified'
            width={85}
            height={24}
          />
        </p>
        <UpperIcons className='collaborate-button'>
          <Message>
            <MessageIcon />
          </Message>
          <Button
            type='link'
            href='https://app.qoruz.com/signup'
            size='lg'
            showIcon
            showShadow
            style={{ color: 'black' }}
          >
            Collaborate Now
          </Button>
        </UpperIcons>
        {!moreClicked && (
          <p style={{ marginTop: 10, color: '#000000b3' }}>
            {showFirstNWords(fullBio, 23)}...
          </p>
        )}

        <Bio>
          <p className={`bio minimized ${moreClicked ? 'expanded' : ''}`}>
            {fullBio}
          </p>
        </Bio>
        <p
          className='close-bio'
          onClick={() => {
            setMoreClicked(!moreClicked);
          }}
        >
          {moreClicked ? '- Close bio' : '+ Read bio'}
        </p>

        <p style={{ marginBottom: 10, marginTop: 10 }}>{userData?.location}</p>
        <Streams>
          <Stream3>{userData?.category}</Stream3>
        </Streams>
      </InfluencerDetailsM>
    </ProfileStyledM>
  );
};

const Influencer = ({ profileData: userData, platform }: any) => {
  return (
    <>
      <WebProfile profileData= {userData} platform={platform}/>
      <MobileProfile  profileData= {userData} platform={platform}/>
    </>
  );
};

export default Influencer;
// export { MobileProfile, WebProfile };
