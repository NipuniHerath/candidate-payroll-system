import React from 'react';

const InputField = ({
  type = 'text',
  name,
  placeholder = '',
  value,
  onChange,
  label = '',
  className = '',
  error = '',
  disabled = false,
  icon = null,
  rightIcon = null,
  variant = 'default', // default, textarea, phone, email, password
  rows = 4, // For textarea
  pattern, // For validation-based inputs
  required = false, // To make the field required
  ...props
}) => {
  // Common styles
  const baseStyles = `w-full p-2 mb-6 text-indigo-700 border-b-2 border-[#94a3b8] outline-none `;
  const errorStyles = `border-red-500 focus:ring-red-200`;
  const defaultStyles = `border-gray-300 focus:ring-blue-300`;

  // Variant-specific styles
  const sharedStyles = `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`;
  const textareaStyles = `w-full rounded-lg border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300`;
  const phoneStyles = sharedStyles;
  const emailStyles = sharedStyles;
  const passwordStyles = sharedStyles;

  return (
    <div className={`mb-4 ${className}`}>
      {label && variant !== 'textarea' && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      {variant === 'textarea' ? (
        <div>
          <label className="sr-only" htmlFor={name}>
            {label}
          </label>
          <textarea
            name={name}
            id={name}
            rows={rows}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${textareaStyles} ${error ? 'border-red-500' : ''}`}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
            {...props}
          />
        </div>
      ) : (
        <div className="relative">
          {icon && (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              {icon}
            </span>
          )}
          <input
            type={variant === 'phone' ? 'tel' : variant}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${variant === 'phone' ? phoneStyles : ''} ${
              variant === 'email' ? emailStyles : ''
            } ${variant === 'password' ? passwordStyles : ''} ${
              variant === 'default' ? baseStyles : ''
            } ${error ? errorStyles : ''} ${icon ? 'pl-10' : ''} ${
              rightIcon ? 'pr-10' : ''
            }`}
            pattern={variant === 'phone' ? pattern : undefined}
            required={required}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
            {...props}
          />
          {rightIcon && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              {rightIcon}
            </span>
          )}
        </div>
      )}
      {error && (
        <p id={`${name}-error`} className="text-red-500 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
