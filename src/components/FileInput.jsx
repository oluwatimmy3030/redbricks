import { forwardRef } from 'react';

const FileInput = forwardRef(({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
  disabled = false,
  accept = 'image/*',
  multiple = false,
  className = '',
  inputClassName = '',
  labelClassName = '',
  helperText,
  ...props
}, ref) => {
  const inputId = `${name}-${Math.random().toString(36).substr(2, 9)}`;

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onChange?.(name, multiple ? Array.from(files) : files[0]);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const displayValue = multiple 
    ? (value?.length ? `${value.length} file(s) selected` : '')
    : (value ? (value.name ? value.name : 'File selected') : '');

  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={inputId} className={`label ${labelClassName}`}>
          {label}
          {required && <span className="text-secondary ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          id={inputId}
          name={name}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          onBlur={() => onBlur?.(name)}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          {...props}
        />
        <div className={`input flex items-center justify-between min-h-[120px] p-6 border-2 border-dashed ${error && touched ? 'border-red-500' : 'border-border'} hover:border-secondary/50 transition-colors`}>
          <div className="text-center pointer-events-none">
            <svg className="mx-auto h-10 w-10 text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="mt-2 text-text-muted">Drag & drop or click to upload</p>
            <p className="text-sm text-text-light mt-1">{accept}</p>
            {displayValue && (
              <p className="text-sm text-secondary mt-2 font-medium">{displayValue}</p>
            )}
          </div>
        </div>
      </div>
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="text-sm text-text-light mt-1.5">
          {helperText}
        </p>
      )}
      {error && touched && (
        <p id={`${inputId}-error`} className="form-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

FileInput.displayName = 'FileInput';

export default FileInput;