import "./App.css"
import { motion } from "framer-motion"

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="nav">
        <h2>Portfolio</h2>
        <div>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Lakshmana Perumal A
        </motion.h1>
        <p>MERN Stack Developer</p>

        <div className="buttons">
          <a href="https://github.com/Lachu-Developer" target="_blank">
            <button>GitHub</button>
          </a>

          <a href="/resume.pdf" download>
            <button className="secondary">Resume</button>
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="grid">
          <div className="card">
            <h3>Task Manager</h3>
            <p>Full-stack MERN app with JWT auth & CRUD</p>
            <a href="https://your-live-app.vercel.app" target="_blank">Live</a>
          </div>

          <div className="card">
            <h3>Auth System</h3>
            <p>Login/signup with bcrypt & JWT</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>JWT</span>
          <span>Git</span>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: xlakshmanaperumalx@gmail.com</p>
        <p>Phone: +91 9360547401</p>
      </section>

    </div>
  )
}

export default App