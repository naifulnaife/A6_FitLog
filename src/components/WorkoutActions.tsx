"use client";

import type { IWorkout } from "@/types/workout";
import { usePlan } from "@/context/PlanContext";

interface WorkoutActionsProps {
  workout: IWorkout;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { plan,saved, addToPlan,saveWorkout,} = usePlan();
  const alreadyInPlan = plan.some( (item) => item.id === workout.id);
  const alreadySaved = saved.some((item) => item.id === workout.id);

  return (
    <div className="flex gap-4 mt-8">

      <button onClick={() => addToPlan(workout)}
        disabled={alreadyInPlan}
        className="btn bg-[#ccff00] text-black">
        {alreadyInPlan? "Already in today's plan": "Add to today's plan"}
      </button>

      <button onClick={() => saveWorkout(workout)}
        disabled={alreadySaved}
        className="btn btn-outline text-gray-400 border border-gray-400">
        {alreadySaved ? "Already saved" : "Save for later"}
      </button>

    </div>
  );
};

export default WorkoutActions;