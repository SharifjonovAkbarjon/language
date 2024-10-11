import React from 'react'
import './App.css'
import { useTranslation } from 'react-i18next';
import Home from './router/Home';


function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Home/>
      {/* <div className='container'>
        <nav>
          <h2 className='logo'>{t("logo")}</h2>
          <ul>
            <li>{t("collection.home")}</li>
            <li>{t("collection.about")}</li>
            <li>{t("collection.servise")}</li>
          </ul>
        </nav>
        <button className='bg-green-500 px-[20px] py-2 rounded-[12px]' onClick={()=>i18n.changeLanguage("en")}>uz</button>
        <button className='bg-green-500 px-[20px] py-2 rounded-[12px]' onClick={()=>i18n.changeLanguage("uz")}>en</button>
      </div> */}
    </>
  )
}

export default App
