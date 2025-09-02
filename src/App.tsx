import './App.css';
import { createTheme, Divider, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FindReferrals from './Pages/FindReferrals';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import OfferRefferalsPage from './Pages/OfferReferralsPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';

function App() {
  const theme=createTheme({
    focusRing:"never",
    primaryColor:'royal-purple',
    primaryShade:4,
    colors:{
      'royal-purple': ['#fbf5ff','#f5e9fe','#ecd7fd','#deb7fb','#c98af6','#b55def','#a13ce1','#8a2ac6','#802bb1','#5f2182','#410b60'],
      'mine-shaft': ['#f6f6f6','#e7e7e7','#d1d1d1','#b0b0b0','#888888','#6d6d6d','#5d5d5d','#4f4f4f','#454545','#3d3d3d','#2d2d2d'],
      
    },
    fontFamily:"poppins, sans-serif"
  })
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
      <Header/>
        <Divider size="xs" mx="md" />
        <Routes>
          <Route path='/find-referrals' element={<FindReferrals/>}/>
          <Route path='/Offer-referrals' element={<OfferRefferalsPage/>}/>
          <Route path='jobs' element={<JobDescPage/>}/>
          <Route path='post-job' element={<PostJobPage/>}/>
          <Route path='/Talent-Profile' element={<TalentProfilePage/>}/>
          <Route path='*' element={<HomePage />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
