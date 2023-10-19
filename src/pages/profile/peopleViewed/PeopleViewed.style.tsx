import { styled } from '@stitches-config/stitches.config';

const PeopleViewedStyled = styled('div', {
  gap: 12,
  h4: {
    fontWeight: '$semibold',
    fontFamily: 'elza-text',
    color: '#666666',
  },
});

const PeopleViewedInfo = styled('div', {
  position: 'relative',
  span: {
    fontWeight: '$medium',
    fontSize: '$md',
    letterSpacing: '$xs',
    color: '$white',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  small: {
    fontSize: '$xs',
    letterSpacing: '$sm',
    color: '$white',
    opacity: 0.7,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
});

const Polygon = styled('span', {
  fontWeight: '$bold',
  fontSize: '$sm',
  letterSpacing: '$xs',
  color: '$white',
  textShadow: '1px 3px 3px rgba(158, 39, 3, 0.4)',
  size: 37,
  ta: 'center',
  ml: 'auto',
  backgroundImage:
    'url(https://d1ks0pavw8unez.cloudfront.net/public/images/top-creators/polygon.svg)',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  fs: 0,
  '@md': {
    width: '$2xl',
    height: '$2xl',
    fontSize: 12,
  },
});

const PeopleViewdList = styled('ul', {
  gap: '$sm',
});

const PeopleViewdListItem = styled('li', {
  width: 'calc(50% - 4px)',
  a: {
    height: 168,
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    br: '$md',
    overflow: 'hidden',
    py: '$sm',
    px: '$md',
    textDecoration: 'none',
    '&:before': {
      content: '',
      position: 'absolute',
      top: '50%',
      left: 0,
      bottom: 0,
      right: 0,
      background:
        'linear-gradient(360deg, #000000 28.96%, rgba(0, 0, 0, 0) 100%)',
      opacity: 0.9,
    },
  },
});

export default PeopleViewedStyled;
export { PeopleViewdList, PeopleViewdListItem, PeopleViewedInfo, Polygon };
