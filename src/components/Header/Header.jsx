import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';
function Header({ onRegionChange, onSearchChange }) {
  const [search, setSearch] = useState('');
  const regionChangeHandler = function (e) {
    onRegionChange(e.target.value);
  };
  const searchChangeHandler = function (e) {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let timer;
    if (search !== null) {
      timer = setTimeout(() => {
        onSearchChange(search);
      }, 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [search, onSearchChange]);
  return (
    <div>
      <div className='container mx-auto px-1 flex justify-between items-center gap-3 flex-col sm:flex-row py-3 mt-3 mb-5 '>
        <div className='w-full sm:w-1/2 lg:w-1/3 bg-white-full dark:bg-darkBlue-el px-4 py-2 shadow-sm rounded flex items-center'>
          <IconContext.Provider value={{ className: 'w-4 h-4 text-slate-500' }}>
            <BsSearch />
          </IconContext.Provider>

          <input
            type='text'
            className='grow focus:outline-none ml-3 p-1 placeholder:text-sm bg-white-full dark:text-white-full dark:bg-transparent placeholder:text-slate-500 dark:placeholder:text-white-inp'
            placeholder='Search for a country ...'
            onChange={searchChangeHandler}
            value={search}
          />
          {search.length > 0 && (
            <button
              className='dark:text-white-full px-2 cursor-pointer'
              onClick={() => setSearch('')}
            >
              x
            </button>
          )}
        </div>
        <div>
          <select
            aria-label='region'
            name='region'
            className='p-1'
            defaultValue='all'
            onChange={regionChangeHandler}
          >
            <option value='all'>Filter by Region</option>
            <option value='africa'>Africa</option>
            <option value='americas'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
