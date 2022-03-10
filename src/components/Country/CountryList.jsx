import CountryItem from "./CountryItem";
function CountryList({ countries }) {
  return (
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {countries.length === 0 && <p className="text-red-600">No Country Found!</p>}
      {countries.length > 0 &&
        countries.map((country) => <CountryItem key={country.cca3} country={country} />)}
    </div>
  );
}

export default CountryList;
