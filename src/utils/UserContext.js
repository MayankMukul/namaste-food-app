import { createContext } from 'react';

const UserContext = createContext({
    name : {
        name : 'dummy',
        email : 'dummy@mail.com',
    },
});
    
export default UserContext;