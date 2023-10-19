import Button from '@qoruz/components/Button';
import Main, {
  Bottom,
  BottomLeft,
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
  Wrapper,
} from '@qoruz/components/campaign-brief/CampaignBrief.style';
import CampaignBriefSuccess from '@qoruz/components/campaign-brief/campaignSuccess';
import Input from '@qoruz/components/form-elements/Input';
import SelectForm from '@qoruz/components/form-elements/Select';
import Textarea from '@qoruz/components/form-elements/Textarea';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';

import popupStyles from './custom-popup.module.css';

const CampaignBrief = (props: any) => {
  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedDeadline, setSelectedDeadline] = useState<any>('empty');
  const [selectedLaunch, setSelectedLaunch] = useState<any>('empty');
  const [invalid, setInvalid] = useState(false);
  const [amount, setAmount] = useState('');
  useEffect(() => {
    if (show) {
      document.body.classList.add('stop-scroll-body');
    } else {
      document.body.classList.remove('stop-scroll-body');
    }
  }, [show]);

  const closeHandler = () => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitFunc = (e: any) => {
    if (!selectedDeadline || !selectedLaunch) {
      return;
    }
    const form_data = new FormData();
    form_data.append('name', e.username);

    if (
      /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!hotmail|gmail|yahoo)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/.test(
        e.email
      )
    ) {
      form_data.append('email', e.email);
    } else {
      setInvalid(true);
      return;
    }
    form_data.append('phone_number', e.phone);
    form_data.append('brand_name', e.companyname || '');
    form_data.append('description', e.message || '');
    form_data.append('campaign-deadline', selectedDeadline || '');
    form_data.append('launch-campaign', selectedLaunch || '');
    form_data.append('budget', e.budget || '');
    const url = 'https://data.qoruz.com/api/submit-campaign-brief';

    fetch(url, {
      body: form_data,
      method: 'POST',
    })
      .then(() => {
        setShowSuccess(true);
        reset();
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  };
  const handleState = (e: any) => {
    setSelectedDeadline(e);
  };

  const handleStateLaunch = (e: any) => {
    setSelectedLaunch(e);
  };

  const addCommas = (value: any) => {
    value = value.toString();
    let lastThree = value.substring(value.length - 3);
    const otherNumbers = value.substring(0, value.length - 3);
    if (otherNumbers != '') lastThree = ',' + lastThree;
    return (value =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree);
    // alert(res);
    // return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleAmountChange = (event: any) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9.]/g, '');
    inputValue = inputValue.replace(/^(\d*\.?)|(\d{0,2})$/g, '$1$2');
    // const amountWithDecimal = addDecimal(inputValue);
    const withCommas = addCommas(inputValue);
    setAmount(withCommas);
  };
  const _onPopupClick = (event: any) => {
    event.stopPropagation();
  };

  const onLayoutCLick = (event: any) => {
    event.stopPropagation();
    closeHandler();
  };

  return (
    <>
      <Main
        style={{
          visibility: show ? 'visible' : 'hidden',
          opacity: show ? '1' : '0',
        }}
        className={popupStyles.overlay}
        onClick={onLayoutCLick}
        id='overlay'
      >
        <Wrapper
          className={popupStyles.popup}
          onClick={_onPopupClick}
          id='popup'
        >
          <Container className='campaing-container'>
            <PostCampaign className='show-mobile-icon'>
              <div className='top-content'>
                <h5 className='campaign'>Post your campaign brief</h5>
                <p className='details'>
                  Fill the details we will get back to you soon!
                </p>
                <CampaignBriefSuccess />
              </div>
              <div className='close-popup'>
                <Image
                  className='close-popup-button'
                  src={joinS3('images/campaign-brief/dark-close-popup.svg')}
                  alt='close'
                  width={24}
                  height={24}
                  onClick={closeHandler}
                />
              </div>
            </PostCampaign>
            <Row className='campaign-popup-new'>
              {showSuccess ? (
                <Col lg={7} className='left-container-success'>
                  <CampaignSuccess>
                    <Image
                      src={joinS3('images/campaign-brief/success.svg')}
                      alt='success'
                      width={51}
                      height={50}
                    />
                    <h3>Thanks for submitting your campaign brief! </h3>
                    <p className='text-success'>
                      We're excited to start working with you.
                    </p>
                  </CampaignSuccess>
                </Col>
              ) : (
                <Col lg={7} className='left-container'>
                  <PostCampaign className='show-desktop'>
                    <h5 className='campaign'>Post your campaign brief</h5>
                    <p className='details'>
                      Fill the details we will get back to you soon!
                    </p>
                  </PostCampaign>
                  <CampaignBriefSuccess className='show-desktop' />
                  <form onSubmit={handleSubmit(submitFunc)}>
                    <Info>
                      <Row className='campaign-margin'>
                        <Col lg={6} className='no-padding'>
                          <Input
                            type='text'
                            name='username'
                            errors={errors}
                            register={register}
                            placeholder='Name'
                            validationSchema={{
                              required: 'Please enter a valid name',
                              minLength: {
                                value: 3,
                                message: 'minimum 3 characters',
                              },
                            }}
                            required
                          />
                        </Col>
                        <Col lg={6} className='no-padding'>
                          <Input
                            type='email'
                            name='email'
                            errors={errors}
                            register={register}
                            placeholder='Business Email'
                            validationSchema={{
                              required: 'Please enter a valid Email',
                            }}
                            required
                            invalid={invalid}
                          />
                        </Col>
                      </Row>
                      <Row className='campaign-margin'>
                        <Col lg={6} className='no-padding'>
                          <Input
                            type='tel'
                            name='phone'
                            errors={errors}
                            register={register}
                            placeholder='Phone'
                            pattern='[6-9]{1}[0-9]{9}'
                            validationSchema={{
                              required: 'Please enter a valid number',
                              minLength: {
                                value: 3,
                                message: 'minimum 3 characters',
                              },
                            }}
                            required
                          />
                        </Col>
                        <Col lg={6} className='no-padding'>
                          <Input
                            type='text'
                            name='companyname'
                            errors={errors}
                            register={register}
                            placeholder='Company Name'
                            validationSchema={{
                              required: 'Please enter a valid name',
                              minLength: {
                                value: 3,
                                message: 'minimum 3 characters',
                              },
                            }}
                            required
                          />
                        </Col>
                      </Row>
                      <Row className='campaign-margin'>
                        <Col lg={12} className='no-padding'>
                          <Textarea
                            rows={5}
                            cols={40}
                            type='text'
                            name='message'
                            errors={errors}
                            register={register}
                            placeholder='Campaign Brief'
                            validationSchema={{
                              required: 'Please enter a brief',
                              minLength: {
                                value: 3,
                                message: 'minimum 3 characters',
                              },
                            }}
                            required
                          />
                        </Col>
                      </Row>
                      <Row className='campaign-deadline campaign-margin'>
                        <Col lg={4} className='no-padding'>
                          <SelectForm
                            type='select'
                            name='deadline'
                            errors={errors}
                            register={register}
                            placeholder='Deadline'
                            showRequired={
                              selectedDeadline === 'clicked' ? true : false
                            }
                            change={handleState}
                            validationSchema={{
                              required: 'select enter a valid option',
                              minLength: {
                                value: 3,
                                message: 'select one',
                              },
                            }}
                            required
                            options={[
                              {
                                value: 'less than a week',
                                label: 'Less Than a Week',
                              },
                              {
                                value: 'less than 2 weeks',
                                label: 'less than 2 weeks',
                              },
                              { value: 'in a month', label: 'In a month' },
                              {
                                value: 'after a month',
                                label: 'After A month',
                              },
                            ]}
                          />
                        </Col>
                        <Col lg={4} className='no-padding'>
                          <SelectForm
                            type='select'
                            name='launch'
                            errors={errors}
                            register={register}
                            showRequired={
                              selectedLaunch === 'clicked' ? true : false
                            }
                            placeholder='Launch Campaign'
                            change={handleStateLaunch}
                            validationSchema={{
                              required: 'select enter a valid option',
                              minLength: {
                                value: 3,
                                message: 'select one',
                              },
                            }}
                            required
                            options={[
                              { value: 'by outsource', label: 'By outsource' },
                              { value: 'by yourself', label: 'By yourself' },
                            ]}
                          />
                        </Col>
                        <Col lg={4} className='no-padding'>
                          <span className='buget-input'>
                            <Image
                              src={joinS3(
                                'images/campaign-brief/rupees-sign-may22-23.svg'
                              )}
                              alt='rupee'
                              width={10}
                              height={12}
                              className='rupees-icon'
                            />
                            <Input
                              type='text'
                              name='budget'
                              errors={errors}
                              currentValue={amount}
                              onchange={handleAmountChange}
                              register={register}
                              placeholder='Budget'
                              validationSchema={{
                                required: 'Please enter a budget',
                                minLength: {
                                  value: 3,
                                  message: 'minimum 3 characters',
                                },
                              }}
                              required
                            />
                          </span>
                        </Col>
                      </Row>
                      <Row className='campaing-bottom'>
                        <Col lg={9} className='no-padding'>
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
                                  src={joinS3(
                                    'images/campaign-brief/stars.svg'
                                  )}
                                  alt='stars'
                                  width={63}
                                  height={11}
                                />
                                <Ratings>
                                  <Image
                                    src={joinS3(
                                      'images/campaign-brief/ratings.svg'
                                    )}
                                    alt='ratings'
                                    width={24}
                                    height={11}
                                  />
                                  <Image
                                    src={joinS3(
                                      'images/campaign-brief/dot.svg'
                                    )}
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
                                  src={joinS3(
                                    'images/campaign-brief/users.svg'
                                  )}
                                  alt='users'
                                  width={66.22}
                                  height={80}
                                />
                              </Logo>
                            </BottomLeft>
                          </Bottom>
                        </Col>
                        <Col lg={3} className='no-padding'>
                          <Button
                            type='button'
                            text='Submit'
                            size='lg'
                            variant='primary'
                            className='ml-auto'
                            showIcon={true}
                            showShadow={true}
                            onClick={() => {
                              selectedDeadline == 'empty'
                                ? setSelectedDeadline('clicked')
                                : setSelectedDeadline(selectedDeadline);
                              selectedLaunch == 'empty'
                                ? setSelectedLaunch('clicked')
                                : setSelectedLaunch(selectedLaunch);
                            }}
                          />
                        </Col>
                      </Row>

                      {/* form ends */}
                    </Info>
                  </form>
                  <CampaignSuccess></CampaignSuccess>
                </Col>
              )}
              <Col lg={5} className='right-col' style={{ padding: '0px' }}>
                <RightBox>
                  <Frame>
                    <Image
                      src={joinS3('images/campaign-brief/heroBG.svg')}
                      alt='hero-BG'
                      width={550}
                      height={690}
                      style={{
                        position: 'absolute',
                        zIndex: -1,
                        width: '100%',
                        height: '100%',
                      }}
                    />
                    <Influencer>
                      <HeadLine>
                        <h5 className='headline'>
                          "Game changer for influencer Marketing"
                        </h5>
                        <Image
                          className='close-popup-button show-desktop'
                          src={joinS3('images/campaign-brief/close-popup.svg')}
                          alt='close'
                          width={24}
                          height={24}
                          onClick={closeHandler}
                        />
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
                              Small-Business (50 or fewer emp.)
                            </p>
                          </ProfileDesc>
                        </ProfileInfo>
                      </ProfileWrapper>
                    </Influencer>
                    <Hero className='banner-image'>
                      <Image
                        src={joinS3('images/campaign-brief/hero.svg')}
                        alt='hero'
                        width={500}
                        height={395}
                        style={{
                          width: '100%',
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
};

CampaignBrief.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CampaignBrief;
