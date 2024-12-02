import React from 'react';

const Button = ({
  type = 'button', // Default button type
  variant = 'default', // Button style variant
  children, // Button text or content
  onClick, // Click handler
  className = '', 
  icon = null,
  // Additional custom classes
}) => {
  const baseStyles = `font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none`;

  // Define variants
  const variants = {
    //Payment buttons
    paymentwithVisa:"text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2",
    applePay:"text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2",

    //Button sizes
    extrasmall:"px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    blue: `text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 shadow-lg shadow-blue-500/50`,
    facebook: `text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-[#3b5998]/50 inline-flex items-center`,
    cyanToBlue: `relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-cyan-200`,
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

