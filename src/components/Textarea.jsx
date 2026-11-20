import { forwardRef } from 'react';

const Textarea = forwardRef(({
  label,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
  disabled = false,
  rows = 4,
  className = '',
  textareaClassName = '',
  labelClassName = '',
  helperText,
  maxLength,
  ...props
}, ref) => {
  const textareaId = `${name}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={textareaId} className={`label ${labelClassName}`}>
          {label}
          {required && <span className="text-secondary ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(name, e.target.value)}
        onBlur={() => onBlur?.(name)}
        disabled={disabled}
        required={required}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : maxLength ? `${textareaId}-count` : undefined}
        className={`input resize-y ${error && touched ? 'border-red-500 focus:ring-red-500/20' : ''} ${textareaClassName}`}
        {...props}
      />
      {maxLength && (
        <p id={`${textareaId}-count`} className="text-sm text-text-light mt-1.5 text-right">
          {value?.length || 0}/{maxLength}
        </p>
      )}
      {error && touched && (
        <p id={`${textareaId}-error`} className="form-error" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && !maxLength && (
        <p id={`${textareaId}-helper`} className="text-sm text-text-light mt-1.5">
          {helperText}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;