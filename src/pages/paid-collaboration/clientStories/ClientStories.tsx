import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';
import { Container } from 'react-grid-system';

import ClientStoriesStyled, {
  ClientStoriesBlock,
  Figure,
  Info,
  Intro,
  Quotes,
} from './ClientStories.style';

const ClientStories = () => {
  return (
    <ClientStoriesStyled id='clientStories' className='client-stories'>
      <Container className='container'>
        <Info className='info flex-center flex-column flex'>
          <h2>Client Love Stories</h2>
          <Image
            src={joinS3('images/paid-collaboration/key-features-line.svg')}
            width={158}
            height={11}
            alt='Line'
          />
        </Info>
        <ClientStoriesBlock className='client-stories-block flex items-center'>
          <Figure>
            <Image
              src={joinS3('images/paid-collaboration/client.png')}
              width={454}
              height={693}
              alt='Client'
            />
          </Figure>
          <Quotes className='client-quotes flex-column flex'>
            <Intro className='intro flex-column flex'>
              <h2>
                “<mark>Qoruz Paid Collabs</mark> delivered just the right
                campaign.”
              </h2>
              <p className='details'>
                “Tough Deadlines, unreal expectations and quality work was how
                we went about the campaign and Qoruz Paid Collabs delivered just
                the right campaign. We had the best output from various
                influencers making sure best results were met.”
              </p>
            </Intro>
            <Info className='info flex-column flex'>
              <h4>Rahul Palan,</h4>
              <span>Digital Marketing, Star India</span>
              <Image
                className='company'
                src={joinS3('images/paid-collaboration/star.svg')}
                width={74}
                height={30}
                alt='Star'
              />
            </Info>
          </Quotes>
        </ClientStoriesBlock>
      </Container>
    </ClientStoriesStyled>
  );
};

export default ClientStories;
