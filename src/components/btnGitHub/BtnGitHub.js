import "./style.css"

import GithubIcon from "./../../img/icons/gitHub-black.svg"

const BtnGitHub = ({link}) => {
    return (    
                 <a href={link} target="_blank" rel="noreferrer" class="btn-outline">
                    <img src={GithubIcon} alt="" />
                    GitHub repo
                </a>
 );
}
 
export default BtnGitHub;