# FitLog

FitLog is a responsive workout library built with Next.js where users can browse exercises, view workout details, create a daily workout plan, and save workouts for later.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- Font Awesome
- React Toastify
- REST API
- Vercel

## Key Features

### 1. Workout Library
Browse workouts from the FitLog API with workout images, muscle groups, equipment, duration, calories, and ratings.

### 2. Workout Details
View complete workout information including difficulty, sets, reps, duration, calories, rating, and step-by-step instructions.

### 3. Today's Plan
Add workouts to today's workout plan and manage them from the My Plan page.

### 4. Saved Workouts
Save workouts for later and access them from the Saved section.

### 5. Workout Sorting
Sort workouts by duration, calories, or rating.

### 6. Mark as Done
Mark workouts as completed from the My Plan page.

### 7. Toast Notifications
Get instant feedback when adding, saving, removing, or completing workouts.

### 8. Responsive Design
The application works across mobile, tablet, laptop, and desktop screen sizes.

## Project Structure

src/
├── app/
│   ├── workouts/
│   │   └── [id]/
│   ├── my-plan/
│   ├── components/
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
├── context/
└── types/