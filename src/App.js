import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navigation from './components/Navigation'; 
import News from './components/News';
import Footer from './components/Footer';

const apiKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const [news,setNews] = useState([]);
  const [category,setCategory] = useState("sports")
  useEffect(() => {
    console.log(apiKey)
    //https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=31d81a7e36ae489883e321234c908286
    Axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${apiKey}`)
    .then(res => setNews(res.data.articles))
    .catch(e => {
      setNews([]);
      console.log(e);
    })

  },[category]);
  return (
    <div>
      <Navigation setCategory={setCategory} />
      <News news={news}/>
      <Footer />
      
      
    </div>
  )
}

export default App
