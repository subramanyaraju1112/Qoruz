import { styled } from '@stitches-config/stitches.config';

const SearchBox = styled('div', {
  mt: '5rem',
  maxWidth: 900,
  mx: 'auto',
  width: '$full',
  minHeight: 72,
  br: 60,
  position: 'relative',
  bgColor: '$white',
  display: 'flex',
  ai: 'center',
  jc: 'space-between',
  pt: 12,
  pb: 12,
  pl: 12,
  border: '1px solid #E9E9EA',
  boxShadow: '0px 13.85px 13.15px -12px rgba(83, 30, 0, 0.05)',
  '.search-input': {
    border: 0,
    bs: 'none',
    fontSize: '$xl',
    letterSpacing: '$sm',
    color: '#555555',
    mr: 'auto',
    width: '$full',
    maxWidth: 'calc(100% - 160px)',
    paddingLeft: '40px',

    '&:focus': {
      outline: 'none',
      bs: 'none',
    },
    '@sm': {
      maxWidth: 'calc(100% - 68px)',
      pl: 20,
    },
  },
  '@sm': {
    minHeight: 56,
    height: 56,
  },
});

const SearchIcon = styled('div', {
  size: 40,
  position: 'relative',
  backgroundColor: '#FF6435',
  mr: '20px',
  padding: '8px',
  br: '50%',
  width: '44px',
  height: '44px',
  cursor: 'pointer',
  transition: 'all 0.3s ease 0s',
  '&:hover': {
    transform: 'scale(0.97)',
  },
  img: {
    '@sm': {
      size: 14,
    },
  },
  '@sm': {
    size: 28,
  },
});

const Filter = styled('div', {
  mt: '$3xl',
  display: 'flex',
  gap: 28,
  flexWrap: 'wrap',
  justifyContent: 'center',
  '.advance-filter': {
    display: 'flex',
    gap: 4,
    alignItems: 'center',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: 2,
    textDecorationLine: 'underline',
    color: '#666666',
    cursor: 'pointer',
  },
});

const TagsFilter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  flexWrap: 'wrap',
  '.pill-list': {
    display: 'flex',
    gap: 4,
    alignItems: 'center',
    flexWrap: 'wrap',
    '.tag-pill': {
      background: 'rgba(153, 153, 153, 0.1)',
      borderRadius: '40px',
      padding: ' 8px 16px',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1,
      color: '#666666',
      cursor: 'pointer',
    },
    '.selected': {
      backgroundColor: '#8E5BE8',
      color: 'white',
    },
  },
  '.tag-name': {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 2,
    color: '#000000',
  },
});

export default SearchBox;
export { Filter, SearchIcon, TagsFilter };
