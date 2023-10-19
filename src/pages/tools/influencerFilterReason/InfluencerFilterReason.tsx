import React from 'react';

import KeyFeatureStyled, { Content } from './InfluencerFilterReaason.style';

const TOOLS = [
  {
    id: 1,
    title: 'To eliminate the risk of fake followers',
    content:
      'With the growing number of fake influencers using bots and falsely altering & distorting follower count and engagement data, audience authenticity has already become a critical challenge.',
    contentone:
      'Fortunately spotting them is easy if you take a closer look at their followers and engagement rate. There are two tell-tale ways of spotting a fake influencer.',
    pointone:
      'Anything that seems contrived is most likely purchased. When you see an influencer that has hundreds and thousands of followers but has an iota of engagement rate is a red flag.',
    pointtwo:
      'There has been a rise in something called engagement groups, where a number of people join together in a group called engagement for engagement.',
    pointthree:
      "This gives an illusion of an attractive engagement rate but when you take a closer look you can find the same repetitive comments that make no sense and a jumble of irrelevant emojis. Sometimes thousands of likes on a post where the account has fewer followers.',",
    className: 'one',
  },
  {
    id: 2,
    title: 'To measure ROI.',
    content: 'There is a clear correlation between engagement rate and ROI.',

    contentone:
      'Studies show that influencer marketing has 11 times higher ROI than traditional marketing. For every dollar invested in influencer marketing, brands typically make $5.20. As a result, 66% of brands plan to increase their spending on influencer marketing in 2022.',

    contenttwo:
      'The engagement rate brings you detailed information for each campaign post and enables you to gauge its performance.',
    className: 'two',
  },
];

const InfluencerFilterReason = () => {
  return (
    <>
      <KeyFeatureStyled className='powerful-tools wow fadeInUp'>
        {TOOLS.map((tool, index) => (
          <Content className='content' key={index}>
            <h4 className='flex-column inline-flex'>{tool.title}</h4>
            <div className='content-inner'>
              <p className='details'>{tool.content}</p>
              <p className='details'>{tool.contentone}</p>
              <p className='details'>{tool.contenttwo}</p>
              {tool.pointone && (
                <ul className='reason-lists'>
                  <li className='details'>{tool.pointone}</li>
                  <li className='details'>{tool.pointtwo}</li>
                  <li className='details'>{tool.pointthree}</li>
                </ul>
              )}
            </div>
          </Content>
        ))}
      </KeyFeatureStyled>
    </>
  );
};

export default InfluencerFilterReason;
