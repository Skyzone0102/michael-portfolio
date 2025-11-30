import React from 'react';

export function Button({ children, className = '', variant, size, onClick, ...props }) {
  // Only apply base styles if no custom className is provided
  if (className) {
    return (
      <button className={className} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }
  
  // Fallback to variant/size system only when className is not provided
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
    ghost: 'hover:bg-gray-100 hover:text-gray-900',
  };
  
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-8 px-3 text-sm',
    lg: 'h-12 px-8 text-lg',
  };
  
  const variantClass = variant ? variants[variant] : variants.default;
  const sizeClass = size ? sizes[size] : sizes.default;
  const classes = `${baseStyles} ${variantClass} ${sizeClass}`;
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
