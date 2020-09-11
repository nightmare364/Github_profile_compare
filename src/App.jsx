import React, { useState, useEffect } from "react";
import "./index.css";
import CreateCard from "./CreateCard";
import SearchCard from "./SearchCard";

const App = () =>{
    const [addItem,setAddItem]=useState([]);
    const addData = (newData) =>{
        setAddItem((prevData)=>{
            return [...prevData,newData];
        });
        
    };

    const [data,setData]=useState([]);
    const sortArray =()=>{
        const sorted=addItem.sort((a,b)=> b.followers-a.followers);
        setData(sorted);
    };

    useEffect(sortArray,[addData]);

    return(
            <div>
                <div className="navbar">GitHub Profile Compare</div>

                <SearchCard passData={addData}/>
                
                {data.map((val,index)=>{
                    return (
                        <CreateCard
                            id={index}
                            key={index}
                            avatar={val.avatar}
                            Name={val.Name}
                            userurl={val.userurl}
                            userName={val.userName}
                            followers={val.followers}
                            following={val.following}
                            repos={val.repos}
                        />
                    );
                })}
               
            </div>
        
    );
}
export default App;
