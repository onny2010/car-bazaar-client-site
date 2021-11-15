import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="py-2">
        <Carousel className="carousel-text-color">
          <Carousel.Item>
            <img
              className="d-block w-100 banner-carousel-image"
              src="https://wallpaper.dog/large/20398367.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p className="">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-carousel-image"
              src="https://free4kwallpapers.com/uploads/originals/2021/07/07/-mustang-wallpaper.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 banner-carousel-image"
              src="https://wallpapercave.com/wp/wp8101257.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Banner;
