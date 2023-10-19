import Tag from '@qoruz/components/Tag';
import React, { useState } from 'react';

import { CategoryListItem as CategoryItem } from './hero.style';

const CategoryListItem = ({ tag }: any) => {
  const [active, setActive] = useState(false);
  return (
    <CategoryItem className='category-item'>
      <Tag
        className={`tag ${active ? 'active' : ''}`}
        onClick={() => setActive(!active)}
      >
        {tag}
      </Tag>
    </CategoryItem>
  );
};

export default CategoryListItem;
