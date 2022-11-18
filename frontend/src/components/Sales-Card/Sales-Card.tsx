import NotificationButton from '../Notification-Button'
import './Sales-Card-style.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../utils/request'
import { Sale } from '../../models/sale'

export default function SalesCard() {
  const [minDate, setMinDate] = useState(new Date())
  const [maxDate, setMaxDate] = useState(new Date())
  const [sales, setSales] = useState<Sale[]>([])

  useEffect(() => {
    const formatedMinDate = formatDate(minDate)
    const formatedMaxDate = formatDate(maxDate)

    axios.get(`${BASE_URL}/sales?minDate=${formatedMinDate}&maxDate=${formatedMaxDate}`)
      .then(response => setSales(response.data.content))
      .catch(error => console.error(error))
  }, [minDate, maxDate])

  function formatDate(date: Date) {
    let formatToDateTime = date.toISOString()
    const indexToCutDate = formatToDateTime.indexOf("T")
    return formatToDateTime = formatToDateTime.slice(0, indexToCutDate);
  }

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
            {sales.map(sales => {
              return (
                <tr key={sales.id}>
                  <td className="show992">{sales.id}</td>
                  <td className="show576">{new Date(sales.date).toLocaleDateString()}</td>
                  <td>{sales.sellerName}</td>
                  <td className="show992">{sales.visited}</td>
                  <td className="show992">{sales.deals}</td>
                  <td>R$ {sales.amount.toFixed(2)}</td>
                  <td>
                    <div className="dsmeta-btn-container">
                      <NotificationButton />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}