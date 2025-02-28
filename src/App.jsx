import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import WorkoutOfTheDay from "./pages/WorkoutOfTheDay";
import WorkoutLog from "./pages/WorkoutLog";

function App() {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem("workouts");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    console.log("App workouts updated:", workouts);
    try {
      localStorage.setItem("workouts", JSON.stringify(workouts));
    } catch (error) {
      console.error("Failed to save workouts to localStorage:", error);
    }
  }, [workouts]);

  console.log("Rendering App with workouts:", workouts);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4 text-white shadow-md">
          <ul className="flex space-x-6 justify-center">
            <li>
              <Link to="/" className="hover:underline font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/wotd" className="hover:underline font-medium">
                Workout of the Day
              </Link>
            </li>
            <li>
              <Link to="/log" className="hover:underline font-medium">
                Workout Log
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Home workouts={workouts} setWorkouts={setWorkouts} />}
          />
          <Route path="/wotd" element={<WorkoutOfTheDay />} />
          <Route path="/log" element={<WorkoutLog workouts={workouts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
