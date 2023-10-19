import InstaFakeStyle from '@qoruz/pages/tools/instagram-fake-follower-checker/instagram-fake-follower-checker/instaFake.style';
import { CalculatorContentSection } from '@qoruz/pages/tools/instagramCalculatorContent/instagramCalculatorContent.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';
import { Container } from 'react-grid-system';

const InstaFakeFollowers = () => {
  return (
    <CalculatorContentSection>
      <Container className='container'>
        <InstaFakeStyle>
          <h2 className='heading'>What Are Fake Followers?</h2>
          <p className='tools-content'>
            Fake followers are the ones who don't have a genuine interest in the
            influencer's content but follow them. Fake followers can be bots,
            follow-for-follow followers, and share-to-share followers.
          </p>
          <p className='tools-content'>
            Few influencers might inflate their follower count to portray their
            social media account as popular, credible, and trustworthy.
          </p>
          <p className='tools-content'>
            Such followers in no way benefit the influencer engagement growth or
            any brand that collaborates with such influencers.
          </p>
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='heading'>How to Spot Fake Followers?</h2>
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='tool-sub-heading border-title'>
            Limited Profile Information
          </h2>

          <p className='tools-content'>
            Examining the basic profile information of a follower gives a fair
            idea about the influencers genuinity. If their username is of random
            letters and numbers, or the profile picture is a stock image, those
            are both signs that the user might be fake.
          </p>

          <p className='tools-content'>
            You could analyze bio as well, but many real profiles don’t prefer
            adding them. You can pass this section.
          </p>
          <p className='tools-content'>
            Always consider the follower-following ratio. An account cannot have
            1 follower while following 1000+ accounts.
          </p>
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='tool-sub-heading border-title'>Spam Comments</h2>
          <p className='tools-content'>
            Read the comment section of the influencer. What does it sound like?
            An automated response or an actual person talking. The spammy
            comments indicate that something isn't quite right with the
            influencer’s follower count!
          </p>
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='tool-sub-heading border-title'>
            Unusual Follower Growth Rate
          </h2>
          <p className='tools-content'>
            The sudden surge in follower count is a way to figure out their
            following rate. Doing consistent campaigns and growing followers
            organically can be considered real followers. However, if you see a
            big spike in followers without any corresponding increase in
            engagement (likes, comments), it's likely that these new followers
            are bots.
          </p>
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='tool-sub-heading border-title'>
            Reduce in Engagement Rate
          </h2>
          <p className='tools-content'>
            The followers count show the number of people interested in the
            influencer’s content and engaging with it. When conduction fake
            follower aduit try anlayzing the engagement rate. If engagement is
            far too low for the influencer’s high follower count, there is a
            high chance that the account has fake followers.
          </p>
          <p className='tools-content'>
            Here’s an example of fake instagram account:
          </p>
        </InstaFakeStyle>
        <InstaFakeStyle
          className='fake-image-parent'
          style={{ textAlign: 'center' }}
        >
          <Image
            src={joinS3('images/marketing-tools/fake-follower.jpg')}
            alt='fake-follower'
            className='fake-follower'
            width={1080}
            height={1080}
            // style={{ width: '60%', height: '60%', marginTop: '$sm' }}
          />
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='heading'>
            Impact of Collaborating With Influencer Who Has Fake Followers
          </h2>
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='tool-sub-heading border-title'>
            Lower Engagement Rate
          </h2>

          <p className='tools-content'>
            Fake followers are unlikely to engage, leading to a lack of
            engagement. Collaborating with such influencers affects the brand's
            marketing efforts and may not reach the target audience.
          </p>
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='tool-sub-heading border-title'>
            Brand Credibility Takes a Hit
          </h2>

          <p className='tools-content'>
            Brands that collaborate with influencers with fake followers are
            viewed as dishonest or untrustworthy, damaging their reputation and
            credibility among its target audience.
          </p>
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='tool-sub-heading border-title'>
            Lower Return on Investment
          </h2>

          <p className='tools-content'>
            Brands invest resources, time and pay influencers to promote their
            products. Brands end up paying for exposure to an influencer's
            audience that does not exist, resulting in a low ROI.
          </p>
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='heading'>How Does a Fake Follower Checker Help?</h2>
          <p className='tools-content'>
            A fake follower checker tool helps brands identify whether an
            influencer has genuine or fake followers. The tool analyzes an
            influencer's follower count and engagement metrics to determine the
            authenticity of their following.
          </p>
          <p className='tools-content'>
            The sudden spike in the number of followers shows that there are
            high chances the influencer has got fake followers while the gradual
            growth in the graph shows the consistent increase in follower count
            is organic.
          </p>
        </InstaFakeStyle>
        <InstaFakeStyle
          className='growth-image-parent'
          style={{ textAlign: 'center' }}
        >
          <Image
            src={joinS3('images/marketing-tools/follower-growth.jpg')}
            alt='follower-growth'
            className='fake-follower'
            width={1080}
            height={1080}
            // style={{ width: '60%', height: '60%', marginTop: '$sm' }}
          />
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='tool-sub-heading border-title'>Genuine Engagement</h2>

          <p className='tools-content'>
            Genuine engagement is a key factor in the success of influencer
            marketing campaigns, as it indicates that an influencer's audience
            is interested in their content and is more likely to engage with a
            brand's products or services.
          </p>
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='tool-sub-heading border-title'>
            Protecting Brand Reputation
          </h2>

          <p className='tools-content'>
            Protect the brand's reputation by identifying influencers' follower
            growth rate and ensuring marketing efforts reach a real audience.
            This helps avoid negative feedback from consumers whose fake
            followers may have misled an influencer.
          </p>
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='tool-sub-heading border-title'>Maximizing ROI</h2>

          <p className='tools-content'>
            Brands invest time and resources in promoting products or services
            via influencer marketing. Working with influencers who have a real
            and engaged following, brands can increase their visibility, reach a
            wider audience, and achieve a higher ROI.
          </p>
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='tool-sub-heading border-title'>
            Compliance with social media policies
          </h2>

          <p className='tools-content'>
            Collaborating with an influencer who engages in fraudulent practices
            can violate policies, leading to account suspension or removal.
          </p>
        </InstaFakeStyle>
        <InstaFakeStyle>
          <h2 className='heading'>Stay Away From Fake Instagram Accounts</h2>
          <p className='tools-content'>
            Fake instagram account checkers help brands decide when shortlisting
            influencers to collaborate with.
          </p>
          <p className='tools-content'>
            By performing fake followers audit, ensuring genuine engagement,
            protecting brand reputation, maximizing ROI, and complying with
            social media policies, a fake follower checker can help ensure the
            success of influencer marketing campaigns.
          </p>
        </InstaFakeStyle>
      </Container>
    </CalculatorContentSection>
  );
};

export default InstaFakeFollowers;
