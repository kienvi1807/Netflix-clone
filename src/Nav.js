import "./Nav.css";
import {useEffect, useState} from 'react'

function Nav() {

  const [show, handleShow] = useState(false)

    const transitionnNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
            console.log(show)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionnNavBar)

        return () => {
            window.removeEventListener('scroll', transitionnNavBar)
        }
    }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
          <img
            className="nav__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
    
          <img
            className="nav__avatar"
            src="https://www.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg"
            alt=""
          />
      </div>
    </div>
  );
}

export default Nav;
