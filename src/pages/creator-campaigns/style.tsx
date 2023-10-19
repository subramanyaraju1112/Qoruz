import { styled } from '@stitches-config/stitches.config';

const CampaignContents = styled('section', {
  overflow: 'hidden',
  mx: 30,
  px: 30,
  mt: '3rem',
  '@lg': {
    mx: 24,
    px: 0,
  },
  
});

const SuccessForm = styled ('div',{
  '&.back-background': {
    position: 'fixed',
    top: '0px',
    width: '100%',
    height: '100vh',
    background: '#00000070',
    zIndex: 10,
    backdropFilter: 'blur(1px)',
  },
  '&.hide':{
    display:'none',
  }
})

const CampaignRow = styled('div', {
  display: 'flex',
  gap: 44,
  '@lg': {
    flexWrap: 'wrap',
  },
});

export default CampaignContents;
export { CampaignRow, SuccessForm };
