import React from "react";
import { Nav, NavLink, NavMenu }
  from "./NavbarElements";
import message from '../../images/menu/message.svg'
import calendar from '../../images/menu/calendar.svg'
import job from '../../images/menu/job.svg'
import notification from '../../images/menu/notification.svg'
import profil from '../../images/menu/profil.svg'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu className="flow-root">
          <div class="-m-2 flex flex-wrap bg-white rounded-t-xl border-2 border-sky-600 h-20">
            <div class="m-2">
              <NavLink to="/" activeStyle>
                <div className="w-12/12 mx-2">
                  <img src={message} className="m-auto mb-2" alt="Icone de dashboard" />
                  <p className="text-xs font-face-gsm couleurs-secondaire">Dashboard</p>
                </div>
              </NavLink></div>
            <div class="m-2">
              <NavLink to="/contact" activeStyle>
                <div className="w-12/12 mx-2">
                  <img src={calendar} className="m-auto mb-2" alt="Icone de message" />
                  <p className="text-xs font-face-gsm couleurs-secondaire">Agenda</p>
                </div>
              </NavLink>
            </div>
            <div class="m-2">
              <NavLink to="/emplois" activeStyle>
                <div className="w-12/12 mx-2">
                  <img src={job} className="m-auto mb-2" alt="Icone de message" />
                  <p className="text-xs font-face-gsm couleurs-secondaire">Emplois</p>
                </div>
              </NavLink>
            </div>
            <div class="m-2">
              <NavLink to="/sign-up" activeStyle>
                <div className="w-12/12 mx-2">
                  <img src={notification} className="m-auto mb-2" alt="Icone de message" />
                  <p className="text-xs font-face-gsm couleurs-secondaire">Notifs</p>
                </div>
              </NavLink>
            </div>
            <div class="m-2">
              <NavLink to="/sign-up" activeStyle>
                <div className="w-12/12 mx-2">
                  <img src={profil} className="m-auto mb-2" alt="Icone de message" />
                  <p className="text-xs font-face-gsm couleurs-secondaire">Profil</p>
                </div>
              </NavLink>
            </div>
          </div>



        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;