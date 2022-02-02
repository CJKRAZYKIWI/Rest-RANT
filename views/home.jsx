const React = require ('react');
const Def = require( './default');
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
  } from 'mdb-react-ui-kit';

function home () {
    return (
        <html> 
            <head>
                <meta name ="viewport" content= "width=device-width, initial-scale = 1.0"></meta>
                <title> Home Page</title>
                <link rel = "stylesheet" href = "/css/home.css" />
            </head>
            <body>
            <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp' alt='...' />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp' alt='...' />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp' alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>

            </body>
        </html>

    )}

module.exports = home