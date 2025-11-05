import myPhoto from "../assets/profile.png";
import gmailIcon from "../assets/gmail.png";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import resume from "../data/Vinuthna_Hasthi.pdf";

export default function About() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      };
      return (
        <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >

<div style={{ marginBottom: "5px" }}>
        <h1>Hi! I'm Vinuthna <span role="img" aria-label="waving hand">👋</span></h1>
      </div>
          <section className="header" style={{ display: "flex", alignItems: "center", gap: "40px", marginBottom: "20px" }}>
        {/* Profile Image */}
        <img
          src={myPhoto}
          alt="Vinuthna Hasthi"
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #a7d3ff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {/* LinkedIn */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={linkedinIcon} alt="LinkedIn" style={{ width: "25px" }} />
            <a href="https://www.linkedin.com/in/vinuthnahasthi/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>

          {/* Gmail */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={gmailIcon} alt="Gmail" style={{ width: "25px" }} />
            <a href="mailto:vinuthna.h@gmail.com">Email</a>
          </div>

          {/* GitHub */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={githubIcon} alt="GitHub" style={{ width: "25px" }} />
            <a href="https://github.com/vhasthi" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>
    
          {/* Navigation Buttons */}
          <p style={{ color: "white" }}>
            Go to:
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("projects")}>Projects</button>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
            <button onClick={() => window.open(resume, "_blank", "noopener,noreferrer")}>
            Resume</button>
          </p>
    
          {/* About / Intro Section */}
          <section id="about" className="intro" style={{
    maxWidth: "800px",        // keep text width readable
    margin: "0 auto",         // center horizontally
    padding: "40px 20px 20px",// reduce bottom padding
    textAlign: "center",      
    fontFamily: "sans-serif", 
  }}
  >
            <p>
              My name is <strong>Vinuthna Hasthi</strong> and I’m currently pursuing a
              degree in <strong>Machine Learning and Neural Computation</strong> at the
              <strong> University of California, San Diego</strong>, with a minor in
              Data Science and Supply Chain. I’m passionate about designing intelligent,
              data-driven systems that create real-world impact.
            </p>
            <p>
              My experience spans <strong>AI development, data engineering, and applied
              machine learning</strong>. I’ve worked on NLP-based recommendation models,
              machine learning pipelines, and visualization dashboards. My interests
              include <strong>recommendation systems, ranking models, and applied ML
              research</strong>. In my free time, I enjoy exploring new technologies and
              continuously learning.
            </p>
          </section>
        </div>
      );
    }
