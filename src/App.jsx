import MainLayout from './layouts/MainLayout'
import Container from './components/Container'
import CTA from './components/CTA/CTA'
import MenuButton from './components/MenuButton/MenuButton'
import SocialBar from './components/SocialBar/SocialBar'
import UserBar from './components/UserBar/UserBar'
import LinkDrawer from './components/LinkDrawer/LinkDrawer'
import NavBar_Mobile from './components/NavBar/NavBarMobile'

function App() {
return (
    <MainLayout> 
        <main>                
              <Container>
                {/* <h1>Cruiser Project-Fantasm</h1>
                <h2>Cruiser Project-Century</h2>
                <h3>Cruiser Project-Inter</h3>
                <CTA
                  label="Book now"
                  state="default"
                  size="mobile"
                  type="primary"
                  icon="none"
                />
                <CTA
                  label="Book now"
                  state="default"
                  size="desktop"
                  type="primary"
                  icon="left"
                />
                <CTA
                  label="Book now"
                  state="default"
                  size="tablet"
                  type="secondary"
                  icon="right"
                />
                <MenuButton size="md" color="brand" />
                <MenuButton size="xl" color="white" />
                <SocialBar size="mobile" color="white" />
                <SocialBar size="mobile" color="brand" />
                <SocialBar size="desktop" color="white" />
                <SocialBar size="desktop" color="brand" />

                <UserBar logged={false} />
                <UserBar logged={true} username="username" />

                <LinkDrawer isOpen={false} />
                <LinkDrawer isOpen={true} /> */}
                <NavBar_Mobile logged={false} />
                <br />
                <NavBar_Mobile logged={true} username="username" />
              </Container>    
        </main>
    </MainLayout>
  )
  
}

export default App
