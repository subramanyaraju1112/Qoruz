import { styled } from '@stitches-config/stitches.config';

const InfluencerDetailsStyled = styled('section', {
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
        textDecoration: 'none',
      },
    },
  },
});
const LoadContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const InfluencerCardStyled = styled('div', {
  width: '$full',
  height: 'fit-content',
  borderRadius: 32,
  padding: '24px 22px',
  position: 'relative',
  borderBottom: '1px solid #F6F6F6',
  '.popular-image': {
    br: '$round',
    width: '100px !important',
    height: '88px !important',
    minHeight: 'unset !important',
    mt: 'unset !important',
    objectFit: 'cover',
  },
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
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          '.name': {
            textDecoration: 'none',
            color: '#000',
            '&:hover': {
              color: '$primary',
            },
          },
          '.iconvrfy': {
            ml: 6,
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            '.verifyicon': {
              zIndex: 1,
            },
            '.verified-text': {
              fontWeight: 600,
              fontSize: 10,
              lineHeight: '0px',
              pl: 4,
              pr: 5,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              zIndex: 1,
            },
            '&::after': {
              content: '',
              position: 'absolute',
              background: '#783FD8',
              border: '1px solid #783FD8',
              backdropFilter: 'blur(5px)',
              borderRadius: 24,
              transition: '0.5s',
              height: 18,
              width: 17,
              zIndex: 0,
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
        '.social-link': {
          textDecoration:'unset',
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
      '@lg': {
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
    cursor: 'pointer',
    '.wfull': {
      '.infl-content': {
        h4: {
          color: '$primary',
          '.iconvrfy': {
            '&::after': {
              width: '$full',
            },
          },
        },
      },
    },
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
    cursor: 'pointer',
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
    backgroundImage: 'url(../../images/curated-list/search.png)',
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
    justifyContent: 'space-between !important',
    flexFlow: 'unset !important',
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
      width: 'fit-content !important',
      maxWidth: 'fit-content !important',
      '.polygon': {
        position: 'relative',
      },
    },
    '@lg': {
      flexWrap: 'unset !important',
      width: '$full',
    },
    '.popular-detail': {
      width: 'fit-content !important',
      maxWidth: 'fit-content !important',
    },
  },
  '.popular-image': {
    size: 40,
    borderRadius: '50%',
    objectFit: 'cover',
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
  backgroundImage: 'url(../../images/top-creators/polygon.svg)',
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

const InfluencerDetailsStyledM = styled('div', {
  '&.influencer-details': {
    '.container': {
      pl: '0px !important',
      pr: '0px !important',

      '.influencer-row': {
        width: '$full',
        marginLeft: 'auto !important',
        marginRight: 'auto !important',
        '.influencer-col': {
          pl: '0px !important',
          pr: '0px !important',

          '.detailed-list': {
            '.relative-image': {
              position: 'relative',
              height: 'fit-content',
              '.popular-image': {
                size: '64px !important',
              },
              '.polygon': {
                size: '40px !important',
                left: 'unset',
                right: '-8px',
                bottom: '0px',
                top: 'unset',
                fontSize: 14,
              },
            },
          },
        },
      },
    },
    '.loadmore': {
      fontSize: '16px',
      textAlign: 'center',
      pt: '24px',
      lh: 1,
      color: '$primary',
      cursor: 'pointer',
      paddingBottom: 24,
      border: '1px solid #E9E9EA',
      boxShadow: '0px 13.85px 13.15px -12px rgba(83, 30, 0, 0.05)',
      borderRadius: '0px 0px 32px 32px',
      textDecoration: 'none',
    },
  },
  '.siebar-header': {
    display: 'flex',
    gap: 26,
    h3: {
      fontSize: 20,
      letterSpacing: '-0.04em',
    },
  },
  '.category-list': {
    li: {
      background: 'unset',
    },
  },
});

const InfluencerCardStyledM = styled('div', {
  width: '$full',
  height: 'fit-content',
  padding: '20px 16px',
  position: 'relative',
  borderBottom: '1px solid #F6F6F6',
  '.popular-image': {
    br: '$round',
    width: '100px !important',
    height: '88px !important',
    minHeight: 'unset !important',
    mt: 'unset !important',
    objectFit: 'cover',
  },
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
        gap: 3,
        display: 'flex',
        flexDirection: 'column',
        h4: {
          fontFamily: 'elza-text',
          lh: 1,
          fontSize: 18,
          color: '#000',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          '.iconvrfy': {
            ml: 6,
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            '.verifyicon': {
              zIndex: 1,
            },
            '.verified-text': {
              fontWeight: 600,
              fontSize: 10,
              lineHeight: '0px',
              pl: 4,
              pt: 3,
              pr: 5,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              zIndex: 1,
            },
            '&::after': {
              content: '',
              position: 'absolute',
              background: '#783FD8',
              border: '1px solid #783FD8',
              backdropFilter: 'blur(5px)',
              borderRadius: 24,
              transition: '0.5s',
              height: 18,
              width: 17,
              zIndex: 0,
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
          '@lg': {
            fontSize: 14,
          },
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
        '.gap': {
          gap: '12px',
          '.category': {
            fonWteight: 600,
            fontSize: 10,
            lineHeight: 1.6,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#666666',
          },
        },
      },
      '.btns': {
        height: 'fit-content',
        alignItems: 'center',
        width: '$full',
        justifyContent: 'space-between',
        '.bookmark-icon': {
          height: 16,
        },
        '.social': {
          display: 'flex',
          gap: '11px',
        },
        '.outline-button.primary.md': {
          height: 'fit-content',
          color: '#ff6943',
          minHeight: 'auto',
          padding: '8px 16px',
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
      '@lg': {
        flexWrap: 'wrap',
        gap: 14,
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
        gap: '$sm',
        '.icongap': {
          gap: '$sm',
          flexWrap: 'wrap',
          '.icon': {
            height: 16,
            display: 'flex',
            fontSize: '12px',
            gap: '4px',
            alignItems: 'center',
            letterSpacing: '-0.02em',
            color: '#999999',
            lineHeight: '16px',
          },
          'p.flex': {
            gap: 8,
            alignItems: 'baseline',
            marginLeft: 'auto',
            paddingRight: '10px',
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
    cursor: 'pointer',
    '.wfull': {
      '.infl-content': {
        h4: {
          color: '$primary',
          '.iconvrfy': {
            '&::after': {
              width: '$full',
            },
          },
        },
      },
    },
  },
  '@md': {
    gap: 13,
  },
});

export default InfluencerDetailsStyled;
export {
  CuratedCategory,
  CuratedSearch,
  CuratedSidebar,
  InfluencerCardStyled,
  InfluencerCardStyledM,
  InfluencerDetailsStyledM,
  LoadContainer,
  Polygon,
  PopularCreator,
};
