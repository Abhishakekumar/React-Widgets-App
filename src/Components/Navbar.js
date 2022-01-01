import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav>
            <Link to="/todo">Todo</Link>
        </nav>
    )
}
export default Navbar