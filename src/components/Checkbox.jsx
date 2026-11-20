import { forwardRef } from 'react';

const Checkbox = forwardRef(({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
  disabled = false,
  className = '',
  checkboxClassName = '',
  labelClassName = '',
  helperText,
  ...props
}, ref) => {
  const checkboxId = `${name}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`form-group ${className}`}>
      <div className="flex items-start gap-3">
        <input
          ref={ref}
          id={checkboxId}
          name={name}
          type="checkbox"
          checked={value}
          onChange={(e) => onChange?.(name, e.target.checked)}
          onBlur={() => onBlur?.(name)}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${checkboxId}-error` : helperText ? `${checkboxId}-helper` : undefined}
          className={`mt-1 h-4 w-4 rounded border-border text-secondary focus:ring-2 focus:ring-secondary/20 focus:ring-offset-2 disabled:opacity-50 ${checkboxClassName}`}
          {...props}
        />
        <div className="flex-1">
          {label && (
            <label htmlFor={checkboxId} className={`text-sm text-text ${labelClassName}`}>
              {label}
              {required && <span className="text-secondary ml-1" aria-hidden="true">*</span>}
            </label>
          )}
          {helperText && !error && (
            <p id={`${checkboxId}-helper`} className="text-sm text-text-light mt-1">
              {helperText}
            </p>
          )}
        </div>
      </div>
      {error && touched && (
        <p id={`${checkboxId}-error`} className="form-error mt-2" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;