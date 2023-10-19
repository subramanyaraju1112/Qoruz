import Facebook from '@qoruz/components/svg/facebook';
import LinkedIn from '@qoruz/components/svg/linkedin';
import Twitter from '@qoruz/components/svg/twitter';
import { joinS3 } from '@qoruz/utils/cloudinaryUrlTransform';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-grid-system';

import FooterStyled, {
  CopyRights,
  FooterInfo,
  SocialList,
  SocialListItem,
} from './footer.style';

const Footer = () => {
  return (
    <FooterStyled className='footer'>
      <Container className='container flex flex-wrap'>
        <FooterInfo className='footer-info flex items-center justify-between'>
          <Link href='/'>
            <Image
              src={joinS3('images/paid-collaboration/logo.svg')}
              alt='Logo'
              width={145}
              height={49.83}
            />
          </Link>
          <SocialList className='social-list flex items-center'>
            <SocialListItem className='social-list-item'>
              <Link href='https://www.facebook.com/Qoruz/' target='_blank'>
                <Facebook />
              </Link>
            </SocialListItem>
            <SocialListItem className='social-list-item'>
              <Link href='https://www.instagram.com/qoruz_/' target='_blank'>
                <Twitter />
              </Link>
            </SocialListItem>
            <SocialListItem className='social-list-item'>
              <Link
                href='https://www.linkedin.com/company/qoruz/'
                target='_blank'
              >
                <LinkedIn />
              </Link>
            </SocialListItem>
          </SocialList>
        </FooterInfo>
        <CopyRights className='copy-rights flex items-center'>
          <span>© 2022 Copyright Datrux Systems Pvt. Ltd.</span>
        </CopyRights>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
