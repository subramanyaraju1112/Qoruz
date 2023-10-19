'use client';
import ArrowLeft from '@qoruz/components/svg/arrowLeft';
import React from 'react';

type DotButtonPropType = {
  selected?: boolean;
  onClick?: () => void;
};

export const DotButton: React.FC<DotButtonPropType> = (props) => {
  const { selected, onClick } = props;

  return (
    <button
      className={'embla__dot'.concat(selected ? ' embla__dot--selected' : '')}
      type='button'
      onClick={onClick}
    />
  );
};

type PrevNextButtonPropType = {
  enabled?: boolean;
  onClick?: () => void;
};

export const PrevButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props;

  return (
    <button
      className='embla__button embla__button__prev flex-center flex'
      onClick={onClick}
      disabled={!enabled}
    >
      <ArrowLeft />
    </button>
  );
};

export const NextButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props;

  return (
    <button
      className='embla__button embla__button__next flex-center flex'
      onClick={onClick}
      disabled={!enabled}
    >
      <ArrowLeft />
    </button>
  );
};
