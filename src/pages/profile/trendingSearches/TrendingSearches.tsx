import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import TrendingSearchesStyled, {
  TrendingSearchList,
  TrendingSearchListItem,
} from './TrendingSearches.style';

const TrendingSearches = () => {
  const [list, setList] = useState<any>(null);
  const [listStatus, setListStatus] = useState(0);
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
  return (
    <TrendingSearchesStyled className='trending-search flex-column wow fadeInUp flex'>
      <h4>Trending searches</h4>
      <TrendingSearchList className='trending-search-list flex-column wow fadeInUp flex'>
        {listStatus == 1 &&
          list.slice(0, 6).map((item: any, index: any) => (
            <TrendingSearchListItem
              className='trending-search-list-item wow fadeInUp'
              key={`trending-search-${index}`}
            >
              <Link
                target='_self'
                href={`/find-influencers/${item.perma_link}`}
                className='inline-flex items-center'
              >
                <Image
                  src={joinS3('images/profile/search.svg')}
                  className='trending-btn'
                  alt='search icon'
                  width={17}
                  height={18}
                />
                {item.list_name}
              </Link>
            </TrendingSearchListItem>
          ))}
      </TrendingSearchList>
    </TrendingSearchesStyled>
  );
};

export default TrendingSearches;
