import React from 'react'
import myImage from '../image1.jpg'
import PropTypes from 'prop-types'
export default function Profile({fullName , bio, profession }) {
   
    const  handleName = (e) => {
        e.preventDefault();
        alert(fullName);
      }
    return (
        <div>
        <picture>
   <img src={myImage} alt='' width="300" height="200" onClick={handleName}/>
        </picture>
        </div>
    )
}
Profile.defaultProps = {
fullName:"unknwon",
bio:"none"
}
Profile.propTypes ={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
    
    
    }
