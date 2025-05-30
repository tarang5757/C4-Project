const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Coming Soon</h1>
      <p className="text-lg md:text-xl max-w-xl mb-8">
        We're working hard behind the scenes to bring you something amazing. Stay tuned!
      </p>
      <div className="flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-lg text-gray-800 w-64"
        />
        <button className="bg-white text-[#072F1C] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
