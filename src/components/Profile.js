import React from 'react';
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
            <h1>this is a profile section .</h1>
            <img src={this.state.userInfo.avatar_url} alt="profile pic"/>
            <h2>User Name : {this.state.userInfo.login}</h2>
            
            </>
        )
    }
}

export default Profile;