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
import Hero from '../components/Hero/Hero.jsx'
import Departure from '../components/Hero/Departure.jsx'
import CruiseLine from '../components/Hero/CruiseLine.jsx'
import Price from '../components/Hero/Price.jsx'
import KanowaScore from '../components/Hero/KanowaScore.jsx'
import YearSelect from '../components/Hero/YearSelect.jsx';
import MonthSelect from '../components/Hero/MonthSelect.jsx';
import DaySelect from '../components/Hero/DaySelect.jsx';
import DateSelect from '../components/Hero/DateSelect.jsx';

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
                
                {/* <Hero/> */}
                {/* <div style={{ padding: "40px" }}>
                  <Departure />
                </div>
                <div style={{ padding: "40px" }}>
                  <CruiseLine />
                </div>
                <div style={{ padding: "40px" }}>
                  <Price />
                </div>
                <div style={{ padding: "40px" }}>
                  <KanowaScore />
                </div> */}
                {/* <YearSelect/><MonthSelect/><DaySelect/> */}
                <DateSelect/>
              </Container> 
                
        </main>
    </MainLayout>
  )
  
}

export default Playground