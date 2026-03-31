import "./App.css"

function App() {
  return (
    <div className="container">

      {/* HEADER */}
      <header className="header">
        <h1>Lakshmana Perumal</h1>
        <p>MERN Stack Developer</p>
      </header>

      {/* PROJECT */}
      <section className="section">
        <h2>Project</h2>

        <div className="project">
          <h3>Task Manager</h3>
          <p>
            Full-stack MERN application with JWT authentication and CRUD operations.
          </p>

          <div className="links">
            <a href="https://your-live-app.vercel.app" target="_blank">Live</a>
            <a href="https://github.com/Lachu-Developer" target="_blank">GitHub</a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>
        <p>React · Node.js · Express · MongoDB · JWT · Git</p>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>
        <p>Email: xlakshmanaperumalx@gmail.com</p>
        <p>Phone: +91 9360547401</p>
      </section>

    </div>
  )
}

export default App