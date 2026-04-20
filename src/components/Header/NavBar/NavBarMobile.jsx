import { useState, useRef, useEffect } from 'react'
import SocialBar from '../SocialBar/SocialBar'
import MenuButton from '../MenuButton/MenuButton'
import UserBar from '../UserBar/UserBar'
import LinkDrawer from '../LinkDrawer/LinkDrawer'

function NavBarMobile({ logged = false, username = 'username' }) {
  const [isOpen, setIsOpen] = useState(false)

  const drawerRef = useRef(null)
  const buttonRef = useRef(null)

  const handleToggleDrawer = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleClick = (event) => {
      // si clickeas el botón → NO hacer nada aquí
      if (buttonRef.current?.contains(event.target)) return

      // cualquier otro click → cerrar
      if (isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [isOpen])

  return (
    <nav className="mobile-navbar" aria-label="Mobile navigation">
      <div className="mobile-navbar__bar">
        <div className="mobile-navbar__content">
          <SocialBar size="mobile" color="white" />

          <div ref={buttonRef}>
            <MenuButton
              size="xl"
              color="white"
              ariaLabel={isOpen ? 'Close menu' : 'Open menu'}
              onClick={handleToggleDrawer}
            />
          </div>

          <UserBar logged={logged} username={username} />
        </div>

        <span className="mobile-navbar__line" aria-hidden="true" />
      </div>

      {isOpen && (
        <div className="mobile-navbar__drawer" ref={drawerRef}>
          <LinkDrawer isOpen={true} />
        </div>
      )}
    </nav>
  )
}

export default NavBarMobile