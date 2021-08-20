import "./FeaturedProjects.css";

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Fragment } from "react";

import { featuredRepositories } from "../../consts";

SwiperCore.use([Navigation]);

const FeaturedProjects = ({ darkMode }) => {
  return (
    <div id="featuredProjects" className={darkMode ? "dark" : null}>
      <div id="featuredProjectsOverlay">
        <div id="featuredProjectsTitle">Featured Projects</div>
        <Fragment>
          <Swiper id="featuredProjectsContent" draggable navigation>
            {featuredRepositories.map((project, index) => (
              <SwiperSlide key={index} className="featuredProjectContainer">
                <div className="featuredProject">
                  <img src={project.image} alt="project" />
                  <div className="featuredProjectContent">
                    <div className="featuredProjectContentField">
                      {project.field}
                    </div>
                    <div className="featuredProjectContentTitle">
                      {project.title}
                    </div>
                    <div className="featuredProjectContentDescription">
                      {project.description}
                    </div>
                    <a
                      className="featuredProjectContentButton"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      View Repository
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Fragment>
      </div>
    </div>
  );
};

export default FeaturedProjects;
