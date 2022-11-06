import { AreaHeader } from './styled'
import im1 from './img/im1.png';
import im2 from './img/im2.png';
export default () => {
  return (
    <AreaHeader>
      <header>
        <div>
          <ul className='ListaLogos' style={{ backgroundColor:"aliceblue"}}>
            <li className='logos' style={{color:"orange"}}>
              <b> gshow |</b>
            </li>
            <li className='logos' style={{color:"#C4170C"}}>
              <b> g1  |</b>
            </li>
            <li className='logos' style={{color:"red"}}>
              <b>globoplay  |</b>
            </li>
            <li className='logos' style={{color:"green"}}>
              <b> ge |</b>
            </li>
            <li className='logos links'>
              <b> tecnologia</b>
            </li>
          </ul>
        </div>
        <div className='ajusteMenu'>
          <img className='menu' alt='menu' src={im1} />
          <p className='menu nomeMenu'>Menu</p>
          <h1 className='h1'>O Globo</h1>

          <div className='IconesDireita'>
            <img src={im2} alt="lupa" className='menu entrar  ' style={{ width: 30, height: 25 }} />
            <p className='menu nomeMenu   '>Buscar</p>
            <strong className='menu entrar '>Entrar</strong>
          </div>

        </div>
        <nav>
          <ul className='ListaLinks'>
            <li className='links'>
              Últimas
            </li>
            <li className='links'>
              |
            </li>
            <li className='links'>
              Política
            </li>
            <li className='links'>
              |
            </li>
            <li className='links'>
              Eleições 2022
            </li>
            <li className='links'>
              |
            </li>
            <li className='links'>
              Edição Geral
            </li>
          </ul>
        </nav>
      </header>
    </AreaHeader>
  )
}