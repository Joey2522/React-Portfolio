import style from '../styles/FooterCard.css';

function Footer () {
 return (
 <>
    <div className='footer'>
        <ul className="ul">
            <li><img src="/src/images/icons/github.svg" alt="github" className="icon1"/></li>
            <li><img src="/src/images/icons/linkedin.svg" alt="linkedin" className="icon3"/></li>
            <li><img src="/src/images/icons/dumpster-fire-solid.svg" alt="dumpster-fire" className="icon2"/></li>
        </ul>
    </div>
  </>
 );
}

export default Footer;