import React, { useState } from "react";
import { projects } from "./myWork";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "./Mywork.css";
import GetOneProject from "./GetOneProject";

function Mywork() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [project, setProject] = useState(null);
  const [openProject, setopenProject] = useState(false);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClick = (work) => {
    setopenProject(true);
    setProject(work);
  };

  return (
    <div id="work" className="mywork">
      {openProject && (
        <GetOneProject project={project} setopenProject={setopenProject} />
      )}
      <div className="mywork_title">
        <h1>My Latest Works</h1>
      </div>
      <div className="mywork_container">
        {currentProjects.map((work) => (
          <div key={work.id} className="card">
            <img
              onClick={() => handleClick(work)}
              src={work.image}
              alt={work.name}
            />
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`pagination_button ${currentPage === 1 ? "disabled" : ""}`}
        >
          <ChevronLeft />
        </button>
        <span className="pagination_text">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`pagination_button ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Mywork;
