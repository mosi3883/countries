import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Country from './pages/Country';
import Home from './pages/Home';
import Layout from './components/UI/Layout';
import Page404 from './pages/Page404';
import { counteriesContext } from './context/counteries';
import { useContext, useEffect } from 'react';
import useFetch from './hooks/useFetch';
function App() {
  const countriesCtx = useContext(counteriesContext);
  const fetchUrl = 'https://restcountries.com/v3.1/all';
  const { data, error, isPending } = useFetch(fetchUrl);
  useEffect(() => {
    countriesCtx.setAllCounteries(data);
  }, [countriesCtx, data]);
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home error={error} isPending={isPending} />} />
            <Route path='country/:cca3' element={<Country />} />
            <Route path='*' element={<Page404 />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
