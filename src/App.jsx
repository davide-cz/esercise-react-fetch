import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountryCard from './components/CountryCard'
import SearchBar from './components/SearchBar'
 
function App() {
  
const [countries,setCountries]=useState([])
const [searchValue,setSearchValue]=useState('')
/* const [newValue,setNewValue]=useState('') */
const [inputValue,setInputValue]=useState('')
const changeValue=(nuovoValue)=>{setInputValue(nuovoValue)}
useEffect(()=>{
  fetch('https://restcountries.com/v3.1/all')
  .then(response=>response.json())
  .then(obj=>{setCountries(obj)})
},[])
/* useEffect(()=>{
  fetch('https://restcountries.com/v3.1/all')
  .then(response=>response.json())
  .then(obj=>{setCountries(obj)})
  .filter((obj)=>{obj.name.common.includes([searchValue])})
},[onSearch]) */

const onSearch=()=>{ fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
.then(response=>response.json())
.then(obj=>{setCountries(obj)})
}
  return (
    <>
      <SearchBar
        value={searchValue}
        onchange={(newValue)=>setSearchValue(newValue)}
        onSearch={onSearch}
      />
    <div className='cardsContainer'>
      {countries.map((country)=>{
        return(
          <div>
            
            <div >
            <CountryCard key={country.name.common}
                countryName={country.name.common}
                flagURL={country.flags.png}
                population={country.population}
                capital={country.capital}
                />     
              </div>

          </div>
        )
        })}
      
    </div>

    </>
  )
}

export default App
