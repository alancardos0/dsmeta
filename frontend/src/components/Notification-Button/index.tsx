import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './index-style.css'

type Props = {
  saleId: number;
}

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
      toast.info("SMS Enviado com Sucesso!")
    })
    .catch(error => {
      toast.error("Ocorreu um erro!")
    })
}

export default function NotificationButton({ saleId }: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Botão vermelho, para enviar SMS para o Usuario." />
    </div>
  )
} 
