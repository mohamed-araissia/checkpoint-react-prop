import React from 'react'
import myImage from '../image1.jpg'
import PropTypes from 'prop-types'



export default function Profile({props}) {
   console.log(props)
    const handleName = (e) => {
        e.preventDefault();
        alert(e);
      }
    return (
        <div >
            
            
<picture onClick={handleName}>
    {props.children}
</picture>    

    
        </div>
    )
}
Profile.defaultProps = {
fullName:"fullname",
bio:"bio",
profession:"profession"   
}
Profile.propTypes ={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
    
    
    }
