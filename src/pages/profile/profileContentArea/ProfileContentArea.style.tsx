import { styled } from '@stitches-config/stitches.config';

const ProfileContentAreaStyled = styled('section', {
  pt: '$4xl',
  pb: '$4xl',
  '.influencer-row': {
    alignItems: 'flex-start !important',
    '.detailed-list': {
      border: '1px solid #E9E9EA',
      boxShadow: '0px 13.85px 13.15px -12px rgba(83, 30, 0, 0.05)',
      borderRadius: '32px',
      padding: '10px 10px 24px',
      '.loadmore': {
        fontSize: '16px',
        textAlign: 'center',
        pt: '24px',
        lh: 1,
        color: '$primary',
        cursor: 'pointer',
      },
    },
  },
  '.center-area': {
    gap: '$2xl',
  },
  '.sidebar': {
    gap: '$3xl',
  },
  '.sticky-aside-col': {
    position: 'sticky !important',
    zIndex: 2,
    top: 90,
    '@lg': {
      position: 'initial !important',
    },
  },
  '.profile-content-area-row': {
    '@lg': {
      gap: '$2xl',
    },
  },
  '.heading-analytics': {
    fontWeight: 500,
    fontSize: '20px',
    display: 'flex',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: 'rgb(0, 0, 0)',
    padding: '10px 30px 0px',
    alignItems: 'baseline',
    gap: '13px',
    fontFamily: 'elza-text',
  },
});

const InfluencerCardStyled = styled('div', {
  width: '$full',
  height: 'fit-content',
  borderRadius: 32,
  padding: '24px 22px',
  position: 'relative',
  borderBottom: '1px solid #F6F6F6',
  '.listscore': {
    size: 56,
    top: 69,
    left: 75,
    fontSize: '$xl',
  },
  '.wfull': {
    width: '$full',
    pl: '$2xl',
    '.curated-details': {
      width: '$full',
      justifyContent: 'space-betweeen',
      '.infl-content': {
        height: 'fit-content',
        h4: {
          fontFamily: 'elza-text',
          lh: 1,
          color: '#000',
          '.iconvrfy': {
            pl: 6,
            position: 'relative',
            '.verifiedicon': {
              visibilty: 'hidden',
              opacity: 0,
              transition: 'visibility 0s, opacity 0.5s linear',
              position: 'absolute',
              left: '6px',
              top: '0.4px',
            },
          },
        },
        '.location': {
          fontWeight: '$normal',
          fontSize: 16,
          lineHeight: 1.2,
          fontFamily: 'elza-text',
          color: '#000',
          opacity: 0.7,
        },
        '.social': {
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          mt: '$md',
          lh: 1,
          color: '#666',
          span: {
            height: 18,
          },
        },
      },
      '.btns': {
        gap: 20,
        height: 'fit-content',
        alignItems: 'center',
        '.bookmark-icon': {
          height: 16,
        },
        '.outline-button.primary.md': {
          height: 'fit-content',
          color: '#ff6943',
          minHeight: 'auto',
          padding: '11px 16px',
          alignItems: 'center',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.15)',
          backgroundColor: '#fff',
          gap: 8,
          '&:hover': {
            color: '#fff',
            backgroundColor: '$primary',
            borderColor: '$primary',
            '.fill-social-icon': {
              fill: '#fff',
            },
          },
        },
      },
      '@md': {
        flexWrap: 'wrap',
        gap: 15,
      },
    },
    '.curated-info': {
      mt: '$3xl',
      '.gap': {
        gap: '$md',
        '.category': {
          padding: '4px 14px',
          background: '#ebebeb',
          borderRadius: '30px',
          fontSize: '14px',
          lineHeight: 2,
        },
      },
      '.curd-info': {
        gap: '$3xl',
        '.icongap': {
          gap: '$sm',
          '.icon': {
            height: 16,
            lh: 1,
          },
          '.social-detail': {
            lineHeight: 1,
            fontSize: 16,
            color: '#333',
            fontWeight: 500,
          },
        },
      },
      '@xl': {
        flexWrap: 'wrap',
        gap: 15,
      },
    },
    '@md': {
      pl: 0,
    },
  },
  '&:hover': {
    backgroundColor: '#FDFAFA',
    borderRadius: 32,
    '.wfull': {
      '.infl-content': {
        h4: {
          color: '$primary',
          '.iconvrfy': {
            '.verifiedicon': {
              visibility: 'visible',
              opacity: 1,
            },
            '.verifyicon': {
              visibility: 'hidden',
              opacity: 0,
              // transition: 'visibility 0s, opacity 0.5s linear',
            },
          },
        },
      },
    },
  },
  '@md': {
    flexWrap: 'wrap',
    gap: 15,
  },
});

const CuratedSidebar = styled('div', {
  width: '100%',
  h3: {
    fontSize: 24,
    color: '#666',
    fontFamily: 'elza-text',
  },
  '@lg': {
    mt: '$3xl',
  },
});

const CuratedCategory = styled('ul', {
  mb: '$3xl',
  mt: '$2xl',
  li: {
    mt: '$sm',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4px 6px 4px 14px',
    backgroundColor: 'rgba(153, 153, 153, 0.1)',
    br: 40,
    '.cat-val': {
      background: '#fff',
      width: '40px',
      height: '40px',
      lh: 2.5,
      textAlign: 'center',
      br: '50%',
    },
    '.cat-name': {
      lh: 2.5,
      a: {
        fontWeight: 500,
        fontSize: '16px',
        lh: '28px',
        color: '#666666',
        textDecoration: 'none',
      },
    },
  },
});

const CuratedSearch = styled('ul', {
  mb: '$3xl',
  mt: '$2xl',
  li: {
    pl: '$2xl',
    backgroundImage:
      'url(https://d1ks0pavw8unez.cloudfront.net/public/images/curated-list/search.png)',
    backgroundPosition: 'left top 2px',
    backgroundRepeat: 'no-repeat',
    listStyle: 'none',
    mt: '$md',
    a: {
      fontSize: 16,
      color: '#666',
      textDecoration: 'none',
      lh: 1.2,
      '&:hover': {
        color: '#000',
      },
    },
  },
});

const PopularCreator = styled('div', {
  pb: '$3xl',
  mt: '$2xl',
  a: {
    textDecoration: 'none',
  },
  '.popular-creator': {
    mt: '$lg',
    pb: '$lg',
    borderBottom: '1px solid #F6F6F6',
    cursor: 'pointer',
    '.creatordetail': {
      pl: 8,
      h5: {
        fontSize: 16,
        fontWeight: '$semibold',
        fontFamily: 'elza-text',
        lh: 1.2,
        color: '#000',
      },
      '.cat-name': {
        fontSize: 12,
        lh: 1.2,
        color: '#666',
      },
    },
    '.score-icon': {
      justifyContent: 'flex-end',
      '.polygon': {
        position: 'relative',
      },
    },
    '@lg': {
      flexWrap: 'unset !important',
      width: '$full',
    },
  },
});

const Polygon = styled('span', {
  position: 'absolute',
  fontWeight: '$bold',
  fontSize: '$sm',
  letterSpacing: '$xs',
  color: '$white',
  textShadow: '1px 3px 3px rgba(158, 39, 3, 0.4)',
  size: 37,
  ta: 'center',
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

export default ProfileContentAreaStyled;
export {
  CuratedCategory,
  CuratedSearch,
  CuratedSidebar,
  InfluencerCardStyled,
  Polygon,
  PopularCreator,
};
