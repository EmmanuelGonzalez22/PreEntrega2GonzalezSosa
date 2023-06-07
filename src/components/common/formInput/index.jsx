const FormInput = ({
  handleChange,
  label,
  id,
  type,
  placeholder,
  required,
  pattern,
  errorMessage,
  errors,
  register,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className='input'
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(
          { id },
          {
            required: required && "Campo obligatorio",
            pattern: pattern && {
              value: pattern,
              message: errorMessage,
            },
          }
        )}
        onFocus={handleChange}
        onKeyUp={handleChange}
      />
      {errors[id] && <span className='red'>{errors[id].message}</span>}
    </>
  );
};

export { FormInput };
