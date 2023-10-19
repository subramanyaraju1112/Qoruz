import Button from '@qoruz/components/Button';
import Input from '@qoruz/components/form-elements/Input';
import Textarea from '@qoruz/components/form-elements/Textarea';
import CustomSlider from '@qoruz/components/slider/Slider';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';

import WhatYouNeedStyled, {
  CardGroup,
  Credits,
  List,
  ListBox,
  ListItem,
  ListOne,
  ListWrapper,
} from './whatYouNeed.style';
import Card from '../../../components/Card';

const marks = {
  0: {
    style: {
      color: '#FFFFFF',
    },
    label: 0,
  },
  4: {
    style: {
      color: '#FFFFFF',
    },
    label: 4,
  },
  8: {
    style: {
      color: '#FFFFFF',
    },
    label: 8,
  },
  12: {
    style: {
      color: '#FFFFFF',
    },
    label: 12,
  },
  16: {
    style: {
      color: '#FFFFFF',
    },
    label: 16,
  },
  20: {
    style: {
      color: '#FFFFFF',
    },
    label: 20,
  },
  24: {
    style: {
      color: '#FFFFFF',
    },
    label: 24,
  },
  28: {
    style: {
      color: '#FFFFFF',
    },
    label: 28,
  },
  32: {
    style: {
      color: '#FFFFFF',
    },
    label: 32,
  },
  36: {
    style: {
      color: '#FFFFFF',
      width: 20,
    },
    label: 36,
  },
};
const Data = [
  {
    id: 1,
    title: 'Search Wizard',
  },
  {
    id: 2,
    title: 'Influencer Profile Analytics',
  },
  {
    id: 3,
    title: 'Campaign Reporting',
  },
  {
    id: 4,
    title: 'Influencer Outreach',
  },
  {
    id: 5,
    title: 'Future Upgrades',
  },
  {
    id: 6,
    title: 'Dedicated Support',
  },
];

