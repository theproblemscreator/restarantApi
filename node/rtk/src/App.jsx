import { useState , useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import useFetch from './app/components/useFetch';
import useIncrement from './app/components/useIncrement';
import useTodayDate from './app/components/useTodayDate';
import TimeDate from './app/components/TimeDate';
function App() {
  // const { record } = useFetch();
  // const { dataInc, increment } = useIncrement();
  // const {date} = useTodayDate()  
  // const {data} = useFetch();

  const Time = useCallback( ()=> <TimeDate/>,[]);

  return (
    <>
      <h1>Welcome to the RTK Application...</h1>

      <i>Today : <span> {<TimeDate/>} </span></i> 
      <i>Today : <span> {Time()} </span></i>


    </>
  )
}

export default App
