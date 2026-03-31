import "./App.css"
import { motion } from "framer-motion"
import { useState } from "react"

function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? "dark" : "light"}>

      {/* NAV */}
      <nav className="nav">
        <h2>Portfolio</h2>
        <div>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button onClick={() => setDark(!dark)}>🌗</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Lakshmana Perumal A
        </motion.h1>
        <p>MERN Stack Developer</p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="grid">

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <img src="./assets/taskManager-project.png" />
            <h3>Task Manager</h3>
            <p>JWT Auth + CRUD + Deployment</p>
            <a href="https://your-live-app.vercel.app" target="_blank">Live</a>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <img src="./assets/taskManager-project.png" />
            <h3>Auth System</h3>
            <p>Login/signup using bcrypt & JWT</p>
          </motion.div>

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
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        <form className="form">
          <input placeholder="Your Name" />
          <input placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </section>

    </div>
  )
}

export default App