import React,{useState} from 'react'

const Search = () => {
    const [key, setKey] = useState("")
    return (
        <div>
         <input value={key}></input>
        </div>
    );
}

export default Search;
