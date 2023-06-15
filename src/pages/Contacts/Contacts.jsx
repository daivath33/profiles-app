import Carte from "../../assets/carte.png";
import { BiCalendar, BiEnvelope, BiPhone, BiMap } from "react-icons/bi";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h2>Mūsų Kontaktai</h2>
      <div className="contacts">
        <div className="left">
          <div className="contacts-info">
            <h3>
              {" "}
              <BiMap /> Adresas
            </h3>
            <p>Gedimino pr. 120, LT-00125 Vilnius</p>
          </div>
          <div className="contacts-info">
            <h3>
              {" "}
              <BiPhone /> Mobilus telefonas
            </h3>
            <p>+370 671 33876</p>
          </div>
          <div className="contacts-info">
            <h3>
              {" "}
              <BiEnvelope /> Elektroninis paštas
            </h3>
            <p>daiva@gmail.com</p>
          </div>
          <div className="contacts-info">
            <h3>
              <BiCalendar /> Darbo valandos
            </h3>
            <p>Pirmadienis - Penktadienis: 8:00 - 17:00</p>
            <p>Šeštadienis: 10:00 - 14:00</p>
            <p>Sekmadienis: nedirbame</p>
          </div>
        </div>
        <div className="right">
          <img src={Carte} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
