const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>

        <p className="mt-4 text-gray-400">
          Loading workouts…
        </p>
      </div>
    </div>
  );
};

export default Loading;