import { createContext } from 'react';

const UserContext = createContext({
    user : {
        name : 'dummy',
        email : 'dummy@mail.com',
    },
});
    
export default UserContext;