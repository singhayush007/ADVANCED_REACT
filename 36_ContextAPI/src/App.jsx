import './App.css'
import A from './components/A'
import B from './components/B'
import { useMyContext } from './MyContext'

function App() {

  const { count, handleIncrement } = useMyContext();

  return (
    <div className='bg-white p-10 text-black'>
      APP

      <p>Count : {count}</p>
      <button onClick={handleIncrement}>Increment</button>

      <A />
      <B />
    </div>
  )
}

export default App;

