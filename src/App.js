import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {

  // Category
  const [ category, saveCategory ] = useState('');
  const [ news, saveNews ] = useState([]);

  useEffect( () => {
    const APIquery = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=562150114f724e6d8caa53d7d4dfd215`
      const response = await fetch(url);
      const news = await response.json();
      saveNews(news.articles);

    }
    APIquery();
  }, [category])
  return (
    <Fragment>
      
      <Header 
        title='Noticias'
      />

      <div className="container white">
        <Form 
          saveCategory={saveCategory}
        />
        <NewsList 
          news={news}
        />
      </div>

    </Fragment>
  );
}

export default App;
