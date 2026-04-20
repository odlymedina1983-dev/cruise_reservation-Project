import Container from '../Container'
import Logo from './Logo/Logo'
import NavBarMobile from './NavBar/NavBarMobile'
import SearchBar from './SearchBar/SearchBar'

function Header() {
  return (
    <header className="site-header">
      <Container>

        {/* MOBILE */}
        <div className="site-header__mobile">
          <div className="site-header__mobile-top">
            <NavBarMobile size="mobile" />
          </div>

          <div className="site-header__mobile-bottom">
            <Logo size="mobile" />
            <SearchBar size="sm" />
          </div>
        </div>

        {/* TABLET */}
        <div className="site-header__tablet">
          <Logo size="tablet" />
          <NavBarMobile size="tablet" />
          <SearchBar size="sm" />
        </div>

        {/* DESKTOP */}
        <div className="site-header__desktop">
          <Logo size="desktop" />
          <NavBarMobile size="desktop" />
          <SearchBar size="lg" />
        </div>

      </Container>
    </header>
  )
}

export default Header