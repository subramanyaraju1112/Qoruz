import { styled } from '@stitches-config/stitches.config';

const WebinarRow = styled('div', {
  gap:50,
  display:'flex',
  width:'$full',
  '.left-col':{
    maxWidth:660,
    width:'$full',
    pb:'$6xl',
  }
});

const WebContainer = styled('div', {

});


export default WebinarRow;
export {WebContainer};