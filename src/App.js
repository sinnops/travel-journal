import Nav from "./components/Nav"
import Locations from "./components/Locations"
import data from "./data"

function App() {
  const locations = data.map(d => {
    return (
      <Locations
        id = {d.id}
        item = {d}
      />
    )
  })

  return (
      <div className="page">
        <div className="content">
          <Nav />
          {locations}
        </div>
      </div>
  );
}

export default App;
