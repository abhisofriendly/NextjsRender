import React,{Component} from 'react';
import MainLayout from '../components/layouts/mainLayout'
import "../components/css/style.css"

class Contact extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
        <MainLayout>
          <h2>welcone to contact page</h2>
          <div className="jsxStyled">styled with styled jsx</div>
          <style jsx>
              {`
                .jsxStyled{
                  color:red
                }
              `}
          </style>
          <div className="hello_world">
            hewllo world
          </div>
          <button className="btn btn-primary">submit</button>
        </MainLayout>
      </>
    )
  }
}

export default Contact;