import Main, {
  Bottom,
  BottomLeft,
  BottomRight,
  CampaignSuccess,
  ContentWrapper,
  Frame,
  G2,
  HeadLine,
  Hero,
  Influencer,
  Info,
  Logo,
  Marketing,
  PostCampaign,
  ProfileDesc,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileWrapper,
  Ratings,
  Reviews,
  RightBox,
  Submit,
  Wrapper,
} from '@qoruz/components/campaign-brief/CampaignBrief.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';

export default function CampaignBriefMobile() {
  return (
    <>
      <Main>
        <Wrapper>
          <Container>
            <Row>
              <Col lg={7}>
                <PostCampaign>
                  <h5 className='campaign'>Post your campaign brief</h5>
                  <p className='details'>
                    Fill the details we will get back to you soon!
                  </p>
                </PostCampaign>
                <form>
                  <Info>
                    <Row className='campaign-margin'>
                      <Col lg={6}>
                        <input
                          className='full-name'
                          type='text'
                          placeholder='Name'
                        ></input>
                      </Col>
                      <Col lg={6}>
                        <input
                          className='email'
                          type='email'
                          placeholder='Email Address'
                        ></input>
                      </Col>
                    </Row>
                    <Row className='campaign-margin'>
                      <Col lg={6}>
                        <input
                          className='phone'
                          type='tel'
                          placeholder='Phone Number'
                        ></input>
                      </Col>
                      <Col lg={6}>
                        <input
                          className='company'
                          type='text'
                          placeholder='Company Name'
                        ></input>
                      </Col>
                    </Row>
                    <Row className='campaign-margin'>
                      <Col lg={12}>
                        <textarea
                          className='message-box'
                          rows={5}
                          cols={5}
                          placeholder='Campaign Brief'
                        >
                          Campaign Brief
                        </textarea>
                      </Col>
                    </Row>
                    <Row className='campaign-deadline'>
                      <Col lg={5}>
                        <select
                          className='deadline'
                          placeholder='Campaign Deadline'
                        ></select>
                      </Col>
                      <Col lg={3.5}>
                        <select
                          className='campaign-launch'
                          placeholder='Launch Campaign'
                        ></select>
                      </Col>
                      <Col lg={3.5}>
                        <input
                          className='budget'
                          type='text'
                          placeholder='Your Budget'
                        ></input>
                      </Col>
                    </Row>
                  </Info>
                </form>
                <Bottom>
                  <BottomLeft>
                    <ContentWrapper>
                      <G2>
                        <Image
                          src={joinS3('images/campaign-brief/g2.svg')}
                          alt='g-logo'
                          width={19}
                          height={20}
                        />
                        <Marketing>
                          <p className='marketing'>G2 Marketing</p>
                          <p className='solution'>Solution</p>
                        </Marketing>
                      </G2>
                      <Image
                        src={joinS3('images/campaign-brief/stars.svg')}
                        alt='stars'
                        width={63}
                        height={11}
                      />
                      <Ratings>
                        <Image
                          src={joinS3('images/campaign-brief/ratings.svg')}
                          alt='ratings'
                          width={24}
                          height={11}
                        />
                        <Image
                          src={joinS3('images/campaign-brief/dot.svg')}
                          alt='dot'
                          width={4}
                          height={4}
                        />
                        <Reviews>
                          <p className='reviews'>14 reviews</p>
                        </Reviews>
                      </Ratings>
                    </ContentWrapper>
                    <Logo>
                      <Image
                        src={joinS3('images/campaign-brief/users.svg')}
                        alt='users'
                        width={66.22}
                        height={80}
                      />
                    </Logo>
                  </BottomLeft>
                  <BottomRight>
                    <Submit>
                      <p className='submit-button'>Submit</p>
                      <Image
                        src={joinS3('images/campaign-brief/arrow.svg')}
                        alt='alt'
                        width={12}
                        height={11.45}
                      />
                    </Submit>
                  </BottomRight>
                </Bottom>
                <CampaignSuccess></CampaignSuccess>
              </Col>
              <Col lg={5}>
                <RightBox>
                  <Frame>
                    <Image
                      src={joinS3('images/campaign-brief/heroBG.svg')}
                      alt='hero-BG'
                      width={550}
                      height={690}
                      style={{ position: 'absolute', zIndex: -1 }}
                    />
                    <Influencer>
                      <HeadLine>
                        <h5 className='headline'>
                          "Game changer for influencer Marketing"
                        </h5>
                      </HeadLine>
                      <ProfileWrapper>
                        <ProfileImage>
                          <Image
                            src={joinS3(
                              'images/campaign-brief/profile-photo.svg'
                            )}
                            alt='photo'
                            width={58}
                            height={58}
                          />
                        </ProfileImage>
                        <ProfileInfo>
                          <ProfileName>
                            <p className='profile-name'>Soumava D.</p>
                          </ProfileName>
                          <ProfileDesc>
                            <p className='role'>Technical Lead</p>
                            <p className='business'>
                              Small-Business(50 or fewer emp.)
                            </p>
                          </ProfileDesc>
                        </ProfileInfo>
                      </ProfileWrapper>
                    </Influencer>
                    <Hero>
                      <Image
                        src={joinS3('images/campaign-brief/hero.svg')}
                        alt='hero'
                        width={500}
                        height={395}
                        style={{
                          width: '90%',
                          margin: 'auto',
                          display: 'block',
                          height: 'auto',
                        }}
                      />
                    </Hero>
                  </Frame>
                </RightBox>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </Main>
    </>
  );
}
