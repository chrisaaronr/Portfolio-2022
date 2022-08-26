import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  
  
  return (
    <>
      <h2 className="head-text">Knowledge <span>is Power,</span> Community <span>is Strength</span></h2>
      <h3 className="about-text" style={{marginTop: 10}}> I'm a Software Engineer based in San Diego, California! A creative nomad by nature, I earned my merits as an Audio Engineer, professioned as a Director of Audio Visual, and spent my downtime recording music and producing stories & videos. My interest in web development started when I decided to try building a productivity app for the AV industry -- turns out hacking together a booking system taught me a lot about HTML and CSS!  Now, as a community-taught Software Engineer, I create applications utilizing everything I've learned and experienced from my creative journey. Becomming a Software Engineer has given me the platform to freely express my creativity!</h3>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20}}>{about.title} </h2>
            <p className="p-text" style={{ marginTop: 10}}>{about.description} </p>


          </motion.div>
        ))}
      
      </div>  
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
);
