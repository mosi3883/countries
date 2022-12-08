import { useParams } from 'react-router-dom';
import Error from '../components/UI/Error';
import Spinner from '../components/UI/Spinner';
import CountryDetail from '../components/Country/CountryDetail';
import { useContext, useEffect, useState } from 'react';
import { counteriesContext } from '../context/counteries';

function Country() {
  const params = useParams();
  const CounteriesCtx = useContext(counteriesContext);
  const [country, setCountry] = useState('');

  useEffect(() => {
    const newCountry = CounteriesCtx?.allCounteries?.find(
      (country) => country.cca3 === params.cca3
    );
    setCountry(newCountry);

    document.title = 'Country information - ' + country?.name?.common ?? '';
  }, [CounteriesCtx.allCounteries, params.cca3, country]);

  // const { data, error, isPending } = useFetch(
  //   `https://restcountries.com/v3.1/alpha/${params.cca3}`
  // );
  const error = CounteriesCtx.error;
  const isPending = CounteriesCtx.isPending;

  return (
    <div className='container mx-auto px-4 min-h-window'>
      {error && <Error error={error} />}
      {isPending && (
        <div className='relative h-60'>
          <Spinner />
        </div>
      )}

      {!isPending && !error && country && <CountryDetail country={country} />}
    </div>
  );
}

export default Country;
