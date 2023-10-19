import Button from '@qoruz/components/Button';
import Input from '@qoruz/components/form-elements/Input';
import SelectForm from '@qoruz/components/form-elements/Select';
import Textarea from '@qoruz/components/form-elements/Textarea';
import MessageIcon from '@qoruz/components/svg/message';
import {
  Address,
  ContactInfoMain,
  DetailWrapper,
  EmailBox,
  EmailWrapper,
  Heading,
  Mail,
  Title,
} from '@qoruz/pages/contact/Contactinfo/info.style';
import MapContainer from '@qoruz/pages/contact/ContactMap/maps';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';

export default function Info() {
  const [submitRes, setSubmitRes] = useState(null);
  const [selected, setSelected] = useState('');

  const redirectMail = (mail: any) => {
    window.open(mail);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleRegistration = (e: any) => {
    const form_data = new FormData();
    form_data.append('name', e.username);
    form_data.append('email', e.email);
    form_data.append('phone_number', e.phone);
    form_data.append('reason', selected || '');
    form_data.append('brand_name', e.company || '');
    const url = 'https://data.qoruz.com/api/contact-qoruz';
    fetch(url, {
      body: form_data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((response) => {
          setSubmitRes(response.stuff);
          reset();
        });
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => { });
  };

  const handleState = (e: any) => {
    setSelected(e);
  };

  return (
    <ContactInfoMain>
      <Row>
        <Col sm={12} lg={4} className='contact-col'>
          <MapContainer />
        </Col>
        <Col sm={12} lg={3} className='contact-col'>
          <DetailWrapper>
            <Title>
              <p className='meet-us'>Meet us</p>
            </Title>
            <Mail onClick={() => redirectMail('mailto:hr@qoruz.com')}>
              <Image
                src={joinS3('images/contact-us/mail.svg')}
                alt='mail'
                width={24}
                height={24}
              />
              <p className='mail-id'>hr@qoruz.com</p>
            </Mail>
            <Address>
              <Image
                src={joinS3('images/contact-us/location.svg')}
                alt='address'
                width={24}
                height={24}
              />
              <p className='address'>
                1032, 24th Main Rd, Sector 1,
                <br />
                HSR Layout, Bengaluru, Karnataka, 560102
              </p>
            </Address>
          </DetailWrapper>
        </Col>
        <Col sm={12} lg={5} className='contact-col'>
          <EmailBox>
            <EmailWrapper>
              <Heading>
                <p className='email-us'>Email us</p>
                <p className='fill-contact'>
                  Fill the contact form below and we'll respond within 24 hours.
                </p>
              </Heading>
              <form onSubmit={handleSubmit(handleRegistration)}>
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
                          message: 'Minimum 3 characters',
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
                      placeholder='Company Name'
                      validationSchema={{
                        required: 'Please enter a valid name',
                        minLength: {
                          value: 3,
                          message: 'Minimum 3 characters',
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
                      placeholder='Email'
                      validationSchema={{
                        required: 'Please enter a valid email',
                        minLength: {
                          value: 3,
                          message: 'Minimum 3 characters',
                        },
                      }}
                      required
                    />
                  </Col>
                  <Col sm={12} lg={6}>
                    <Input
                      type='number'
                      name='phone'
                      errors={errors}
                      register={register}
                      placeholder='Phone'
                      validationSchema={{
                        required: 'Enter a valid number',
                        minLength: {
                          value: 10,
                          message: 'Minimum 10 characters',
                        },
                        maxLength: {
                          value: 10,
                          message: 'Maximum 10 characters',
                        },
                      }}
                      required
                    />
                  </Col>
                  <Col sm={12} lg={12}>
                    <SelectForm
                      type='select'
                      name='industry'
                      errors={errors}
                      placeholder='Select the Reasons'
                      change={handleState}
                      required
                      options={[
                        {
                          value: 'I want to learn about qoruz',
                          label: 'I want to learn about qoruz',
                        },
                        {
                          value: 'I want to schedule a product demo',
                          label: 'I want to schedule a product demo',
                        },
                        {
                          value: 'I want to discuss investments/partnerships',
                          label: 'I want to discuss investments/partnerships',
                        },
                      ]}
                    />
                  </Col>
                  <Col sm={12} lg={12}>
                    <Textarea
                      rows={5}
                      cols={40}
                      name='message'
                      errors={errors}
                      register={register}
                      placeholder='Message'
                      validationSchema={{
                        required: 'Please enter valid message',
                        minLength: {
                          value: 3,
                          message: 'Minimum 3 characters',
                        },
                      }}
                    />
                  </Col>
                </Row>
                {submitRes && <p>{submitRes}</p>}
                <Button
                  type='button'
                  variant='primary'
                  size='lg'
                  showIcon={true}
                  icon={<MessageIcon />}
                  iconPosition='right'
                  showShadow={true}
                >
                  <p style={{ marginLeft: '7px' }}> Message Us</p>
                </Button>
              </form>
            </EmailWrapper>
          </EmailBox>
        </Col>
      </Row>
    </ContactInfoMain>
  );
}
