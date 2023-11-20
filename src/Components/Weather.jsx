import React from 'react'; 

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../Components/pictures/bg.jpg';
import Form from './Form';


const useStyles = makeStyles({
    leftCont: {
        backgroundImage: `url(${logo})`,
        height: '80%',
        width: '30%',
        backgroundSize: 'cover',
        borderRadius: '30px 0px 0px 30px'

    },
    component: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '65%',
        margin: '0 auto',
    },
    rightCont: {

        background: 'linear-gradient(to right, #49cc75, #fdbb2d)',
        height: '80%',
        width: '70%',
        borderRadius: '0px 30px 30px 0px'
    }


})

const Weather = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.component}>

                {/* Left part of Application */}
                <Box className={classes.leftCont}></Box>

                {/* Right part of Application */}
                <Box className={classes.rightCont}>
                    <Form />
                </Box>

            </Box>
        </>
    );
}
export default Weather

