import React from'react';
import axios from'axios';
import ListGroup from 'react-bootstrap/ListGroup'



export default class UserList extends React.Component{
state={
  users:[],
}
componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res=>{
    console.log(res);
    this.setState({users:res.data});
  });
}

render (){
  return (
    <ListGroup>
 
 {this.state.users.map(user=><ListGroup.Item className="item" >{user.name}</ListGroup.Item>)}
  
</ListGroup>
  
  )
}
}











