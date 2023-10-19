import Button from '@qoruz/components/Button';
import Input from '@qoruz/components/form-elements/Input';
import FormContainer, {
  SubmitSection,
} from '@qoruz/pages/creator-campaigns/form/form.style';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreatorForm = ({ handleSuccess }: any) => {
  const [formSuccess, setFormSuccess] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegistration = (e: any) => {
    const form_data = new FormData();
    if (
      /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!hotmail|gmail|yahoo)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,4}|\d{1,3})(\]?)$/.test(
        e.email
      )
    ) {
      form_data.append('business_email', e.email);
    } else {
      setInvalid(true);
      return;
    }
    form_data.append('name', e.username);
    form_data.append('company_name', e.companyname);
    form_data.append('phone_number', e.phone);

    const url = 'https://data.qoruz.com/api/influencer_creator_campaigns';
    fetch(url, {
      body: form_data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then(() => {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
            event: '',
          });
          setFormSuccess(true);
          handleSuccess(true);
          reset();
        });
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  };

  return (
    <FormContainer className='campaign-form'>
      <>
        <div className='top-text'>
          <h3>Access 500+ creator campaigns NOW!</h3>
        </div>

        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className='creator-form flex'>
            <span>
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
            </span>
            <span>
              <Input
                type='email'
                name='email'
                errors={errors}
                register={register}
                placeholder='Business Email ID'
                validationSchema={{
                  required: 'Please enter a valid email',
                  minLength: {
                    value: 3,
                    message: 'Minimum 3 characters',
                  },
                }}
                required
                invalid={invalid}
                className={invalid ? 'error' : ''}
              />
            </span>
            <span>
              <Input
                type='text'
                name='companyname'
                errors={errors}
                register={register}
                placeholder='Company Name'
                validationSchema={{
                  required: 'Please enter a valid company name',
                  minLength: {
                    value: 3,
                    message: 'Minimum 3 characters',
                  },
                }}
                required
              />
            </span>
            <span>
              <Input
                type='tel'
                name='phone'
                errors={errors}
                register={register}
                placeholder='Phone Number'
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
            </span>
          </div>
          <SubmitSection>
            <Button
              type='button'
              variant='secondary'
              size='lg'
              showIcon={true}
              // icon={<MessageIcon />}
              iconPosition='right'
              showShadow={true}
              className='register-now'
            >
              <p>Get Access</p>
            </Button>
          </SubmitSection>
        </form>
      </>
    </FormContainer>
  );
};

export default CreatorForm;
