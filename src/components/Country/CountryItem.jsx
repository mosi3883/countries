import { useNavigate } from 'react-router-dom';
const nf = new Intl.NumberFormat('en-US');
function CountryItem({ country }) {
  const navigate = useNavigate();
  return (
    <div
      className='shadow bg-white-full dark:bg-darkBlue-el dark:text-white-bg rounded overflow-hidden cursor-pointer transition-transform hover:shadow-xl md:hover:scale-105 duration-500 '
      onClick={() => {
        navigate(`/country/${country.cca3}`);
      }}
    >
      <img
        className='block object-cover w-full aspect-[2/1] shadow'
        loading='lazy'
        src={country.flags.svg}
        alt={country.name.common + ' flag'}
      />
      <div className='p-4 pb-7 text-xs shadow-inner'>
        <h2 className='font-bold text-base mb-3'>{country.name.common}</h2>
        <div>
          <strong className='font-bold'>Population:</strong>{' '}
          <span className='font-light'> {nf.format(country.population)}</span>
        </div>
        <div>
          <strong>Region:</strong> <span className='font-light'> {country.region}</span>{' '}
        </div>
        <div>
          <strong>Capital:</strong>{' '}
          <span className='font-light'> {country?.capital?.[0]}</span>
        </div>
      </div>
    </div>
  );
}

export default CountryItem;
