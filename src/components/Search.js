import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Sök på märke, modell, utrustning, etc"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchSubmit}>Sök</button>
    </div>
  );
};

export default Search;
