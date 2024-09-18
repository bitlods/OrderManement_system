import React, {useEffect} from "react";

import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

const Nav=()=>{
    return (
        <React.Fragment>
            {/*<div img style={{
                backgroundImage:
                "url('https://www.turkeytradedata.com/images/outstorybg.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "1000px"
            }}>*/}
            <div className="Title">
            <h1>All ORDER</h1>
            </div>
            <div className="navbar">

                {/* <Link to="allorder"><Button variant="contained" color="secondary"></Button></link>*/}
                <Link to="/home"><button type="button">Home</button></Link>
                <Link to="/about"><button type="button">About us</button></Link>
                <Link to="/allorder"><button type="button">Allorder</button></Link>
                <Link to="/deleteorder"><button type="button">Deleteorder</button></Link>
                <Link to="/updateorder"><button type="button">Updateorder</button></Link>
            </div>
            <div className="Footer">

            </div>
        {/*</div>*/}
        </React.Fragment>
    )
}
