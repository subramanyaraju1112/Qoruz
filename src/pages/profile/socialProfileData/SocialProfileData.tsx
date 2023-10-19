import ProfileDataStyled, {
  SocialData,
  SocialPlatformData,
} from '@qoruz/pages/profile/socialProfileData/SocialProfileData.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import { formatDecimal } from '@qoruz/utils/formatDecimal';
import { formatLargeNumber } from '@qoruz/utils/formatLargeNumber';
import Image from 'next/image';
import React from 'react';

const SocialProfileData = ({ data, platform }: any) => {
  return (
    <ProfileDataStyled id='statistics'>
      <div className='heading-engagement flex'>
        <Image
          src={joinS3('images/profile/engagement.svg')}
          alt='social engagement'
          width={20}
          height={20}
        />
        {data?.name} {platform} Statistics
      </div>
      <SocialData>
        {data?.[platform?.toLowerCase()]?.score ? (
          <div className='datainfo'>
            <Image
              src={joinS3('images/profile/qoruz-score.svg')}
              alt='qoruz-score'
              width={29}
              height={32}
            />
            <p className='data'>
              Qoruz Score
              <Image
                src={joinS3('images/common/info.svg')}
                alt='qoruz-info'
                width={12}
                height={12}
              />
            </p>
            <p className='data-info'>
              {formatDecimal(data?.[platform?.toLowerCase()]?.score)}
              <br /> <span className='score-info'>top 1% in category</span>
            </p>
          </div>
        ) : null}
        {(data?.[platform?.toLowerCase()]?.followers_count ||
          data?.[platform?.toLowerCase()]?.subscriber_count) && (
          <div className='datainfo'>
            <Image
              src={joinS3('images/profile/followers.svg')}
              alt='qoruz-score'
              width={32}
              height={32}
            />
            <p className='data'>
              {platform == 'Youtube' ? 'Subscribers' : 'Followers'}
            </p>
            <p className='data-info'>
              {platform == 'Instagram' &&
                formatLargeNumber(
                  data[platform?.toLowerCase()]?.followers_count
                )}
              {platform == 'Youtube' &&
                formatLargeNumber(
                  data[platform?.toLowerCase()]?.subscriber_count
                )}
              {platform == 'Facebook' &&
                formatLargeNumber(data[platform?.toLowerCase()]?.page_likes)}
              {platform == 'Twitter' && '-'}
              <br /> <span className='score-info'>million users</span>
            </p>
          </div>
        )}
        {data?.[platform?.toLowerCase()]?.user_react && (
          <div className='datainfo'>
            <Image
              src={joinS3('images/profile/user-reach.svg')}
              alt='qoruz-score'
              width={32}
              height={32}
            />
            <p className='data'>
              User Reach
              <Image
                src={joinS3('images/common/info.svg')}
                alt='qoruz-info'
                width={12}
                height={12}
              />
            </p>
            <p className='data-info'>
              8.5m
              <br /> <span className='score-info'>approx. audience</span>
            </p>
          </div>
        )}
        {data?.instagram?.average_likes && (
          <div className='datainfo'>
            <Image
              src={joinS3('images/profile/likes-com.svg')}
              alt='qoruz-score'
              width={32}
              height={32}
            />
            <p className='data'>Likes : comm</p>
            <p className='data-info'>
              {formatDecimal(
                data?.instagram?.average_likes /
                  data?.instagram?.average_comments
              )}
              <br /> <span className='score-info'> per 100 likes</span>
            </p>
          </div>
        )}
      </SocialData>
      <SocialPlatformData>
        <div className='method-detail flex'>
          <Image
            src={joinS3('images/profile/post.svg')}
            alt='social engagement'
            width={20}
            height={20}
          />
          Posts
        </div>
        <div className='post-detail-card'>
          <div className='card-info'>
            <Image
              src={joinS3('images/profile/views.svg')}
              alt='average view'
              width={16}
              height={16}
            />
            <div className='info-text'>
              <p className='info-heading'>Avg. Views</p>
              <p className='score-info'>1.6m</p>
            </div>
          </div>
          <div className='card-info'>
            <Image
              src={joinS3('images/profile/social-follower.svg')}
              alt='average view'
              width={18}
              height={18}
            />
            <div className='info-text'>
              <p className='info-heading'>
                Followers
                <Image
                  src={joinS3('images/common/info.svg')}
                  alt='qoruz-info'
                  width={12}
                  height={12}
                />
              </p>
              <p className='score-info'>56.7m</p>
            </div>
          </div>
          <div className='card-info'>
            <Image
              src={joinS3('images/profile/like.svg')}
              alt='average view'
              width={12}
              height={12}
            />
            <div className='info-text'>
              <p className='info-heading'>Avg. Likes</p>
              <p className='score-info'>782.4k</p>
            </div>
          </div>
          <div className='card-info'>
            <Image
              src={joinS3('images/profile/message.svg')}
              alt='average view'
              width={12}
              height={12}
            />
            <div className='info-text'>
              <p className='info-heading'>Avg. Comments</p>
              <p className='score-info'>3.9k</p>
            </div>
          </div>
          <div className='card-info'>
            <Image
              src={joinS3('images/profile/social-engagements.svg')}
              alt='average view'
              width={16}
              height={16}
            />
            <div className='info-text'>
              <p className='info-heading'>
                Engagement
                <Image
                  src={joinS3('images/common/info.svg')}
                  alt='qoruz-info'
                  width={12}
                  height={12}
                />
              </p>
              <p className='score-info'>1.39%</p>
            </div>
          </div>
        </div>
      </SocialPlatformData>
      {data?.instagram?.reels && (
        <SocialPlatformData>
          <div className='method-detail flex'>
            <Image
              src={joinS3('images/profile/reels.svg')}
              alt='social engagement'
              width={20}
              height={20}
            />
            Reels
          </div>
          <div className='post-detail-card'>
            <div className='card-info'>
              <Image
                src={joinS3('images/profile/views.svg')}
                alt='average view'
                width={16}
                height={16}
              />
              <div className='info-text'>
                <p className='info-heading'>Avg. Views</p>
                <p className='score-info'>1.6m</p>
              </div>
            </div>
            <div className='card-info'>
              <Image
                src={joinS3('images/profile/like.svg')}
                alt='average view'
                width={12}
                height={12}
              />
              <div className='info-text'>
                <p className='info-heading'>Avg. Likes</p>
                <p className='score-info'>782.4k</p>
              </div>
            </div>
            <div className='card-info'>
              <Image
                src={joinS3('images/profile/message.svg')}
                alt='average view'
                width={12}
                height={12}
              />
              <div className='info-text'>
                <p className='info-heading'>Avg. Comments</p>
                <p className='score-info'>3.9k</p>
              </div>
            </div>
          </div>
        </SocialPlatformData>
      )}
      {data?.instagram?.reels && (
        <SocialPlatformData>
          <div className='method-detail flex'>
            <Image
              src={joinS3('images/profile/videos.svg')}
              alt='social engagement'
              width={20}
              height={20}
            />
            Videos
          </div>
          <div className='post-detail-card'>
            <div className='card-info'>
              <Image
                src={joinS3('images/profile/views.svg')}
                alt='average view'
                width={16}
                height={16}
              />
              <div className='info-text'>
                <p className='info-heading'>Avg. Views</p>
                <p className='score-info'>1.6m</p>
              </div>
            </div>
            <div className='card-info'>
              <Image
                src={joinS3('images/profile/like.svg')}
                alt='average view'
                width={12}
                height={12}
              />
              <div className='info-text'>
                <p className='info-heading'>Avg. Likes</p>
                <p className='score-info'>782.4k</p>
              </div>
            </div>
            <div className='card-info'>
              <Image
                src={joinS3('images/profile/message.svg')}
                alt='average view'
                width={12}
                height={12}
              />
              <div className='info-text'>
                <p className='info-heading'>Avg. Comments</p>
                <p className='score-info'>3.9k</p>
              </div>
            </div>
          </div>
        </SocialPlatformData>
      )}
    </ProfileDataStyled>
  );
};

export default SocialProfileData;
