import Navigation from "./components/Navigation/Navigation"
import TireSearch from "./components/tiresConfig/tireSearch"

function App() {

  return (
    <>
        <main className="App w-full flex flex-col justify-center items-center">
            <Navigation />

            <TireSearch />
        </main>
    </>
  )
}

export default App
