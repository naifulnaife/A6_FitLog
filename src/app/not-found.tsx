import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">

        <p className="text-[#ccff00] text-xl font-semibold mb-3 ">
          404
        </p>

        <h1 className="text-4xl font-bold mb-4">
          PAGE NOT FOUND
        </h1>

        <p className="text-gray-400 mb-8">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-[#ccff00] text-black font-semibold"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
};

export default NotFound;