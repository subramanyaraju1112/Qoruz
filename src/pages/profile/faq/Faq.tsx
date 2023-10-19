import { formatLargeNumber } from '@qoruz/utils/formatLargeNumber';
import React, { useEffect, useState } from 'react';

import FaqStyled, {
  FaqContent,
  FaqList,
  FaqListItem,
  FaqTitle,
  Icon,
  Intro,
} from './Faq.style';

const Faq = ({ profileData }: any) => {
  const [active, setActive] = React.useState(-1);
  const [platform, setPlatform] = useState('instagram');
  useEffect(() => {
    if (window.location.href.includes('youtube')) {
      setPlatform('youtube');
    }
  }, []);
  const data = [
    {
      title: `How many ${
        platform === 'instagram' ? 'followers' : 'subscribers'
      } ${profileData?.name} have on ${
        platform === 'instagram' ? 'Instagram' : 'Youtube'
      }?`,
      content: `There are ${
        platform === 'instagram'
          ? `${formatLargeNumber(profileData?.instagram?.followers_count)}`
          : `${formatLargeNumber(profileData?.youtube?.subscriber_count)}`
      } followers on ${
        profileData?.name
      }'s handle, and it keeps on fluctuating like any other influencer. But the number of followers is not the only metric you should be looking for before collaborating with an influencer. Other very important metrics to look for along with ${
        platform === 'instagram' ? 'followers' : 'subscribers'
      } count are engagement rate, demographic and follower insight.`,
    },
    {
      title: `How much ${profileData?.name} charge for an ${
        platform === 'instagram' ? 'Instagram' : 'Youtube'
      } Post?`,
      content: `Looking to collaborate with ${
        profileData?.name
      }?`,
      url:"https://app.qoruz.com/signup",
      urlcontent:`View deliverable cost for ${
        platform === 'instagram' ? 'Instagram' : 'Youtube'
      }.`,
      restcontent:"There is a lot of confusion and questions regarding the influencer’s deliverable cost, eliminate all this by knowing the deliverable cost according to the industry standard.",
    },
    {
      title: `How to reach out to ${profileData?.name} for collaborations?`,
      url:"https://app.qoruz.com/signup",
      urlcontent:`View contact details.`,
      restcontent: `Sign up on Qoruz for free and view the contact details of many influencers. Contacting influencers is one of the most painful aspects of influencer marketing, cut the chase with direct influencer contact details and connect with them easily.`,
    },
    {
      title: `What type of ${
        platform === 'instagram' ? 'Instagram' : 'Youtube'
      } stats are available for
      ${profileData?.name}?`,
      content: `${
        platform === 'instagram' ? 'Instagram' : 'Youtube'
      } metrics available for ${profileData?.name} are ${
        platform === 'instagram' ? 'followers' : 'subscribers'
      } growth and engagement rate, authenticity of comments & audience demographics. All the details are crucial for targeting the audience and making an informed influencer selection.`,
    },
    {
      title: `What are ${profileData?.name} past brand collaborations?`,
      content: ` ${profileData?.name} has worked with `,
      url:"https://app.qoruz.com/signup",
      urlcontent:`view past brand collaborations.`,
      restcontent:"Knowing past collaboration helps eliminate influencers who have worked with a very similar brand like yours very recently or collaborating with an influencer who has worked with your competitive brand."
    },
    {
      title: `What
      is ${profileData?.name} email id?`,
      url:"https://app.qoruz.com/signup",
      urlcontent:`View the email id of ${profileData?.name}`,
      restcontent: ` and many more influencers by signing up on Qoruz. The email id of the influencer is crucial as it lets you contact influencers or their managers directly.`,
    },
  ];
  return (
    <FaqStyled id='faq' className='faq wow fadeInUp'>
      <Intro className='faq-intro wow fadeInUp'>
        <h2>Frequently Asked Questions</h2>
        <p className='details'>
          Everything you need to know about {profileData?.name} and how to
          start collaboration. <b> Can't find an answer?</b>
        </p>
      </Intro>
      <FaqList className='faq-list'>
        {data.map((item, index) => (
          <FaqListItem
            className='faq-list-item wow fadeInUp'
            key={`faq-item-${index}`}
          >
            <FaqTitle
              className='faq-title'
              onClick={() => {
                const panel: any = document.getElementById(
                  `faq-content-${index}`
                );
                if (panel) {
                  if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                  } else {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                  }
                }
                if (active !== -1) {
                  const prevPanel: any = document.getElementById(
                    `faq-content-${active}`
                  );
                  if (prevPanel) {
                    prevPanel.style.maxHeight = null;
                  }
                }
                if (active === index) {
                  setActive(-1);
                } else {
                  setActive(index);
                }
              }}
            >
              {active === index ? (
                <Icon className='icon active'>+</Icon>
              ) : (
                <Icon className='icon'>+</Icon>
              )}
              <h5 className={`${active === index ? 'title-active' : ''}`}>
                {item.title}
              </h5>
            </FaqTitle>
            <FaqContent className='faq-content' id={`faq-content-${index}`}>
              <p className='details'>{item.content} <a href={item.url}>{item.urlcontent}</a> {item.restcontent}</p>
            </FaqContent>
          </FaqListItem>
        ))}
      </FaqList>
    </FaqStyled>
  );
};

export default Faq;
