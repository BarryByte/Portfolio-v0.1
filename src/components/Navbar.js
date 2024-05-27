import { useState, useEffect } from "react";
import {Link} from "react-scroll"
function Navbar(){
    const[navActive , setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }
    const closeMenu = () => {
        setNavActive(false)
    }
    
    
}
export default Navbar;