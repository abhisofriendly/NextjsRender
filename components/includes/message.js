import React from 'react';
import { withRouter } from 'next/router';

const Message = (props)=>{
  const hander=()=>{
    props.router.push({
        pathname:'/users/profile',
        query:{userId:1}
    },'/users/profile/1')
  }
  return(
    <>
      <div>Hello</div>
      <div>I am the {props.router.pathname} path</div>
      <div>
        click on <span onClick={hander}>here</span> to read more
      </div>
    </>
  )
}

export default withRouter(Message);
