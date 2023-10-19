import { styled } from '@stitches-config/stitches.config';

const ForYouStyled = styled('section', {
  pt: '$6xl',
  pb: '$6xl',
  position: 'relative',
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
        left: '-20%',
      },
    },
    '&.right-avatar-collection': {
      right: 0,
      '@md': {
        right: '-20%',
      },
    },
  },
  '@lg': {
    pt: '$3xl',
    pb: '$3xl',
  },
  '@md': {
    overflow: 'hidden',
  },
  figure: {
    transition: 'all 0.5s ease 0s',
    transform: 'translateX(0px) scale(1)',
    '@lg': {
      transform: 'translateX(0px) scale(0.5)',
    },
    '@md': {
      transform: 'translateX(0px) scale(0.4)',
    },
  },
  '&:hover': {
    '.top-right-item': {
      '&.left-one': {
        transform: 'translateX(-25px) translateY(35px) scale(1)',
      },
      '&.left-two': {
        transform: 'translateX(-75px) translateY(65px) scale(1)',
      },
      '&.left-three': {
        transform: 'translateX(-65px) translateY(25px) scale(1)',
      },
      '&.left-four': {
        transform: 'translateX(-65px) translateY(55px) scale(1)',
      },
      '&.left-five': {
        transform: 'translateX(-55px) translateY(10px) scale(1)',
      },
      '&.right-one': {
        transform: 'translateX(10px) translateY(-45px) scale(1)',
      },
      '&.right-two': {
        transform: 'translateX(45px) translateY(45px) scale(1)',
      },
      '&.right-three': {
        transform: 'translateX(-65px) translateY(35px) scale(1)',
      },
      '&.right-four': {
        transform: 'translateX(-45px) translateY(45px) scale(1)',
      },
      '&.right-five': {
        transform: 'translateX(-45px) translateY(45px) scale(1)',
      },
      '@lg': {
        transform: 'translateY(-20px) scale(0.5)',
      },
      '@md': {
        transform: 'translateY(-20px) scale(0.4)',
      },
    },

    '.top-left-item': {
      '&.left-one': {
        transform: 'translateX(-15px) translateY(85px) scale(1)',
      },
      '&.left-two': {
        transform: 'translateX(55px) translateY(95px) scale(1)',
      },
      '&.left-three': {
        transform: 'translateX(-75px) translateY(-55px) scale(1)',
      },
      '&.left-four': {
        transform: 'translateX(-85px) translateY(95px) scale(1)',
      },
      '&.left-five': {
        transform: 'translateX(85px) translateY(-25px) scale(1)',
      },
      '&.right-one': {
        transform: 'translateX(15px) translateY(-45px) scale(1)',
      },
      '&.right-two': {
        transform: 'translateX(45px) translateY(65px) scale(1)',
      },
      '&.right-three': {
        transform: 'translateX(65px) translateY(25px) scale(1)',
      },
      '&.right-four': {
        transform: 'translateX(55px) translateY(55px) scale(1)',
      },
      '&.right-five': {
        transform: 'translateX(75px) translateY(45px) scale(1)',
      },
    },

    '.bottom-right-item': {
      '&.left-one': {
        transform: 'translateX(-35px) translateY(-45px) scale(1)',
      },
      '&.left-two': {
        transform: 'translateX(-65px) translateY(15px) scale(1)',
      },
      '&.left-three': {
        transform: 'translateX(-75px) translateY(-95px) scale(1)',
      },
      '&.left-four': {
        transform: 'translateX(-65px) translateY(-55px) scale(1)',
      },
      '&.left-five': {
        transform: 'translateX(-85px) translateY(-35px) scale(1)',
      },
      '&.right-one': {
        transform: 'translateX(10px) translateY(-85px) scale(1)',
      },
      '&.right-two': {
        transform: 'translateX(55px) translateY(55px) scale(1)',
      },
      '&.right-three': {
        transform: 'translateX(-55px) translateY(-55px) scale(1)',
      },
      '&.right-four': {
        transform: 'translateX(-85px) translateY(35px) scale(1)',
      },
      '&.right-five': {
        transform: 'translateX(-85px) translateY(-45px) scale(1)',
      },
    },

    '.bottom-left-item': {
      '&.left-one': {
        transform: 'translateX(-25px) translateY(-105px) scale(1)',
      },
      '&.left-two': {
        transform: 'translateX(-105px) translateY(105px) scale(1)',
      },
      '&.left-three': {
        transform: 'translateX(-25px) translateY(-95px) scale(1)',
      },
      '&.left-four': {
        transform: 'translateX(65px) translateY(-95px) scale(1)',
      },
      '&.left-five': {
        transform: 'translateX(35px) translateY(-55px) scale(1)',
      },
      '&.right-one': {
        transform: 'translateX(15px) translateY(-65px) scale(1)',
      },
      '&.right-two': {
        transform: 'translateX(55px) translateY(55px) scale(1)',
      },
      '&.right-three': {
        transform: 'translateX(75px) translateY(-25px) scale(1)',
      },
      '&.right-four': {
        transform: 'translateX(85px) translateY(45px) scale(1)',
      },
      '&.right-five': {
        transform: 'translateX(85px) translateY(-45px) scale(1)',
      },
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
    color: 'red',
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

export default ForYouStyled;
export { Intro };
