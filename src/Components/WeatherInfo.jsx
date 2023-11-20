import React from 'react';

import { Box, Typography, makeStyles } from "@material-ui/core"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import OpacityIcon from '@material-ui/icons/Opacity';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';


const useStyles = makeStyles({
    component: {
        margin: 50,
        fontWeight: 'bold',


    },
    row: {
        padding: 10,
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: 'bold',
        // boxSizing: 'inherit',
        // minWidth: '100%',
        // maxWidth: '100%',
        // width: 'calc(100% - 20px)',


    },
    value: {
        color: 'white',

    },
    icon: {
        marginRight: 15,
        color: 'darkred',
    },

})

const WeatherInformation = ({ data }) => { //data ke andr se data || <WeatherInformation data={data} />
    const classes = useStyles();

    return (
        data ?      //terniory operation
            <Box className={classes.component}>
                <Typography className={classes.row}><LocationOnIcon className={classes.icon} /> Location:-
                    <Box className={classes.value} component="span">
                        {data.name}, {data.sys.country} </Box> </Typography>

                <Typography className={classes.row}><Brightness6Icon className={classes.icon} /> Temprature:-
                    <Box className={classes.value} component="span">
                        {data.main.temp}°C </Box>  </Typography>

                <Typography className={classes.row}><OpacityIcon className={classes.icon} /> Humidity:-
                    <Box className={classes.value} component="span">
                        {data.main.humidity}% </Box> </Typography>

                <Typography className={classes.row}><WbSunnyIcon className={classes.icon} /> Sun_Rise:-
                    <Box className={classes.value} component="span">
                        {new Date(data.sys.sunrise * 1000).toLocaleTimeString()} </Box></Typography>

                <Typography className={classes.row}><Brightness7Icon className={classes.icon} /> Sun_Set:-
                    <Box className={classes.value} component="span">
                        {new Date(data.sys.sunset * 1000).toLocaleTimeString()} </Box></Typography>

                <Typography className={classes.row}><CloudIcon className={classes.icon} /> Clouds:-
                    <Box className={classes.value} component="span">
                        {data.clouds.all}% </Box> </Typography>

                <Typography className={classes.row}><AcUnitOutlinedIcon className={classes.icon} /> Conditions:-
                    <Box className={classes.value} component="span">
                        {data.weather[0].main} </Box> </Typography>
                <br />
                <br />
                {/* <Typography><h3>Created By:- Anhar Dhiman</h3></Typography> */}

            </Box> : ''
    )
}
export default WeatherInformation

