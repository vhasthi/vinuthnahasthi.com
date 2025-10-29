export default function Skills() {
    const skills = {
      Languages: ["Python", "Java", "R", "SQL", "HTML", "CSS"],
      "ML / AI": ["Scikit-Learn", "TensorFlow", "Pandas", "NumPy", "Feature Engineering", "NLP", "Model Optimization"],
      "Data Tools": ["Airflow", "Kafka", "Tableau", "Power BI", "Excel", "PySpark"],
      Cloud: ["AWS", "GCP"],
      Databases: ["SQL Server", "PostgreSQL", "MySQL", "SQLite", "Redshift"],
    };
  
    return (
      <section
        id="skills"
        className="min-h-screen px-8 py-12"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", fontFamily: "sans-serif" }}
      >
        <h2 className="text-3xl font-bold mb-8 text-blue-600">Skills</h2>
  
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={{ marginBottom: "30px", maxWidth: "800px" }}>
            <h3 className="font-semibold text-xl mb-4">{category}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
              {items.map((skill) => (
                <span
                  key={skill}
                  style={{
                    backgroundColor: "#a7d3ff",
                    color: "#000",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    );
  }
  