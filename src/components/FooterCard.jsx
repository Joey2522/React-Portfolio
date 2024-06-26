import React from 'react';
import '../styles/FooterCard.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import gitHub from '/src/images/icons/github.svg';
import linkedIn from '/src/images/icons/linkedin.svg';
import dumpFire from '/src/images/icons/dumpster-fire-solid.svg';
import { HashLink } from 'react-router-hash-link';


function Footer () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
 return (
 <>
 <Button className="menuBtn"><HashLink to="/#navMenu" style={{ textDecoration: 'none' }} smooth>Back To Top</HashLink></Button>
    <section className='footer'>
        <div className="ul">
            <Link to="https://github.com/Joey2522" target="_blank"><img src={ gitHub } alt="github" className="icon1"/></Link>
            <Link to="https://www.linkedin.com/in/joey-porter-tx/" target="_blank"><img src={ linkedIn } alt="linkedin" className="icon3"/></Link>
            <Link onClick={ handleShow }><img src={ dumpFire } alt="dumpster-fire" className="icon2"/></Link>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dumpster Fire<i class="fa-solid fa-fire"></i></Modal.Title>
        </Modal.Header>
        <Modal.Body>Social media tends to be more of a dumpster fire 
            than anything else these days. So, I try to avoid it if I can. 
            I am not currently on any social media platform other than LinkedIn.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    </section>
  </>
 );
}

export default Footer;