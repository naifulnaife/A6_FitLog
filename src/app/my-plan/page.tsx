"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import { toast } from "react-toastify";
import { Clock3, Flame, Star } from "lucide-react";

const MyPlan = () => {const {plan, saved,removeFromPlan, removeSaved, } = usePlan();
const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const currentWorkouts = activeTab === "plan" ? plan : saved;
  const totalExercises = currentWorkouts.length;
  const totalMinutes = currentWorkouts.reduce((total, workout) => total + workout.duration, 0 );
  const totalCalories = currentWorkouts.reduce((total, workout) => total + workout.caloriesBurned, 0);

  return (
    <main className="min-h-svh px-10 lg:px-20 py-10 bg-black text-white">

      <div className="mb-8">
        <h1 className="text-4xl font-bold">MY PLAN</h1>
        <p className="text-gray-400 mt-2"> Your workouts, organized and ready to go. </p>
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


    
      <div className="flex gap-3 mb-8 border border-gray-800 rounded-lg p-2 bg-[#11141a]">

        <button
          onClick={() => setActiveTab("plan")}
          className={
            activeTab === "plan" ? "btn bg-[#272b34] rounded-lg text-gray-200 border-none" : "btn btn-outline text-gray-400"}>
          Todays Plan
        </button>


        <button
          onClick={() => setActiveTab("saved")}
          className={
            activeTab === "saved" ? "btn bg-[#272b34] rounded-lg text-gray-200 border-none" : "btn btn-outline text-gray-40 "}>
          Saved
        </button>

      </div>
      <div>
        
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
            className="btn bg-[#ccff00] text-black border-none">
            Go to workouts
          </Link>

        </div> ) : (

        <div className="space-y-4">

          {currentWorkouts.map((workout) => (

            <div
              key={workout.id}
              className="bg-[#11141a] border border-gray-800 rounded-xl p-3">

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-full sm:w-24 h-20 shrink-0">
                  <Image src={workout.image} alt={workout.name}  width={150}  height={100}
                    className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-1 w-full">
                  <h2 className="font-bold text-lg">
                    {workout.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {workout.equipment}
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 mt-2">

                    <span className="flex">
                      <Clock3 size={18} className="text-[#ccff00]"/> {workout.duration} min
                    </span>

                    <span className="flex ">
                      <Flame size={18} className="text-[#ccff00]"/>{workout.caloriesBurned} kcal
                    </span>

                    <span className="flex">
                      <Star size={18} className="text-[#ccff00]"/> {workout.rating}
                    </span>

                  </div>
                </div>
                <div className="flex items-center gap-2">

                  <Link
                    href={`/workouts/${workout.id}`}
                    className="btn btn-sm btn-outline text-gray-400 border-gray-400 border rounded-2xl" >
                    View Details
                  </Link>

                  <button
                    onClick={() => {
                      toast.success("Workout marked as done");
                    }}
                    className="btn btn-sm bg-[#ccff00] text-black border-none rounded-2xl" >
                    ✓ Mark as Done
                  </button>
                  <button
                    onClick={() => {
                      if (activeTab === "plan") {
                        removeFromPlan(workout.id);
                        toast.success(
                          "Removed from today's plan"
                        );

                      } else {
                        removeSaved(workout.id);
                        toast.success(
                          "Removed from saved"
                        );
                      }
                    }}
                    className="btn btn-sm btn-ghost text-gray-400">   ×  </button>

                </div>
              </div>
            </div>

          ))}

        </div>
      )}
    </main>
  );
};

export default MyPlan;