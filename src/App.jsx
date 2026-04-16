import MainLayout from './layouts/MainLayout'
import Container from './components/Container'
import CTA from './components/CTA/CTA'

function App() {
return (
    <MainLayout> 
        <main>                
              <Container>
                <h1>Cruiser Project-Fantasm</h1>
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
              </Container>    
        </main>
    </MainLayout>
  )
  
}

export default App
