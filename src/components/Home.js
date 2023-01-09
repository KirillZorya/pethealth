import React from "react";
import { useNavigate } from 'react-router-dom';
import Navigation from "./Navigation";
import { useTranslation, Trans } from "react-i18next";

export default function Home(){
    const navigate = useNavigate();
    return (
        <div style={{backgroundColor:"#FFD25F"}}>
            <Navigation />
            
            <div className="image_container text-center">
                <div className="my-5"></div>
                <div className="my-5"></div>
                <div className="row align-items-center center_div">
                    <div className="col align-self-center align-items-center">
                    <h1><Trans i18nKey={"main_text"}/></h1>
                    </div>
                </div>
            
            </div>
            
        </div>
    )
}