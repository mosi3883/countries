import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Error from "../components/UI/Error";
import Spinner from "../components/UI/Spinner";
import CountryDetail from "../components/Country/CountryDetail";
import { useEffect } from "react";

function Country() {
  const params = useParams();

  useEffect(() => {
    document.title = "country " + params.cca3;
  }, [params.cca3]);

  const { data, error, isPending } = useFetch(
    `https://restcountries.com/v3.1/alpha/${params.cca3}`
  );

  return (
    <div className="container mx-auto px-4 min-h-window">
      {error && <Error error={error} />}
      {isPending && (
        <div className="relative h-60">
          <Spinner />
        </div>
      )}

      {!isPending && !error && data && data.length > 0 && <CountryDetail country={data[0]} />}
    </div>
  );
}

export default Country;
