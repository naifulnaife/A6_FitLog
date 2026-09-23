import type { IWorkout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

const Library = async () => {

  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  const workouts: IWorkout[] = await response.json();

  return (
    <section id="library" className="bg-black p-10 lg:px-20 ">

      <div className="pb-10">
        <h2 className="text-white font-bold text-3xl">THE LIBRARY</h2>
        <p className="text-gray-400">Twelve lifts covering every major muscle group.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}

      </div>

    </section>
  );
};

export default Library;
        