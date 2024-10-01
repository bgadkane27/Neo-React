export const SearchFilter=({search, setSearch, filter, setFilter, countries, setCountries})=>{

   const handleInputChange=(event)=>{
        setSearch(event.target.value);
    }

    const handleFilterChange=(event)=>{
        setFilter(event.target.value);
    }

    const sortCoutries=(value)=>{
        const sortCountry= [...countries].sort((a, b)=>{
            return value === "asc" ? a.name.common.localeCompare(b.name.common): b.name.common.localeCompare(a.name.common);
        });
        setCountries(sortCountry);
    };

    return(
        <div className="section-filter container">
            <div className="grid grid-four--cols">
                <div>
                    <input type="text" placeholder="Type something..." className="input-field" value={search} onChange={handleInputChange}/>
                </div>
                <div>
                    <button onClick={()=> sortCoutries("asc")}>ASC</button>
                </div>
                <div>
                    <button onClick={()=> sortCoutries("dsc")}>DESC</button>
                </div>
                <div>
                    <select className="select-field" value={filter} onChange={handleFilterChange}>
                        <option value="all">All</option>
                        <option value="Americas">Americas</option>
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                    </select>
                </div>

            </div>
        </div>
    )
}