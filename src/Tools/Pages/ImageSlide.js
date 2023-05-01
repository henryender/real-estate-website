import {Grid, Paper } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'

function ImageSlide({ choice }) {
  return (
    <div style={{margin:'20px 20px'}}>
      <Grid container spacing={1}>
        <Grid item lg={2} md={1} sm={1} xs={0} >
        </Grid>
        <Grid item lg={8} md={10} sm={10} xs={12}>
          <Paper>
            <Carousel autoPlay={false} navButtonsAlwaysVisible={true}>
              {choice.photos? choice.photos:'Loading Images......'}
            </Carousel>
          </Paper>
        </Grid>
        <Grid item lg={2} md={1} sm={1} xs={0}>
        </Grid>
      </Grid>




    </div>
  )
}

export default ImageSlide
