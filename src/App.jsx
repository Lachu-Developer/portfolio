import "./App.css"

function App() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <h1>Lakshmana Perumal A</h1>
        <p>MERN Stack Developer</p>
        <a href="https://github.com/Lachu-Developer" target="_blank">
          <button>GitHub</button>
        </a>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>Projects</h2>

        <div className="card">
          <h3>Task Manager App</h3>
          <p>
            Full-stack MERN application with JWT authentication, CRUD operations,
            and deployment using Render & Vercel.
          </p>
          <a href="https://task-frontend-seven-dusky.vercel.app">
            Live Demo
          </a>
        </div>

      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Skills</h2>
        <p>React | Node.js | Express | MongoDB | JWT | Git</p>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: xlakshmanaperumalx@gmail.com</p>
        <p>Phone: +91 9360547401</p>
      </section>

    </div>
  )
}

export default App