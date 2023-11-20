import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { apiOpenWeather } from './api/api';
import WeatherInformation from './WeatherInfo';


const useStyles = makeStyles({
    input: {
        color: 'white',
        marginRight: 5,
    },
    component: {
        padding: 20,
        background: '#157034'
    },
    button: {
        height: 40,
        width: 150,
        background: '#e67e22',
        color: 'white',
        marginLeft: 8,
        marginTop: 10,
    }
});


const Form = () => {
    const classes = useStyles();
    const [data, getWeatherData] = useState(); // <WeatherInformation data={data} />
    const [city, setCity] = useState('Himachal Pradesh');
    const [country, setCountry] = useState('India');
    const [click, handleClick] = useState(false);  //i want button click -> useEffect call so handleClick


    useEffect(() => {
        // console.log('apiOpenWeather()',apiOpenWeather());
        const fetchData = async () => {
            city && await apiOpenWeather(city, country).then(response => {
                getWeatherData(response.data);    //data save here
                console.log('apiOpenWeather DATA', response.data)
            });
        };
        fetchData();
        handleClick(false);
    }, [click]);                            //handleClick 

    const handleCityChange = (value) => {
        setCity(value);
    }

    const handleCountryChange = (value) => {
        setCountry(value);
    }

    return (
        <>
            <Box className={classes.component}>
                <TextField
                    inputProps={{ className: classes.input }} // inputProps used to change the property of input fields
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className={classes.input}
                    label="Country Name..."

                />
                <TextField
                    inputProps={{ className: classes.input }} // inputProps used to change the property of input fields
                    onChange={(e) => handleCityChange(e.target.value)}
                    className={classes.input}
                    label="City Name..."

                />
                <Button className={classes.button} variant="contained"
                    onClick={() => handleClick(true)} >Get Weather</Button>
            </Box>

            <WeatherInformation data={data} />   {/* data as props so when fetch should be destructred */}
        </>
    )
}
export default Form



