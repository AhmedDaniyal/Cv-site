import React, { useContext } from "react";
import '../Services/Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Glasses from '../../img/glasses.png'
import Card from "../Card/Card";
import Resume from "../Services/Resume.pdf"
import {themeContext} from '../../Context'
import { motion } from "framer-motion";

const Services = () => {

  const transition = {duration : 1 , type : 'spring'}

  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id = 'Services'>
      <div className="awesome">
        <span style={{color:darkMode? 'white' :''}}>My Awesome</span>
        <span>services</span>
        <spane>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum 
            <br/>
            Lorem ipsum dolor sit amet consectetur  adipisicing elit. 
        </spane>
        <a href={Resume} download>
        <button className="button s-button">Download CV </button>
        </a>
        <div className="blur s-blurl" style={{background:"#ABF1FF94"}}></div>
      </div>
      <div className="cards">
        <motion.div 
        initial={{left:'25rem'}}
        whileInView={{left:'14rem'}}
        transition={transition}
        >
            <Card
             emoji={HeartEmoji}
             heading={'Design'}
             detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
            />
        </motion.div>
          
        <motion.div 
        initial={{left:'-11rem' , top: '12rem'}}
         whileInView={{left:'-4rem'}}
         transition={transition}
         
        >
          <Card
          emoji={Glasses}
          heading={'Developer'}
          detail={"HTML, CSS, JavaScript, TailwindCSS, React"}
          
          />
        </motion.div>
        <motion.div 
        initial={{top:'19rem',left:'25rem'}}
        whileInView={{left:'12rem'}}
        transition={transition}
        
        >
          <Card
          emoji={Humble}
          heading={'UI/UX'}
          detail={"Lorem ispum dummy text are this thouse dummy text"
        }
        color="rgba(252, 166, 31, 0.45)"  
          />
        </motion.div>
      <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
      
    </div>
  );
};

export default Services;
