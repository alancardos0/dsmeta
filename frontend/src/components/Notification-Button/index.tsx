import icon from '../../assets/img/notification-icon.svg'
import './index-style.css'
export default function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={icon} alt="Botão vermelho, para enviar SMS para o Usuario." />
    </div>
  )
} 
