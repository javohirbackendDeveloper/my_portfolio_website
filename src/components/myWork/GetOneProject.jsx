import { ExternalLink, Github, X } from "lucide-react";
import React from "react";
import "./GetOneProject.css";

function GetOneProject({ project, setopenProject }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <X className="modal-close" onClick={() => setopenProject(false)} />
        <div className="modal-content">
          <img src={project?.image} alt={project?.name} className="modal-img" />
          <div className="modal-details">
            {project?.url && (
              <>
                <p>Open in Browser</p>
                <a
                  href={project?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink />
                </a>
              </>
            )}
            <p>View Source Code</p>
            <a
              href={project?.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetOneProject;
