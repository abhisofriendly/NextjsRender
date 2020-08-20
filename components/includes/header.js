import React from 'react';
import Link from 'next/link'

const Header  = () => {
  return(
    <>
      <header>
        <div className='container-fluid'>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Myapp.com</a>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Link href="/"><a className="nav-item nav-link">Home</a></Link>
              <Link href="/contact"><a className="nav-item nav-link">Contact</a></Link>
              <Link href="/about"><a className="nav-item nav-link">About</a></Link>
              <Link href="/users"><a className="nav-item nav-link">Users</a></Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header