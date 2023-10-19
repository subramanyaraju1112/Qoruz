import useDebounce from '@qoruz/hooks/useDebounce';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import Select, { components } from 'react-select';

import CategoryListItem from './CategoryListItem';
import HeroStyled, {
  CategoryList,
  ExploreTopic,
  SearchBox,
} from './hero.style';
const HeroVideo = dynamic(() => import('./HeroVideo'));

const TAG = ['Technology', 'Music', 'Sports', 'More...'];

const options = [
  {
    value: 'instagram',
    label: 'Instagram',
    icon: joinS3('images/common/insta.svg'),
  },
  {
    value: 'twitter',
    label: 'Twitter',
    icon: joinS3('images/common/twitter.svg'),
  },
  {
    value: 'facebook',
    label: 'Facebook',
    icon: joinS3('images/common/facebook.svg'),
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
const Option2 = (props: any) => {
  return (
    <Option {...props}>
      <Link
        target='_blank'
        href={`https://app.qoruz.com/explore-qoruz?platform=${props.data.platform}&source_page=explore-qoruz`}
      >
        <Image
          className='icon-button'
          src={joinS3('images/common/link.svg')}
          width={12}
          height={12}
          alt='LinkIcon'
        />
        <b>{props.data.label}</b>
        <span className='tag'>{props.data.type}</span>
      </Link>
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

const Hero = () => {
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const [_, setSelectedOption2] = React.useState<any>(null);
  const [dropDownData, setDropDownData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const debouncedValue = useDebounce(search, 500);
  const [mobileActive, setMobileActive] = React.useState(true);

  useEffect(() => {
    if (window.innerWidth > 991) {
      setMobileActive(false);
    }
  }, []);
  useEffect(() => {
    const parallaxElements = document.querySelectorAll(
      '[data-parallax-banner]'
    );
    const handleScroll = () => {
      const y = window.scrollY;
      parallaxElements.forEach((el: any) => {
        const top = el.offsetTop;
        el.style.transform = `translateY(+${y > top ? y / 14 : 0}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getSearch = async (platform?: string) => {
    try {
      setLoading(true);
      setDropDownData([]);
      const response = await fetch(
        'https://data.qoruz.com/api/v2/search.suggestions.explore?' +
          new URLSearchParams({
            platform: platform ? platform : selectedOption.value,
            keyword: debouncedValue,
          })
      );
      const res = await response.json();
      setSelectedOption2({
        value: res.data?.formatted_suggestions[0].name,
        label: res.data?.formatted_suggestions[0].name,
        type: res.data?.formatted_suggestions[0]._type,
      });
      res.data?.formatted_suggestions.map((item: any, index: number) => {
        setDropDownData((prev: any) => [
          ...prev,
          {
            value: item.name + index,
            label: item.name,
            type: item._type,
            platform: selectedOption.value,
          },
        ]);
      });
    } catch (error) {
      /* empty */
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search !== '') {
      getSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  useEffect(() => {
    getSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <HeroStyled className='home-hero flex'>
      {mobileActive ? null : <HeroVideo />}
      <Image
        className='hero-mobile'
        src={joinS3('images/common/home-mobile-banner.png')}
        width={720}
        height={1280}
        alt='Hero Mobile'
        loading='eager'
      />
      <Container className='container'>
        <Row className='banner-content'>
          <Col lg={6}>
            <h1 className='wow fadeInUp'>
              Where Influencer Collaborations Happen
            </h1>
            <p className='lead wow fadeInUp'>
              Qoruz helps brands to find, connect and collaborate with the most
              relevant influencers.
            </p>
            <SearchBox className='search-box wow fadeInUp'>
              <Select
                options={options}
                className='socail'
                classNamePrefix='socail'
                isSearchable={false}
                value={selectedOption}
                onChange={(option: any) => {
                  getSearch(option.value);
                  setSelectedOption(option);
                }}
                components={{ Option: IconOption, Control: Control }}
              />
              <Select
                options={dropDownData}
                value=''
                // maxMenuHeight={200}
                className='search-input'
                placeholder='Search influencers & categories'
                classNamePrefix='search-input'
                isLoading={loading}
                loadingMessage={() => <>Loading...</>}
                onInputChange={(e) => {
                  setSearch(e);
                }}
                components={{ Option: Option2 }}
              />
            </SearchBox>
            <ExploreTopic className='explore-topic flex-column flex'>
              <span>Or explore your topic</span>
              <CategoryList className='category-list flex flex-wrap items-center'>
                {TAG.map((tag, index) => (
                  <CategoryListItem tag={tag} key={index} />
                ))}
              </CategoryList>
            </ExploreTopic>
          </Col>
          <Col lg={6} />
        </Row>
      </Container>
    </HeroStyled>
  );
};

export default Hero;
