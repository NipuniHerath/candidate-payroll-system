
import React from 'react';

const Button = ({
  type = 'button', 
  variant = 'default',
  children, 
  onClick, 
  className = '', 
  icon = null,
 
}) => {
  const baseStyles = `font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none`;


  const variants = {
  
    signIn:"text-gray-900 rounded-full bg-white hover:bg-gray-100 border-2  border-[#202A44] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-8 py-4 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2",
    signUp: `text-white bg-[#202A44] rounded-full border-2 hover:bg-[#2c3a5e]  border-[#e4e4e7] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm px-8 py-4 flex justify-center items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2`,
    success: `text-white bg-[#16a34a] rounded-full border-2 hover:bg-[#22c55e] border-[#e4e4e7] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm px-8 py-4 flex justify-center items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2`,
    cancel: `text-white bg-[#f43f5e] rounded-full border-2 hover:bg-[#fb7185]  border-[#e4e4e7] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm px-8 py-4 flex justify-center items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2`,
    warning: `text-white bg-[#fbbf24] rounded-full border-2  hover:bg-[#fcd34d]  border-[#e4e4e7] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm px-8 py-4 flex justify-center items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2`,        
    default: `bg-gray-300 text-gray-700 hover:bg-gray-400`,
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="me-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
