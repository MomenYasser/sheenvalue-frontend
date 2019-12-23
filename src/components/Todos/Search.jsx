import React,{useState} from 'react'

const Search = (props) => {
    const [key, setKey] = useState("")
    return (
        <div>
         <input value={key} onChange={(e)=>{
             e.preventDefault();
             setKey(e.target.value);
             props.searchHandler(e.target.value);
        }}></input>
        </div>
    );
}

export default Search;
