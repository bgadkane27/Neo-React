export const SearchFilter=({search, setSearch, filter, setFilter})=>{

   const handleInputChange=(event)=>{
        setSearch(event.target.value);
    }

    const handleFilterChange=(event)=>{
        setFilter(event.target.value);
    }

    return(
        <div className="section-filter">
            <div className="grid grid-four--cols">
                <div>
                    <input type="text" placeholder="type something..." className="input-field" value={search} onChange={handleInputChange}/>
                </div>
                <div>
                    <button>ASC</button>
                </div>
                <div>
                    <button>DESC</button>
                </div>
                <div>
                    <select name="" id="" className="select-field" value={filter} onChange={handleFilterChange}>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>

            </div>
        </div>
    )
}