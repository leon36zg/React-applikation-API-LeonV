import React from "react";

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={query}
                className="form-control"
                placeholder="Sök efter olika matrecept" 
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            /> 
              
            <input
                disabled={isLoading || !query}
                type="submit"
                className="button"
                value="Sök" 
            />
        </form>
    )
};

export default SearchBar; 