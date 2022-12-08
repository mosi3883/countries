import React, { useEffect, useState } from 'react';
import CountryList from '../components/Country/CountryList';
import Header from '../components/Header/Header';
import Error from '../components/UI/Error';
import Spinner from '../components/UI/Spinner';
import useFetch from '../hooks/useFetch';

function Home() {
  useEffect(() => {
    document.title = 'Countries facts';
  }, []);
  const fetchUrl = 'https://restcountries.com/v3.1/all';
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('all');
  const [search, setSearch] = useState('');
  const { data, error, isPending } = useFetch(fetchUrl);
  const [allCountires, setAllCountires] = useState([]);

  useEffect(() => {
    if (data) {
      setCountries(data);
      setAllCountires(data);
    }
  }, [data]);

  const filterCountriesByRegion = (region) => {
    setRegion(region);
  };

  const filterCountriesBySearch = (query) => {
    setSearch(query);
  };

  useEffect(() => {
    let newCountries = allCountires.filter((country) => {
      return (
        country.name.common.toLowerCase().includes(search) ||
        country.name.official.toLowerCase().includes(search)
      );
    });

    if (region !== 'all') {
      newCountries = newCountries.filter((country) => {
        return country.region.toLowerCase() === region;
      });
    }

    setCountries(newCountries);
  }, [search, region, allCountires]);

  return (
    <div className='min-h-window'>
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
