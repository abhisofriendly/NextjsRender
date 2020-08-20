import React,{Component} from 'react';
import MainLayout from '../components/layouts/mainLayout'
import Message from '../components/includes/message'
import Router from 'next/router';

class About extends Component{
  constructor(props){
    super(props)
    this.handleRouteStart=this.handleRouteStart.bind(this);
    this.handleRouteChangeComplete = this.handleRouteChangeComplete.bind(this)
  }
  handleRouteStart = url => {
    console.log('route is changing',url)
  }
  handleRouteChangeComplete=(url)=>{
    console.log('route change done',url)
  }

  componentDidMount(){
    console.log('componentdidmount')
    Router.events.on('routeChangeStart',this.handleRouteStart);
    Router.events.on('routeChangeComplete',this.handleRouteChangeComplete)
  }

  render(){
    return(
      <>
        <MainLayout>
          <h1>this is about page</h1>
          <Message/>
          <br/>
          <span onClick={()=>Router.push('/contact')}>
            click me now
          </span>
        </MainLayout>
      </>
    )
  }
}

export default About;