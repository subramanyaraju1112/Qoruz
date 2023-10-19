import { styled } from '@stitches/react';

const RateCalculatorCard = styled('div', {
  gap: 48,
  flexWrap: 'wrap',
});

const CalculatorCard = styled('div', {
  flexDirection: 'column',
  maxWidth: 350,
  padding: 48,
  background: 'linear-gradient(270deg, #FFFFFF 77.04%, #F6F6F6 115%), #FFFFFF',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.15)',
  borderRadius: 32,
  gap: 10,
  transition:'0.5s all ease-in-out',
  '.card-heading': {
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 1,
    letterSpacing: '-0.02em',
    color: '#000000',
    fontFamily: 'elza-text',
  },
  '.card-content': {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.5,
    color: '#666666',
  },
  '.calculation-box': {
    background:
      'conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #FFF0E6 131.25deg, #F7EBFF 313.13deg, #FFFFFF 360deg)',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.15)',
    borderRadius: 32,
    padding: '24px 40px',
    display: 'block',

    '.box-inner': {
      background: 'rgba(255, 255, 255, 0.03)',
      boxShadow: '0px 2.85px 8px -12px rgba(83, 30, 0, 0.16)',
      backdropFilter: 'blur(9.36937px)',
      borderRadius: '16.5px',
      padding: '9.99px',
      display: 'block',
      '.calculation': {
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 1.5,
        color: '#666666',
        padding: 10,
        display: 'block',
        background: '#fff',
        borderRadius: '13px',
      },
    },
  },
  '&:hover': {
    boxShadow:
      '0px 1.85185px 3.14815px rgba(83, 30, 0, 0.02), 0px 8.14815px 6.51852px rgba(83, 30, 0, 0.03), 0px 20px 13px rgba(83, 30, 0, 0.04), 0px 38.5185px 25.4815px rgba(83, 30, 0, 0.04)',
  },
});

export default RateCalculatorCard;
export { CalculatorCard };
