import React,{Component} from "react";
export default class Controlled_comp extends Component{

    constructor(){
        super();
        this.state={
            name:'',
            age:''
        }
    }
    handleChange=(e)=>{
        e.preventDefault()
    //     if(e.target.name=='name'){
    //     this.setState({name:e.target.value})
    // }
    
    // if (e.target.name=='email'){ 
    //     this.setState({email:e.target.value})
    // }
    this.setState({[e.target.name]:e.target.value})
        
    }
    
    render(){
        return(
            <div>
                <h1>Controlled Component</h1>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="name"/>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"/>
                <input type="password" name="password" id="" value={this.state.password} onChange={this.state.password} placeholder="password" />


                <h2>Name: {this.state.name}</h2>
                <h2>Email: {this.state.email}</h2>
                <h2>Password: {this.state.password}</h2>

            </div>
        )
    }
}