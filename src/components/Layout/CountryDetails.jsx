import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryInvData } from "../../api/postAPI";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryInvData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending) return <div className="loader"></div>;

  return (
    <section className="section-incountry">
      <div className="container country-card">
        {
          country && (
            <div className="container grid grid-two--cols">
              <div className="country-image">
                <img src={country.flags.svg} alt={country.flags.alt} />
              </div>
              <div className="country-details">
                <h1>{country.name.official}</h1>
                <p>
                  <span className="country-fact">Capital : </span>
                  {country.capital}
                </p>
                <p>
                  <span className="country-fact">Region : </span>
                  {country.region}
                </p>
                <p>
                  <span className="country-fact">Sub-Region : </span>
                  {country.subregion}
                </p>
                <p>
                  <span className="country-fact">Currency : </span>
                  {Object.values(country.currencies).map((currency) => (
                    <span key={currency.name}>
                      {currency.name} ({currency.symbol})
                    </span>
                  ))}
                </p>
                <p>
                  <span className="country-fact">Language : </span>
                  {Object.values(country.languages).join(", ")}
                </p>
                <p>
                  <span className="country-fact">Population : </span>
                  {country.population.toLocaleString()}
                </p>
              </div>
            </div>
          )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="logo-link">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  )

};
