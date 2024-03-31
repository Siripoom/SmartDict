import React from "react";
import { AiOutlineMonitor } from "react-icons/ai";
import poom from '../assets/poom.jpg'
function About() {
  return (
    <section className="section-white">
      <div className="col-md-12 text-center">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2013/05/12/09/37/translate-110777_640.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold">About us</h1>
              {/* <p className="mb-5">
                It is a website that provides language translation services,
                which could be an online tool or service where human translators
                offer text translation from one language to another.
                Alternatively, it could be a website related to presenting
                information about language translation, with articles,
                recommendations, or various translation assistance tools.
                Generally, "Translate" in the context of a website relates to
                language translation or services related to facilitating
                communication between different languages.
              </p> */}
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="section text-center justify-center my-5">
        <h2 className="section-title text-5xl font-bold my-3">
          Services
        </h2>
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title">service 1</div>
            <div className="stat-value">Words </div>
            {/* <div className="stat-desc">From January 1st to February 1st</div> */}
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">service 2</div>
            <div className="stat-value text-secondary">Translate</div>
            {/* <div className="stat-desc text-secondary">en-th</div> */}
          </div>

          {/* <div className="stat place-items-center">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div> */}
        </div>
      </div>
      <div className="col-md-12 text-center my-5">
        <h2 className="section-title text-3xl font-bold">
          The Teams Project SmartDict
        </h2>
        <br />
        <p className="section-subtitle">
          Positions and responsibilities of each individual
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center my-3">
        <div className="card shadow-xl">
          <div className="avatar justify-center">
            <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 my-3">
              <img src="https://scontent.fbkk18-2.fna.fbcdn.net/v/t39.30808-1/431799366_3576234712617455_1410869206141780594_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHKwN0Hcm9lrXHf0B7m1XM-p5hOZHT-cc2nmE5kdP5xzcQWkwDcykLeWwlpMktvS8cafRjpxYsvDxmMgn96s1an&_nc_ohc=auUnlo4-AkEAX_ubxM_&_nc_ht=scontent.fbkk18-2.fna&oh=00_AfC6zgYInNyXHCBh_gqZ8UnZ6snmK-USDsVJ5Ih4ji1VYw&oe=660EDD9B" />
            </div>
          </div>
          <div className="p-4">
            <h4>Phalat Phonphatsawat</h4>
            <p className="p-5">UX/UI,Front-end</p>
          </div>
        </div>
        <div className="card shadow-2xl">
          <div className="avatar justify-center">
            <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 my-3">
              <img src={poom} />
            </div>
          </div>
          <div className="p-4">
            <h4>Siripoom Arthornsirirat</h4>
            <p className="p-5">Full-stack</p>
          </div>
        </div>
        <div className="card shadow-xl">
          <div className="avatar justify-center">
            <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 my-3">
              <img src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t1.15752-9/416242559_345930398501785_8735749436621081379_n.png?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF-eJ4DcQYJ6groP2NFY-78qnMPySLYOLWqcw_JItg4tYYuSEnokZmzlfKLXvfMrM4N89YCYNqBqy7cjFudx_Sb&_nc_ohc=0rfoTtB8OTQAX-uG4Rw&_nc_ht=scontent.fbkk28-1.fna&oh=03_AdQm1CnN5cLjm13cnhV3IMmEDqZF6ol0JMW5_MUtAMLaqg&oe=6628C96A" />
            </div>
          </div>
          <div className="p-4">
            <h4>Sumat</h4>
            <p className="p-5">Back-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
