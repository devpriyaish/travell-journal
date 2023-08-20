import './App.css'
import data from './seperate.jsx'
import PlaceVisited from './components/PlaceVisited'
import Navbar from './components/Navbar'

const App = () => {
  const placeData = data.map(placeData => <PlaceVisited key={placeData.id} {...placeData} />)
  return (
    <>
      <Navbar />
      <section className='places'>
        {placeData}
      </section>
    </>
  )
}

export default App
