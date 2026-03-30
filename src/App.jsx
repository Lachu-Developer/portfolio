export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="bg-gray-800 p-8 rounded-2xl text-center shadow-xl">
          <h1 className="text-4xl font-bold">Lakshmana Perumal A</h1>
          <p className="text-gray-400 mt-2">MERN Full Stack Developer</p>

          <div className="flex justify-center gap-6 mt-4 text-xl">
            <a href="mailto:xlakshmanaperumalx@gmail.com">📧</a>
            <a href="https://github.com/Lachu-Developer">💻</a>
            <span>📞 +91 9360547401</span>
          </div>

          <a href="/resume.pdf" download>
            <button className="mt-5 bg-white text-black px-5 py-2 rounded-xl hover:scale-105 transition">
              Download Resume
            </button>
          </a>
        </div>

        {/* ABOUT */}
        <div className="bg-gray-800 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-3">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate MERN stack developer focused on building scalable 
            and real-world web applications. I love solving problems and creating 
            clean, user-friendly interfaces.
          </p>
        </div>

        {/* SKILLS */}
        <div className="bg-gray-800 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["HTML","CSS","JavaScript","React","Node.js","Express","MongoDB","Git"].map(skill => (
              <div key={skill} className="bg-gray-700 p-3 rounded-xl text-center hover:bg-gray-600 transition">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div className="bg-gray-800 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Project 1 */}
            <div className="bg-gray-700 p-5 rounded-xl hover:scale-105 transition">
              <h3 className="text-lg font-semibold">Task Manager</h3>
              <p className="text-sm text-gray-300 mt-2">
                Full-stack task management app with CRUD and authentication.
              </p>
              <div className="flex gap-4 mt-3">
                <a href="#" className="text-blue-400">🔗 Live</a>
                <a href="https://github.com/Lachu-Developer" className="text-green-400">💻 Code</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-700 p-5 rounded-xl hover:scale-105 transition">
              <h3 className="text-lg font-semibold">Notes App</h3>
              <p className="text-sm text-gray-300 mt-2">
                Create, edit and delete notes with clean UI.
              </p>
              <div className="flex gap-4 mt-3">
                <a href="#" className="text-blue-400">🔗 Live</a>
                <a href="https://github.com/Lachu-Developer" className="text-green-400">💻 Code</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-700 p-5 rounded-xl hover:scale-105 transition">
              <h3 className="text-lg font-semibold">Blog App</h3>
              <p className="text-sm text-gray-300 mt-2">
                Blog platform with login and post system.
              </p>
              <div className="flex gap-4 mt-3">
                <a href="#" className="text-blue-400">🔗 Live</a>
                <a href="https://github.com/Lachu-Developer" className="text-green-400">💻 Code</a>
              </div>
            </div>

          </div>
        </div>

        {/* CONTACT */}
        <div className="bg-gray-800 p-6 rounded-2xl text-center">
          <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
          <p className="text-gray-400">Open for job opportunities</p>

          <a href="mailto:xlakshmanaperumalx@gmail.com">
            <button className="mt-4 bg-blue-500 px-6 py-2 rounded-xl hover:bg-blue-600 transition">
              Send Email
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}