import { forwardRef } from 'react';

const FormField = forwardRef(({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
  disabled = false,
  className = '',
  inputClassName = '',
  labelClassName = '',
  helperText,
  ...props
}, ref) => {
  const inputId = `${name}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={inputId} className={`label ${labelClassName}`}>
          {label}
          {required && <span className="text-secondary ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(name, e.target.value)}
        onBlur={() => onBlur?.(name)}
        disabled={disabled}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        className={`input ${error && touched ? 'border-red-500 focus:ring-red-500/20' : ''} ${inputClassName}`}
        {...props}
      />
      {error && touched && (
        <p id={`${inputId}-error`} className="form-error" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="text-sm text-text-light mt-1.5">
          {helperText}
        </p>
      )}
    </div>
  );
});

FormField.displayName = 'FormField';

export default FormField;