import Link from 'next/link';
import LinkedInIcon from 'public/images/svg/linkedIcon';
import TwitterIcon from 'public/images/svg/twitterIcon';
import WhatsAppIcon from 'public/images/svg/whatsAppIcon';
import React, { useEffect } from 'react';

import ShareStyled, { ShareListItem, ShareLists } from './ShareList.style';

const ShareList = () => {
  const [data, setData] = React.useState([
    {
      title: 'WhatsApp',
      icon: <WhatsAppIcon />,
      url: `https://api.whatsapp.com/send?text=`,
    },
    {
      title: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/sharing/share-offsite/?url=',
    },
    {
      title: 'Twitter',
      icon: <TwitterIcon />,
      url: 'https://twitter.com/intent/tweet?url=',
    },
  ]);
  useEffect(() => {
    const url = window.location.href;
    const temp = data;
    temp[0].url = temp[0].url + url;
    temp[1].url = temp[1].url + url;
    temp[2].url = temp[2].url + url;
    setData(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ShareStyled id='share' className='share flex-column wow fadeInUp flex'>
      <h5 className='flex-center flex'>Share</h5>
      <ShareLists className='aside-list flex-column flex-center wow fadeInUp flex'>
        {data.map((item, index) => (
          <ShareListItem
            className='aside-list-item wow fadeInUp'
            key={`faq-item-${index}`}
          >
            <Link href={item.url} target='_blank' className='flex-center flex'>
              {item.icon}
            </Link>
          </ShareListItem>
        ))}
      </ShareLists>
    </ShareStyled>
  );
};

export default ShareList;
