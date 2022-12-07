import React, { useCallback, useEffect, useState } from 'react';
import CountryList from '../components/Country/CountryList';
import Header from '../components/Header/Header';
import Error from '../components/UI/Error';
import Spinner from '../components/UI/Spinner';
import useFetch from '../hooks/useFetch';

function Home() {
  useEffect(() => {
    document.title = 'Countries facts';
  }, []);
  const [fetchUrl, setFetchUrl] = useState('https://restcountries.com/v3.1/all');
  const { data: countries, error, isPending } = useFetch(fetchUrl);

  const filterCountriesByRegion = function (region) {
    const url =
      region === 'all'
        ? 'https://restcountries.com/v3.1/all'
        : `https://restcountries.com/v3.1/region/${region}`;
    setFetchUrl(url);
  };

  const filterCountriesBySearch = useCallback(function (q) {
    const url = `https://restcountries.com/v3.1/name/${q}`;
    setFetchUrl(url);
  }, []);

  return (
    <div className=' min-h-window'>
      <Header
        onRegionChange={filterCountriesByRegion}
        onSearchChange={filterCountriesBySearch}
      />
      {error && <Error error={error} />}
      {isPending && (
        <div className='container mx-auto px-4 relative h-60'>
          <Spinner />
        </div>
      )}
      {!isPending && !error && countries && countries.length === 0 && (
        <CountryList countries={countries} />
      )}
      {!isPending && !error && countries && countries.length > 0 && (
        <CountryList countries={countries} />
      )}
    </div>
  );
}

export default Home;
