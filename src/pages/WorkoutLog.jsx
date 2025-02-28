function WorkoutLog({ workouts }) {
  console.log("WorkoutLog rendered with workouts:", workouts);

  const groupByPeriod = (period) => {
    const grouped = {};
    Object.entries(workouts).forEach(([date, wks]) => {
      const d = new Date(date);
      let key;
      if (period === "week") {
        const weekNum = Math.ceil((d.getDate() + d.getDay()) / 7); // Simplified week calc
        key = `${d.getFullYear()}-W${weekNum}`;
      } else if (period === "month") {
        key = `${d.getFullYear()}-${d.getMonth() + 1}`;
      } else {
        key = date; // Day uses raw date string
      }
      grouped[key] = [...(grouped[key] || []), ...wks];
    });
    return grouped;
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Workout Log</h1>
      {Object.keys(workouts).length === 0 ? (
        <p className="text-gray-500 italic">No workouts logged yet.</p>
      ) : (
        ["day", "week", "month"].map((period) => (
          <div key={period} className="mb-8">
            <h2 className="text-2xl font-semibold capitalize text-blue-600 mb-4">
              {period}
            </h2>
            {Object.entries(groupByPeriod(period)).map(([key, wks]) => (
              <div
                key={key}
                className="mb-4 p-4 bg-white shadow-md rounded-lg border border-gray-200"
              >
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  {key}
                </h3>
                {wks.map((w, i) => (
                  <div
                    key={i}
                    className="mb-3 last:mb-0 p-3 bg-gray-50 rounded-md"
                  >
                    <p className="font-bold text-gray-800">
                      {w.name || "Unnamed"} -{" "}
                      <span className="font-normal">
                        {w.duration || "0"} mins
                      </span>
                    </p>
                    <p className="text-gray-600">
                      Target: {w.target || "None"}
                    </p>
                    <p className="text-gray-600 whitespace-pre-wrap">
                      Steps: {w.steps || "None"}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default WorkoutLog;
