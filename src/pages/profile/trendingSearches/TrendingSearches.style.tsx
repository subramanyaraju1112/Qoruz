import { styled } from '@stitches-config/stitches.config';

const TrendingSearchesStyled = styled('div', {
  gap: 12,
  h4: {
    fontWeight: '$semibold',
    fontFamily: 'elza-text',
    color: '#666666',
  },
});

const TrendingSearchInfo = styled('div', {
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

const TrendingSearchList = styled('ul', {
  gap: '$sm',
});

const TrendingSearchListItem = styled('li', {
  a: {
    bgColor: '#F9F9F9',
    br: 40,
    py: '$sm',
    px: '$lg',
    textDecoration: 'none',
    fontWeight: '$medium',
    fontSize: '$md',
    letterSpacing: '$xs',
    color: '#666666',
    gap: '$sm',
    display: 'flex',
    alignItems: 'flex-start',
  },
});

export default TrendingSearchesStyled;
export {
  Polygon,
  TrendingSearchInfo,
  TrendingSearchList,
  TrendingSearchListItem,
};
