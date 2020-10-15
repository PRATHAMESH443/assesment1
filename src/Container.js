import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SocialIcon from './Components/Socialcon'
import config from './Components/config/defaultBlueprint.json'
import clsx from  'clsx';
import SocialIcon2 from './Components/SocialIcon2';

const useStyles = makeStyles((theme) => ({
  root: {
     backgroundColor: config.companyInfo.containerBackgroundColor,
     color: config.companyInfo.textColor,
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
    borderLeft: '1px solid ',
    borderColor: config.companyInfo.borderColor,
  },

 logoMargin:{
    margin:'0px 15px'
 },
 copyRight:{
   display:'flex',
   alignItems:'center',
   justifyContent:'center',
   fontSize:'10px'
 }
}));

 function SimpleContainer(){
  
     const classes = useStyles();

  return (

    <React.Fragment>
      
      <CssBaseline />
      <Container maxWidth="lg" className={classes.root} >
        <Grid container spacing={0}  >
       
        <Grid item lg={3}  className={classes.paper}>
                <a href={config.companyInfo.companyLink}><img src={config.companyInfo.logoSrc} alt={config.companyInfo.logoAlt} /></a>
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
          <SocialIcon2 />
           
        </Grid>
       
      </Grid>
      <hr/>
      <div  className={classes.copyRight}>
          <h6>{config.companyInfo.copyright} <a href={config.companyInfo.companyLink}>{config.companyInfo.companyName}</a></h6>
      </div>
      </Container>

    </React.Fragment>
  );
}
export default SimpleContainer;





