import React, { createContext, useState } from 'react';
import './App.css';
import Jumbutron from './components/Jumbotron';
import SearchField from './components/SearchField';
import Images from './components/Images';
import useAxios from './hooks/useAxios';



//Create Context
export const ImageContext = createContext();

function App() {

  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=2&per_page=30&orientation=portrait&query=coffee&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }
  

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
      <SearchField/>
      </Jumbutron>
      <Images/>
    </ImageContext.Provider>
  );
}

export default App;
