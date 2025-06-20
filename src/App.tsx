import './App.css';
import { createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const theme=createTheme({
    colors:{
      'royal-purple': ['#fbf5ff','#f5e9fe','#ecd7fd','#deb7fb','#c98af6','#b55def','#a13ce1','#8a2ac6','#802bb1','#5f2182','#410b60'],
      'mine-shaft': ['#f6f6f6','#e7e7e7','#d1d1d1','#b0b0b0','#888888','#6d6d6d','#5d5d5d','#4f4f4f','#454545','#3d3d3d','#2d2d2d'],
    }
  })
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
