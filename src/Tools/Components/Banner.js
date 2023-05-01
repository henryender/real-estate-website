import React from 'react'
import { Box, Typography, Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const Banner = ({ purpose, buttonText, imageUrl, desc1, desc2, title1, title2, LinkName }) => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid lg={2} md={2} sm={2}></Grid>
        <Grid lg={8} md={8} sm={8}>
          <Box
            sx={{
              display: 'flex',
              marginTop: "80px",
              marginBottom: '25px',
              backgroundColor: 'purple',
              marginLeft:'5px',
              marginRight:'5px',
            }}>
            <img src={imageUrl} width='60%' alt="Banner" />
            <Box sx={{ margin: '5px', marginTop: '50px', padding: '10px', }}>
              <Typography variant='body2' sx={{ textAlign: 'left', color: 'white' }}>{purpose}</Typography>
              <Typography variant='h5' sx={{ textAlign: 'left', color: 'white' }}><strong>{title1}<br /> {title2}</strong></Typography>
              <Typography variant='body2' sx={{ textAlign: 'left', color: 'white' }}>{desc1} <br />{desc2}</Typography>
              <Button size='small' sx={{ marginRight: '10%', marginTop: '20px', border: '1px solid white' }}
                onClick={(e) => e.preventDefault()}>
                <Link to={LinkName} style={{ textDecoration: "none", color: 'white' }}>{buttonText}</Link>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid lg={2} md={2} sm={2}></Grid>
      </Grid>

    </>




  )
}
export default Banner