import { useState } from 'react'
import SocialBar from '../SocialBar/SocialBar'
import MenuButton from '../MenuButton/MenuButton'
import UserBar from '../UserBar/UserBar'
import LinkDrawer from '../LinkDrawer/LinkDrawer'

function NavBar_Mobile({ logged = false, username = 'username' }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleDrawer = () => {
    setIsOpen((prev) => !prev)
  }

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
        <div className="mobile-navbar__drawer">
          <LinkDrawer isOpen={true} />
        </div>
      )}
    </nav>
  )
}

export default NavBar_Mobile