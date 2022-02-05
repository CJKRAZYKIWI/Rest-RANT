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
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBFooter } from 'mdb-react-ui-kit';


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
                <link href="https://fonts.googleapis.com/css2?family=Festive&family=Fjalla+One&family=Syne+Tactile&family=Yellowtail&display=swap" rel="stylesheet"></link>
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
                <MDBNavbarLink href='/places'>Places</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/places/new'>Add Place</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
      </header>
        <div className='Ramenpic'>
          <div className='ramenstuff'>
            <div className='text-white'> 
            
              <h1 className='mb-3 '>Please Ramen Calm...</h1>
              <h4 className='mb-3'>Push button below if your signficant other is HANGRY</h4>
              <a className='mb-3 btn btn-outline-light btn-lg' href="/places" role='button'>
               ~~~~~~Find Place~~~~~~</a>
            </div>
            
          </div>
        </div>
   

        <div className='Donutpic'>
          <div className='donutstuff'>
          
            <h1 className='donutp1'>If</h1>
            <h1 className='donutp2'>you</h1>
            <h1 className='donutp3'>donut</h1>
            <h1 className='donutp4'>mind</h1>
            <h1 className='donutp5'>sharing</h1>
            <a className='donuteB' href="/places/new" role='button'>A New Restaurant</a>
          </div>
        </div>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>I'll work on this more later lol:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>CGVG
              </h6>
              <p>
              I love my girlfriend
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Ill add future projects here</h6>
              <p>
                <a href='#!' className='text-reset'>
                  hi
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  hello
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  its 3AM
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  im so sleepy
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Follow my mental health account on Instagram
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                @cjcares
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> c4093galacgac@gmail.com
              </p>
              <p>
                <i className='fas fa-print me-3'></i> Cj Krazy Kiwi on Twitch
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }} href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>

        </body>
        </html>

    )}

module.exports = home