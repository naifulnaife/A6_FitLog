import type { IWorkout } from "@/types/workout";
import WorkoutActions from "@/components/WorkoutActions";
import Image from "next/image";

interface PageProps {params: Promise<{ id: string }>;}

const WorkoutDetails = async ({ params }: PageProps) => {
const { id } = await params;
const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
const workout: IWorkout = await response.json();

  return (
    <main className="px-6 lg:px-20 py-10 bg-black text-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16  mx-auto">

        <div>
          <Image src={workout.image} alt={workout.name} width={700} height={1200}
            className="w-full h-162.5 lg:h-full object-cover rounded-2xl" />
        </div>


    
        <div>

          <div className="flex gap-2 flex-wrap mb-5">
            {workout.muscleGroups.map((group) => (
              <span key={group} className="badge bg-[#ccff00] text-black border-none">
                {group}
              </span> ))}
          </div>


          
          <h1 className="text-4xl lg:text-5xl font-bold mb-5"> {workout.name}</h1>
          <p className="text-gray-400 leading-7 mb-8">{workout.description}</p>

          <div className="rounded-xl bg-gray-900 text-white overflow-hidden">

           
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-800">
              <p className="text-xs text-gray-500 uppercase">
                Equipment
              </p>
              <p className="text-sm">
                {workout.equipment}
              </p>
            </div>
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-800">
              <p className="text-xs text-gray-500 uppercase">
                Difficulty
              </p>
              <p className="text-sm">
                {workout.difficulty}
              </p>
            </div>
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-800">
              <p className="text-xs text-gray-500 uppercase">
                Sets
              </p>
              <p className="text-sm">
                {workout.sets}
              </p>
            </div>
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-800">
              <p className="text-xs text-gray-500 uppercase">
                Reps
              </p>
              <p className="text-sm">
                {workout.reps}
              </p>
            </div>
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-800">
              <p className="text-xs text-gray-500 uppercase">
                Duration
              </p>
              <p className="text-sm">
                {workout.duration} min
              </p>
            </div>
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-800">
              <p className="text-xs text-gray-500 uppercase">
                Calories
              </p>
              <p className="text-sm">
                {workout.caloriesBurned} kcal
              </p>
            </div>
            <div className="flex justify-between items-center px-5 py-4">
              <p className="text-xs text-gray-500 uppercase">
                Rating
              </p>

              <p className="text-sm">
                {workout.rating}
              </p>
            </div>

          </div>


          <div className="mt-8">
            <WorkoutActions workout={workout} />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">
              Instructions
            </h2>
            <div className="space-y-5">
              {workout.instructions.map((instruction, index) => (
           <div key={index}className="flex gap-4">
                  <span className="font-bold text-[#ccff00]">
                    {index + 1}.
                  </span>
                  <p className="text-gray-400 leading-6">
                    {instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;