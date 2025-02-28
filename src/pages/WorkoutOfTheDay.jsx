function WorkoutOfTheDay() {
  const wotd = {
    name: "Push-Up Challenge",
    description: "A classic exercise to build upper body strength.",
    target: "Chest, Shoulders, Triceps",
    steps:
      "1. Start in a plank position.\n2. Lower your body until your chest nearly touches the floor.\n3. Push back up to the starting position.",
    duration: "15",
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Workout of the Day</h1>
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold">{wotd.name}</h2>
        <p className="mt-2">{wotd.description}</p>
        <p className="mt-2">
          <strong>Target:</strong> {wotd.target}
        </p>
        <p className="mt-2">
          <strong>Duration:</strong> {wotd.duration} mins
        </p>
        <p className="mt-2">
          <strong>Steps:</strong>
        </p>
        <pre className="whitespace-pre-wrap">{wotd.steps}</pre>
      </div>
    </div>
  );
}

export default WorkoutOfTheDay;
