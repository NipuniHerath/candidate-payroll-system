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
  variant = 'default', // default, textarea
  rows = 4, // Used for textarea
  ...props
}) => {
  const baseStyles = `w-full p-2 mb-6 text-indigo-700 border-b-2 border-[#94a3b8] outline-none focus:bg-gray-300`;
  const errorStyles = `border-red-500 focus:ring-red-200`;
  const defaultStyles = `border-gray-300 focus:ring-blue-300`;

  const textareaStyles = "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <div className={`mb-4 ${className}`}>
      {label && variant !== 'textarea' && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      {variant === 'textarea' ? (
        <div>
          {label && (
            <label className="sr-only" htmlFor={name}>
              {label}
            </label>
          )}
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
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${baseStyles} ${
              error ? errorStyles : defaultStyles
            } ${icon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''}`}
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
