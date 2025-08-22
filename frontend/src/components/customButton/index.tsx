import React from 'react';
import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import './style.css';

interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  hasArrow?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  hasArrow = false,
  ...props
}) => {
  return (
    <Button
      className={`custom-button ${variant} ${className}`}
      {...props}
    >
      {children} {hasArrow && <img src={'/arrow-right.svg'} alt="arrow-right" />}
    </Button>
  );
};

export default CustomButton;
