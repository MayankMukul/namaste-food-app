import React from 'react';
import UserContext from '../utils/UserContext';


class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userInfo : {
                login : "Dummy",
                avatar_url : "dummy image",
            }
        }
    }

   async componentDidMount(){
        
        let data = await fetch("https://api.github.com/users/MayankMukul");
        let json = await data.json();
        // console.log(json);

        this.setState({
            userInfo : json,
        })

        
    }

    render(props){
        
        return (
          <>
            <div className='bg-slate-100 m-5 p-2'>
              <h1 className='bg-black text-white p-2 font-bold'>This is a Profile Section.</h1>
              <img className='rounded-full m-auto shadow-2xl' src={this.state.userInfo.avatar_url} alt="profile pic" />
              <h2 className='text-center font-bold m-3'>User Name : {this.state.userInfo.login}</h2>
              
              <h1 className='bg-black text-white p-2 font-bold'>Using User Context in class-based Component</h1>
              <UserContext.Consumer>
                {({user})=>{
                    return <h1 className='font-bold p-2 m-1'>{user.name}<br/>{user.email}</h1>
                }}
              </UserContext.Consumer>
            </div>
          </>
        );
    }
}

export default Profile;