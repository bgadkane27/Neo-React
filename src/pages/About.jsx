import countryFact from "../api/countryData.json";

export const About = () => {
    return (
        <section className="section-about">
            <div className="container title-about">
                <h1>Explore Countries: Capitals, Populations, <br />
                    and Fascinating Facts</h1>
            </div>
            <div className="container gradient-cards grid grid-three--cols">

                {countryFact.map((country) => {
                    const { id, countryName, capital, population, interesting_fact } = country;
                    return (
                        <div className="cards bg-green-box" key={id}>
                            <h2 className="country-title">{countryName}</h2>
                            <p>
                                <span className="country-fact">Capital: </span>
                                {capital}
                            </p>
                            <p>
                                <span className="country-fact">Population: </span>
                                {population.toLocaleString()}
                            </p>
                            <p>
                                <span className="country-fact">Interesting Fact: </span>
                                {interesting_fact}
                            </p>
                        </div>
                    );
                })}
                
            </div>
        </section>
    );
};
