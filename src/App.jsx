import { createContext, useEffect, useState } from 'react';
import './App.css';

import logo from "./assets/logo.svg";
import Main from "./components/main/main";
import { searchURL } from './services/ticketsApi';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchId } from './redux/slices/searchId/searchIdSlice';


export default function App() {

    let searchIdState = useSelector(state => state.searchId);
    const dispatch = useDispatch();


    useEffect(() => {
        fetch(searchURL).then(response => response.json()).then(data => {
            dispatch(setSearchId(data.searchId));
            // console.log(data.searchId);
        });
    }, []);


    return (
        <>
            <img src={logo} alt="" className="logo" />
            <Main />
        </>
    );

}
