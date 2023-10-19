import TextareaStyled, {
  MessageStyled,
} from '@qoruz/components/form-elements/Textarea.style';
import React from 'react';

const Textarea = ({
  name,
  register,
  errors,
  required,
  validationSchema,
  placeholder,
  rows,
  cols,
}: any) => (
  <>
    <TextareaStyled
      className={
        (errors &&
        (errors[name]?.type === 'required' ||
          errors[name]?.type === 'minLength')
          ? 'has-error '
          : '') + 'textarea-styled'
      }
      id={name}
      name={name}
      rows={rows}
      cols={cols}
      // type={type}
      {...register(name, validationSchema)}
      placeholder={placeholder}
    />
    {required && errors && errors[name]?.type === 'required' && (
      <MessageStyled className='error'>{errors[name]?.message}</MessageStyled>
    )}
    {required && errors && errors[name]?.type === 'minLength' && (
      <MessageStyled className='error'>{errors[name]?.message}</MessageStyled>
    )}
  </>
);

export default Textarea;
