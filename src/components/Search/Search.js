import React, {useState} from 'react'

function Search({setWeatherApp}) {
  const api={
    key:"55eea1c0aed21bba49363288d376514d",
    base:"https://api.openweathermap.org/data/2.5/weather",
  }

  const [searchParams, setsearchParams]=useState("");

  const search=(e)=>{
    if(e.key==="Enter"){
      fetch(`${api.base}?q=${searchParams}&units=metric&lang=tr&appid=${api.key}`)
      .then((data)=>data.json())
      .then((result)=>{
        setsearchParams("")
        setWeatherApp(result);
    })
  }
}

  return (
    <div className="search">
      <input 
      className="search-input" 
      type="text" 
      placeholder="Şehir Giriniz"
      onChange={(e)=>setsearchParams(e.target.value)}
      value={searchParams}
      onKeyPress={search}
      />
    </div>
  )
}

export default Search;