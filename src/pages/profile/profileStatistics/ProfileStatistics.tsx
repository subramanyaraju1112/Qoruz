import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import { formatLargeNumber } from '@qoruz/utils/formatLargeNumber';
import Image from 'next/image';
import PlatformStatsIcon from 'public/images/svg/platformStats';
import React from 'react';

import ProfileStatisticsStyled, {
  PlatformStatsList,
  PlatformStatsListItem,
  ProfileStatisticsInfo,
  StatisticBlock,
  StatisticRow,
} from './ProfileStatistics.style';

const ProfileStatistics = ({ data }: any) => {
  return (
    <ProfileStatisticsStyled className='profile-statistics flex-column wow fadeInUp flex'>
      <h4 className='flex items-center'>
        <PlatformStatsIcon />
        Profile Statistics
      </h4>
      <PlatformStatsList className='profile-statistics-list wow fadeInUp flex flex-wrap'>
        {data?.instagram && (
          <PlatformStatsListItem
            className='profile-statistics-list-item flex-column wow fadeInUp flex'
            // key={`profile-statistics-${index}`}
          >
            <h3 className='profile-title flex items-center'>
              <Image
                src={joinS3('images/profile/profile-insta.svg')}
                alt=''
                width={20}
                height={20}
              />
              Instagram
            </h3>
            <StatisticBlock className='statistic-block flex-column flex'>
              {data?.instagram?.followers_count && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Followers</span>
                  </ProfileStatisticsInfo>
                  <h4>
                    {formatLargeNumber(data?.instagram?.followers_count) || '-'}
                  </h4>
                </StatisticRow>
              )}
              {data?.instagram?.average_likes && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Avg. Likes</span>
                  </ProfileStatisticsInfo>
                  <h4>
                    {formatLargeNumber(data?.instagram?.average_likes) || '-'}
                  </h4>
                </StatisticRow>
              )}
              {data?.instagram?.average_comments && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Avg. Comments</span>
                  </ProfileStatisticsInfo>
                  <h4>
                    {formatLargeNumber(data?.instagram?.average_comments) ||
                      '-'}
                  </h4>
                </StatisticRow>
              )}
              {data?.instagram?.average_views && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Avg. Views</span>
                  </ProfileStatisticsInfo>
                  <h4>
                    {formatLargeNumber(data?.instagram?.average_views) || '-'}
                  </h4>
                </StatisticRow>
              )}
              {data?.instagram?.eng_rate && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Engagement</span>
                  </ProfileStatisticsInfo>
                  <h4>{data?.instagram?.eng_rate || '-'}</h4>
                </StatisticRow>
              )}
            </StatisticBlock>
          </PlatformStatsListItem>
        )}

        {data?.youtube && (
          <PlatformStatsListItem className='profile-statistics-list-item flex-column wow fadeInUp flex'>
            <h3 className='profile-title flex items-center'>
              <Image
                src={joinS3('images/profile/profile-youtube.svg')}
                alt=''
                width={20}
                height={20}
              />
              Youtube
            </h3>
            <StatisticBlock className='statistic-block flex-column flex'>
              {data?.youtube?.subscriber_count && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Subscribers</span>
                  </ProfileStatisticsInfo>
                  <h4>
                    {formatLargeNumber(data?.youtube?.subscriber_count) || '-'}
                  </h4>
                </StatisticRow>
              )}
              {data?.youtube?.video_count && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Total Videos</span>
                  </ProfileStatisticsInfo>
                  <h4>
                    {formatLargeNumber(data?.youtube?.video_count) || '-'}
                  </h4>
                </StatisticRow>
              )}
              {data?.youtube?.average_likes && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Avg. Likes</span>
                  </ProfileStatisticsInfo>
                  <h4>
                    {formatLargeNumber(data?.youtube?.average_likes) || '-'}
                  </h4>
                </StatisticRow>
              )}
              {data?.youtube?.average_comments && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Avg. Comments</span>
                  </ProfileStatisticsInfo>
                  <h4>
                    {formatLargeNumber(data?.youtube?.average_comments) || '-'}
                  </h4>
                </StatisticRow>
              )}
              {data?.youtube?.average_views && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Avg. Views</span>
                  </ProfileStatisticsInfo>
                  <h4>
                    {formatLargeNumber(data?.youtube?.average_views) || '-'}
                  </h4>
                </StatisticRow>
              )}
            </StatisticBlock>
          </PlatformStatsListItem>
        )}

        {data?.facebook && (
          <PlatformStatsListItem className='profile-statistics-list-item flex-column wow fadeInUp flex'>
            <h3 className='profile-title flex items-center'>
              <Image
                src={joinS3('images/profile/profile-fb.svg')}
                alt=''
                width={20}
                height={20}
              />
              Facebook
            </h3>
            <StatisticBlock className='statistic-block flex-column flex'>
              {data?.facebook?.page_likes && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Followers</span>
                  </ProfileStatisticsInfo>
                  <h4>
                    {formatLargeNumber(data?.facebook?.page_likes) || '-'}
                  </h4>
                </StatisticRow>
              )}
              {data?.facebook?.average_likes && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Avg. Likes</span>
                  </ProfileStatisticsInfo>
                  <h4>{formatLargeNumber(data?.facebook?.average_likes)}</h4>
                </StatisticRow>
              )}
              {data?.facebook?.average_comments && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Avg. comments</span>
                  </ProfileStatisticsInfo>
                  <h4>{formatLargeNumber(data?.facebook?.average_comments)}</h4>
                </StatisticRow>
              )}
              {/* <StatisticRow className='statistic-row flex items-center justify-between'>
              <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                <Image
                  src={transformUrl('profile/like_yptyiv.svg')}
                  alt='like'
                  width={16}
                  height={16}
                />
                <span>Avg. Shares</span>
              </ProfileStatisticsInfo>
              <h4>-</h4>
            </StatisticRow> */}
            </StatisticBlock>
          </PlatformStatsListItem>
        )}

        {data?.twitter && (
          <PlatformStatsListItem className='profile-statistics-list-item flex-column wow fadeInUp flex'>
            <h3 className='profile-title flex items-center'>
              <Image
                src={joinS3('images/profile/profile-twitter.svg')}
                alt=''
                width={20}
                height={20}
              />
              Twitter
            </h3>
            <StatisticBlock className='statistic-block flex-column flex'>
              {/* <StatisticRow className='statistic-row flex items-center justify-between'>
              <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                <Image
                  src={transformUrl('profile/like_yptyiv.svg')}
                  alt='like'
                  width={16}
                  height={16}
                />
                <span>Followers</span>
              </ProfileStatisticsInfo>
              <h4>-</h4>
            </StatisticRow> */}
              {data?.twitter?.average_favorites && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Avg. Favourites</span>
                  </ProfileStatisticsInfo>
                  <h4>
                    {formatLargeNumber(data?.twitter?.average_favorites) || '-'}
                  </h4>
                </StatisticRow>
              )}
              {data?.twitter?.average_retweets && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Avg. Retweets</span>
                  </ProfileStatisticsInfo>
                  <h4>
                    {formatLargeNumber(data?.twitter?.average_retweets) || '-'}
                  </h4>
                </StatisticRow>
              )}
              {data?.twitter?.eng_rate && (
                <StatisticRow className='statistic-row flex items-center justify-between'>
                  <ProfileStatisticsInfo className='profile-statistics-info flex items-center'>
                    <Image
                      src={joinS3('images/profile/like.svg')}
                      alt='like'
                      width={16}
                      height={16}
                    />
                    <span>Engagement</span>
                  </ProfileStatisticsInfo>
                  <h4>{formatLargeNumber(data?.twitter?.eng_rate) || '-'}</h4>
                </StatisticRow>
              )}
            </StatisticBlock>
          </PlatformStatsListItem>
        )}
      </PlatformStatsList>
    </ProfileStatisticsStyled>
  );
};

export default ProfileStatistics;
