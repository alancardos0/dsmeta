import HeaderImage from '../../assets/img/header-image.svg'
import './Header-styles.css'
export default function Header() {
  return (
    <header>
      <div className="header">
        <img src={HeaderImage}
          alt="Logo do evento DSMeta, possui uma tela de computador,um notebook e um celular, na cor azul fraco, com algumas linhas para ilustração." />
        <h1>DSMeta</h1>
        <p>Desenvolvido por <a target="_blank" href="https://github.com/alancardos0">@alancardos0</a></p>
      </div>
    </header>
  )
}