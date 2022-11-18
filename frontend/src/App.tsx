import Header from "./components/Header/Header"
import SalesCard from "./components/Sales-Card/Sales-Card"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
