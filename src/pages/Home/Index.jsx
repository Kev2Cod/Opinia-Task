import React from "react";
import Navbar from "../../components/Navbar/Index";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

import ImgHero from "../../assets/image/hero.png";
import ImgProfile from "../../assets/image/profile-1.jpg";
import IconStart from "../../assets/icon/icon-star.png";
import ImgCamera from "../../assets/image/camera.png";
import ImgCameraProfile from "../../assets/image/camera-profile.png";
import ImgTrash from "../../assets/image/trash.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container style={{ height: "10000px" }}>
        <div className="bg-white shadow-sm ">
          <img src={ImgHero} className="img-hero" alt="" />
          <Row>
            <Col md={8}>
              <div className="d-flex m-3" style={{ position: "relative" }}>
                {/* Profile */}
                <div style={{ width: "70%" }}>
                  <div className="d-flex justify-content-center container-profile">
                    <img src={ImgProfile} className="img-profile" alt="" />
                    <img src={ImgCameraProfile} className="profile-camera-icon" alt="" />
                  </div>
                </div>

                <div style={{ position: "relative" }}>
                  {/* Status User */}
                  <div className="status-user">
                    <Row className="text-center p-2">
                      <Col sm={4} className="">
                        <span>Postingan</span>
                        <span className="fw-bold mt-2">12</span>
                      </Col>
                      <Col sm={4}>
                        <span>Mengikuti</span>
                        <span className="fw-bold mt-2">12</span>
                      </Col>
                      <Col sm={4}>
                        <span>Pengikut</span>
                        <span className="fw-bold mt-2">12</span>
                      </Col>
                    </Row>
                  </div>

                  {/* Data User */}
                  <div className="d-flex align-items-center">
                    <span className="fs-3 fw-bold">Kevin Williams</span>
                    <div className="d-inline ms-3 ">
                      <img src={IconStart} alt="star" className="ms-1" />
                      <img src={IconStart} alt="star" className="ms-1" />
                      <img src={IconStart} alt="star" className="ms-1" />
                      <img src={IconStart} alt="star" className="ms-1" />
                      <img src={IconStart} alt="star" className="ms-1" />
                    </div>
                  </div>

                  <div className="">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor atque facilis. Nisi molestias nulla nemo perspiciatis eos...</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="text-end" style={{ position: "relative" }}>
              <div className="d-flex gap-2 justify-content-end me-4 btn-hero">
                <img src={ImgCamera} alt="" />
                <img src={ImgTrash} alt="" />
              </div>
              <button className="btn-var-green mt-3 me-4">Edit Profil</button>
            </Col>
          </Row>
        </div>

        <Row>
          <Col md={5}>
            <h1>Test</h1>
          </Col>
          <Col md={7}>
            <h1>Test</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
