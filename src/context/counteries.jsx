import React, { useState } from 'react';
export const counteriesContext = React.createContext({
  allCounteries: [],
  setAllCounteries: (data) => {
    console.log(data);
  },
});

const CounteriesProvider = ({ children }) => {
  const [allCounteries, setAllCounteries] = useState([]);

  return (
    <counteriesContext.Provider value={{ allCounteries, setAllCounteries }}>
      {children}
    </counteriesContext.Provider>
  );
};

export default CounteriesProvider;
