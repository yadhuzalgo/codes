import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            studentapp
          </Typography>
          <Button color="inherit"><Link to ='/' style={{color:'white',textdecoration:'none'}}>View</Link></Button>
          <Button color="inherit"><Link to ='/add' style={{color:'white',textdecoration:'none'}}>Add</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
