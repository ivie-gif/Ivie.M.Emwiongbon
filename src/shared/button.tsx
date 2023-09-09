import React, { ReactNode } from 'react'
import Button from '@mui/material/Button'

interface IProps {
  onClick?: (evt?: any) => void
  children: ReactNode
  size?: 'small' | 'medium' | 'large'
  disableElevation?: boolean
  variant?: 'contained' | 'outlined' | 'text'
  disabled?: boolean
  type?: 'button' | 'submit'
  sx?: object
}

const CustomButton = ({
  size,
  variant,
  onClick,
  disabled,
  type,
  children,
  ...rest
}: IProps) => {
  return (
    <Button
      size={size}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default CustomButton
