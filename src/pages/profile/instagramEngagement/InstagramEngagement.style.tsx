import { styled } from '@stitches-config/stitches.config';

const InstagramEngagementStyled = styled('div', {
  gap: '$xl',
  bgColor: '#FFFFFF',
  border: '1px solid #E9E9EA',
  boxShadow: '0px 13.85px 13.15px -12px rgba(83, 30, 0, 0.05)',
  position:'relative',
  br: 16,
  pb: '$lg',
  '> h4': {
    borderBottom: '1px solid #EEEEEE',
    p: '$lg',
    gap: '$lg',
    svg: {
      '.fill-stroke-list-icon': {
        stroke: '#000',
      },
    },
  },
  h4: {
    fontWeight: '$medium',
    fontFamily: 'elza-text',
    fontSize: 20,
    letterSpacing: '$xs',
    gap: '$sm',
    px: '$lg',
    svg: {
      size: 20,
    },
  },

  '.profile-hide':{
    
  }
});

const InstagramEngagementInfo = styled('div', {
  position: 'relative',
  span: {
    fontWeight: '$medium',
    fontSize: '$sm',
    letterSpacing: '$xs',
    color: '#333',
  },
  h4: {
    fontSize: '$h4',
    color: '#000',
    p: 0,
  },
});

const Figure = styled('figure', {
  size: 16,
  img: {
    size: '$full',
  },
});

const TabList = styled('ul', {
  gap: '$lg',
  pb: '$md',
  overflow: 'auto',
  mt: '$sm',
});

const TabListItem = styled('li', {
  bgColor: 'rgba(188, 188, 188, 0.1)',
  br: 40,
  py: 2,
  px: '$md',
  fs: 0,
  span: {
    fontWeight: '$medium',
    fontSize: '$sm',
    letterSpacing: '$pill',
    color: '#666666',
    position: 'relative',
    top: -2,
  },
  '&.active': {
    bgColor: '$purple',
    span: {
      color: '$white',
    },
  },
});

const BlockWrapper = styled('div', {
  gap: '$md',
  alignItems: 'center',
  '.fullwidth':{
    width:'$full',
  }
});

const Group = styled('div', {});

const Icon = styled('figure', {
  size: 32,
});

const OptionsList = styled('ul', {
  gap: '$md',
  px: '$lg',
  pb: '$xl',
  borderBottom: '1px solid #EEEEEE',
});

const OptionsListItem = styled('li', {
  gap: '$md',
  width: 'calc(25% - 12px)',
  h4: {
    px: 0,
  },
  small: {
    color: '#999999',
    fontWeight: '$medium',
    fontSize: '$xs',
  },
  span: {
    letterSpacing: '$sm',
    color: '#333333',
    fontWeight: '$medium',
  },
  '@xl': {
    width: 'calc((100% / 3) - 12px)',
  },
  '@lg': {
    width: 'calc(25% - 12px)',
  },
  '@md': {
    width: 'calc((100% / 3) - 12px)',
  },
  '@sm': {
    width: 'calc(50% - 6px)',
  },
});

const BlockList = styled('ul', {
  columnGap: '$sm',
  rowGap: '$lg',
  bgColor: '#F9F9F9',
  br: 16,
  mx: '$lg',
  p: '$lg',
});

const BlockListItem = styled('li', {
  width: 'calc((100% / 3) - 6px)',
  gap: '$sm',
  h4: {
    px: 0,
  },
  '@xl': {
    width: 'calc(50% - 6px)',
  },
  '@lg': {
    width: 'calc((100% / 3) - 6px)',
  },
  '@md': {
    width: 'calc(50% - 6px)',
  },
});

const ContentDetailsHide = styled('div', {
  position: 'absolute',
  background: 'rgba(250, 250, 250, 0.84)',
  backdropFilter: 'blur(7px)',
  borderRadius: 16,
  width: '$full',
  height: 516,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 3,
  top: 0,
  left: 0,
  '.blur-detail': {
    flexDirection: 'column',
    zIndex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  '@xl':{
    height:507,
  },
  '@lg':{
    height:507,
  },
  '@md':{
    height:507,
  },
});

export default InstagramEngagementStyled;
export {
  BlockList,
  BlockListItem,
  BlockWrapper,
  ContentDetailsHide,
  Figure,
  Group,
  Icon,
  InstagramEngagementInfo,
  OptionsList,
  OptionsListItem,
  TabList,
  TabListItem,
};
