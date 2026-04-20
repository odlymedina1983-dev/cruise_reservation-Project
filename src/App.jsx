import MainLayout from './layouts/MainLayout'
import Container from './components/Container'
import CTA from './components/CTA/CTA'
import MenuButton from "./components/Header/MenuButton/MenuButton";
import SocialBar from "./components/Header/SocialBar/SocialBar";
import UserBar from "./components/Header/UserBar/UserBar";
import NavBarMobile from "./components/Header/NavBar/NavBarMobile";
import LinkDrawer from "./components/Header/LinkDrawer/LinkDrawer";
import Playground from './pages/Playground';


function App() {
  return (
    <div className="site-shell">
      <main className="site-main">
        <Playground />
      </main>
    </div>
  );
}

export default App;
