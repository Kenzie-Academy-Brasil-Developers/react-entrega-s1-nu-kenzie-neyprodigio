
import './reset.css';
import './App.css';
import imagem from './assets/illustration.svg';
import {useState} from 'react';
import DashBoard from './componentes/Dashboard';


const App = () => {
  

  const [isDashboard, setIsDashboard] = useState(false);


  const changeDash = () =>{
    setIsDashboard(!isDashboard)
  }


  return (
    <>
    {isDashboard? (<div className="App">
      <main className="main">
        <section className='info-home'>
          <p className='title-p'>Nu <span className='title-span'>Kenzie</span></p>
          <h1 className='text-center'>Centralize o controle das suas finanças</h1>
          <p className='text-footer'>de forma rápida e segura</p>
          <button onClick={changeDash} className='btn-iniciar' type='submit'  >Iniciar</button>
         
        </section>
        <section className='img-section'>
          <img className='img-rigth' src={imagem} alt="" />
        </section>

      </main>

    </div>) : <DashBoard changeDash={changeDash}/>}
    </>
   
  );
}

export default App;
