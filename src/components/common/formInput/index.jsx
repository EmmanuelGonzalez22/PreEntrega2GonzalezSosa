import { useFormContext } from "react-hook-form";

const FormInput = ({
  label,
  id,
  type,
  placeholder,
  required,
  pattern,
  errorMessage,
  minLength,
  match,
  className,
}) => {
  const {
    register,
    formState: { errors },
    trigger,
    watch,
  } = useFormContext();

  const handleChange = (e) => {
    trigger(e.target.name);
    if (e.target.name === "email") {
      trigger("emailConfirm");
    }
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        className={className}
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id, {
          required: required && `Campo obligatorio`,
          pattern: pattern && {
            value: pattern,
            message: errorMessage,
          },
          minLength: {
            value: minLength,
            message: `Mínimo ${minLength} caracteres`,
          },
          validate: match && {
            matchesInputs: (value) => {
              return value === watch(match) || "Los campos no coinciden";
            },
          },
        })}
        onFocus={handleChange}
        onKeyUp={handleChange}
      />
      {errors[id] && <span className='red'>{errors[id].message}</span>}
    </div>
  );
};

export { FormInput };
