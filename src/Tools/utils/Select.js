import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid, Typography } from '@mui/material'
import { URL, options } from './headers';
import ActionAreaCard from '../Pages/CardPage';
import { Box } from '@mui/system';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// Filter Select Options on Buy/Rent Page
export default function BasicSelect() {
    const [Text, setText] = React.useState(true)
    const [error, setError] = React.useState('')
    const [drop, setdrop] = React.useState(false)
    const [details, setDetails] = React.useState(false)
    const [filter, setfilter] = React.useState({
        purpose: '',
        rentFrequency: '',
        minPrice: '',
        maxPrice: '',
        sort: " ",
        areaMax: "",
        roomsMin: "",
        bathsMin: "",
        furnishingStatus: "",
        categoryExternalID: "",
    });
    const [info, setInfo] = React.useState([]);
    const filterData = [
        {
            items: [
                { name: 'Buy', value: 'for-sale' },
                { name: 'Rent', value: 'for-rent' },
            ],
            placeholder: 'Purpose',
            queryName: 'purpose',
            function: (event) => setfilter({ ...filter, purpose: event.target.value }),
        },

        {
            items: [
                { name: 'Daily', value: 'daily' },
                { name: 'Weekly', value: 'weekly' },
                { name: 'Monthly', value: 'monthly' },
                { name: 'Yearly', value: 'yearly' },
            ],
            placeholder: 'Rent Frequency',
            queryName: 'rentFrequency',
            function: (event) => setfilter({ ...filter, rentFrequency: event.target.value }),
        },
        {
            items: [
                { name: '10,000', value: '10000' },
                { name: '20,000', value: '20000' },
                { name: '30,000', value: '30000' },
                { name: '40,000', value: '40000' },
                { name: '50,000', value: '50000' },
                { name: '60,000', value: '60000' },
                { name: '85,000', value: '85000' },
            ],
            placeholder: 'Min Price(AED)',
            queryName: 'minPrice',
            function: (event) => setfilter({ ...filter, minPrice: event.target.value }),
        },
        {
            items: [
                { name: '50,000', value: '50000' },
                { name: '60,000', value: '60000' },
                { name: '85,000', value: '85000' },
                { name: '110,000', value: '110000' },
                { name: '135,000', value: '135000' },
                { name: '160,000', value: '160000' },
                { name: '185,000', value: '185000' },
                { name: '200,000', value: '200000' },
                { name: '300,000', value: '300000' },
                { name: '400,000', value: '400000' },
                { name: '500,000', value: '500000' },
                { name: '600,000', value: '600000' },
                { name: '700,000', value: '700000' },
                { name: '800,000', value: '800000' },
                { name: '900,000', value: '900000' },
                { name: '1000,000', value: '1000000' },
            ],
            placeholder: 'Max Price(AED)',
            queryName: 'maxPrice',
            function: (event) => setfilter({ ...filter, maxPrice: event.target.value }),
        },
        {
            items: [
                { name: 'Lowest Price', value: 'price-asc' },
                { name: 'Highest Price', value: 'price-des' },
                { name: 'Newest', value: 'date-asc' },
                { name: 'Oldest', value: 'date-desc' },
                { name: 'Verified', value: 'verified-score' },
                { name: 'City Level Score', value: 'city-level-score' },
            ],
            placeholder: 'Sort',
            queryName: 'sort',
            function: (event) => setfilter({ ...filter, sort: event.target.value }),
        },
        {
            items: [
                { name: '1000', value: '1000' },
                { name: '2000', value: '2000' },
                { name: '3000', value: '3000' },
                { name: '4000', value: '4000' },
                { name: '5000', value: '5000' },
                { name: '10000', value: '10000' },
                { name: '20000', value: '20000' },
            ],
            placeholder: 'Max Area(sqft)',
            queryName: 'areaMax',
            function: (event) => setfilter({ ...filter, areaMax: event.target.value }),
        },
        {
            items: [
                { name: '1', value: '1' },
                { name: '2', value: '2' },
                { name: '3', value: '3' },
                { name: '4', value: '4' },
                { name: '5', value: '5' },
                { name: '6', value: '6' },
                { name: '7', value: '7' },
                { name: '8', value: '8' },
                { name: '9', value: '9' },
                { name: '10', value: '10' },
            ],
            placeholder: 'Rooms',
            queryName: 'roomsMin',
            function: (event) => setfilter({ ...filter, roomsMin: event.target.value }),
        },
        {
            items: [
                { name: '1', value: '1' },
                { name: '2', value: '2' },
                { name: '3', value: '3' },
                { name: '4', value: '4' },
                { name: '5', value: '5' },
                { name: '6', value: '6' },
                { name: '7', value: '7' },
                { name: '8', value: '8' },
                { name: '9', value: '9' },
                { name: '10', value: '10' },
            ],
            placeholder: 'Baths',
            queryName: 'bathsMin',
            function: (event) => setfilter({ ...filter, bathsMin: event.target.value }),
        },
        {
            items: [
                { name: 'Furnished', value: 'furnished' },
                { name: 'Unfurnished', value: 'unfurnished' },
            ],
            placeholder: 'Furnish Type',
            queryName: 'furnishingStatus',
            function: (event) => setfilter({ ...filter, furnishingStatus: event.target.value }),
        },
        {
            items: [
                { name: 'Apartment', value: '4' },
                { name: 'Townhouses', value: '16' },
                { name: 'Villas', value: '3' },
                { name: 'Penthouses', value: '18' },
                { name: 'Hotel Apartments', value: '21' },
                { name: 'Villa Compound', value: '19' },
                { name: 'Residential Plot', value: '14' },
                { name: 'Residential Floor', value: '12' },
                { name: 'Residential Building', value: '17' },
            ],
            placeholder: 'Property Type',
            queryName: 'categoryExternalID',
            function: (event) => setfilter({ ...filter, categoryExternalID: event.target.value }),
        },
    ];
    //THis is the API for BUY AND RENT PAGE.
    React.useEffect(() => {
        if (filter.purpose) {
            fetch(`${URL}properties/list?locationExternalIDs=5002%2C6020&purpose=${filter.purpose}&hitsPerPage=25&sort=${filter.sort}&categoryExternalID=${filter.categoryExternalID}&rentFrequency=${filter.rentFrequency}&areaMax=${filter.areaMax}&bathsMin=${filter.bathsMin}&priceMax=${filter.maxPrice}&priceMin=${filter.minPrice}&roomsMin=${filter.roomsMin}&furnishingStatus=${filter.furnishingStatus} `, options)
                .then(response => response.json())
                .then(response => {
                    setText(false);
                    setInfo(response.hits.map((item) => ({
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
                        Id: item.id,
                        furnishingStatus: item.furnishingStatus,
                    })))
                })
                .catch(err => setError(err));
        }

    }, [filter.purpose,
    filter.sort,
    filter.categoryExternalID,
    filter.areaMax,
    filter.bathsMin,
    filter.maxPrice,
    filter.minPrice,
    filter.furnishingStatus,
    filter.roomsMin,
    filter.rentFrequency,])

    return (
        <>
            {details ? (null) : (<Box sx={{ backgroundColor: "#ab6dd5", height: 'auto', marginBottom: "50px" }}>
                <Box onClick={() => { setdrop(!drop) }}><Typography variant='h5'>
                    {drop ? (<p style={{ color: 'white' }}>Hide Filters<ArrowDropUpIcon sx={{ color: 'white', position: 'relative', top: "5px" }} /></p>)
                        : (<p style={{ color: 'white' }}>Show Filters<ArrowDropDownIcon sx={{ color: 'white', position: 'relative', top: "5px" }} /></p>)}
                </Typography>
                </Box>
                {drop ? (<Grid container spacing={1} sx={{ marginBottom: '20px', }}>
                    {filterData.map((data) =>
                        <>
                            <Grid item lg={2} md={3} sm={4} xs={12} sx={{ marginBottom: '50px', }} key={data.queryName}>
                                <FormControl variant='standard' fullWidth>
                                    <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }} >{data.queryName}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={data.items.value}
                                        onChange={data.function}>
                                        <MenuItem value="" style={{ color: 'gray' }}> <em>None</em></MenuItem>
                                        {data.items?.map((item) => (
                                            <MenuItem value={item.value} key={item.value}>{item.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </>
                    )}
                </Grid>
                ) : (null)}
            </Box>)}

            {error ? <h2 style={{ color: 'red', height: "300px", textAlign: "center" }}>Oops! Something went wrong</h2> :
                <ActionAreaCard info={info} Text={Text} details={details} setDetails={setDetails} />}
        </>
    );
}

