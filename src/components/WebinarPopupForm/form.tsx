import Button from '@qoruz/components/Button';
import Input from '@qoruz/components/form-elements/Input';
import FormContainer, {
  FormContainerInner,
  Formfield,
  SubmitSection,
} from '@qoruz/components/WebinarPopupForm/form.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Countdown from '@qoruz/utils/countdown';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const EventFormPopup = ({ onClose }: any) => {
  const [formSuccess, setFormSuccess] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [invalidPhone, setInvalidPhone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleRegistration = (e: any) => {
    const form_data = new FormData();
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
    form_data.append('name', e.username);

    if (/^\d{10}$/.test(e.phone)) {
      form_data.append('phone_number', e.phone);
    } else {
      setInvalidPhone(true);
      return;
    }
    // form_data.append('phone_number', e.phone);
    form_data.append('webinar_name', 'Driving ROI Through Content');
    form_data.append('date', '28th June');
    form_data.append('time', '3:00-4:00pm');
    form_data.append('joining_link', 'https://live.zoho.in/QcaBn01SXq');
    form_data.append('duration', '1 Hour');

    const url = 'https://data.qoruz.com/api/webinar_register';
    fetch(url, {
      body: form_data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then(() => {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({
            event: 'webinar_contentROI_form_success',
          });
          setFormSuccess(true);
          reset();
        });
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  };
  const handleCalendalRedirect = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'webinar_contentROI_calendar_success',
    });
    onClose();
  };
  const handleClose = (): void => {
    onClose();
  };

  return (
    <FormContainer className='campaign-form'>
      {formSuccess ? (
        <div className='success-section'>
          <div className='success-icon'>
            <lottie-player
              src='https://assets1.lottiefiles.com/packages/lf20_4chtroo0.json'
              background='transparent'
              speed='1'
              style={{ width: '150px', height: '150px' }}
              loop
              autoplay
            ></lottie-player>
          </div>
          <h3 className='thank-message'>Thank you for registering</h3>
          <p>
            Starts in{' '}
            <span className='countdown'>
              <Countdown date='2023-06-28T00:00:00' />
            </span>
          </p>
          <div onClick={handleCalendalRedirect}>
            <Button
              type='link'
              href='https://calendar.google.com/calendar/r/eventedit?text=How%20to%20drive%20ROI%20with%20content&details=Hi%20There,%20Join%20the%20panel%20discussion%20here%20https%3A%2F%2Flive.zoho.in%2FQcaBn01SXq.%0AHere%20what%20the%20panel%20will%20cover:%0A1.Identifying%20engaging%20content%20right%20channels%20for%20your%20client%20target%20audience.%0A2.Leveraging%20data%20analytics%20to%20measure%20content%20marketing%20efforts.%0A3.Allocating%20influencer%20marketing%20budgets%20for%20content%20driven%20ROI.%0A4.Best%20practices%20to%20measure%20content%20ROI%20and%20tie%20it%20back%20to%20business%20goals.%0A5.Emerging%20content%20trends%20in%20that%20will%20have%20a%20significant%20impact%20on%20driving%20ROI%20and%20much%20more!&dates=20230628T150000/20230628T160000
            

            '
              variant='secondary'
              size='lg'
              showIcon={true}
              // icon={<MessageIcon />}
              iconPosition='right'
              showShadow={true}
            >
              Add to calender
            </Button>
          </div>
        </div>
      ) : (
        <>
          <FormContainerInner>
            <div className='image-section'>
              <Image
                src={joinS3(
                  'images/events/drive-roi-through-content/close.svg'
                )}
                alt='close icon'
                width={24}
                height={24}
                className='close-icon'
                onClick={handleClose}
              />
              <Image
                src={joinS3(
                  'images/events/drive-roi-through-content/drive-roi.png'
                )}
                alt='popup image'
                className='popup-image'
                width={850}
                height={383.1}
              />
            </div>
            <div className='top-text'>
              <h3>Want to boost your ROI?</h3>
              <p className='popup-detail'>
                Don't miss our webinar on content-driven success.
              </p>
            </div>

            <form onSubmit={handleSubmit(handleRegistration)}>
              <Formfield>
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
                    invalidPhone={invalidPhone}
                  />
                </span>
              </Formfield>
              <SubmitSection>
                <Button
                  type='button'
                  variant='primary'
                  size='lg'
                  showIcon={true}
                  // icon={<MessageIcon />}
                  iconPosition='right'
                  showShadow={true}
                  className='register-now'
                >
                  <p> Register Now</p>
                </Button>
              </SubmitSection>
            </form>
          </FormContainerInner>
        </>
      )}
    </FormContainer>
  );
};

export default EventFormPopup;
