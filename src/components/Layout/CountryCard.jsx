import {NavLink} from "react-router-dom"

export const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital } = country;
    return (
        <li className="country-card cards bg-green-box">
            <div>
                <div className="country-image">
                    <img src={flags.svg} alt={flags.alt} />
                </div>

                <div className="country-details">
                    <h1>{name.common.length >20 ? name.common.slice(0,10) + "..." : name.common }</h1>
                    <p>
                        <span className="country-fact">Capital : </span>
                        {capital}
                    </p>
                    <p>
                        <span className="country-fact">Region : </span>
                        {region}
                    </p>
                    <p>
                        <span className="country-fact">Population : </span>
                        {population.toLocaleString()}
                    </p>
                    <NavLink to={`/country/${name.common}`}>
                        <button>Read More</button>
                    </NavLink>
                </div>
            </div>
        </li>
    )
}