import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
const { Search } = Input;

const SearchCard = (props) =>{

    const [userData,setuserData]=useState({
        Name:undefined,
        userName:undefined,
        userurl:undefined,
        followers:undefined,
        following:undefined,
        repos:undefined,
        avatar:undefined,
        userInput:undefined
    });


    const [userInput,setuserInput]=useState('');
    const setData = ({ name, login, url, followers, following, public_repos, avatar_url }) => {
        setuserData(()=>{
            return {
                Name: name,
                userName: login,
                userurl: url,
                followers: followers,
                following: following,
                repos: public_repos,
                avatar: avatar_url,
            }
        })
    };
    
    const eventInput = (e) =>{
            setuserInput(e.target.value);
    };
    const submitted = () =>{
        fetch(`https://api.github.com/users/${userInput}`)
        .then(res => res.json())
        .then(data=>{
            if(data.message){
                alert("Invalid user");
            }else{
                setData(data);
            }
        })
    };
    
    const passfunc = () =>{
        if(userData.Name !== undefined){
            props.passData(userData);
        }
    };
    useEffect(passfunc,[userData]);
    return (
        <div className="search_div">
        <div className="search">
            <Search
                name='username'
                onChange={eventInput}
                placeholder="Enter Github username"
                enterButton="Compare"
                size="medium"
                onSearch={submitted}
            />
        </div>
        </div>
    );
};
export default SearchCard;