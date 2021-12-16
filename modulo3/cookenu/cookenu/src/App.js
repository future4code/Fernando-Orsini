import React, { useState } from 'react';
import Router from './routes/Router';
import { ThemeProvider } from '@material-ui/styles';
import theme from './constants/theme';
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
      </ThemeProvider>
    
  )
}

export default App
