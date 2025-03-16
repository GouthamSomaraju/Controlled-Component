import React,{Component, createRef} from "react";

export default class Uncontrolled_comp extends React.Component {
    constructor() {
        super()
        
        this.nameRef=createRef()
        this.emailRef=createRef()
        console.log(this.nameRef, this.emailRef);
        

    };
    handleSubmit=(e) => {
        e.preventDefault()
        this.nameRef=this.nameRef.current.value
        this.emailRef=this.emailRef.current.value
        
        console.log(this.nameRef, this.emailRef);

        // console.log("Name:", this.nameRef.current.value)
        // console.log("Email:", this.emailRef.current.value)
    }
    render() {
        return (
            <div>
                <h1>Uncontrolled Component</h1>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name='name' ref={this.nameRef} defaultValue="name"/>
                <input type="text" name='email' ref={this.emailRef} defaultValue="email"/>

                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
    }
