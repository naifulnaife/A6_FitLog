
import Image from "next/image";
import Link from "next/link";
import type { IWorkout } from "@/types/workout";
import { Clock3, Flame, Star } from "lucide-react";

interface WorkoutCardProps { workout: IWorkout;}
const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="card bg-base-100 shadow-md rounded-2xl">

        <figure>
          <Image src={workout.image} alt={workout.name} width={500} height={300} className="w-full h-60 object-cover"/>
        </figure>

        <div className="card-body bg-gray-900 text-gray-400 rounded-b-2xl">

          <div className="flex gap-2">
            {workout.muscleGroups.map((group) => (
            <span key={group} className="badge bg-[#C2F800] font-semibold p-3 " >
                {group}
            </span>
            ))}
          </div>

          <h2 className="card-title text-white"> {workout.name}</h2>
          <p>{workout.equipment}</p>

          <div className="flex gap-4 border-t border-gray-700 py-2">
            <span className="flex gap-1"> <Clock3 size={18} /> {workout.duration} min</span>
            <span  className="flex gap-1"><Flame size={18} />{workout.caloriesBurned} kcal</span>
            <span className="flex gap-1"> <Star size={18} />{workout.rating}</span>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
     
