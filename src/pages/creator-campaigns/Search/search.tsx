/* eslint-disable react-hooks/exhaustive-deps */
import SearchBox, {
  Filter,
  SearchIcon,
  TagsFilter,
} from '@qoruz/pages/creator-campaigns/Search/search.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-grid-system';
import CampaignData from 'src/utils/campaign.json';

const Tags = [
  {
    id: 1,
    name: 'Videos',
  },
  {
    id: 2,
    name: 'Beauty',
  },
  {
    id: 3,
    name: 'Product Launch',
  },
  {
    id: 4,
    name: 'Fashion',
  },
  {
    id: 5,
    name: 'YouTube',
  },
  {
    id: 6,
    name: 'Lifestyle',
  },
  {
    id: 7,
    name: 'Instagram',
  },
];

const SearchFilter = ({
  advancedSearch,
  setAdvancedSearch,
  setMainState,
  setSearchData,
  onSearch,
}: {
  advancedSearch: any;
  setAdvancedSearch: any;
  setMainState: any;
  setSearchData: any;
  onSearch: any;
}) => {
  const [inputValue] = useState('');
  const [searchInput, setSearchInput] = React.useState<any>('');
  const [selected, setSelected] = useState(0);
  const handleSearchInputChange = (event: any) => {
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);
    onSearch(searchTerm);
  };

  const handleClick = (label: any) => {
    setSelected(label.id - 1);
    const item = label.name;
    if (item === 'Videos') {
      setMainState(() => {
        return {
          campaign: '',
          social: '',
          asset: 'Video',
          industry: '',
          notEmpty: true,
        };
      });
    } else if (item === 'Beauty') {
      setMainState(() => {
        return {
          campaign: '',
          social: '',
          asset: '',
          industry: 'Beauty',
          notEmpty: true,
        };
      });
    } else if (item === 'Product Launch') {
      setMainState(() => {
        return {
          campaign: 'Product Launch',
          social: '',
          asset: '',
          industry: '',
          notEmpty: true,
        };
      });
    } else if (item === 'Fashion') {
      setMainState(() => {
        return {
          campaign: '',
          social: '',
          asset: '',
          industry: 'Fashion',
          notEmpty: true,
        };
      });
    } else if (item === 'YouTube') {
      setMainState(() => {
        return {
          campaign: '',
          social: 'YouTube',
          asset: '',
          industry: '',
          notEmpty: true,
        };
      });
    } else if (item === 'Lifestyle') {
      setMainState(() => {
        return {
          campaign: '',
          social: '',
          asset: '',
          industry: 'Fashion & lifestyle',
          notEmpty: true,
        };
      });
    } else {
      setMainState(() => {
        return {
          campaign: '',
          social: 'Instagram',
          asset: '',
          industry: '',
          notEmpty: true,
        };
      });
    }
  };

  // Filtering brand, title and agency name from search bar input

  const keyword = inputValue.toLowerCase();
  const filtered_names = CampaignData.filter(function (user) {
    const brand = user.BrandName.toLowerCase();
    const title = user.CampaignTitle.toLowerCase();
    const industry = user.IndustryType.toLowerCase();
    return (
      brand.indexOf(keyword) > -1 ||
      title.indexOf(keyword) > -1 ||
      industry.indexOf(keyword) > -1
    );
  });

  useEffect(() => {
    setSearchData(filtered_names);
  }, [inputValue]);

  return (
    <>
      <Container className='container'>
        <SearchBox className='search-box'>
          <input
            className='search-input'
            placeholder='Search the campaign, agencies, brands'
            type='text'
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <SearchIcon className='search-icon flex-center flex'>
            <Image
              src={joinS3('images/common/searchIconWhite.svg')}
              alt='Search'
              width={24}
              height={24}
            />
          </SearchIcon>
        </SearchBox>
        <Filter>
          <TagsFilter>
            <p className='tag-name'>Popular Tags</p>
            <div className='pill-list'>
              {Tags.map((label: any, index: any) => (
                <p
                  className={`tag-pill ${selected === index ? 'selected' : ''}`}
                  key={index}
                  onClick={() => {
                    handleClick(label);
                  }}
                >
                  {label.name}
                </p>
              ))}
            </div>
          </TagsFilter>
          <div
            className='advance-filter'
            onClick={() => setAdvancedSearch(!advancedSearch)}
          >
            <Image
              src={joinS3('images/common/advance-filter.svg')}
              alt='advance filter'
              width={24}
              height={24}
            />{' '}
            Advanced Search
          </div>
        </Filter>
      </Container>
    </>
  );
};

export default SearchFilter;
