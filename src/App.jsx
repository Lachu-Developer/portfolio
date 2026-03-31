import "./App.css"
import { motion } from "framer-motion"

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="nav">
        <h3>LP</h3>
        <div>
          <a href="#project">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Lakshmana Perumal
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Building clean & scalable web applications
        </motion.p>
      </section>

      {/* PROJECT */}
      <section id="project" className="section">
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Task Manager</h2>
          <p>
            Full-stack MERN app with JWT authentication, protected routes,
            and CRUD operations.
          </p>

          <div className="links">
            <a href="https://your-live-app.vercel.app" target="_blank">Live</a>
            <a href="https://github.com/Lachu-Developer" target="_blank">Code</a>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Skills
        </motion.h3>

        <div className="skills">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>JWT</span>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Contact
        </motion.h3>

        <p className="contact">
          xlakshmanaperumalx@gmail.com <br />
          +91 9360547401
        </p>
      </section>

    </div>
  )
}

export default App