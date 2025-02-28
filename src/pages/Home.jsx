import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import WorkoutDayDetail from "../components/WorkoutDayDetail";

function Home({ workouts, setWorkouts }) {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => setDate(newDate);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Fitness App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Calendar
            onChange={handleDateChange}
            value={date}
            className="shadow-lg rounded-lg"
          />
        </div>
        <WorkoutDayDetail
          date={date}
          workouts={workouts}
          setWorkouts={setWorkouts}
        />
      </div>
    </div>
  );
}

export default Home;
