import SemiDoughnutChart from '@qoruz/components/SemiDOughnutChart';
import ContactDetailCommercial from '@qoruz/pages/profile/contactDetailCommercial/ContactDetailCommercial';
import Faq from '@qoruz/pages/profile/faq/Faq';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import BrandCollabration from 'public/images/svg/brandCollabration';
import ContentSegments from 'public/images/svg/contentSegments';
import ContentIcon from 'public/images/svg/contentSegments';
import PlatformStats from 'public/images/svg/platformStats';
import Summary from 'public/images/svg/summary';
import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import ContentStyled, {
  ContentBlock,
  ContentHeader,
} from 'src/pages/profile/content/Content.style';

import ProfileContentAreaStyled from './ProfileContentArea.style';
import AsideStyled, {
  AsideList,
  AsideListItem,
  AsideNavBlock,
} from '../aside/Aside.style';
import BrandCollaborations from '../brandCollaborations/BrandCollaborations';
import CollabrateNow from '../collabrateNow/CollabrateNow';
import InstagramEngagement from '../instagramEngagement/InstagramEngagement';
import PeopleViewed from '../peopleViewed/PeopleViewed';
import ProfileStatistics from '../profileStatistics/ProfileStatistics';
import TrendingSearches from '../trendingSearches/TrendingSearches';

const summaryData = [
  {
    title: 'Platform stats',
    icon: <PlatformStats />,
    link: '#statistics',
  },
  {
    title: 'Brand collabrations',
    icon: <BrandCollabration />,
    link: '#branded',
  },
  {
    title: 'Content segments',
    icon: <ContentSegments />,
    link: '#content',
  },
];

const formatContentData = (data: any) => {
  return data?.map((item: any) => {
    return {
      score: parseFloat(item.score.toFixed(2)),
      category_id: item.category_id,
      name: item.name,
    };
  });
};
function getColors(
  formattedData: {
    score: number;
    category_id: number | number[];
    name: string;
  }[]
): string[] {
  const colors = [
    '#4FC7BF',
    '#98CD7E',
    '#FF6B57',
    '#FF8957',
    '#FFAB5D',
    '#FFC85E',
  ];
  const colorsLength = Math.min(formattedData?.length, colors?.length);
  const result: string[] = [];

  for (let i = 0; i < formattedData?.length; i++) {
    const colorIndex = i % colorsLength;
    result.push(colors[colorIndex]);
  }

  return result;
}

