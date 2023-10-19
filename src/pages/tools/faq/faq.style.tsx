import { styled } from '@stitches-config/stitches.config';

const FaqStyled = styled('section', {
  maxWidth:960,
  width:'$full',
  mx:'auto',
  bgColor: 'transparent',
  pb: '$4xl',
  pt:'$5xl',
});

const FaqListItem = styled('li', {
  borderTop: '1px solid #eee',
  display: 'flex',
  flexDirection: 'column',
  h5: {
    fontFamily: 'elza-text',
    letterSpacing: '$sm',
    color: '#000',
    fontWeight: '$medium',
    fontSize: 24,
    lh: 1.5,
  },
});

const FaqContent = styled('div', {
  pl: '$2xl',
  maxHeight: 0,
  overflow: 'hidden',
  transition: 'max-height 0.2s ease-out',
  '.details': {
    pb: '$lg',
    fontFamily: 'elza-text',
    fontWeight: '$normal',
    lh: 1.5,
    color: '#666',
    b:{
      color:'#000',
    }
  },
});

const FaqTitle = styled('span', {
  display: 'flex',
  py: '$lg',
  cursor: 'pointer',
  overflow:'hidden',
  '.title-active': {
    color: '#FF6435',
  },
});

const Icon = styled('span', {
  mr: '$lg',
  fs: 0,
  transition: 'all 0.3s ease 0s',
  fontSize: 23,
  height:'fit-content',
  '&.active':{
    transform: 'rotate(45deg)',
  }
});

const FaqList = styled('ul', {
  '@lg': {
    mt: '$2xl',
  },
});

const Intro = styled('div', {
  maxWidth: 380,
  h2: {
    color: '#000',
    lh: 0.96,
    fontWeight: '$bold',
    letterSpacing: '$sm',
    '@lg':{
      fontSize:'$h3',
    }
  },
  '> .details': {
    fontFamily: 'elza-text',
    fontWeight: '400',
    mt: '$3xl',
    fontSize:20,
    lh:1.8,
    color: '#666',
    '>b': {
      fontWeight: '600',
    },
  },
});

export default FaqStyled;
export { FaqContent, FaqList, FaqListItem, FaqTitle, Icon, Intro };
