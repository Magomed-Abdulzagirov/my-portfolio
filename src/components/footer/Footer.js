import vk from "./../../img/icons/vk.svg"
import insta from "./../../img/icons/instagram.svg"
import twit from "./../../img/icons/twitter.svg"
import linke from "./../../img/icons/linkedIn.svg"
import git from "./../../img/icons/gitHub.svg"

import "./styles.css"

const Footer = () => {
    return (    
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={insta} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={twit} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={git} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={linke} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p></p>
                </div>
            </div>
        </div>
    </footer> );
}
 
export default Footer;