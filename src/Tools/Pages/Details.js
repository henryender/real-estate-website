import { Box, Button, Grid, Typography, styled, Paper } from '@mui/material'
import * as React from 'react'
import ImageSlide from './ImageSlide';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import millify from 'millify';

// const URL='https://bayut.p.rapidapi.com/properties/detail'
const Wrap = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Details({ exID, setDetails }) {
  const [choice, setChoice] = React.useState({})
  const [error, setError] = React.useState('')


  React.useEffect(() => {
    if (exID) {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'a77711dc7emsha08615e4f5591a4p105860jsnae14162dee8e',
          'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
      };

      fetch(`https://bayut.p.rapidapi.com/properties/detail?externalID=${exID}`, options)
        .then(response => response.json())
        .then(response => setChoice({
          id: response.id,
          category: response.category.filter((item) => item.id === 1).map((item) => item.name),
          description: response.description,
          phone: response.phoneNumber.mobile,
          phoneWhatsApp: response.phoneNumber.whatsapp,
          photos: (response.photos.map((item) => <img style={{ width: '100%', height: "350px" }}
            src={item.url} alt='' key={item.id} />)),
          referenceNumber: response.referenceNumber,
          logo: response.agency.logo.url,
          title: response.title,
          product: response.product,
          contactName: response.contactName,
          price: response.price
        })).catch(err => setError(err));
    }
  }, [exID, choice.id])


  return (
    <>
      {error ? <h2 style={{ color: 'red', textAlign: 'center' }}>Oops! Something Went Wrong</h2>
        :
        <div style={{ marginTop: '80px', marginBottom: '40px' }}>
          <Button variant='contained' size='small'
            sx={{ marginLeft: "60%", backgroundColor: 'purple' }}
            onClick={() => { setDetails(false) }}>BACK To search</Button>
          <ImageSlide choice={choice} />
          <Box>
            <Grid container spacing={1}>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <Wrap>
                  <Typography variant='body2' >
                    Type: {choice.category ? choice.category : 'Loading category..'}</Typography>
                </Wrap>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <Wrap>
                  <Typography variant='body2'>{choice.referenceNumber ? choice.referenceNumber : 'Loading Ref Number..'}
                  </Typography>
                </Wrap>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <Wrap>
                  <Typography variant='body2' >AED {choice.price ? millify(choice.price) : 'Loading Price..'}</Typography>
                </Wrap>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={6}>
                <Wrap>
                  <Typography variant='body1'>{choice.product ? choice.product : 'Loading Product..'}</Typography>
                </Wrap>
              </Grid>
            </Grid>

          </Box>
          <Box sx={{ margin: '20px 20px' }}>
            <Grid container spacing={1}>
              <Grid item lg={2}>

              </Grid>
              <Grid item lg={8} >

                <Wrap>
                  <Typography variant='h5'>{choice.title ? choice.title : 'Loading Title..'}</Typography>
                  <Typography variant='body1'> {choice.description ? choice.description : 'Loading desc...'}</Typography>
                </Wrap>
              </Grid>
              <Grid item lg={2}>

              </Grid>
            </Grid>
          </Box>
          <Box sx={{ marginBottom: '60px' }}>
            <Grid container spacing={1}>
              <Grid item lg={4} md={4} sm={4} xs={6}>
                <Wrap>
                  <Typography variant='body1'><img alt=""
                    src={choice.logo}
                    style={{ borderRadius: '50%', height: "25px", position: 'relative', top: '5px', }} />
                    {choice.contactName ? choice.contactName : 'Loading Name'}</Typography>
                </Wrap>

              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={6}>
                <Wrap>
                  <Typography variant='body1'><CallIcon color='primary'
                    sx={{ position: 'relative', top: '5px', }} /> {choice.phone ? choice.phone : 'Loading Number..'}</Typography>
                </Wrap>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={6}>
                <Wrap>
                  <Typography variant='body1'><WhatsAppIcon color='secondary'
                    sx={{ position: 'relative', top: '5px', }} />{choice.phoneWhatsApp ? choice.phoneWhatsApp : 'Loading..'}</Typography>
                </Wrap>
              </Grid>

            </Grid>
          </Box>

        </div>

      }


    </>

  )
}

export default Details




