
import AwardsStats from './Component/AwardsStats/AwardsStats'
import TextBanner from './Component/Banner/TextBanner'
import CaseStudies from './Component/CaseStudies/CaseStudies'
import ContactSection from './Component/ContactSection/ContactSection'
import Footer from './Component/Footer/Footer'
import Information from './Component/Information/Information'
import InternshipPage from './Component/Information/InternshipPage'
import InternshipLanding from './Component/InternshipLanding/InternshipLanding'
import Navbar from './Component/Navbar/Navbar'
import TopNavbar from './Component/Navbar/TopNavbar'
import NewsSection from './Component/NewsSection/NewsSection'
import TeamSection from './TeamSection/TeamSection'

function App() {

  return (
    <>
    <TopNavbar></TopNavbar>
    <div className='w-11/12 mx-auto mt-3'>
      <Navbar></Navbar>
    </div>
    <TextBanner></TextBanner>
    <Information></Information>
    <InternshipPage></InternshipPage>
    <InternshipLanding></InternshipLanding>
    <CaseStudies></CaseStudies>
    <TeamSection></TeamSection>
    <AwardsStats></AwardsStats>
    <ContactSection></ContactSection>
    <NewsSection></NewsSection>
    <Footer></Footer>
    </>
  )
}

export default App
