const React = require ('react');
const Def = require( './default');
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCardText
} from 'mdb-react-ui-kit';
import Image from 'react-bootstrap/Image'
import { MDBRipple } from 'mdb-react-ui-kit';



function home () {
    return (
        <html> 
            <head>
                <meta name ="viewport" content= "width=device-width, initial-scale = 1.0"></meta>
                <title> Home Page</title>
                <link rel = "stylesheet" href= "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel = "stylesheet" href = "/css/home.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"></link>

                
            </head>
            <body>
            <header>
      <MDBNavbar expand='lg' light bgColor='white' sticky>
      <MDBContainer fluid>
        <span className='navbar-text'> An app better than Yelp with puns that help </span>
      </MDBContainer>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse ' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0   justify-content-center'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
      </header>
      <div className='ramenC'>
        <div className='Ramenpic'style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80')"}}>
          <div className='ramenstuff'>
            <div className='text-white'>
              <h1 className='mb-3 '>Please Ramen Calm...</h1>
              <h4 className='mb-3'>Push button below if your signficant other is HANGRY</h4>
              <a className='mb-3 btn btn-outline-light btn-lg' href="/places" role='button'>
                Find Place
              </a>
            </div>
          </div>
        </div>
      </div>
   
    <div
        className='p-8 text-center bg-image'
      >
        <div className='mask1' style={{ backgroundImage: "url('https://images.unsplash.com/flagged/photo-1621757458931-a1b076e5a8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')", height:700,}}>
          <div className='donutstuff'>
            <div className='text-white1'>
              <h1 className='mb-3t '>If you donut mind...</h1>
              <h4 className='mb-3t'>add a new restaurant!</h4>
              <a className='btn btn-outline-dark btn-lg' href="/places/new" role='button'>
                Find Place
              </a>
            </div>
          </div>
        </div>
      </div>
            </body>
        </html>

    )}

module.exports = home