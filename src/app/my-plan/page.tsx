"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import { toast } from "react-toastify";
import { Clock3, Flame, Star } from "lucide-react";

  const MyPlan = () => {
  const {plan,saved, removeFromPlan, removeSaved,} = usePlan();
  const [activeTab, setActiveTab] =  useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");
  const [completedWorkouts, setCompletedWorkouts] =useState<number[]>([]);
  const currentWorkouts = activeTab === "plan" ? plan : saved;
  const totalExercises = currentWorkouts.length;
  const totalMinutes =currentWorkouts.reduce( (total, workout) =>  total + workout.duration, 0);
  const totalCalories = currentWorkouts.reduce(  (total, workout) =>   total + workout.caloriesBurned, 0 );
  const sortedWorkouts =[...currentWorkouts].sort((a, b) => {

      if (sortBy === "duration") {
        return a.duration - b.duration; }
      if (sortBy === "calories") {
        return ( a.caloriesBurned -b.caloriesBurned);
      }

      return a.rating - b.rating;
    });

  return (
    <main className="min-h-svh px-10 lg:px-20 py-10 bg-black text-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          MY PLAN
        </h1>
        <p className="text-gray-400 mt-2">
          Your workouts, organized and ready to go.
        </p>
      </div>


     
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
      <div className="bg-[#11141a] border border-gray-800 rounded-xl p-5">
       <p className="text-gray-400 text-sm">
         EXERCISES
      </p>
     <h2 className="text-3xl font-bold mt-2 text-[#ccff00]">
       {totalExercises}
      </h2>
    </div>

    <div className="bg-[#11141a] border border-gray-800 rounded-xl p-5">

          <p className="text-gray-400 text-sm">
            MINUTES
          </p>
          <h2 className="text-3xl font-bold mt-2">
            {totalMinutes}
          </h2>
        </div>

        <div className="bg-[#11141a] border border-gray-800 rounded-xl p-5">
          <p className="text-gray-400 text-sm">
            CALORIES
          </p>
          <h2 className="text-3xl font-bold mt-2">
            {totalCalories}
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button onClick={() =>setActiveTab("plan")}
          className={activeTab === "plan"  ? "px-4 py-2 rounded-lg bg-[#272b34] text-gray-200 text-sm" : "px-4 py-2 rounded-lg text-gray-400 text-sm hover:bg-[#11141a]" } >
            Todays Plan
          </button>


          <button onClick={() => setActiveTab("saved")}className={
              activeTab === "saved"? "px-4 py-2 rounded-lg bg-[#272b34] text-gray-200 text-sm": "px-4 py-2 rounded-lg text-gray-400 text-sm hover:bg-[#11141a]"}>
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label
            htmlFor="sort"
            className="text-xs text-gray-500">
            Sort By
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as | "duration" | "calories"| "rating")
            }
            className="px-3 py-2 rounded-lg bg-[#11141a] border border-gray-800 text-gray-300 text-sm outline-none">

            <option value="duration">
              Duration
            </option>

            <option value="calories">
              Calories
            </option>

            <option value="rating">
              Rating
            </option>

          </select>

        </div>

      </div>

      {currentWorkouts.length === 0 ? (
        <div className="border border-dashed border-gray-800 rounded-xl text-center py-20">
          <h2 className="text-2xl font-bold mb-3">
            NOTHING HERE YET
          </h2>
          <p className="text-gray-400 mb-6">
            Browse the library and add a lift to get things moving.
          </p>
          <Link
            href="/"
            className="inline-block px-5 py-3 rounded-lg bg-[#ccff00] text-black font-semibold">
            Go to workouts
          </Link>
        </div>

      ) : (

        <div className="space-y-4">
          {sortedWorkouts.map((workout) => {
            const isCompleted =
              completedWorkouts.includes(
                workout.id );

            return (

              <div
                key={workout.id}
                className={`bg-[#11141a] border border-gray-800 rounded-xl p-3 ${
                  isCompleted
                    ? "opacity-60"
                    : "" }`} >

        <div className="flex flex-col sm:flex-row items-center gap-4">
           <div className="w-full sm:w-24 h-20 shrink-0">
               <Image
                      src={workout.image}
                      alt={workout.name}
                      width={150}
                      height={100}
                      className="w-full h-full object-cover rounded-lg"/>
             </div>

    <div className="flex-1 w-full">
       <h2 className="font-bold text-lg">
       {workout.name}
     </h2>

                    <p className="text-sm text-gray-500">
                      {workout.equipment}
                    </p>

                    <div className="flex flex-wrap gap-4 text-xs text-gray-400 mt-2">
                      <span className="flex items-center gap-1">
                        <Clock3
                          size={17}
                          className="text-[#ccff00]" />
                        {workout.duration} min
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame
                          size={17}
                          className="text-[#ccff00]" />
                        {workout.caloriesBurned} kcal
                      </span>
                      <span className="flex items-center gap-1">
                        <Star
                          size={17}
                          className="text-[#ccff00]" />
                        {workout.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/workouts/${workout.id}`}
                      className="px-4 py-2 text-sm text-gray-400 border border-gray-600 rounded-full hover:text-white"  >
                      View Details
                    </Link>               
                    <button  onClick={() => {

      if (!isCompleted) {
         setCompletedWorkouts(
           (previous) => [ ...previous, workout.id, ]);
           toast.success( "Workout marked as done" ); } }}
           disabled={isCompleted}className={
           isCompleted ? "px-4 py-2 text-sm bg-gray-700 text-gray-400 rounded-full font-semibold cursor-not-allowed": "px-4 py-2 text-sm bg-[#ccff00] text-black rounded-full font-semibold" } >
            {isCompleted ? "✓ Done" : "✓ Mark as Done"}
</button>

                    <button
                      onClick={() => {
                        if (activeTab === "plan") {
                          removeFromPlan(workout.id  );
                          toast.success( "Removed from today's plan" );}
                           else {
                          removeSaved(workout.id );
                          toast.success( "Removed from saved" );
                        } }} className="px-2 py-2 text-gray-400 hover:text-white" >
                      ×
                 </button>
            </div>
           </div>
       </div>
      );
    })}

    </div>
  )}

    </main>
  );
};

export default MyPlan;