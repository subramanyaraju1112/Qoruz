import Button from '@qoruz/components/Button';
import LinkIcon from '@qoruz/components/svg/linkIcon';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Container } from 'react-grid-system';
const CampaignBrief = dynamic(
  () => import('../../../components/campaign-brief/CampaignBrief')
);

import StartExploringStyled, {
  AttractiveBusiness,
  ButtonGroup,
  Overlay,
  Polygon,
  StartExploringImage,
  StartExploringInfo,
  TopCreator,
} from './startExploring.style';
// import ButtonSecondary from '@qoruz/components/link-buttons/buttonSecondary';

const TopCreatorsList = [
  {
    id: 1,
    category: 'Fashion',
    fName: 'Karon',
    lName: 'Dhingra',
    score: '8.72',
    avatar: joinS3('images/top-creators/karron-dhingra.jpg'),
    url: 'https://app.qoruz.com/profile/theformaledit',
  },
  {
    id: 2,
    category: 'Fashion',
    fName: 'Suraj',
    lName: 'Pal Singh',
    score: '8.99',
    avatar: joinS3('images/top-creators/suraj-pal-singh.jpg'),
    url: 'https://app.qoruz.com/profile/suraj.palsingh.961',
  },
  {
    id: 3,
    category: 'Beauty',
    fName: 'Saloni',
    lName: 'Sehra',
    score: '8.13',
    avatar: joinS3('images/top-creators/saloni-sehra.jpg'),
    url: 'https://app.qoruz.com/profile/saloniseh',
  },
  {
    id: 4,
    category: 'Travel',
    fName: 'Anunay',
    lName: 'Sood',
    score: '8.97',
    avatar: joinS3('images/top-creators/anunay-sood.jpeg'),
    url: 'https://app.qoruz.com/profile/anunaysood',
  },
  {
    id: 5,
    category: 'Travel',
    fName: 'Isa',
    lName: 'Khan',
    score: '8.53',
    avatar: joinS3('images/top-creators/isa-khan.jpg'),
    url: 'https://app.qoruz.com/profile/khan.isa_1',
  },
  {
    id: 6,
    category: 'Health & Fitness',
    fName: 'Rohit',
    lName: 'Khandelwal',
    score: '8.55',
    avatar: joinS3('images/top-creators/rohit-khandelwal.jpg'),
    url: 'https://app.qoruz.com/profile/rohit_khandelwal77',
  },
];

const StartExploring = () => {
  const [openForm, setOpenForm] = useState(false);

  const popupCloseHandler = (e: any) => {
    setOpenForm(e);
    document.body.classList.remove('stop-scroll-body');
  };

  return (
    <StartExploringStyled className='start-exploring'>
      <Container className='first container flex'>
        <StartExploringInfo className='start-exploring-info flex-column flex'>
          <h3 className='wow fadeInUp'>
            Your search for the perfect creators ends now.
          </h3>
          <p className='details wow fadeInUp'>
            Build brand awareness & long-lasting customer relationships while
            driving sales with influencer collaborations. Get started today.
          </p>
          <ButtonGroup className='button-group wow fadeInUp flex flex-wrap items-center'>
            <Button
              type='link'
              href='https://app.qoruz.com/signup'
              text='Get Free Access '
              showIcon={true}
              size='lg'
              variant='outline'
              target='_blank'
            />

            <Button
              type='button'
              size='lg'
              text='Post a campaign brief'
              showIcon={true}
              onClick={() => {
                setOpenForm(true);
              }}
              variant='primary'
            />
          </ButtonGroup>
        </StartExploringInfo>
        <StartExploringImage className='start-exploring-image wow fadeInUp'>
          {[...TopCreatorsList].map((item: any, index: any) => (
            <Link
              className={`embla__slide embla__class-names card${index}`}
              href={item.url}
              target='_blank'
              key={item.id}
              style={{
                opacity: 1,
              }}
            >
              <TopCreator className='top-creator'>
                <Image
                  src={item.avatar}
                  alt={item.fName}
                  width={203.21}
                  height={331}
                />
                <Polygon className='polygon flex-center flex'>
                  {item.score}
                </Polygon>
                <Overlay className='top-creator-overlay flex items-end justify-between'>
                  <div className='basic-detail'>
                    <p>
                      <small>{item.category}</small>
                    </p>
                    <p className='influencer-name'>
                      {item.fName} {item.lName}
                    </p>
                  </div>
                </Overlay>
              </TopCreator>
            </Link>
          ))}
          <Link
            target='_blank'
            href='https://app.qoruz.com/signup'
            className='button lg explore-button'
          >
            Start exploring
            <LinkIcon />
          </Link>
        </StartExploringImage>
      </Container>
      <Container className='container'>
        <AttractiveBusiness className='attractive-business wow fadeInUp flex flex-wrap items-center'>
          <span>Attractive business suite options</span>
          <Button
            target='_self'
            href='/qoruz-business-suite'
            className='flex-center button-hover flex'
            type='link'
            variant='pill'
            size='sm'
          >
            View pricing
          </Button>
        </AttractiveBusiness>
      </Container>
      {openForm ? (
        <CampaignBrief show={openForm} onClose={popupCloseHandler} />
      ) : null}
    </StartExploringStyled>
  );
};

export default StartExploring;
