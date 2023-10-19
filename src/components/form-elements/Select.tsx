import { MessageStyled } from '@qoruz/components/form-elements/Select.styles';
import { styled } from '@stitches-config/stitches.config';
import React from 'react';
import Select from 'react-select';

const SelectForm = ({
  name,
  placeholder,
  options,
  change,
  showRequired,
}: any) => {
  return (
    <SelectStyled>
      <Select
        classNamePrefix='custom-select'
        className={`form-react-select ${showRequired ? 'is-error' : ''}`}
        classNames={{
          control: (state) =>
            state.isFocused ? 'border-red-600' : 'border-grey-300',
        }}
        id={name}
        name={name}
        // type={type}
        // {...register(name, validationSchema)}
        placeholder={placeholder}
        options={options}
        onChange={(e: any) => {
          change(e.value);
        }}
      />
      {/* {options?.map((option: any, index: any) => {
        return <OptionsStyled key={index}>{option}</OptionsStyled>;
      })} */}
      {/* </Select> */}
      {showRequired ? (
        <MessageStyled className='error'>Please select an option</MessageStyled>
      ) : null}
      {/* {required && errors && errors[name]?.type === 'required' && (
        <MessageStyled className='error'>{errors[name]?.message}</MessageStyled>
      )}
      {errors && errors[name]?.type === 'minLength' && (
        <MessageStyled className='error'>{errors[name]?.message}</MessageStyled>
      )} */}
    </SelectStyled>
  );
};

export default SelectForm;

const SelectStyled = styled('div', {
  '.custom-select__control': {
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
    '&:hover': {
      border: '1px solid rgba(0, 0, 0, 0.3)',
    },
  },
  '.is-error': {
    '.custom-select__control':{
      border:'1px solid #ff3b00',
      background: 'url(../../images/common/form-error.svg) right 10px center no-repeat rgba(230, 98, 98, 0.08)',
      '.custom-select__placeholder':{
        color:'#ff3b00',
        opacity:1,
      },
      '.custom-select__indicators':{
        display:'none',
      }
    },
  },
  '.custom-select__control--menu-is-open': {
    '.custom-select__dropdown-indicator': {
      transform: 'rotate(180deg)',
    },
  },
  '.custom-select__placeholder': {
    color: '#666666',
    opacity: 0.5,
  },
  '.custom-select__indicator-separator': {
    display: 'none',
  },
  '.custom-select__singleValue': {
    color: '#666666',
  },
  '.custom-select__menu': {
    borderRadius: '20px',
  },
  '.custom-select__menu-list': {
    padding: '8px 8px',
  },
  '.custom-select__option': {
    borderRadius: '8px',
    margin: '8px 0',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    '&:active': {
      backgroundColor: '#FF6435',
      color: '#fff',
    },
  },
  '.custom-select__option--is-focused': {
    backgroundColor: 'rgba(255, 181, 160, 0.2);',
  },
  '.custom-select__option--is-selected': {
    backgroundColor: '#FF6435',
  },
});
