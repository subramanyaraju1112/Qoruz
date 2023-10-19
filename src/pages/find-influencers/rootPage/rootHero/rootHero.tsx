import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Container } from 'react-grid-system';
import Select, { components } from 'react-select';

import CuratedHeroStyled, {
  CurateListInfo,
  Herotyled,
  SearchBox,
  SearchIcon,
} from './rootHero.style';

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

const Control = (props: any) => {
  return (
    <components.Control {...props}>
      <Image
        src={props.selectProps.value.icon}
        alt={props.selectProps.value.label}
        width={20}
        height={20}
        className='social-icon-mobile'
      />
      {props.children}
    </components.Control>
  );
};

const RootHero = ({ onSearch }: any) => {
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const [searchInput, setSearchInput] = React.useState<any>('');
  const handleSearchInputChange = (event: any) => {
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);
    onSearch(searchTerm);
  };

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
          </Link>
        </div>
        <CurateListInfo className='start-exploring-info flex-column wow fadeInUp flex'>
          <h1>Top Influencer Lists from 300+ categories (hand-picked)</h1>
          <p className='details'>
            <span className='minimized'>
              Find & connect with Influencers directly
            </span>
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
            <input
              className='search-input'
              placeholder='top 100 instagram influencers'
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </SearchBox>
        </Herotyled>
      </Container>
    </CuratedHeroStyled>
  );
};

export default RootHero;
