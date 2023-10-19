import InputStyled, {
  MessageStyled,
} from '@qoruz/components/form-elements/Input.style';
import React from 'react';
const Input = ({
  name,
  register,
  errors,
  required,
  type,
  validationSchema,
  placeholder,
  width,
  height,
  invalid,
  pattern,
  onchange,
  currentValue,
  invalidPhone,
}: any) => (
  // <div className='form-control-input'>
  <>
    <InputStyled
      className={
        (errors &&
        (errors[name]?.type === 'required' ||
          errors[name]?.type === 'minLength')
          ? 'has-error '
          : '') +
        'input-styled' +
        (invalid ? ' ' + 'has-error' : '')
      }
      id={name}
      name={name}
      type={type}
      pattern={pattern}
      {...register(name, validationSchema)}
      placeholder={placeholder}
      style={{
        width: { width },
        height: { height },
      }}
      value={currentValue}
      onChange={onchange}
      // ref={register({
      //   required: required,
      //   validate: isEven
      // })}
    />
    {invalid && type == 'email' && (
      <MessageStyled className='error'>
        Please Enter company's email
      </MessageStyled>
    )}
    {invalidPhone && type == 'tel' && (
      <MessageStyled className='error'>Please Enter Valid Phone</MessageStyled>
    )}
    {!invalid && required && errors && errors[name]?.type === 'required' && (
      <MessageStyled className='error'>{errors[name]?.message}</MessageStyled>
    )}
    {!invalid && required && errors && errors[name]?.type === 'minLength' && (
      <MessageStyled className='error'>{errors[name]?.message}</MessageStyled>
    )}
  </>
  // </div>
);

export default Input;
