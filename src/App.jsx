
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const coffees = useLoaderData()

  return (
    <>
      <h1 className='text-6xl mb-10 font-semibold text-amber-300'>Welcome to coffee store</h1>
      {
        coffees.map(coffee => <CoffeeCard
          key={coffee._id}
          coffee={coffee}></CoffeeCard>)
      }
    </>
  )
}

export default App
