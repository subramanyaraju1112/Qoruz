import CommercialData, {
  ContactDetail,
  ImportantData,
} from '@qoruz/pages/profile/contactDetailCommercial/ContactDetailCommercial.style';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-grid-system';

const ContactDetailCommercial = ({ data }: any) => {
  return (
    <CommercialData id='contact' style={{ scrollMarginTop: '20px' }}>
      <h2>{data?.name} Contact Details & Commercials</h2>
      <p className='details'>
        After you’ve finalized the list of {data?.category} to work on your
        influencer campaign, the next crucial the contact details of the Indian
        food influencers you’ve finalized.
      </p>
      <Row>
        <Col xl={6}>
          <ContactDetail>
            <h3>{data?.name} Contact Details</h3>
            <ImportantData>
              <Image
                src={joinS3('images/profile/commercial-details/call.svg')}
                alt='call'
                className='data-image'
                width={32}
                height={32}
              />
              <div className='content'>
                <h4>Phone number</h4>
                <p className='info'>95672 14563</p>
                <span className='absolute-blur'>
                  <Image
                    src={joinS3('images/profile/commercial-details/lock.svg')}
                    alt='call'
                    width={12}
                    height={12}
                  />
                  Unlock number
                </span>
              </div>
            </ImportantData>
            <ImportantData>
              <Image
                src={joinS3('images/profile/commercial-details/email.svg')}
                alt='call'
                className='data-image'
                width={30}
                height={31}
              />
              <div className='content'>
                <h4>Email address</h4>
                <p className='info'>Shirleys@gmail.com</p>
                <span className='absolute-blur email'>
                  <Image
                    src={joinS3('images/profile/commercial-details/lock.svg')}
                    alt='call'
                    width={12}
                    height={12}
                  />
                  Unlock email
                </span>
              </div>
            </ImportantData>
            <ImportantData>
              <Image
                src={joinS3('images/profile/commercial-details/user.svg')}
                alt='call'
                className='data-image'
                width={30}
                height={32}
              />
              <div className='content'>
                <h4>Manager contact</h4>
                <p className='info'>95672 14563</p>
                <span className='absolute-blur'>
                  <Image
                    src={joinS3('images/profile/commercial-details/lock.svg')}
                    alt='call'
                    width={12}
                    height={12}
                  />
                  Unlock number
                </span>
              </div>
            </ImportantData>
            <ImportantData>
              <Image
                src={joinS3('images/profile/commercial-details/chat.svg')}
                alt='call'
                className='data-image'
                width={32}
                height={32}
              />
              <div className='content'>
                <h4>Contact address</h4>
                <p className='info'>Shirleys@gmail.com</p>
                <span className='absolute-blur email'>
                  <Image
                    src={joinS3('images/profile/commercial-details/lock.svg')}
                    alt='call'
                    width={12}
                    height={12}
                  />
                  Unlock address
                </span>
              </div>
            </ImportantData>
          </ContactDetail>
        </Col>
        <Col xl={6}>
          <ContactDetail>
            <h3>{data?.name} Infuencer Cost</h3>
            <ImportantData>
              <Image
                src={joinS3('images/profile/commercial-details/instagram.svg')}
                alt='call'
                className='data-image'
                width={32}
                height={32}
              />
              <div className='content'>
                <h4>Cost per instagram reel</h4>
                <p className='info'>per jour video co</p>
                <span className='absolute-blur cost'>
                  <Image
                    src={joinS3('images/profile/commercial-details/lock.svg')}
                    alt='call'
                    width={12}
                    height={12}
                  />
                  Unlock cost
                </span>
              </div>
            </ImportantData>
            <ImportantData>
              <Image
                src={joinS3('images/profile/commercial-details/twitter.svg')}
                alt='call'
                className='data-image'
                width={32}
                height={32}
              />
              <div className='content'>
                <h4>Cost per tweet</h4>
                <p className='info'>perday vtweets</p>
                <span className='absolute-blur email'>
                  <Image
                    src={joinS3('images/profile/commercial-details/lock.svg')}
                    alt='call'
                    width={12}
                    height={12}
                  />
                  Unlock cost
                </span>
              </div>
            </ImportantData>
            <ImportantData>
              <Image
                src={joinS3('images/profile/commercial-details/youtube.svg')}
                alt='call'
                className='data-image'
                width={32}
                height={32}
              />
              <div className='content'>
                <h4>Cost per youtube video</h4>
                <p className='info'>Youtube video size</p>
                <span className='absolute-blur video'>
                  <Image
                    src={joinS3('images/profile/commercial-details/lock.svg')}
                    alt='call'
                    width={12}
                    height={12}
                  />
                  Unlock cost
                </span>
              </div>
            </ImportantData>
            <ImportantData>
              <Image
                src={joinS3('images/profile/commercial-details/facebook.svg')}
                alt='call'
                className='data-image'
                width={32}
                height={32}
              />
              <div className='content'>
                <h4>Cost per facebook post</h4>
                <p className='info'>Shirleys@gmail.com</p>
                <span className='absolute-blur email'>
                  <Image
                    src={joinS3('images/profile/commercial-details/lock.svg')}
                    alt='call'
                    width={12}
                    height={12}
                  />
                  Unlock cost
                </span>
              </div>
            </ImportantData>
          </ContactDetail>
        </Col>
      </Row>
    </CommercialData>
  );
};

export default ContactDetailCommercial;
