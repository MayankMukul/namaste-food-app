import {useContext} from 'react';
import UserContext from '../utils/UserContext.js';
function Footer() {
    const { user } = useContext(UserContext);

    return ( 
        <div className="footer h-28 bg-neutral-300 md:bg-slate-400 text-center font-semibold p-3 mt-auto"> 
            Footer<br/>
            Made by Mayank<br/>
            <span>{user.name}</span>
            <span>{user.email}</span>
        </div>
     );
}

export default Footer;