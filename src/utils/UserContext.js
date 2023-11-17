import { createContext } from 'react';

const UserContext = createContext({
    user : {
        name : 'Dummy',
        email : 'dummy@mail.com',
    },
});
    
export default UserContext;