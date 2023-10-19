import YouTubePlayer from '@qoruz/components/YoutubePlayer';
import { ContentWrapper } from '@qoruz/pages/creator-campaigns/influencer-campaign/influencerCampaign.style';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const getYouTubeVideoId = (url: any) => {
  let videoIdf = null;

  // Regular expressions to extract the video ID
  const patterns = [
    /(?:https?:\/\/(?:www\.)?)?youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/(?:www\.)?)?youtube\.com\/(?:embed\/|v\/|watch\?v=)([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const matches = url?.match(pattern);
    if (matches && matches.length >= 2) {
      videoIdf = matches[1];
      break;
    }
  }

  return videoIdf;
};

const Hero = ({
  objective,
  strategy,
  link,
  isVideo,
  InfluencersName,
  QoruzProfileURL,
}: any) => {
  const [names, setNames] = useState<string[]>([]);
  const [purls, setPurls] = useState<string[]>([]);
  useEffect(() => {
    // Split the value by comma and remove any leading/trailing spaces
    const parsedNames = InfluencersName.split(',').map((name: string) =>
      name.trim()
    );
    const parsedPurls = QoruzProfileURL.split(',').map((purls: string) =>
      purls.trim()
    );

    setNames(parsedNames);
    setPurls(parsedPurls);
  }, [InfluencersName, QoruzProfileURL]);

  return (
    <ContentWrapper>
      <div className='hero'>
        {isVideo ? (
          <YouTubePlayer videoId={getYouTubeVideoId(link?.toString())} />
        ) : (
          <Image
            className='hero-image'
            src={link}
            alt='hero-image'
            width={792}
            height={437}
          />
        )}
      </div>
      <div className='pill-container'>
        <div className='pill-wrapper'>
          {names.map((name, index) => (
            <a
              href={purls[index]}
              target='_blank'
              rel='noopener noreferrer'
              key={name}
              className='profile-url'
            >
              <div className='pill'>
                <p className='name'>{name}</p>
                <Image
                  alt='tick'
                  src='/images/Influencer-Campaign/tick-icon_l6jgnm.png'
                  width={16}
                  height={16}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className='summary'>
        <p>{objective}</p>
        <p>{strategy}</p>
      </div>
    </ContentWrapper>
  );
};

export default Hero;
