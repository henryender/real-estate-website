import * as React from 'react'
import './App.css';
import { styled, Paper } from '@mui/material';
import Banner from './Tools/Components/Banner';
import SaleCard from './Tools/Components/SaleCard';
import MediaCard from './Tools/Components/Card';
import ButtonAppBar from './Tools/Components/AppBar';
import Footer from './Tools/Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buy from './Tools/Pages/Buy';



const Wrap = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  const [sale, setSale] = React.useState([])
  const [rent, setRent] = React.useState([])
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a77711dc7emsha08615e4f5591a4p105860jsnae14162dee8e',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
    };
    //API FOR THE HOME PAGE FOR RENT

    fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=18', options)
      .then(response => response.json())
      .then(response => setSale(response.hits.map((item) => ({
        coverPhoto: item.coverPhoto.url,
        price: item.price,
        rentFrequency: item.rentFrequency,
        rooms: item.rooms,
        title: item.title,
        baths: item.baths,
        area: item.area,
        agency: item.agency.name,
        isVerified: item.isVerified,
        externalId: item.externalID,
        Id: item.id

      }))))
      .catch(err => setError(err));
    //API HOME PAGE FOR SALE...CHECK THE UTILS/HEADER FILE FOR API KEYS

    fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=18', options)
      .then(response => response.json())
      .then(response => setRent(response.hits.map((item) => ({
        coverPhoto: item.coverPhoto.url,
        price: item.price,
        rentFrequency: item.rentFrequency,
        rooms: item.rooms,
        title: item.title,
        baths: item.baths,
        area: item.area,
        agency: item.agency.name,
        isVerified: item.isVerified,
        externalId: item.externalID,
        Id: item.id
      }))))
      .catch(err => setError(err));
  }, [])

  return (
    <>
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route path='/' index element={
            <Wrap>
              <Banner
                purpose='RENT A HOME'
                title1="Rental Homes"
                title2=" For Everyone"
                desc1="Explore Apartments, Villas,"
                desc2="Homes and more"
                buttonText="Explore Renting"
                LinkName='buy'
                imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
              />
              {error ? <h2 style={{ color: 'red', textAlign: 'center' }}>Oops! Something Went Wrong</h2> : <MediaCard rent={rent} />}
              <Banner
                purpose='BUY A HOME'
                title1="Find, Buy & Own"
                title2="Your Dream Home"
                desc1="Explore from Apartments, Lands,"
                desc2="Floors,Bulding,Villas and more"
                buttonText="Explore Buying"
                LinkName='buy'
                imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
              />

              {error ? <h2 style={{ color: 'red' }}>Oops! Something Went Wrong</h2> : <SaleCard sale={sale} />}
            </Wrap>} />
          <Route path="buy" element={<Buy />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;


