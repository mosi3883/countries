import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const nf = new Intl.NumberFormat("en-US");
function CountryDetail({ country }) {
  useEffect(() => {
    document.title = "Country information - " + country?.name?.common;
  }, [country]);
  const currencies = Object.entries(country?.currencies);
  return (
    <div className="overflow-hidden dark:text-white-full">
      <div className="my-10 p-1">
        <Link to="/">
          <button className="flex justify-between items-center bg-white-full dark:bg-darkBlue-el  shadow-md py-2 rounded-md px-7 hover:shadow-xl transition-shadow ">
            <BsArrowLeft />
            <span className="ml-2 text-base text-black dark:text-white-full">Back</span>
          </button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
        <img
          src={country?.flags.svg}
          alt={country?.name.common + " flag"}
          className="aspect-video   w-1/2"
        />
        <div className="">
          <h2 className="text-3xl font-extrabold mb-5">{country?.name.common}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between mb-10">
            <div>
              <p className="mb-2">
                <span className="font-semibold text-base">Offical Name: </span>
                <span className="font-light">{country?.name.official}</span>
              </p>

              <p className="mb-2">
                <span className="font-semibold text-base">Population: </span>
                <span className="font-light">{nf.format(country?.population)}</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold text-base">Region: </span>
                <span className="font-light">{country?.region}</span>
              </p>

              <p className="mb-2">
                <span className="font-semibold text-base">Sub Region: </span>
                <span className="font-light">{country?.subregion}</span>
              </p>

              <p className="mb-2">
                <span className="font-semibold text-base">Capital: </span>
                <span className="font-light">{country?.capital.join(" ,")}</span>
              </p>
            </div>
            <div>
              <p className="mb-2">
                <span className="font-semibold text-base">TOP Level Domain: </span>
                <span className="font-light">{country?.tld.join(" ,")}</span>
              </p>
              <p className="mb-2">
                <span className="font-semibold text-base">Currencies: </span>
                <span className="font-light">
                  {currencies.map((c, i) => (
                    <span key={i} className="px-2" title={c[1]?.name + " - " + c[1]?.symbol}>
                      {c[0]}
                    </span>
                  ))}
                </span>
              </p>
              <p className="mb-2">
                <span className="font-semibold text-base">Languages: </span>
                <span className="font-light">
                  {Object.values(country?.languages).join(" ,")}
                </span>
              </p>
            </div>
          </div>

          <div>
            <span className="font-semibold text-base mr-4">Border Counteries: </span>
            <div className="inline-flex flex-wrap gap-2">
              {country?.borders?.map((neighbour) => (
                <Link key={neighbour} to={`/country/${neighbour}`}>
                  <button className="shadow rounded-sm py-2 px-5 hover:shadow-lg">
                    {neighbour}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
