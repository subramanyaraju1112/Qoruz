import { styled } from '@stitches-config/stitches.config';

const CommercialData = styled('div', {
  mt:20,
  mb:25,
  h2: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: 1.38,
    letterSpacing: '-0.02em',
    color: '#000000',
  },
  '.details': {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.5,
    color: '#666666',
  },
});

const ContactDetail = styled('div', {
  h3: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 1,
    letterSpacing: '-0.04em',
    color: '#666666',
    width: 172,
    position: 'relative',
    pl: 7.6,
    mb: '2.3rem',
    mt: '2.25rem',
    '&:before': {
      content: '',
      background: '#FF6435',
      width: 3.6,
      height: 43.41,
      br: '12.2109px',
      left: 0,
      top: 0,
      zIndex: 2,
      position: 'absolute',
    },
  },
});

const ImportantData = styled('div', {
  display: 'flex',
  alignItems: 'end',
  gap: '22px',
  mt:'$3xl',
  '.data-image':{
    mb:'5px',
  },
  '.content': {
    position: 'relative',
    width:'$full',
    
    h4: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: '#A2A2A2',
      pb: 17,
    },
    '.info': {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 0.8,
      letterSpacing: '-0.02em',
      color: '#000000',
    },
    '.absolute-blur': {
      background: 'rgba(55, 55, 55, 0.5)',
      backdropFilter: 'blur(3px)',
      borderRadius: 16,
      padding: '8px 19px 8px 14px',
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '16px',
      letterSpacing: '-0.02em',
      color: '#FFFFFF',
      position: 'absolute',
      left: 18,
      bottom: '-5px',
      img: {
        width: 12,
        height: 12,
        marginRight: 5,
      },
      '&.email':{
        padding: '8px 74px 8px 14px',
      },
      '&.cost':{
        padding: '8px 39px 8px 14px',
      },
      '&.video':{
        padding: '8px 63px 8px 14px',
      },
    },
  },
});

export default CommercialData;
export { ContactDetail, ImportantData };
