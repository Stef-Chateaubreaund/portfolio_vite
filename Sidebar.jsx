import Social from "./Social";
import InfoContainer from "./InfoContainer";

import Avatar from "../img/eu.jpg"; //import the img as a component

import "../styles/components/sidebar.sass";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="StefChateau" />
            <p className="title">Desenvolvedor</p>
            <Social />
            <InfoContainer />
            <a href="#" className="btn">
                Download currículo
            </a>
        </aside>
    );
};

export default Sidebar;