const WhatYouNeed = () => {
  const [credit, setCredit] = useState(0);
  const [selected, setSelected] = useState(1);
  const [resMessage, setResMessage] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onChangeSlider = (val: any) => {
    setCredit(val);
  };

  const handleRegistration = (e: any) => {
    const form_data = new FormData();
    form_data.append('name', e.name);
    form_data.append('email', e.email);
    form_data.append('phone_number', e.phone);
    // form_data.append('company',  e.company || '');
    form_data.append('description', e.brief || '');
    const url = 'https://data.qoruz.com/api/submit-custom-plan-request';
    fetch(url, {
      method: 'POST',
      body: form_data,
    })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .then((res) => {
        res.json().then((response) => {
          setResMessage(response.stuff);
          reset();
        });
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  };

  return (
    <>
      <WhatYouNeedStyled className='what-you-need-intro desktop' id='pricing'>
        <Container className='container'>
          <Row>
            <Col lg={4} className='what-you-need-intro-left'>
              <h3 className='white-text h3 wow fadeInUp'>
                Only pay for what you need
              </h3>
              <p className='description white-text wow fadeInUp'>
                Select the influencer marketing platform pricing plan that best
                suits your goals.
              </p>
            </Col>
            <Col lg={8} className='what-you-need-intro-right'>
              <CardGroup className='card-group flex items-center'>
                <Card
                  className={`card ${
                    selected == 1 ? 'card-1' : ''
                  } flex-column clickable-item flex`}
                  onClick={() => setSelected(1)}
                >
                  <span>Starter Plan</span>
                  <h3>Market Planning + Reporting</h3>
                </Card>
                <Card
                  className={`card ${
                    selected == 2 ? 'card-1' : ''
                  } flex-column clickable-item flex`}
                  onClick={() => setSelected(2)}
                >
                  <span>Enterprise Plan</span>
                  <h3>Custom Planning + Reporting</h3>
                </Card>
              </CardGroup>
              {selected !== 2 ? (
                <Credits className='credits'>
                  <div
                    style={{
                      padding: '32px 36px',
                    }}
                  >
                    <section
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <p className='credit-box'>{credit} Credits</p>
                    </section>
                    <CustomSlider
                      step={1}
                      marks={marks}
                      max={36}
                      range={false}
                      onChange={() => onChangeSlider}
                    />
                  </div>
                  <div className='list-container'>
                    <List className='list flex-column list-items flex'>
                      {Data.map((item, index) => (
                        <ListItem
                          className='flex list-item items-center'
                          key={index}
                        >
                          <Image
                            src={joinS3('images/solution/tick.svg')}
                            alt='Tick'
                            width={12}
                            height={10}
                          />
                          {item.title}
                        </ListItem>
                      ))}
                    </List>
                    <div className='right-child'>
                      <small style={{ color: '#FFFFFF' }}>
                        For {credit} Influencers
                      </small>
                      <h3 style={{ color: '#FFFFFF' }}>
                        {' '}
                        &#8377;{credit * 79}
                      </h3>
                      <div
                        className='start-now'
                        onClick={() => {
                          window.open('https://app.qoruz.com/signup', '_blank');
                        }}
                      >
                        Start now
                        <svg
                          width='13'
                          height='12'
                          viewBox='0 0 13 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M12.4937 1.07273C12.4937 0.977273 12.3938 0.881818 12.2938 0.786364C12.1938 0.690909 12.0938 0.595454 11.9937 0.595454C11.8937 0.5 11.6938 0.5 11.5938 0.5H2.59375C1.99375 0.5 1.59375 0.881818 1.59375 1.45455C1.59375 2.02727 1.99375 2.40909 2.59375 2.40909H9.19375L0.89375 10.3318C0.49375 10.7136 0.49375 11.2864 0.89375 11.6682C1.09375 11.8591 1.29375 11.9545 1.59375 11.9545C1.89375 11.9545 2.09375 11.8591 2.29375 11.6682L10.5938 3.74545V10.0455C10.5938 10.6182 10.9937 11 11.5938 11C12.1938 11 12.5938 10.6182 12.5938 10.0455V1.45455C12.5938 1.35909 12.5938 1.16818 12.4937 1.07273Z'
                            fill='white'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Credits>
              ) : (
                <Credits className='credits planning'>
                  <form
                    className='email-row flex'
                    onSubmit={handleSubmit(handleRegistration)}
                  >
                    <Row className='planning-row'>
                      <Col sm={12} lg={8}>
                        <Row>
                          <Col sm={12} lg={6}>
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
                          <Col sm={12} lg={6}>
                            <Input
                              type='text'
                              name='company'
                              errors={errors}
                              register={register}
                              placeholder='Company'
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
                          <Col sm={12} lg={6}>
                            <Input
                              type='email'
                              name='email'
                              errors={errors}
                              register={register}
                              placeholder='Email Id'
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
                          <Col sm={12} lg={6}>
                            <Input
                              type='tel'
                              name='phone'
                              errors={errors}
                              register={register}
                              placeholder='Phone'
                              pattern='[6-9]{1}[0-9]{9}'
                              validationSchema={{
                                required: 'Please enter a valid phone',
                                minLength: {
                                  value: 10,
                                  message: 'minimum 10 characters',
                                },
                                maxLength: {
                                  value: 10,
                                  message: 'minimum 10 characters',
                                },
                              }}
                              required
                            />
                          </Col>
                          <Col sm={12} lg={12}>
                            <Textarea
                              rows={8}
                              cols={40}
                              type='text'
                              className='message-box'
                              name='brief'
                              errors={errors}
                              register={register}
                              placeholder='Requirement Brief'
                              validationSchema={{
                                required: 'Please enter a brief',
                                minLength: {
                                  value: 20,
                                  message: 'minimum 20 characters',
                                },
                              }}
                              required
                            />
                          </Col>
                          <span>{resMessage}</span>
                        </Row>
                      </Col>
                      <Col sm={12} lg={4}>
                        <ListWrapper>
                          <ListBox>
                            <ListOne>
                              <Image
                                src={joinS3('images/check.svg')}
                                alt='check'
                                width={12}
                                height={10}
                              />
                              <p className='detail'>Influencer Outreach</p>
                            </ListOne>
                            <ListOne>
                              <Image
                                src={joinS3('images/check.svg')}
                                alt='check'
                                width={12}
                                height={10}
                              />
                              <p className='detail'>Future Upgrades</p>
                            </ListOne>
                            <ListOne>
                              <Image
                                src={joinS3('images/check.svg')}
                                alt='check'
                                width={12}
                                height={10}
                              />
                              <p className='detail'>Dedicated Support</p>
                            </ListOne>
                            <ListOne>
                              <Image
                                src={joinS3('images/check.svg')}
                                alt='check'
                                width={12}
                                height={10}
                              />
                              <p className='detail'>Search Wizard</p>
                            </ListOne>
                            <ListOne>
                              <Image
                                src={joinS3('images/check.svg')}
                                alt='check'
                                width={12}
                                height={10}
                              />
                              <p className='detail'>
                                Influencer Profile Analysis
                              </p>
                            </ListOne>
                            <ListOne>
                              <Image
                                src={joinS3('images/check.svg')}
                                alt='check'
                                width={12}
                                height={10}
                              />
                              <p className='detail'>Campaign Reporting</p>
                            </ListOne>
                            <ListOne>
                              <Image
                                src={joinS3('images/check.svg')}
                                alt='check'
                                width={12}
                                height={10}
                              />
                              <p className='detail'>Influencer Outreach</p>
                            </ListOne>
                            <ListOne>
                              <Image
                                src={joinS3('images/check.svg')}
                                alt='check'
                                width={12}
                                height={10}
                              />
                              <p className='detail'>Future Upgrades</p>
                            </ListOne>
                            <ListOne>
                              <Image
                                src={joinS3('images/check.svg')}
                                alt='check'
                                width={12}
                                height={10}
                              />
                              <p className='detail'>Dedicated Support</p>
                            </ListOne>
                          </ListBox>
                          {/* <Form.Item>
                            <Button
                              type='primary'
                              htmlType='submit'
                              className='button primary sm primary-button submit-button'
                              // className={popupStyles.submitBtn}
                              // style={{ transform: 'translate(30px, 50px)' }}
                              // onClick={handleSuccess}
                            >
                              Submit <LinkIcon />
                            </Button>
                          </Form.Item> */}
                          <Button
                            type='button'
                            text='Submit'
                            size='lg'
                            variant='primary'
                            showShadow={true}
                            showIcon={true}
                            className='fullwidth'
                          />
                        </ListWrapper>
                      </Col>
                    </Row>
                  </form>

                  {/* <EmailBox>
                    <EmailWrapper>
                    
                    </EmailWrapper>
                  </EmailBox> */}
                </Credits>
              )}
            </Col>
          </Row>
        </Container>
      </WhatYouNeedStyled>
    </>
  );
};

export default WhatYouNeed;
