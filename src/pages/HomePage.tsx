import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SearchSection from '../components/SearchSection'
import ServicesSection from '../components/ServicesSection'
import FocusSection from '../components/FocusSection'
import NewsSection from '../components/NewsSection'
import HelpSection from '../components/HelpSection'
import Footer from '../components/Footer'
import '../App.css'

function HomePage() {
  return (
    <div className="app">
      <TopBar />
      <Header />
      <Hero />
      <SearchSection />
      <ServicesSection />
      <FocusSection />
      <NewsSection />
      <HelpSection />
      <Footer />
    </div>
  )
}

export default HomePage
