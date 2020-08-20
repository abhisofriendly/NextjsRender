import React,{ Component } from 'react';
import MainLayout from '../../components/layouts/mainLayout'
import axios from 'axios'

class Profile extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
        <MainLayout>
          <h2>User Profile</h2>
          {
            this.props.user.id?(
              <div>
                <div>Name: {this.props.user.name}</div>
                <div>Username: {this.props.user.username}</div>
                <div>Email: {this.props.user.email}</div>
                <div>Wesite: {this.props.user.website}</div>
              </div>
            ):null
          }
        </MainLayout>
    )
  }
}

Profile.getInitialProps = async({query}) => {
  let user;
  try{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${query.userId}`);
    user = response.data
    console.log(user)
  }
  catch(error){
    console.log(error)
  }
  return {
    user
  }
}

export default Profile