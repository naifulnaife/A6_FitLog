
import Image from "next/image";
import Link from "next/link";
import type { IWorkout } from "@/types/workout";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="card bg-base-100 shadow-md">

        <figure>
          <Image
            src={workout.image}
            alt={workout.name}
            width={500}
            height={300}
            className="w-full h-60 object-cover"
          />
        </figure>

        <div className="card-body">

          {/* Categories */}
          <div className="flex gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="badge"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Name */}
          <h2 className="card-title">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p>
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="flex gap-4">
            <span>
              {workout.duration} min
            </span>

            <span>
              {workout.caloriesBurned} kcal
            </span>

            <span>
              ⭐ {workout.rating}
            </span>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
     
