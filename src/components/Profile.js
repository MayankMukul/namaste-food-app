import React from 'react';
import UserContext from '../utils/UserContext';


class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userInfo : {
                name : "Dummy",
                avatar_url : "dummy Image",
            }
        }
    }

   async componentDidMount(){
        
        let data = await fetch("https://api.github.com/users/MayankMukul");
        let json = await data.json();

        this.setState({
            userInfo : json,
        })

        
    }

    render(){
        return (
          <>
            <div className="bg-slate-100 m-5 p-2">
              <h1 className="bg-black text-white p-2 font-bold">
                This is a Profile Section.
              </h1>
              <div className="flex ">
                <img
                  className="rounded-full h-40 m-3 shadow-xl"
                  src={this.state.userInfo.avatar_url}
                  alt="profile pic"
                />
                <div className='mx-4'>
                  <h2 className="text-center font-bold m-3">
                    Name : {this.state.userInfo.name}
                  </h2>
                  <h2 className="text-center font-bold m-3">
                    Profile : <a href="https://github.com/MayankMukul" target='_blank'>{this.state.userInfo.login}</a>
                  </h2>
                </div>
              </div>

              <h1 className="bg-black text-white p-2 font-bold">
                User Detail's
              </h1>
              <UserContext.Consumer>
                {({ user }) => {
                  return (
                    <h1 className="font-bold p-2 m-1">
                      UserName : {user.name}
                      <br />
                      UserEmail : {user.email}
                    </h1>
                  );
                }}
              </UserContext.Consumer>
            </div>
          </>
        );
    }
}

export default Profile;