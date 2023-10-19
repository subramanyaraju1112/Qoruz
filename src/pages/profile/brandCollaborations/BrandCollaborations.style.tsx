import { styled } from '@stitches-config/stitches.config';

const BrandCollaborationsStyled = styled('div', {
  gap: '$sm',
  bgColor: '#FFFFFF',
  border: '1px solid #E9E9EA',
  boxShadow: '0px 13.85px 13.15px -12px rgba(83, 30, 0, 0.05)',
  br: 16,
  p: '$lg',
  position: 'relative',
  h4: {
    fontWeight: '$medium',
    fontFamily: 'elza-text',
    fontSize: 20,
    letterSpacing: '$xs',
    gap: 12,
    svg: {
      size: 20,
      '.fill-stroke-list-icon': {
        stroke: '#000',
      },
    },
  },
});

const BrandCollaborationsInfo = styled('div', {
  position: 'relative',
  span: {
    fontWeight: '$medium',
    fontSize: '$md',
    letterSpacing: '$xs',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: '#000000',
  },
  small: {
    fontSize: '$sm',
    letterSpacing: '$sm',
    color: '#A2A2A2',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
});

const Figure = styled('figure', {
  size: 52,
  br: '$round',
  overflow: 'hidden',
  img: {
    size: '$full',
    objectFit: 'cover',
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

const BrandCollabrationList = styled('ul', {
  gap: '$lg',
});

const BrandCollabrationListItem = styled('li', {
  width: 'calc(50% - 8px)',
  '&.list-item-mobile': {
    width: '100%',
  },
  a: {
    bgColor: '$white',
    border: '1px solid #E9E9EA',
    boxShadow: '0px 2px 4px rgba(83, 30, 0, 0.02)',
    br: 16,
    py: '$sm',
    px: '$md',
    gap: 12,
    textDecoration: 'none',
  },
});

const ProfileDetailsHide = styled('div', {
  position: 'absolute',
  background: 'rgba(250, 250, 250, 0.6)',
  backdropFilter: 'blur(6px)',
  borderRadius: 16,
  width: '$full',
  height: 467,
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
});

export default BrandCollaborationsStyled;
export {
  BrandCollaborationsInfo,
  BrandCollabrationList,
  BrandCollabrationListItem,
  Figure,
  ProfileDetailsHide,
  TabList,
  TabListItem,
};
