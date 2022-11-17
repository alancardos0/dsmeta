import Header from "./components/Header/Header"
import SalesCard from "./components/Sales-Card/Sales-Card"

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="sales">
          <div className="container">
            <SalesCard />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
