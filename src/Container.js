import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SocialIcon from './Components/Socialcon'
import config from './Components/config/defaultBlueprint.json'

import clsx from  'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    //  backgroundColor: 'dimgray',
     margin:'10px auto',
     height: '200px'
   
  },
  paper: {
    textAlign: 'center',
   
    width: '25%',
    height: '125px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'lighter',
    fontSize:'12px',
  },
  leftBorderHeader: {
         padding: '0px 10px',
    borderLeft: '1px solid grey',
  
  },
 logoMargin:{
    margin:'0px 15px'
 },
 copyRight:{
  
   display:'flex',
   alignItems:'center',
   justifyContent:'center'
 }
}));

 function SimpleContainer(props){
  
     const classes = useStyles();

       const myStyle={
        backgroundColor: config.companyInfo.containerBackgroundColor,
         color: config.companyInfo.textColor
    }

  return (

    <React.Fragment>
      
      <CssBaseline />
      <Container maxWidth="lg" style={myStyle}  className={classes.root} >
        <Grid container spacing={0}  >
       
        <Grid item lg={3}  className={classes.paper}>
                <a href="https://www.vlinder.io/"><img src={config.companyInfo.logoSrc} alt="logo" /></a>
        </Grid>
       <Grid item lg={3} className={clsx(classes.paper,classes.leftBorderHeader)} >
            {config.companyInfo.address}
        </Grid>
        <Grid item lg={3}  className={clsx(classes.paper,classes.leftBorderHeader)}>
            {config.companyInfo.email}
          <br/>
            {config.companyInfo.contactNumber}
        </Grid>

        <Grid item lg={3} className={clsx(classes.paper,classes.leftBorderHeader)}>
          <SocialIcon />
        </Grid>
       
      </Grid>
      <hr/>
      <div  className={classes.copyRight}>
          <h4>copyright: 2020 vlinder inc. All rights reserved. powered by <a href="https://www.vlinder.io/">vlinder.io</a></h4>
      </div>
      </Container>
    </React.Fragment>
  );
}
export default SimpleContainer;





