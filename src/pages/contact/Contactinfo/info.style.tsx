import { styled } from '@stitches-config/stitches.config';

const Box = styled('div', {
  display: 'flex',
  '@sm': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  '@md': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});

const ContactInfo = styled('div', {
  '.no-padding': {
    pl: '0px !important',
    pr: '0px !important',
    width: '$full',
  },
});

const DetailBox = styled('div', {
  width: '395px',
  height: '580px',
  '@sm': {
    width: '100%',
    height: '0%',
  },
  '@md': {
    width: '100%',
    height: '0%',
  },
});

const DetailWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  ai: 'flex-start',
  gap: '32px',
  padding: '48px 24px',
});

const Title = styled('div', {
  '.meet-us': {
    font: 'Articulat CF',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '32px',
    lineHeight: '44px',
    letterSpacing: '-0.02em',
    color: '#000000',
  },
});

const Mail = styled('div', {
  display: 'flex',
  gap: '8px',
  cursor: 'pointer',
  '.mail-id': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#333333',
  },
});

const Phone = styled('div', {
  display: 'flex',
  gap: '8px',
  cursor: 'pointer',
  '.phone-number': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#333333',
  },
});

const Address = styled('div', {
  display: 'flex',
  gap: '8px',
  '.address': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#333333',
  },
});

const EmailBox = styled('div', {
  borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
  flex: 1,
});

const EmailWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '48px 24px',
  gap: '32px',
  '.submit-button': {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 2,
    letterSpacing: '-0.02em',
    color: '$primary',
    padding: '8px 16px',
    height: 48,
    display: 'flex',
    alignItems: 'center',
    border: 'unset',
    gap: '8px',
    mt: '$3xl',
    '&:hover': {
      svg: {
        path: {
          fill: '#fff',
        },
      },
    },
  },
  '.ant-form-item': {
    mb: '0',
  },
});

const Heading = styled('div', {
  '.email-us': {
    font: 'Articulat CF',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '32px',
    lineHeight: '44px',
    letterSpacing: '-0.02em',
    color: '#000000',
  },
  '.fill-contact': {
    pt: '32px',
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#333333',
  },
});

const FormStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  input: {
    '&::placeholder': {
      opacity: '0.5',
    },
  },
});

const RowOne = styled('div', {
  display: 'flex',
  flex: 1,
  gap: '24px',
  '@sm': {
    display: 'flex',
    flexDirection: 'column',
  },
  '@md': {
    display: 'flex',
    flexDirection: 'column',
  },
});

const FullName = styled('div', {
  width: '100%',
  '.full-name': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
    width: '100%',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '16px',
  },
});

const CompanyName = styled('div', {
  width: '100%',
  '.company-name': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
    width: '100%',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '16px',
  },
});

const RowTwo = styled('div', {
  display: 'flex',
  flex: 1,
  gap: '24px',
  '@sm': {
    display: 'flex',
    flexDirection: 'column',
  },
  '@md': {
    display: 'flex',
    flexDirection: 'column',
  },
});

const EmailID = styled('div', {
  width: '100%',
  '.email-id': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
    width: '100%',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '16px',
  },
});

const PhoneNumber = styled('div', {
  width: '100%',
  '.phone-number': {
    font: 'Elza',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#666666',
    width: '100%',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '16px',
  },
});

const RowThree = styled('div', {
  '.ant-select-selector': {
    height: '56px !important',
    padding: '12px 16px 14px 16px !important',
    '.ant-select-selection-placeholder': {
      // color: '#666666',
      fontWeight: 400,
      fontSize: '16px',
    },
  },
  '.@sm': {
    width: '100%',
  },
  '@md': {
    width: '100%',
  },
});

const ContactInfoMain = styled ('section',{
  overflow:'hidden',
});

export default Box;
export {
  Address,
  CompanyName,
  ContactInfo,
  ContactInfoMain,
  DetailBox,
  DetailWrapper,
  EmailBox,
  EmailID,
  EmailWrapper,
  FormStyled,
  FullName,
  Heading,
  Mail,
  Phone,
  PhoneNumber,
  RowOne,
  RowThree,
  RowTwo,
  Title,
};
