import "../styles/components/infocontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
//---------------INFORMACAO --------------------





const InfoContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <p>(203)99999-9999</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                {/* //there is no more name pra telefone or email apenas o iconezinho */}
                <div>
                    <p>stefanny@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    
                    <p>Greater NYC</p>
                </div>
            </div>
        </section>
    );
};

export default InfoContainer;