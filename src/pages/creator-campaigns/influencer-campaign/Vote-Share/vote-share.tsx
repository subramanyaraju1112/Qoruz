import FacebookOutline from '@qoruz/components/svg/outline-facebook';
import InstaOutline from '@qoruz/components/svg/outline-Instagram';
import TwitterOutline from '@qoruz/components/svg/outline-twitter';
import YoutubeOutline from '@qoruz/components/svg/outline-youtube';
import VoteIcon from '@qoruz/components/svg/vote';
import { VoteShareWrapper } from '@qoruz/pages/creator-campaigns/influencer-campaign/influencerCampaign.style';
import React from 'react';

const VoteAndShare = () => {
  const handleFbShareButtonClick = () => {
    const url = encodeURIComponent(window.location.href);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookShareUrl, '_blank');
  };

  const handleIgShareButtonClick = () => {
    const url = encodeURIComponent(window.location.href);
    const caption = encodeURIComponent('Check out this amazing content!');
    const hashtags = encodeURIComponent('instagram,share');
    const instagramShareUrl = `https://www.instagram.com/?url=${url}&caption=${caption}&hashtags=${hashtags}`;
    window.open(instagramShareUrl, '_blank');
  };

  const handleTwShareButtonClick = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out this amazing content!');

    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(twitterShareUrl, '_blank');
  };

  return (
    <VoteShareWrapper>
      <div className='vote-icons'>
        <p className='vote'>Vote</p>
        <span className='vote-bundle'>
          <span className='upvote vote-icon'>
            <VoteIcon />
          </span>
          <span className='downvote vote-icon'>
            <VoteIcon />
          </span>
        </span>
      </div>
      <div className='social-media'>
        <p className='share'>Share</p>
        <span className='social-bundle'>
          <span className='social-icons' onClick={handleIgShareButtonClick}>
            <InstaOutline />
          </span>
          <span className='social-icons' onClick={handleTwShareButtonClick}>
            <TwitterOutline />
          </span>
          <span className='social-icons' onClick={handleFbShareButtonClick}>
            <FacebookOutline />
          </span>
          <YoutubeOutline />
        </span>
      </div>
    </VoteShareWrapper>
  );
};

export default VoteAndShare;
