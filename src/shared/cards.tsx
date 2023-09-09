import React, { ReactNode } from 'react'
import Box from '@mui/material/Box'
import useStyles from '../shared/styled.card'

type cardProps = {
  children: ReactNode
  style?: any
}

function Card({ children, style }: cardProps) {
  const classes = useStyles()

  return (
    <Box className={classes.root} style={{ ...style }}>
      {children}
    </Box>
  )
}

export default Card
