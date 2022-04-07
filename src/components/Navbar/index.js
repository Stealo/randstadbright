import React from "react";
import { Nav, NavLink, NavMenu }
  from "./NavbarElements";
import message from '../../images/icone/message.svg'
import calendar from '../../images/icone/calendar.svg'
import job from '../../images/icone/job.svg'
import notification from '../../images/icone/notification.svg'
import profil from '../../images/icone/profil.svg'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu className="flow-root">
          <div class="-m-2 flex flex-wrap">
            <div class="m-2 ...">
              <NavLink className="p-0 m-1" to="/about" activeStyle>
                <div className="w-12/12 mx-2 mx-auto">
                  <img src={message} className="m-auto mb-2" alt="Icone de dashboard" />
                  <p className="text-xs">Dashboard</p>
                </div>
              </NavLink></div>
            <div class="m-2 ...">
              <NavLink to="/contact" activeStyle>
                <div className="w-12/12 mx-2">
                  <img src={calendar} className="m-auto mb-2" alt="Icone de message" />
                  <p className="text-xs">Agenda</p>
                </div>
              </NavLink>
            </div>
            <div class="m-2 ...">
              <NavLink to="/blogs" activeStyle>
                <div className="w-12/12 mx-2">
                  <img src={job} className="m-auto mb-2" alt="Icone de message" />
                  <p className="text-xs">Emplois</p>
                </div>
              </NavLink>
            </div>
            <div class="m-2 ...">
              <NavLink to="/sign-up" activeStyle>
                <div className="w-12/12 mx-2">
                  <img src={notification} className="m-auto mb-2" alt="Icone de message" />
                  <p className="text-xs">Notifs</p>
                </div>
              </NavLink>
            </div>
            <div class="m-2 ...">
              <NavLink to="/sign-up" activeStyle>
                <div className="w-12/12 mx-2">
                  <img src={profil} className="m-auto mb-2" alt="Icone de message" />
                  <p className="text-xs">Profil</p>
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