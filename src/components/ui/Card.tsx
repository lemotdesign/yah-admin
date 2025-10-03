/**
 * Simple Card component
 * This is a placeholder until Untitled UI PRO components are integrated
 */

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function Card({ children, className = '', title }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {title && <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>}
      {children}
    </div>
  );
}
