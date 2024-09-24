import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{
                login:'dummy',
                location:'default',               
            }    
        }    
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/reshma-sk")
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })
    }
    componentDidUpdate(){
        console.log('component updated');    
    }
    componentWillUnmount(){
        console.log('component will update');
        

    }
    render(){
        //const{name} = this.props;
        const{login,location,avatar_url} = this.state.userInfo; 
        
        return(
            <div>
                <img src={avatar_url} alt="" />
                <h2>Name:{login}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:reshmashaik0910@gmail.com</h4>
            </div>
        )
    }
}
export default UserClass;