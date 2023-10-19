/* eslint-disable indent */
import Button from '@qoruz/components/Button';
import CampaignBrief from '@qoruz/components/campaign-brief/CampaignBrief';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-grid-system';
import { Col, Row } from 'react-grid-system';
import Select, { components } from 'react-select';

import CuratedHeroStyled, {
  BreadCrumb,
  CopySection,
  GrowBetter,
  Info,
  ListInfo,
  MainHeroStyled,
  ResponseStyled,
  SearchBox,
  SearchIcon,
} from './style';

const options = [
  {
    value: 'instagram',
    label: 'Instagram',
    icon: joinS3('images/common/insta.svg'),
  },
  {
    value: 'youtube',
    label: 'YouTube',
    icon: joinS3('images/common/youtube.svg'),
  },
];
const { Option } = components;

const IconOption = (props: any) => {
  return (
    <Option {...props}>
      <Image
        src={props.data.icon}
        alt={props.data.label}
        width={20}
        height={20}
      />
      {props.data.label}
    </Option>
  );
};

const Control = (props: any) => {
  return (
    <components.Control {...props}>
      <Image
        src={props.selectProps.value.icon}
        alt={props.selectProps.value.label}
        width={20}
        height={20}
      />
      {props.children}
    </components.Control>
  );
};

