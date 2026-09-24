"use client";

import { createContext, useContext, useState } from "react";
import type { IWorkout } from "@/types/workout";

interface PlanContextType {
  plan: IWorkout[];
  saved: IWorkout[];

  addToPlan: (workout: IWorkout) => void;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: IWorkout) => void;
  removeSaved: (id: number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(
  undefined
);

export const PlanProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  const addToPlan = (workout: IWorkout) => {
    setPlan((previousPlan) => [
      ...previousPlan,
      workout,
    ]);
  };

  const removeFromPlan = (id: number) => {
    setPlan((previousPlan) =>
      previousPlan.filter(
        (workout) => workout.id !== id
      )
    );
  };

  const saveWorkout = (workout: IWorkout) => {
    setSaved((previousSaved) => [
      ...previousSaved,
      workout,
    ]);
  };

  const removeSaved = (id: number) => {
    setSaved((previousSaved) =>
      previousSaved.filter(
        (workout) => workout.id !== id
      )
    );
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error(
      "usePlan must be used inside PlanProvider"
    );
  }

  return context;
};