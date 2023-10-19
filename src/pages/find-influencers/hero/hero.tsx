import useDebounce from '@qoruz/hooks/useDebounce';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-grid-system';
import Select, { components } from 'react-select';

import CuratedHeroStyled, {
  CurateListInfo,
  Herotyled,
  SearchBox,
  SearchIcon,
} from './hero.style';

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
          alt='LinkIcon'
          width={11}
          height={11}
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

const CuratedHero = ({ header, description, headline }: any) => {
  const [selectedOption, setSelectedOption] = React.useState(options[0]);

  const [_, setSelectedOption2] = React.useState<any>(null);
  const [dropDownData, setDropDownData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);
  const [search] = React.useState('');
  const [moreClicked, setMoreClicked] = useState(false);
  const debouncedValue = useDebounce(search, 500);

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
    <CuratedHeroStyled className='start-exploring'>
      <Container className='first container'>
        <div className='breadcrumb mobile-show'>
          <Link href='/' className='crumb'>
            Home
          </Link>{' '}
          ›{' '}
          <Link href='/' className='crumb'>
            Find Influencers
          </Link>{' '}
          › <span className='crumb'>Instagram</span>
        </div>
        <CurateListInfo className='start-exploring-info flex-column wow fadeInUp flex'>
          <h1>{header}</h1>
          <h4> Reachout & connect with {headline} influencers</h4>
          <p className='details'>
            <span className={`minimized ${!moreClicked ? 'expanded' : ''}`}>
              {description}
            </span>
          </p>
          <p className='details mt-0'>
            <strong
              onClick={() => {
                setMoreClicked(!moreClicked);
              }}
            >
              {!moreClicked ? '+ More' : '- Less'}
            </strong>
          </p>
        </CurateListInfo>

        <Herotyled className='home-hero wow fadeInUp'>
          <SearchBox className='search-box wow fadeInUp'>
            <Select
              options={options}
              className='socail'
              classNamePrefix='socail'
              isSearchable={false}
              value={selectedOption}
              onChange={(option: any) => {
                setSelectedOption(option);
              }}
              components={{ Option: IconOption, Control: Control }}
            />
            <SearchIcon className='search-icon flex-center flex'>
              <Image
                src={joinS3('images/curated-list/search.png')}
                alt='Search'
                width={17}
                height={18}
              />
            </SearchIcon>
            <Select
              options={dropDownData}
              value=''
              // maxMenuHeight={200}
              className='search-input'
              placeholder='Search Influencers'
              classNamePrefix='search-input'
              isLoading={loading}
              loadingMessage={() => <>Loading...</>}
              components={{ Option: Option2 }}
            />
          </SearchBox>
        </Herotyled>
      </Container>
    </CuratedHeroStyled>
  );
};

export default CuratedHero;
