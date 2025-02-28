import { useState } from "react";

function WorkoutDayDetail({ date, workouts, setWorkouts }) {
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    duration: "",
    target: "",
    steps: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const dateKey = date.toDateString();

  const addWorkout = (e) => {
    e.preventDefault();
    console.log("addWorkout triggered with:", newWorkout);
    if (
      !newWorkout.name.trim() ||
      !newWorkout.duration.trim() ||
      !newWorkout.target.trim() ||
      !newWorkout.steps.trim()
    ) {
      alert("Please fill out all fields before adding a workout.");
      return;
    }
    if (editIndex !== null) {
      setWorkouts((prev) => {
        const updatedWorkouts = [...(prev[dateKey] || [])];
        updatedWorkouts[editIndex] = newWorkout;
        const newState = { ...prev, [dateKey]: updatedWorkouts };
        console.log("After edit:", newState);
        return newState;
      });
      setEditIndex(null);
    } else {
      setWorkouts((prev) => {
        const newState = {
          ...prev,
          [dateKey]: [...(prev[dateKey] || []), newWorkout],
        };
        console.log("After add:", newState);
        return newState;
      });
    }
    setNewWorkout({ name: "", duration: "", target: "", steps: "" });
  };

  const editWorkout = (index) => {
    setEditIndex(index);
    setNewWorkout(workouts[dateKey][index]);
  };

  const deleteWorkout = (index) => {
    setWorkouts((prev) => {
      const updatedWorkouts = [...(prev[dateKey] || [])];
      updatedWorkouts.splice(index, 1);
      const newState = {
        ...prev,
        [dateKey]: updatedWorkouts.length ? updatedWorkouts : undefined,
      };
      console.log("After delete:", newState);
      return newState;
    });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{dateKey}</h2>
      <form onSubmit={addWorkout} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Workout Name"
          value={newWorkout.name}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, name: e.target.value })
          }
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={newWorkout.duration}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, duration: e.target.value })
          }
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Target Body Part"
          value={newWorkout.target}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, target: e.target.value })
          }
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Steps"
          value={newWorkout.steps}
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, steps: e.target.value })
          }
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-y"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
        >
          {editIndex !== null ? "Update Workout" : "Add Workout"}
        </button>
      </form>
      <div className="space-y-4">
        {(workouts[dateKey] || []).map((w, i) => (
          <div
            key={i}
            className="p-4 bg-gray-50 rounded-md border border-gray-200 flex justify-between items-start"
          >
            <div>
              <p className="font-bold text-gray-800">
                {w.name} -{" "}
                <span className="font-normal">{w.duration} mins</span>
              </p>
              <p className="text-gray-600">Target: {w.target}</p>
              <p className="text-gray-600 whitespace-pre-wrap">
                Steps: {w.steps}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => editWorkout(i)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => deleteWorkout(i)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutDayDetail;
