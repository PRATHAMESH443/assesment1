import React from 'react'
import config from './config/defaultBlueprint.json'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';



const SocialIcon=()=>{
    const output=[];

    const myStyle={
        margin: "0px 15px"
    }

    const getSocialIcons=()=>{
      Array.isArray(config.companyInfo.socialicon) && config.companyInfo.socialicon.forEach((items)=>{
        if(items.key === "facebook") 
        output.push(<a href={items.url} target={items.target} style={{color:items.color }}>
            <FacebookIcon style={myStyle} />
            </a>)
        if(items.key === "linkedn")
        output.push(<a href={items.url} target={items.target} style={{color:items.color }}>
            <LinkedInIcon style={myStyle}/>
            </a>)
         if(items.key === "twitter") 
        output.push(<a href={items.url} target={items.target} style={{color:items.color }}>
            <TwitterIcon style={myStyle}/>
            </a>)
         if(items.key === "pinterest") 
        output.push(<a href={items.url} target={items.target} style={{color:items.color }}>
            <PinterestIcon style={myStyle}/>
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

export default SocialIcon;