const RateHeroSearch = ({
  selected,
  onChange,
  pageTitle,
  api,
  section,
  fakePage,
}: any) => {
  const [mobileActive, setMobileActive] = useState(false);
  const index = parseInt(selected);
  const [openForm, setOpenForm] = useState(false);

  const popupCloseHandler = (e: any) => {
    setOpenForm(e);
    document.body.classList.remove('stop-scroll-body');
  };
  const [selectedOption, setSelectedOption] = React.useState(
    index == 0 ? options[0] : options[1]
  );

  const [searchInput, setSearchInput] = useState('');
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    const handleScroll = () => {
      const y = window.scrollY;
      parallaxElements.forEach((el: any) => {
        const top = el.offsetTop;
        el.style.transform = `translateY(+${y > top ? y / 3 : 0}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    if (window.innerWidth < 767) {
      setMobileActive(true);
    } else {
      setMobileActive(false);
    }
  }, []);

  const formatHandle = (handle: string, platform: string) => {
    if (platform === 'youtube') {
      return handle;
    } else if (platform === 'instagram') {
      if (handle.includes('https://www.')) {
        return handle.split('/').reverse()[0];
      } else {
        return handle;
      }
    }
  };
  const handleSearch = () => {
    const formattedHandle = formatHandle(searchInput, selectedOption.value);
    const withPlatform = api?.replaceAll(
      'platformPlaceholder',
      selectedOption.value
    );
    const requestUrl = withPlatform?.replaceAll(
      'handlePlaceholder',
      formattedHandle
    );
    fetch(requestUrl, {
      method: 'GET',
    })
      .then((res) => {
        res.json().then((response) => {
          setResponse(response);
        });
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  };

  return (
    <CuratedHeroStyled className='start-exploring'>
      <BreadCrumb className='container'>
        <Link href='/' className='crumb'>
          Home
        </Link>{' '}
        ›{' '}
        <Link href='/tools' className='crumb'>
          Tools
        </Link>{' '}
        › <span className='crumb'>{pageTitle}</span>
      </BreadCrumb>
      <Container className='first container'>
        <ListInfo className='start-exploring-info flex-column wow fadeInUp flex'>
          <h1>{pageTitle}</h1>
          <p className='details'>
            Try our Influencer Engagement Rate Calculator to find out the
            engagement rate of any Instagram influencer.
          </p>
        </ListInfo>

        <MainHeroStyled
          className={`home-hero wow fadeInUp ${fakePage ? 'fake-checker' : ''}`}
        >
          <SearchBox className='search-box wow fadeInUp'>
            {section !== 'cost-checker' ? (
              <Select
                options={options}
                className='socail'
                classNamePrefix='socail'
                isSearchable={false}
                value={selectedOption}
                onChange={(option: any) => {
                  // getSearch(option.value);
                  onChange(option);
                  setSelectedOption(option);
                }}
                components={
                  fakePage
                    ? {
                        Option: IconOption,
                        Control: Control,
                        DropdownIndicator: () => null,
                        IndicatorSeparator: () => null,
                        Menu: () => null,
                      }
                    : {
                        Option: IconOption,
                        Control: Control,
                      }
                }
              />
            ) : (
              <div className='cost-social-icon flex gap-4'>
                <Image
                  width={30}
                  height={30}
                  className='mr-4'
                  src={joinS3('images/common/insta.svg')}
                  alt=''
                />
                <Image
                  width={30}
                  height={30}
                  src={joinS3('images/common/youtube.svg')}
                  alt=''
                />
              </div>
            )}
            <input
              // options={dropDownData}
              value={searchInput}
              // maxMenuHeight={200}
              className='search-input'
              placeholder={
                mobileActive
                  ? 'Search'
                  : section !== 'cost-checker'
                  ? `${
                      index == 0
                        ? 'Enter Instagram @username [Ex: @therock] '
                        : 'Enter the YouTube URL'
                    }`
                  : `${
                      index == 0
                        ? 'Enter the handle or URL [Ex: @therock  &  https://www.youtube.com/@aliabdaal]'
                        : 'Enter the YouTube URL'
                    }`
              }
              type='text'
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <SearchIcon
              className='search-icon flex-center flex'
              onClick={handleSearch}
            >
              <Image
                src={joinS3('images/common/searchIconWhite.svg')}
                alt='Search'
                width={24}
                height={24}
              />
            </SearchIcon>
          </SearchBox>
        </MainHeroStyled>
        <CopySection>
          <Image
            src={joinS3('images/common/copy-icon.svg')}
            alt='Search'
            width={16}
            height={16}
            style={{ display: 'inline', alignSelf: 'center' }}
          />
          <span style={{ display: 'inline', color: 'black' }}>
            Copy & paste the influencer's instagram handle. Avoid typing the
            influencer's name.
          </span>
        </CopySection>
        {response?.details?.full_name ? (
          <ResponseStyled>
            {section === 'engagement-insta' ? (
              <div className='search-result-container insta-enga insta-count insta-profile-analyzer'>
                <div className='profile-image-top flex'>
                  <div className='search-detail'>
                    <h3>{response?.details?.full_name}</h3>
                    <small>@{response?.details?.handle}</small>
                    <p className='details'>{response?.details?.bio}</p>
                  </div>
                  <div className='profile-image-detail'>
                    <Image
                      src={response.details.profile_image}
                      // src={transformUrl('profile/influencer-pic_qfmr8k.png')}
                      alt='image'
                      width={149}
                      height={149}
                      className='profile-image'
                    />
                  </div>
                </div>
                <div
                  className='bottom-section'
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <div className='influencer-stats'>
                    <h3>{response?.details?.engagement_rate}%</h3>
                    <small>Engagement rate</small>
                  </div>
                  <div className='influencer-stats'>
                    <h3>{response?.details?.followers_count}</h3>
                    <small>Followers Count</small>
                  </div>
                  <div className='influencer-stats'>
                    <h3>{response?.details?.total_posts}</h3>
                    <small>Total Posts</small>
                  </div>
                </div>
              </div>
            ) : null}
            {selectedOption.value === 'youtube' && (
              <div className='search-result-container you-enga you-count you-profile-analyzer'>
                <div className='profile-image-top flex'>
                  <div className='search-detail'>
                    <h3>{response?.details?.full_name}</h3>
                    <p className='details'>{response?.details?.bio}</p>
                  </div>
                  {/* <div className='profile-image-detail'>
                    <Image
                      src={transformUrl('profile/influencer-pic_qfmr8k.png')}
                      alt='image'
                      className='profile-image'
                      width={149}
                      height={149}
                    />
                    <Polygon className='polygon flex-center listscore flex'>
                      8.8
                    </Polygon>
                  </div> */}
                </div>
                <div
                  className='bottom-section'
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <div className='influencer-stats'>
                    <h3>{response?.details?.average_views}%</h3>
                    <small>Average Views</small>
                  </div>
                  <div className='influencer-stats'>
                    <h3>{response?.details?.subscriber_count}</h3>
                    <small>Subscriber Count</small>
                  </div>
                  <div className='influencer-stats'>
                    <h3>{response?.details?.total_posts}</h3>
                    <small>Total Posts</small>
                  </div>
                </div>
              </div>
            )}
            {section === 'engagement-yt' ? (
              <div className='search-result-container you-enga you-count you-profile-analyzer'>
                <div className='profile-image-top flex'>
                  <div className='search-detail'>
                    <h3>{response?.details?.full_name}</h3>
                    <p className='details'>{response?.details?.bio}</p>
                  </div>
                  <div className='profile-image-detail'>
                    <Image
                      src={joinS3('images/profile/influencer-pic.png')}
                      alt='image'
                      className='profile-image'
                    />
                    {/* <Polygon className='polygon flex-center listscore flex'>
                      8.8
                    </Polygon> */}
                  </div>
                </div>
                <div
                  className='bottom-section'
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <div className='influencer-stats'>
                    <h3>{response?.details?.average_views}%</h3>
                    <small>Average Views</small>
                  </div>
                  <div className='influencer-stats'>
                    <h3>{response?.details?.subscriber_count}</h3>
                    <small>Subscriber Count</small>
                  </div>
                  <div className='influencer-stats'>
                    <h3>{response?.details?.total_posts}</h3>
                    <small>Total Posts</small>
                  </div>
                </div>
              </div>
            ) : null}
            {section === 'cost-checker' ? (
              <div className='cost-checker mt-3 flex justify-between'>
                <div className='instagram-cost cost-content'>
                  <h4>
                    {response?.details?.full_name} Instagram deliverable cost
                  </h4>
                  <div className='details-cost flex flex-col'>
                    <p className='flex  justify-between'>
                      <span className='text-detail'>
                        Cost per Instagram Image
                      </span>
                      <span className='cost'>888888</span>
                    </p>
                    <p className='flex justify-between'>
                      <span className='text-detail'>
                        Cost per Instagram Reels
                      </span>
                      <span className='cost'>888888</span>
                    </p>
                    <p className='flex justify-between'>
                      <span className='text-detail'>
                        Cost per Instagram Video
                      </span>
                      <span className='cost'>888888</span>
                    </p>
                  </div>
                </div>
                <div className='youtube-cost cost-content'>
                  <h4>
                    {response?.details?.full_name} Youtube deliverable cost
                  </h4>
                  <div className='details-cost flex flex-col gap-3'>
                    <p className='flex justify-between'>
                      <span className='text-detail'>Cost per Youtube post</span>
                      <span className='cost'>888888</span>
                    </p>
                    <p className='flex justify-between'>
                      <span className='text-detail'>
                        Cost per Youtube Shorts
                      </span>
                      <span className='cost'>888888</span>
                    </p>
                    <p className='flex justify-between'>
                      <span className='text-detail'>
                        Cost per Youtube Video
                      </span>
                      <span className='cost'>888888</span>
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
            <GrowBetter className='grow-better flex items-center'>
              <Container className='container'>
                <div className='grow-container'>
                  <Row className='row connect-cta items-center'>
                    <Col sm={12} lg={6} className='items-center'>
                      <Image
                        src={joinS3('images/image-response.png')}
                        alt='tools-image'
                        width={496}
                        height={316}
                        className='response-image'
                      />
                    </Col>
                    <Col sm={12} lg={6}>
                      <Info className='btn-cconnect'>
                        <div className='rgt-info flex items-center'>
                          <h3>
                            Are you planning to run an influencer campaign with{' '}
                            {response.details?.full_name}?
                          </h3>
                        </div>
                        {/* <Link
                          target='_blank'
                          href='/post-campaign'
                          className='outline-button primary md'
                        >
                          Post a campaign brief
                          <LinkIcon />
                        </Link> */}
                        {/* <Button
                          text='Post A campaign Brief'
                          type='link'
                          href='/post-campaign'
                          showIcon={true}
                        /> */}
                        <Button // FIXME - button is link or button?
                          type='button'
                          showShadow
                          variant='primary'
                          size='lg'
                          showIcon={true}
                          onClick={() => {
                            setOpenForm(true);
                          }}
                        >
                          Post a campaign brief
                        </Button>
                      </Info>
                    </Col>
                  </Row>
                </div>
              </Container>
            </GrowBetter>
          </ResponseStyled>
        ) : null}
      </Container>
      <CampaignBrief show={openForm} onClose={popupCloseHandler} />
    </CuratedHeroStyled>
  );
};

export default RateHeroSearch;
