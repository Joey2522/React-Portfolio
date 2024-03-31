import React from 'react';
import style from '../styles/FooterCard.css';
import { Link } from 'react-router-dom';


function Footer () {
 return (
 <>
    <section className='footer'>
        <div className="ul">
            <Link><img src="/src/images/icons/github.svg" alt="github" className="icon1"/></Link>
            <Link><img src="/src/images/icons/linkedin.svg" alt="linkedin" className="icon3"/></Link>
            <Link><img src="/src/images/icons/dumpster-fire-solid.svg" alt="dumpster-fire" className="icon2"/></Link>
        </div>
    </section>
  </>
 );
}

export default Footer;