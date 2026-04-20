import { useState, useRef, useEffect } from 'react'
import SocialBar from '../SocialBar/SocialBar'
import MenuButton from '../MenuButton/MenuButton'
import UserBar from '../UserBar/UserBar'
import LinkDrawer from '../LinkDrawer/LinkDrawer'

function NavBarMobile({ logged = false, username = 'username' }) {
  const [isOpen, setIsOpen] = useState(false)
  const drawerRef = useRef(null)

  const handleToggleDrawer = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav className="mobile-navbar" aria-label="Mobile navigation">
      <div className="mobile-navbar__bar">
        <div className="mobile-navbar__content">
          <SocialBar size="mobile" color="white" />

          <MenuButton
            size="xl"
            color="white"
            ariaLabel={isOpen ? 'Close menu' : 'Open menu'}
            onClick={handleToggleDrawer}
          />

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