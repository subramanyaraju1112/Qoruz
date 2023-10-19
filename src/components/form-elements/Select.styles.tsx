import { styled } from '@stitches-config/stitches.config';
const SelectStyled = styled('div', {
  '[class$="-control"]':{
    fontFamily: 'elza-text',
    padding: '8px',
    borderRadius: 10,
    border: '1px solid rgba(0, 0, 0, 0.1)',
    outline: 'none',
    height: 56,
    width: '100%',
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 20,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    boxShadow: 'none',
    '&:hover':{
      border: '1px solid rgba(0, 0, 0, 0.3)',
    },
    '[class$="-placeholder"]': {
      color: '#666666',
      opacity: 0.5,
    },
    '[class$="-indicatorSeparator"]':{
      display: 'none',
    },
    '[class$="-singleValue"]': {
      color: '#666666',
    },
    '[class$="-menu"]':{
      boxShadow: 'none',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      padding: '24px 8px',
    },
  }
});
const MessageStyled = styled('span', {
  fontSize: '12px',
  color: '#FF0000',
  position: 'relative',
  top: '-16px',
});

const OptionsStyled = styled('option', {  
  height: '56px !important',
});

export { MessageStyled, OptionsStyled };

export default SelectStyled;
