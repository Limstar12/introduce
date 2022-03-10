import logo from './img/head/phj_1.svg';
import about from './img/head/introduce.svg';
import portfolio from './img/head/portfolio.svg';
import preinterview from './img/head/contact.svg';
import Snsdiv from './Snsdiv'

import appStyle from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [snsstate, snsUpdate] = useState(false);
  const snsFL = (t) => {
    snsUpdate(t)
    //snsstate값을 t로 수정해라
  }

  return (
    <nav  className='py-2 border-bottom'>
      <header className={appStyle.hd + ' container'}>
        <div className='row align-items-end'>
          <h1 className='col-3 mb-0'>
            <a href='/' className='d-flex align-items-start justify-content-between'>
              <img src={logo}  className='col-6'></img>
            </a>
          </h1>
          <ul  className='d-flex col justify-content-end mb-0 align-items-center'>
            <li className={appStyle.about}><a href=''><img src={about} ></img></a></li>
            <li className={appStyle.portfolio}>
              <a href='' className='position-relative d-block'>
              <img src={portfolio}></img>
              </a>
            </li>
            <li className={appStyle.preinterview}><a href=''><img src={preinterview}></img></a></li>
          </ul>
          <div id="gnb">
            <button onClick={ () => {snsFL(!snsstate)} }>etc.....</button>
            { snsstate && <Snsdiv></Snsdiv> }
          </div>
        </div>
      </header>
    </nav>
  );
}

export default App;