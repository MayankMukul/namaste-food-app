import React from 'react';
class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }

    render(props){
        
        return (
            <>
            <h1>this is a profile section .</h1>
            <h2>{this.props.name}</h2>
            <h2>count = {this.state.count}</h2>
            <button onClick={()=>{
                this.setState({
                    count:1,
                })
            }}>count</button>
            </>
        )
    }
}

export default Profile;