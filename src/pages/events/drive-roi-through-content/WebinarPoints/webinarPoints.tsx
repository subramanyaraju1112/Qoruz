import WebinarpointContainer from '@qoruz/pages/events/drive-roi-through-content/WebinarPoints/webinarPoints.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';

const Points = [
  {
    Icon: joinS3('images/events/drive-roi-through-content/tie.svg'),
    Text: 'Best practices to measure content ROI and tie it back to business goals?',
  },
  {
    Icon: joinS3('images/events/drive-roi-through-content/search.svg'),
    Text: "How to identify engaging content formats & right channels for your client's target audience.",
  },
  {
    Icon: joinS3('images/events/drive-roi-through-content/analytics.svg'),
    Text: 'Leverage data and analytics to measure the effectiveness of content marketing efforts.',
  },
  {
    Icon: joinS3('images/events/drive-roi-through-content/budget.svg'),
    Text: 'Allocate influencer marketing budgets & leverage them as a strategic component of content-driven ROI.',
  },
  {
    Icon: joinS3('images/events/drive-roi-through-content/metric.svg'),
    Text: 'Key metrics to evaluate your influencer-driven initiatives.',
  },
  {
    Icon: joinS3('images/events/drive-roi-through-content/role.svg'),
    Text: 'The role of personalisation in driving ROI to different audience segments.',
  },
  {
    Icon: joinS3('images/events/drive-roi-through-content/trends.svg'),
    Text: 'Emerging trends in content marketing will have a significant impact on driving ROI.',
  },
];

const WebinarPoints = () => {
  return (
    <WebinarpointContainer>
      <h2 className='title'>
        This live panel discussion will cover everything you need to know:
      </h2>
      <ul className='listrow flex'>
        {Points.map((item, index) => (
          <li className='list' key={index}>
            <Image
              src={item.Icon}
              alt='icons'
              className='list-icon'
              width={26}
              height={26}
            />
            <span>{item.Text}</span>
          </li>
        ))}
      </ul>
    </WebinarpointContainer>
  );
};

export default WebinarPoints;
