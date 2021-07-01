
import SearchBox from "./components/SearchBox";
import "./style.css";
import { useState } from 'react';
import data from "../../data/users.json";
import SearchResults from "./components/SearchResults";

export default function Search() {

    const[isAtTop, setIsAtTop] = useState(false);
    const [usersData, setUsersData] = useState(data);
    const [results, setResults] = useState([]);

    const handleCloseClick = () => {
        setIsAtTop(false);
        setResults([]);
    }   
    const handleSearchClick = (searchText) => {
        if(usersData?.length){ //el signo de pregunta me valida que ese objeto tenga la propiedad, en este caso, que exista la propiedad "length"
           const searchTextMinus = searchText.toLowerCase();
            const filteredData =  usersData.filter((value) => (
                value.name.toLowerCase().includes(searchTextMinus) ||
                value.name.toLowerCase().includes(searchTextMinus) ||
                value.name.toLowerCase().includes(searchTextMinus) ||
                value.name.toLowerCase().includes(searchTextMinus)  
                )
            );
            setResults(filteredData);
            setIsAtTop(true);
        }
    }
    console.log(results);
    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
          <SearchBox 
            onSearch={handleSearchClick}
            onClose={handleCloseClick}
            isSearching={isAtTop}
          />
          <SearchResults results={results} isSearching={isAtTop} />
        </div>
      );

}