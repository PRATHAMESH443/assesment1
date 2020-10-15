import React from 'react'
import config from './config/defaultBlueprint.json'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import 'rsuite/dist/styles/rsuite-default.css';
import { Icon } from 'rsuite';



const SocialIcon2=()=>{
    const output=[];

    const myStyle={
        margin: "0px 15px"

    }

    const getSocialIcons=()=>{
      Array.isArray(config.companyInfo.socialicon) && config.companyInfo.socialicon.forEach((items)=>{
        output.push(<a href={items.url} target={items.target} style={{color:items.color }}>
             <Icon icon={items.icon} size="2x" style={myStyle} />
            </a>)  
      })
      return output;
    }

    return(
        <div>
   {getSocialIcons()}
        </div>
    )
}

export default SocialIcon2;