import React,{Component} from 'react';
import MainLayout from '../components/layouts/mainLayout'
import axios from 'axios';
import Link from 'next/link';

class Home extends Component{
  constructor(props){
     console.log(props)
    super(props)
    this.state={
      user:this.props.user,
      userData:this.props.userData
    }
  }

  render(){
    return(
      <MainLayout>
        <h1>pick a user</h1>
        <ul className="list-group">
          {
            this.state.userData.map((user,index)=>{
            return (
              <li className="list-group-item" key={index}>
                <Link href={`/users/profile?userId=${user.id}`}>
                  <a>{user.name}</a>
                </Link>
              </li>
            )
            })
          }
        </ul>
      </MainLayout>
    )
  }
}

Home.getInitialProps= async ({pathname,query,asPath,req,res}) => {  
  let userData;
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    userData = response.data;
  }catch(error){
    console.log(error)
  }
  
  return {
    user:{
      name:'abhishek',
      lastname:'jones'
    },
    userData:userData
  }
}

export default Home