const chartColors = [
  '#4FC7BF',
  '#98CD7E',
  '#FF6B57',
  '#FF8957',
  '#FFAB5D',
  '#FFC85E',
  '#7F9EA2',
  '#97A791',
  '#B1453B',
  '#B1593B',
  '#B57F41',
  '#B89342',
];
const ProfileContentArea = ({ profileData, onChange, content }: any) => {
  const [open, setOpen] = useState(1);
  const [social, setSocial] = useState('');
  const handleOpen = (toOpen: any) => {
    toOpen == open ? setOpen(1) : setOpen(toOpen);
  };
  useEffect(() => {
    const platform = window.location.href.split('/').reverse()[0];
    setSocial(platform);
    if (platform === 'youtube') {
      setOpen(3);
      onChange('youtube');
    } else if (platform === 'instagram') {
      setOpen(2);
      onChange('instagram');
    } else if (platform === 'facebook') {
      setOpen(4);
      onChange('facebook');
    } else if (platform === 'twitter') {
      setOpen(5);
      onChange('twitter');
    } else {
      setOpen(1);
      onChange('instagram');
    }
  }, []);
  const getPlatform = (index: number) => {
    switch (index) {
      case 2:
        return 'Instagram';
      case 3:
        return 'Youtube';
      case 4:
        return 'Facebook';
      case 5:
        return 'Twitter';
      default:
        'instagram';
    }
  };
  const instaData = [
    {
      title: 'Statistics',
      icon: <PlatformStats />,
      href: '#statistics',
    },
    {
      title: 'Analytics',
      icon: <PlatformStats />,
      href: '#analytics',
    },
    {
      title: 'Content',
      icon: <ContentSegments />,
      href: '#content',
    },
    // {
    //   title: 'Audience',
    //   icon: <BrandCollabration />,
    //   href: '#audience',
    // },
    {
      title: 'Brands',
      icon: <BrandCollabration />,
      href: '#branded',
    },
    {
      title: profileData?.instagram?.username,
      icon: <ContentSegments />,
      href: '#contact',
    },
  ];
  const redirectToProfile = (handle: string, platform: string) => {
    window.open(`/@${handle}/${platform}`, '_self');
  };

  const redirectToBaseProfileUrl = (handle: string) => {
    window.open(`/@${handle}`, '_self');
  };

  const getBottomChartSections = (formattedContent: any, chartColors: any) => {
    const maxLen = formattedContent?.length;

    const final = [];
    for (let i = 0; i < maxLen; i++) {
      final.push({
        name: formattedContent[i].name,
        color: chartColors[i],
      });
    }
    return final;
  };
  return (
    <ProfileContentAreaStyled className='profile-content-area wow fadeInUp'>
      <Container className='profile-content-area-container container'>
        <Row className='profile-content-area-row'>
          <Col lg={3} xl={2.4} className='sticky-aside-col'>
            <AsideStyled
              id='aside'
              className='aside flex-column wow fadeInUp flex'
            >
              <AsideNavBlock className='aside-nav-block open wow fadeInUp'>
                <h5 className='flex items-center'>
                  <Summary />
                  <span
                    onClick={() => {
                      onChange('instagram');
                      // handleOpen(1);
                      redirectToBaseProfileUrl(`${profileData?.handle}`);
                    }}
                  >
                    Summary
                  </span>
                </h5>
                {open === 1 && (
                  <AsideList className='aside-list wow fadeInUp'>
                    {summaryData?.map((item, index) => (
                      <AsideListItem
                        className='aside-list-item wow fadeInUp flex items-center'
                        key={`faq-item-${index}`}
                      >
                        {item.icon}
                        <Link
                          href={item?.link || ''}
                          style={{ textDecoration: 'none' }}
                        >
                          <span>{item.title}</span>
                        </Link>
                      </AsideListItem>
                    ))}
                  </AsideList>
                )}
              </AsideNavBlock>

              <AsideNavBlock className='aside-nav-block wow fadeInUp'>
                <h5
                  className='flex items-center'
                  onClick={() => {
                    // onChange('instagram');
                    // handleOpen(2);
                    redirectToProfile(`${profileData?.handle}`, 'instagram');
                  }}
                >
                  <Image
                    src={joinS3('images/profile/profile-insta.svg')}
                    alt='instagram'
                    width={20}
                    height={20}
                  />
                  <span>
                    {profileData?.instagram?.username || profileData?.handle}
                  </span>
                </h5>
                {open === 2 && (
                  <AsideList
                    className='aside-list wow fadeInUp'
                    onClick={() => null}
                  >
                    {instaData?.map((item, index) => (
                      <Link
                        href={item?.href || '#'}
                        key={`faq-item-${index}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <AsideListItem className='aside-list-item wow fadeInUp flex items-center'>
                          {item.icon}
                          <span>{item.title}</span>
                        </AsideListItem>
                      </Link>
                    ))}
                  </AsideList>
                )}
              </AsideNavBlock>
              <AsideNavBlock className='aside-nav-block wow fadeInUp'>
                <h5
                  className='flex items-center'
                  onClick={() => {
                    // onChange('youtube');
                    // handleOpen(3);
                    redirectToProfile(`${profileData?.handle}`, 'youtube');
                  }}
                >
                  <Image
                    src={joinS3('images/profile/profile-youtube.svg')}
                    alt='youtube'
                    width={20}
                    height={20}
                  />
                  <span>
                    {profileData?.instagram?.username || profileData?.handle}
                  </span>
                </h5>
                {open === 3 && (
                  <AsideList className='aside-list wow fadeInUp'>
                    {instaData?.map((item, index) => (
                      <Link
                        href={item?.href || '#'}
                        key={`faq-item-${index}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <AsideListItem className='aside-list-item wow fadeInUp flex items-center'>
                          {item.icon}
                          <span>{item.title}</span>
                        </AsideListItem>{' '}
                      </Link>
                    ))}
                  </AsideList>
                )}
              </AsideNavBlock>
              <AsideNavBlock className='aside-nav-block wow fadeInUp'>
                <h5
                  className='flex items-center'
                  onClick={() => {
                    onChange('facebook');
                    handleOpen(4);
                  }}
                >
                  <Image
                    src={joinS3('images/profile/profile-fb.svg')}
                    alt='facebok'
                    width={20}
                    height={20}
                  />
                  <span>
                    {profileData?.instagram?.username || profileData?.handle}
                  </span>
                </h5>
                {open === 4 && (
                  <AsideList className='aside-list wow fadeInUp'>
                    {instaData?.map((item, index) => (
                      <Link
                        href={item?.href || '#'}
                        key={`faq-item-${index}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <AsideListItem className='aside-list-item wow fadeInUp flex items-center'>
                          {item.icon}
                          <span>{item.title}</span>
                        </AsideListItem>
                      </Link>
                    ))}
                  </AsideList>
                )}
              </AsideNavBlock>
              <AsideNavBlock className='aside-nav-block wow fadeInUp'>
                <h5
                  className='flex items-center'
                  onClick={() => {
                    onChange('twitter');
                    handleOpen(5);
                  }}
                >
                  <Image
                    src={joinS3('images/profile/profile-twitter.svg')}
                    alt='twitter'
                    width={20}
                    height={20}
                  />
                  <span>
                    {profileData?.instagram?.username || profileData?.handle}
                  </span>
                </h5>
                {open === 5 && (
                  <AsideList className='aside-list wow fadeInUp'>
                    {instaData?.map((item, index) => (
                      <Link
                        href={item?.href || '#'}
                        key={`faq-item-${index}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <AsideListItem className='aside-list-item wow fadeInUp flex items-center'>
                          {item.icon}
                          <span>{item.title}</span>
                        </AsideListItem>
                      </Link>
                    ))}
                  </AsideList>
                )}
              </AsideNavBlock>
            </AsideStyled>
          </Col>
          <Col lg={5.5} xl={6.4} className='center-area flex-column flex'>
            {open == 1 ? (
              <ProfileStatistics data={profileData} />
            ) : (
              <>
                <InstagramEngagement
                  imageName='engagement'
                  data={profileData}
                  platform={getPlatform(open)}
                />
                <h3 className='heading-analytics' id='analytics'>
                  <Image
                    src={joinS3('images/profile/statistics.svg')}
                    alt='analytics'
                    width={20}
                    height={20}
                  />
                  {profileData?.name}{' '}
                  {social.charAt(0).toUpperCase() + social.slice(1)} Analytics
                </h3>
                {/* <InstagramEngagement imageName='audience' />
                <InstagramEngagement imageName='group' /> */}
              </>
            )}
            <ContentBlock
              className='content-block flex-column flex'
              id='content'
              style={{ scrollMarginTop: '20px' }}
            >
              <ContentStyled className='content flex-column wow fadeInUp flex'>
                <ContentHeader className='content-header wow fadeInUp flex items-center justify-between'>
                  <h4 className='flex items-center'>
                    <ContentIcon />
                    Content Break Down
                  </h4>
                  {content && (
                    <SemiDoughnutChart
                      data={formatContentData(content)}
                      colors={chartColors}
                      thickness='120%'
                      radius='70%'
                    />
                  )}
                </ContentHeader>
              </ContentStyled>
              <div className='chart-value flex'>
                {getBottomChartSections(
                  formatContentData(content),
                  chartColors
                )?.map((item: any, index: any) => (
                  <span key={index} className='flex'>
                    <svg
                      width='14'
                      height='16'
                      viewBox='0 0 14 16'
                      fill={item.color}
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 0.57735C6.6188 0.220085 7.3812 0.220085 8 0.57735L12.9282 3.42265C13.547 3.77992 13.9282 4.44017 13.9282 5.1547V10.8453C13.9282 11.5598 13.547 12.2201 12.9282 12.5774L8 15.4226C7.3812 15.7799 6.6188 15.7799 6 15.4226L1.0718 12.5774C0.452995 12.2201 0.0717969 11.5598 0.0717969 10.8453V5.1547C0.0717969 4.44017 0.452995 3.77992 1.0718 3.42265L6 0.57735Z'
                        fill={item.color}
                      />
                    </svg>
                    {item.name}
                  </span>
                ))}
              </div>
            </ContentBlock>
            {/* {content && <Content />} */}

            <BrandCollaborations />
            <ContactDetailCommercial data={profileData} />
            <CollabrateNow
              influencerName={profileData?.name}
              imageUrl={profileData?.profile_image}
            />
            <Faq profileData={profileData} />
          </Col>
          <Col lg={3.5} xl={3.2} className='flex-column sidebar flex'>
            <PeopleViewed />
            <TrendingSearches />
          </Col>
        </Row>
      </Container>
    </ProfileContentAreaStyled>
  );
};

export default ProfileContentArea;
