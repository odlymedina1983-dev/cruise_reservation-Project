import MainLayout from '../layouts/MainLayout'
import Container from '../components/Container'
import CTA from '../components/CTA/CTA'
import MenuButton from "../components/Header/MenuButton/MenuButton";
import SocialBar from "../components/Header/SocialBar/SocialBar";
import UserBar from "../components/Header/UserBar/UserBar";
import NavBarMobile from "../components/Header/NavBar/NavBarMobile";
import LinkDrawer from "../components/Header/LinkDrawer/LinkDrawer";
import SearchBar from '.././components/Header/SearchBar/SearchBar';
import Header from '../components/Header/Header';

function Playground() {
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
                {/* <NavBarMobile logged={false} /> */}
                {/* <br />
                <NavBarMobile logged={true} username="username" /> */}
                {/* <SearchBar size="sm" />
                <SearchBar size="sm" initialValue="Miami Cruises" />

                <SearchBar size="lg" />
                <SearchBar size="lg" initialValue="Miami Cruises" /> */}
                {/* <SearchBar  size="lg"
                  onSearch={(value) => console.log('search:', value)}
                /> */}
                <Header/> 
              </Container> 
                
        </main>
    </MainLayout>
  )
  
}

export default Playground