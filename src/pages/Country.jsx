import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postAPI";
import { CountryCard } from "../components/Layout/CountryCard";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => { 
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <div className="loader"></div>

  return (
    <section className="section-country">
      <ul className="container grid grid-three--cols">
        {countries.map((curCountry, index) => {
            return <CountryCard country={curCountry} key={index} />
        })}
      </ul>
    </section>
  );
};
