import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const FooterPagePro = () => {
  return (
    <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
      <div style={{ backgroundColor: "#21d192" }}>
        <MDBContainer>
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <Link className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </Link>
              <Link className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </Link>
              <Link className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </Link>
              <Link className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </Link>
              <Link className="ins-ic">
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>AwareWeGo</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
            An effective Agric-E-commerce solution that extend business by increasing opportunities with customers, suppliers and other farms & personalized services to individuals who visit the site more easily than larger farms.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Products</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <Link to="./shop" className="dark-grey-text">
                Vegetables & Fruit
              </Link>
            </p>
            <p>
              <Link to="./shop" className="dark-grey-text">
                Beverages
              </Link>
            </p>
            <p>
              <Link to="./shop" className="dark-grey-text">
                Splices
              </Link>
            </p>
            <p>
              <Link to="./shop" className="dark-grey-text">
                Grains
              </Link>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <Link to="./../user/dashboard" className="dark-grey-text">
                Your Account
              </Link>
            </p>
            <p>
              <Link to="#" className="dark-grey-text">
                Become an Affiliate
              </Link>
            </p>
            <p>
              <Link to="" className="dark-grey-text">
                Shipping Rates
              </Link>
            </p>
            <p>
              <Link to="#" className="dark-grey-text">
                Help
              </Link>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> Gorakhpur, UP 274203, India
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@awarewego.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <Link to="https://github.com/shsarv"> www.awarewego.com</Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;