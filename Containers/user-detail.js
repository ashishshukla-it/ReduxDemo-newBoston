import React,{Component} from 'react';
import {connect} from "react-redux";

class UserDetail extends Component{
    render(){
        if(!this.props.user)
        {
            return (<h5>Select a user....</h5>)
        }
        return (
            <div>
                <h4>{this.props.user.first} {this.props.user.last}</h4>
                <h4>Age: {this.props.user.age}</h4>
                <h4>Description: {this.props.user.description}</h4>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user:state.activeUsers
    }
}

export default connect(mapStateToProps)(UserDetail);