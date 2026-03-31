import "./App.css"
import { motion } from "framer-motion"

function App() {
  return (
    <div className="container">

      {/* HERO */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Lakshmana Perumal A</h1>
        <p>MERN Stack Developer</p>

        <div className="buttons">
          <a href="https://github.com/Lachu-Developer" target="_blank">
            <button>GitHub</button>
          </a>

          <a href="/resume.pdf" download>
            <button className="secondary">Download Resume</button>
          </a>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>Projects</h2>

        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3>Task Manager</h3>
          <p>JWT Auth + CRUD + Full-stack deployment</p>
          <a href="https://your-live-app.vercel.app" target="_blank">Live</a>
        </motion.div>

        <motion.div className="card" whileHover={{ scale: 1.05 }}>
          <h3>Auth System</h3>
          <p>Secure login/signup using bcrypt & JWT</p>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>JWT</span>
          <span>Git</span>
        </div>
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