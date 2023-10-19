import { styled } from '@stitches-config/stitches.config';

const ForYouStyled = styled('section', {
  pt: '$6xl',
  pb: '$6xl',
  position: 'relative',
  overflow: 'hidden',
  '.button': {
    m: '0 auto',
    mt: 10,
    boxShadow:
      '0px 14px 24px -7px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.15)',
  },
  '.container': {
    position: 'relative',
    zIndex: 1,
  },
  '.avatar-collection': {
    position: 'absolute',
    top: -30,
    bottom: 0,
    width: '50%',
    figure: {
      position: 'absolute',
    },
    '&.left-avatar-collection': {
      left: 0,
      '@md': {
        left: '0%',
      },
    },
    '&.right-avatar-collection': {
      right: 0,
      '@md': {
        right: '0%',
      },
    },
    '.tilt': {
      zIndex: 5,
      '@lg': {
        zIndex: 0,
      },
    },
  },
  '@lg': {
    pt: '$5xl',
    pb: '$5xl',
  },
  '@md': {
    overflow: 'hidden',
    pt: '$4xl',
    pb: '$4xl',
  },
  figure: {
    transition: 'all 0.5s ease 0s',
    // transform: 'translateX(0px) scale(1)',
    '@lg': {
      transform: 'translateX(0px) scale(2)',
    },
    '@md': {
      transform: 'translateX(0px) scale(1)',
    },
  },
});

const LeftSection = styled('div', {
  img: {
    position: 'relative !important',
    width: 'auto',
    height: 'auto',
  },
  '.left-one': {
    top: '40%',
    left: '5%',
    '.avatar-left-one': {
      size: 161,
      '@lg': {
        size: '100%',
      },
    },
  },
  '.left-two': {
    top: '72%',
    left: '28%',
    '.avatar-left-two': {
      size: 130,
      '@lg': {
        size: '100%',
      },
    },
    '@lg': {
      display: 'none',
    },
  },
  '.left-three': {
    top: '10%',
    left: '15%',
    '.avatar-left-three': {
      size: 116,
      '@lg': {
        size: '100%',
      },
    },
  },
  '.left-four': {
    top: '30%',
    left: '40%',
    '.avatar-left-four': {
      size: 82,
      '@lg': {
        size: '100%',
      },
    },
    '@md': {
      display: 'none',
    },
  },
  '.left-five': {
    top: 32,
    right: 0,
    '.avatar-left-five': {
      size: 89,
      '@lg': {
        size: '100%',
      },
    },
    '@lg': {
      top: 48,
    },
  },
});

const RightSection = styled('div', {
  img: {
    position: 'relative !important',
    width: 'auto',
    height: 'auto',
  },
  '.right-one': {
    top: '10%',
    right: '2%',
    '.avatar-right-one': {
      size: 161,
      '@lg': {
        size: '100%',
      },
    },
  },
  '.right-two': {
    top: '70%',
    right: '10%',
    '.avatar-right-two': {
      size: 130,
      '@lg': {
        size: '100%',
      },
    },
    '@md': {
      top: '48%',
    },
  },
  '.right-three': {
    top: '30%',
    right: '40%',
    '.avatar-right-three': {
      size: 116,
      '@lg': {
        size: '100%',
      },
    },
    '@md': {
      display: 'none',
    },
  },
  '.right-four': {
    bottom: 0,
    right: '45%',
    '.avatar-right-four': {
      size: 82,
      '@lg': {
        size: '100%',
      },
    },
    '@md': {
      bottom: 22,
    },
  },
  '.right-five': {
    top: '15%',
    left: '27%',
    '.avatar-right-five': {
      size: 47,
      '@lg': {
        size: '100%',
      },
    },
    '@md': {
      display: 'none',
    },
  },
});

const Intro = styled('div', {
  maxWidth: 580,
  mx: 'auto',
  textAlign: 'center',
  h3: {
    fontSize: '2rem',
    color: '#666666',
    maxWidth: 420,
    mx: 'auto',
    '@md': {
      fontSize: '$h4',
    },
  },
  h2: {
    color: '#7120FD',
    letterSpacing: '-0.02em',
    mt: '$lg',
    '@md': {
      fontSize: '$h3',
    },
  },
  '.intro-text': {
    fontSize: 20,
    color: '#666666',
    mt: '3rem',
  },
});

const ImageSection = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

export default ForYouStyled;
export { ImageSection, Intro, LeftSection, RightSection };
