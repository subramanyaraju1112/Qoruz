import Button from '@qoruz/components/Button';
import ComingSoon from '@qoruz/components/coming-soon';
import MessageIcon from '@qoruz/components/svg/message';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import { formatDecimal } from '@qoruz/utils/formatDecimal';
import { formatLargeNumber } from '@qoruz/utils/formatLargeNumber';
import Image from 'next/image';
import Link from 'next/link';
import { withRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';

import InfluencerDetailsStyled, {
  CuratedCategory,
  CuratedSearch,
  CuratedSidebar,
  InfluencerCardStyled,
  InfluencerCardStyledM,
  InfluencerDetailsStyledM,
  LoadContainer,
  Polygon,
  PopularCreator,
} from './InfluencerDetails.style';

const Categories = [
  {
    id: 1,
    category: 'Entertainment',
    value: '45',
    url: '/find-influencers/best-meme-pages-instagram-india',
  },
  {
    id: 2,
    category: 'Marketing',
    value: '32',
    url: '/find-influencers/top-digital-content-creator-india ',
  },
  {
    id: 3,
    category: 'Movies',
    value: '35',
    url: '/find-influencers/top-movie-bloggers-india-instagram',
  },
  {
    id: 4,
    category: 'Digital Arts',
    value: '21',
    url: '/find-influencers/top-art-influencers-instagram-india',
  },
  {
    id: 5,
    category: 'Science',
    value: '21',
    url: '/find-influencers/top-cybersecurity-influencers-instagram',
  },
  {
    id: 6,
    category: 'Fashion',
    value: '26',
    url: '/find-influencers/top-beautiful-instagram-models-female-india',
  },
  {
    id: 7,
    category: 'Fitness',
    value: '25',
    url: '/find-influencers/top-gym-models-male-india',
  },
  {
    id: 8,
    category: 'Food',
    value: '15',
    url: '/find-influencers/top-delhi-food-vloggers-youtube',
  },
];

const Populars = [
  {
    id: 1,
    image: joinS3('images/top-creators/saloni-sehra.jpg'),
    name: 'Saloni Sehra',
    category: 'Beauty',
    score: 8.13,
    url: '/profile?handle=saloniseh&platform=instagram',
  },
  {
    id: 2,
    image: joinS3('images/top-creators/anunay-sood.jpeg'),
    name: 'AnunaySood',
    category: 'Travel',
    score: 8.97,
    url: '/profile?handle=anunaysood&platform=instagram',
  },
  {
    id: 3,
    image: joinS3('images/top-creators/isa-khan.jpg'),
    name: 'Isa Khan',
    category: 'Travel',
    score: 8.53,
    url: '/profile?handle=khan.isa_1&platform=instagram',
  },
  {
    id: 4,
    image: joinS3('images/top-creators/karron-dhingra.jpg'),
    name: 'Karron Dhingra',
    category: 'Fashion',
    score: 8.72,
    url: '/profile?handle=theformaledit&platform=instagram',
  },
  {
    id: 5,
    image: joinS3('images/top-creators/rohit-khandelwal.jpg'),
    name: 'Rohit Fhandelwal',
    category: 'Health & Fitness',
    score: 8.55,
    url: '/profile?handle=rohit_khandelwal77&platform=instagram',
  },
];

const formatCategories = (value: string) => {
  //only returning upto 2 values, because design breaks
  return value ? value.split(',').slice(0, 2) : [];
};

const InfluencerDetails = ({ data }: any) => {
  const [list, setList] = useState<any>(null);
  const [listStatus, setListStatus] = useState(0);
  const [mobileActive, setMobileActive] = useState(false);
  const [activeTab, setActiveTab] = useState<any>(1);

  const profiles = useMemo(() => {
    if (data) {
      return data.curated_list[0].curated_list_profiles;
    }
  }, [data]);

  const platform = useMemo(() => {
    if (data) {
      return data.curated_list[0].platform;
    }
  }, [data]);

  const status = useMemo(() => {
    if (data) {
      return 1;
    } else {
      return -1;
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 991) {
        setMobileActive(true);
      } else {
        setMobileActive(false);
      }
    });
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      window.removeEventListener('resize', () => {});
    };
  }, [mobileActive]);

  useEffect(() => {
    if (window.innerWidth < 991) {
      setMobileActive(true);
    } else {
      setMobileActive(false);
    }
  }, []);

  const redirectToProfile = (handle: string, platform: string) => {
    window.open(`/@${handle}`, '_self');
  };

  useEffect(() => {
    fetch('https://data.qoruz.com/api/curatedList/getList', {
      method: 'GET',
    })
      .then((res) => {
        res.json().then((response) => {
          setList(response.data.curated_list_seo);
          setListStatus(1);
        });
      })
      .catch(() => {
        setListStatus(-1);
      });
  }, []);
  // useWOW();
  {
    return status == 1 && !mobileActive ? (
      <InfluencerDetailsStyled className='influencer-details wow fadeInUp'>
        <Container className='container'>
          <Row className='influencer-row'>
            <Col lg={9}>
              <div className='detailed-list'>
                {profiles
                  .sort((a: any, b: any) => {
                    return (
                      b[platform]?.followers_count -
                      a[platform]?.followers_count
                    );
                  })
                  .map(
                    (profile: any, index: any) =>
                      index <= 9 && (
                        <InfluencerCardStyled
                          className='wow fadeInUp flex'
                          key={`infl-detail-${index}`}
                          onClick={() =>
                            redirectToProfile(
                              `${profile?.profile?.handle}`,
                              'instagram'
                            )
                          }
                        >
                          <Image
                            className='popular-image'
                            src={
                              profile.profile.profile_image &&
                              profile.profile.profile_image
                            }
                            width={100}
                            height={100}
                            alt={profile.profile.name}
                            style={{
                              objectFit: 'cover',
                            }}
                          />
                          <Polygon className='polygon flex-center listscore flex'>
                            {formatDecimal(profile[platform]?.score)}
                          </Polygon>
                          <div className='wfull'>
                            <div className='curated-details flex justify-between'>
                              <div className='infl-content'>
                                <h4>
                                  {/* <Link
                                    target='_self'
                                    href={`https://app.qoruz.com/profile/${profile.profile.handle}`}
                                    className='name'
                                    onClick={(e) => {
                                      e.stopPropagation();
                                    }}
                                  > */}
                                  {profile?.profile?.name}
                                  {/* </Link> */}
                                  {profile?.[platform]?.verified_at && (
                                    <span className='iconvrfy'>
                                      <Image
                                        className='verifyicon'
                                        src={joinS3('images/common/verify.svg')}
                                        alt='verify icon'
                                        width={18}
                                        height={18}
                                      />{' '}
                                      <span className='verified-text'>
                                        Verified
                                      </span>
                                    </span>
                                  )}
                                </h4>
                                <p className='location'>
                                  {profile[platform]?.location}
                                </p>
                                <Link
                                  target='_blank'
                                  href={`https://app.qoruz.com/profile/${profile.profile.handle}`}
                                  className='social-link'
                                  onClick={(e) => {
                                    e.stopPropagation();
                                  }}
                                >
                                  <p className='social'>
                                    <span>
                                      <Image
                                        src={joinS3(
                                          'images/common/socialinsta.svg'
                                        )}
                                        alt='social icon'
                                        width={18}
                                        height={18}
                                      />
                                    </span>
                                    {profile.profile.handle}
                                  </p>
                                </Link>
                              </div>
                              <div className='btns flex'>
                                {/* <Link
                                target='_blank'
                                href={`https://app.qoruz.com/profile/${profile.profile.handle}`}
                                className='bookmark-icon'
                              >
                                <Image
                                  className='verifyicon'
                                  src={Bookmark}
                                  alt='verify icon'
                                />
                              </Link> */}
                                <Link
                                  target='_blank'
                                  href={`https://app.qoruz.com/profile/${profile.profile.handle}`}
                                  className='social-link'
                                  style={{ textDecoration: 'none' }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                  }}
                                >
                                  <Button
                                    type='button'
                                    variant='primary'
                                    size='lg'
                                    showIcon={true}
                                    icon={<MessageIcon />}
                                    iconPosition='left'
                                    showShadow
                                  >
                                    <p style={{ marginLeft: '7px' }}>
                                      {' '}
                                      Message{' '}
                                    </p>
                                  </Button>
                                </Link>
                                {/* <ButtonPrimary icon='messageIcon' text='Message' redirectUrl={InfluencerList.url} size='md'/> */}
                              </div>
                            </div>
                            <div className='curated-info flex justify-between'>
                              {profile[platform]?.profile_categories && (
                                <div className='gap flex'>
                                  {/* {formatCategories(
                              profile.instagram.profile_categories
                            ).map((item: any, index: any) => {
                              return (
                                <p className='category' key={index}>
                                  {item}
                                </p>
                              );
                            })} */}
                                  {formatCategories(
                                    profile[platform]?.profile_categories
                                  ).map((item: any, index: any) => {
                                    return (
                                      <p className='category' key={index}>
                                        {item}
                                      </p>
                                    );
                                  })}
                                </div>
                              )}
                              <div className='curd-info flex'>
                                <div className='icongap flex items-center'>
                                  <span className='icon'>
                                    <Image
                                      className='reach'
                                      src={joinS3('images/common/reach.svg')}
                                      alt='verify icon'
                                      width={16}
                                      height={16}
                                    />
                                  </span>
                                  <span className='social-detail'>
                                    {profile[platform]?.eng_rate}
                                  </span>
                                  <span className='icon'>
                                    <Image
                                      className='info'
                                      src={joinS3('images/common/info.svg')}
                                      alt='icon'
                                      width={12}
                                      height={12}
                                    />
                                  </span>
                                </div>
                                <div className='icongap flex items-center'>
                                  <span className='icon'>
                                    <Image
                                      className='reach'
                                      src={joinS3('images/common/view.svg')}
                                      alt='verify icon'
                                      width={16}
                                      height={16}
                                    />
                                  </span>
                                  <span className='social-detail'>
                                    {formatLargeNumber(
                                      profile[platform]?.average_reel_views
                                    )}
                                  </span>
                                  <span className='icon'>
                                    <Image
                                      className='info'
                                      src={joinS3('images/common/info.svg')}
                                      alt='icon'
                                      width={12}
                                      height={12}
                                    />
                                  </span>
                                </div>
                                <div className='icongap flex items-center'>
                                  <span className='icon'>
                                    <Image
                                      className='reach'
                                      src={joinS3(
                                        'images/common/followers.svg'
                                      )}
                                      alt='verify icon'
                                      width={16}
                                      height={14}
                                    />
                                  </span>
                                  <span className='social-detail'>
                                    {formatLargeNumber(
                                      profile[platform]?.followers_count
                                    )}
                                  </span>
                                  <span className='icon'>
                                    <Image
                                      className='info'
                                      src={joinS3('images/common/info.svg')}
                                      alt='icon'
                                      width={12}
                                      height={12}
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </InfluencerCardStyled>
                      )
                  )}
                <LoadContainer>
                  <Link
                    href='https://app.qoruz.com/signup'
                    target='_blank'
                    className='loadmore'
                  >
                    Load more influencers
                  </Link>
                </LoadContainer>
              </div>
            </Col>
            <Col lg={3} className='flex items-center'>
              <CuratedSidebar>
                <h3>Popular categories</h3>
                <CuratedCategory className='category-list wow fadeInUp'>
                  {Categories.map((category, index) => (
                    <li
                      key={`list-item-categories-${index}`}
                      onClick={() => window.open(category.url, '_self')}
                    >
                      <span className='cat-name'> {category.category}</span>
                      <span className='cat-val'>{category.value}</span>
                    </li>
                  ))}
                </CuratedCategory>
                <h3>Trending searches</h3>
                <CuratedSearch className='wow fadeInUp'>
                  {listStatus == 1 &&
                    list.slice(0, 6).map((item: any, index: any) => (
                      <li key={`trending-searches-${index}`}>
                        <span>
                          <Link target='_self' href={item.perma_link}>
                            {item.list_name}
                          </Link>
                        </span>
                      </li>
                    ))}
                </CuratedSearch>
                <h3>Popular Influencers</h3>
                <PopularCreator className='wow fadeInUp'>
                  {Populars.map((popular, index) => (
                    <Link
                      target='_self'
                      href={popular.url}
                      key={`popular-creators-${index}`}
                    >
                      <Row className='popular-creator'>
                        <Col
                          lg={9}
                          className='popular-detail flex items-center'
                        >
                          <Image
                            className='popular-image'
                            src={popular.image}
                            alt={popular.name}
                            width={40}
                            height={40}
                          />
                          <div className='creatordetail'>
                            <h5>{popular.name}</h5>
                            <p className='cat-name'>{popular.category}</p>
                          </div>
                        </Col>
                        <Col lg={3} className='score-icon flex items-center'>
                          <Polygon className='polygon flex-center flex'>
                            {formatDecimal(popular?.score)}
                          </Polygon>
                        </Col>
                      </Row>
                    </Link>
                  ))}
                </PopularCreator>
              </CuratedSidebar>
            </Col>
          </Row>
        </Container>
      </InfluencerDetailsStyled>
    ) : status == 1 && mobileActive ? (
      <InfluencerDetailsStyledM className='influencer-details wow fadeInUp'>
        <Container className='container'>
          <Row className='influencer-row'>
            <Col lg={9} className='influencer-col'>
              <div className='detailed-list'>
                {profiles.map(
                  (profile: any, index: any) =>
                    index <= 9 && (
                      <InfluencerCardStyledM
                        className='wow fadeInUp flex'
                        key={`infl-detail-${index}`}
                        onClick={() =>
                          redirectToProfile(
                            `${profile?.profile?.handle}`,
                            'instagram'
                          )
                        }
                      >
                        <div className='relative-image'>
                          <Image
                            className='popular-image'
                            src={profile?.profile?.profile_image}
                            width={100}
                            height={100}
                            alt={profile.profile.name}
                            style={{
                              objectFit: 'cover',
                            }}
                          />
                          <Polygon className='polygon flex-center listscore flex'>
                            {formatDecimal(profile?.[platform]?.score)}
                          </Polygon>
                        </div>
                        <div className='wfull'>
                          <div className='curated-details flex justify-between'>
                            <div className='infl-content'>
                              {profile?.[platform]?.profile_categories && (
                                <div className='gap flex'>
                                  {formatCategories(
                                    profile?.[platform]?.profile_categories
                                  ).map((item: any, index: any) => {
                                    return (
                                      <p className='category' key={index}>
                                        {item}
                                      </p>
                                    );
                                  })}
                                </div>
                              )}
                              <h4>
                                {profile?.profile?.name}
                                {profile?.instagram?.verified_at && (
                                  <span className='iconvrfy'>
                                    <Image
                                      className='verifyicon'
                                      src={joinS3('images/common/verify.svg')}
                                      alt='verify icon'
                                      width={18}
                                      height={18}
                                    />{' '}
                                    <span className='verified-text'>
                                      Verified
                                    </span>
                                  </span>
                                )}
                              </h4>
                              <p className='location'>
                                {profile?.instagram?.location}
                              </p>
                            </div>
                            <div className='btns flex'>
                              <Button
                                type='link'
                                href={`https://app.qoruz.com/profile/${profile?.profile?.handle}`}
                                target='_blank'
                                variant='primary'
                                size='lg'
                                showIcon={true}
                                icon={<MessageIcon />}
                                iconPosition='left'
                                showShadow
                              >
                                <p style={{ marginLeft: '7px' }}> Message </p>
                              </Button>
                              <p className='social'>
                                <span>
                                  <Image
                                    src={joinS3(
                                      'images/common/socialinsta.svg'
                                    )}
                                    alt='social icon'
                                    width={18}
                                    height={18}
                                  />
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className='curated-info flex justify-between'>
                            <div className='curd-info flex'>
                              <div className='icongap flex items-center'>
                                <span className='icon flex'>
                                  <Image
                                    className='reach'
                                    src={joinS3('images/common/reach.svg')}
                                    alt='verify icon'
                                    width={16}
                                    height={16}
                                  />{' '}
                                  Engage
                                </span>
                                <p className='flex'>
                                  <span className='social-detail'>
                                    {profile?.instagram?.eng_rate}
                                  </span>
                                  <span className='icon'>
                                    <Image
                                      className='info'
                                      src={joinS3('images/common/info.svg')}
                                      alt='icon'
                                      width={12}
                                      height={12}
                                    />
                                  </span>
                                </p>
                              </div>
                              <div className='icongap flex items-center'>
                                <span className='icon flex'>
                                  <Image
                                    className='reach'
                                    src={joinS3('images/common/view.svg')}
                                    alt='verify icon'
                                    width={16}
                                    height={16}
                                  />{' '}
                                  Avg. Views
                                </span>
                                <p className='flex'>
                                  <span className='social-detail'>
                                    {formatLargeNumber(
                                      profile?.instagram?.average_reel_views
                                    )}
                                  </span>
                                  <span className='icon'>
                                    <Image
                                      className='info'
                                      src={joinS3('images/common/view.svg')}
                                      alt='icon'
                                      width={16}
                                      height={16}
                                    />
                                  </span>
                                </p>
                              </div>
                              <div className='icongap flex items-center'>
                                <span className='icon flex'>
                                  <Image
                                    className='reach'
                                    src={joinS3('images/common/followers.svg')}
                                    alt='verify icon'
                                    width={16}
                                    height={14}
                                  />{' '}
                                  Followers
                                </span>
                                <p className='flex'>
                                  {' '}
                                  <span className='social-detail'>
                                    {formatLargeNumber(
                                      profile?.instagram?.followers_count
                                    )}
                                  </span>
                                  <span className='icon'>
                                    <Image
                                      className='info'
                                      src={joinS3('images/common/info.svg')}
                                      alt='icon'
                                      width={12}
                                      height={12}
                                    />
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </InfluencerCardStyledM>
                    )
                )}
                <h5 className='loadmore'>Load more influencers</h5>
              </div>
            </Col>
            <Col lg={3} className='flex items-center'>
              <CuratedSidebar>
                <div className='siebar-header'>
                  <h3 onClick={() => setActiveTab(1)}>Popular categories</h3>
                  <h3 onClick={() => setActiveTab(2)}>Trending searches</h3>
                  <h3 onClick={() => setActiveTab(3)}>Popular influencers</h3>
                </div>
                {activeTab == 1 && (
                  <CuratedCategory className='category-list wow fadeInUp'>
                    {Categories.map((category, index) => (
                      <li key={`list-item-categories-${index}`}>
                        <span className='cat-name'>
                          {' '}
                          <Link target='_self' href={category.url}>
                            {category.category}
                          </Link>
                        </span>
                        <span className='cat-val'>{category.value}</span>
                      </li>
                    ))}
                  </CuratedCategory>
                )}

                {activeTab == 2 && (
                  <CuratedSearch className='wow fadeInUp wow fadeInUp'>
                    {listStatus == 1 &&
                      list.slice(0, 6).map((item: any, index: any) => (
                        <li key={`trending-searches-${index}`}>
                          <span>
                            <Link target='_self' href={item.perma_link}>
                              {item.list_name}
                            </Link>
                          </span>
                        </li>
                      ))}
                  </CuratedSearch>
                )}

                {activeTab == 3 && (
                  <PopularCreator className='wow fadeInUp'>
                    {Populars.map((popular, index) => (
                      <Link
                        target='_self'
                        href={popular.url}
                        key={`popular-creators-${index}`}
                      >
                        <Row className='popular-creator'>
                          <Col
                            lg={9}
                            className='popular-detail flex items-center'
                          >
                            <Image
                              className='popular-image'
                              src={popular.image}
                              alt={popular.name}
                              width={40}
                              height={40}
                            />
                            <div className='creatordetail'>
                              <h5>{popular.name}</h5>
                              <p className='cat-name'>{popular.category}</p>
                            </div>
                          </Col>
                          <Col lg={3} className='score-icon flex items-center'>
                            <Polygon className='polygon flex-center flex'>
                              {formatDecimal(popular.score)}
                            </Polygon>
                          </Col>
                        </Row>
                      </Link>
                    ))}
                  </PopularCreator>
                )}
              </CuratedSidebar>
            </Col>
          </Row>
        </Container>
      </InfluencerDetailsStyledM>
    ) : status == -1 ? (
      <ComingSoon />
    ) : (
      <></>
    );
  }
};

export default withRouter(InfluencerDetails);
