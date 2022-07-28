import React from "react";
import "./main.css";
import { PageSweets } from "../pages"
import {Outlet, useLocation} from "react-router-dom";

function Main(){

    const location = useLocation();

    if(location.pathname === "/"){
        return (
            <div className="main">
                <div className="main__cardList">
                    <PageSweets/>
                </div>
            </div>
        )
    }

    return (
        <div className="main">
            <div className="main__cardList">
                <Outlet/>
            </div>
        </div>
    )
}

export default Main;