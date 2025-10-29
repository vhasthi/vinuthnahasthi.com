import { projectsData } from "../data/projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-8 py-12"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", fontFamily: "sans-serif", marginTop: "0", }}
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-600">Projects</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px", width: "100%", maxWidth: "900px" }}>
        {projectsData.map((proj) => (
          <div
            key={proj.title}
            style={{
              padding: "20px",
              border: "1px solid #e2e8f0",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="mb-3">{proj.description}</p>

            {/* Tech stack badges */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginBottom: "10px" }}>
              {proj.tech.map((tech) => (
                <span
                  key={tech}
                  style={{
                    backgroundColor: "#a7d3ff",
                    color: "#000",
                    padding: "5px 10px",
                    borderRadius: "15px",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {proj.github && (
              <a
                href={proj.github}
                className="text-blue-500"
                style={{ display: "inline-block", marginTop: "5px", fontWeight: "500" }}
              >
                View Code →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
