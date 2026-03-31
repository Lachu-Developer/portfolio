import "./App.css"
import { motion } from "framer-motion"

function App() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          Lakshmana Perumal
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
        >
          MERN Stack Developer
        </motion.p>
      </section>

      {/* PROJECT */}
      <section className="section">
        <motion.div 
          className="project"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
        >
          <h2>Task Manager</h2>
          <p>
            A full-stack application with JWT authentication and CRUD operations.
          </p>

          <div className="links">
            <a href="https://your-live-app.vercel.app" target="_blank">View Live</a>
            <a href="https://github.com/Lachu-Developer" target="_blank">GitHub</a>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h3>Skills</h3>
        <p className="skills">
          React · Node.js · Express · MongoDB · JWT · Git
        </p>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h3>Contact</h3>
        <p className="contact">
          xlakshmanaperumalx@gmail.com  
          <br />
          +91 9360547401
        </p>
      </section>

    </div>
  )
}

export default App