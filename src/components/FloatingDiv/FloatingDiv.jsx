import React, { useContext } from 'react'
import  '../FloatingDiv/FloatingDiv.css'
import{themeContext} from '../../Context'
const FloatingDiv = ({image,title1,title2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return (
    <div className = "floatingdiv">
        <img src={image} alt=''/>
        <span >
            {title1}
            <br/> 
            {title2}
        </span>
        
    </div>
  )
}

export default FloatingDiv