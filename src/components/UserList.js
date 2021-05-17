import React from'react';
import axios from'axios';
import {useState, useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const UserList = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => setData(res.data))
    .catch(err => {console.log(err)});

    
  }, []);
  return (
    <ListGroup>
 
 {data.map(user=><ListGroup.Item className="item" key={user.id}>{user.name} </ListGroup.Item>)}
  
</ListGroup>
  
  )
}
 
 export default UserList;













