import MailSenter from "./components/MailSenter/MailSenter";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import SentMailList from "./components/SentMailList/SentMailList";
import { ToastContainer } from 'react-toastify';
import QRgenrator from "./components/QR generator/QRgenrator";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MailSenter/>}/>
        <Route path='/mailSenter' element={<MailSenter/>}/>
        <Route path='/mailLIst' element={<SentMailList/>}/>
        <Route path='/qrcode' element={<QRgenrator/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>

  )
}