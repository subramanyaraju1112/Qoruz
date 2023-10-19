import { styled } from '@stitches/react';
import React from 'react';

const Loader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <LoaderStyled isLoading={isLoading}>
      <div className='lds-ripple'>
        <h1>Loading...</h1>
      </div>
    </LoaderStyled>
  );
};

export default Loader;

const LoaderStyled = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 9999,
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.3s ease-in-out',
  variants: {
    isLoading: {
      true: {
        opacity: 1,
        visibility: 'visible',
      },
      false: {
        opacity: 0,
        visibility: 'hidden',
      },
    },
  },
});
