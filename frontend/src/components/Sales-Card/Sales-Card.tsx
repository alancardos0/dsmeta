import NotificationButton from '../Notification-Button'
import './Sales-Card-style.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
export default function SalesCard() {
  const [minDate, setMinDate] = useState(new Date())
  const [maxDate, setMaxDate] = useState(new Date())

  return (
    <div className="card">
      <h2>Vendas</h2>
      <div className="dsmeta-form-control-container">
        <DatePicker
          selected={minDate}
          onChange={(date: Date) => setMinDate(date)}
          className="dsmeta-form-control"
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="dsmeta-form-control-container">
        <DatePicker
          selected={maxDate}
          onChange={(date: Date) => setMaxDate(date)}
          className="dsmeta-form-control"
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">ID</td>
              <td className="show576">08/05/2022</td>
              <td>Anakin</td>
              <td className="show992">Visitas</td>
              <td className="show992">Vendas</td>
              <td>R$ 50000</td>
              <td>
                <div className="dsmeta-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">ID</td>
              <td className="show576">08/05/2022</td>
              <td>Anakin</td>
              <td className="show992">Visitas</td>
              <td className="show992">Vendas</td>
              <td>R$ 50000</td>
              <td>
                <div className="dsmeta-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">ID</td>
              <td className="show576">08/05/2022</td>
              <td>Anakin</td>
              <td className="show992">Visitas</td>
              <td className="show992">Vendas</td>
              <td>R$ 50000</td>
              <td>
                <div className="dsmeta-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}