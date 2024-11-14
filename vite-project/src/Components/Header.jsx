import Econect from '../../public/Image/Econect-sem-fundo.png';
import { Link } from 'react-router-dom';

export default function Header({}) {
  return(
      <>
      <nav className="w-full p-10 py-4 bg-slate-600 flex items-center">
        <img className="w-24 h-24" src={Econect} alt="Logo Econect"/>
        <div className="ml-auto flex space-x-8">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/sobre" className="hover:underline">Sobre</Link>
          <Link to="/simulacao" className="hover:underline">Simulação</Link>
          <Link to="/servicos" className="hover:underline">Serviços</Link>
          <Link to="/contato" className="hover:underline">Contato</Link>
        </div>
      </nav>
      </>
  )
}