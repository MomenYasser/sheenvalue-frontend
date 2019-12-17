import React,{useState} from 'react'

const Search = () => {
    const [key, setKey] = useState("")
    return (
        <div>
         <input value={key} onChange={(e)=>{
             e.preventDefault();
             setKey(e.target.value);
        }}></input>
        </div>
    );
}

export default Search;
