import { useState } from 'react'
import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'

function App() {
  const[queryDescription, setQueryDescription] = useState("")
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submited: ", queryDescription );

  }
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="" className = {styles.icon} />
      <h3>  Generate SQL with Prompt </h3>


      <form onSubmit={onSubmit}>
        <input type="text" 
        name="query-description" 
        placholder="prompt your query" 
        onChange={(e)=> setQueryDescription(e.target.value)}
        />
        <input type="submit" value="Generate SQL query" />
      </form>
    </main>
  )
}

export default App
