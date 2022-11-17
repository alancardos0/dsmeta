import NotificationButton from '../Notification-Button'
import './Sales-Card-style.css'

export default function SalesCard() {
  return (
    <div className="card">
      <h2>Vendas</h2>
      <div className="dsmeta-form-control-container">
        <input className="dsmeta-form-control" type="text" placeholder="00/00/00" />
      </div>
      <div className="dsmeta-form-control-container">
        <input className="dsmeta-form-control" type="text" placeholder="00/00/00" />
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