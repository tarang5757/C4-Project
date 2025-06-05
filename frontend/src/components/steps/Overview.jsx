const overviewSteps = [
  {
    title: "Sign Up",
    description:
      "Farmers, farmers markets, and recipient organizations join the platform to connect and share resources.",
    icon: "🤝",
  },
  {
    title: "List & Request Food",
    description:
      "Donors list available surplus food. Recipients post requests for needed items.",
    icon: "📋",
  },
  {
    title: "Match & Communicate",
    description:
      "The platform helps match food donations with nearby recipients. Both parties communicate to coordinate details.",
    icon: "🔗",
  },
  {
    title: "Arrange Pickup or Drop-off",
    description:
      "Donors and recipients work together to schedule convenient pickup or drop-off times, ensuring smooth delivery.",
    icon: "🚚",
  },
  {
    title: "Confirm & Track Impact",
    description:
      "Once donations are completed, confirmations are sent and impact metrics like meals served are tracked and shared.",
    icon: "✅",
  },
];

const Overview = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-xl shadow-lg">
      <header className="flex flex-col sm:flex-row items-center justify-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12 text-center sm:text-left">
        <div className="text-6xl sm:text-7xl flex-shrink-0">🌟</div>
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-1 text-gray-600 text-lg italic">
            Connecting farmers, markets, and organizations to reduce food waste and feed communities.
          </p>
        </div>
      </header>


      <ol className="space-y-8">
        {overviewSteps.map(({ title, description, icon }, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 p-6 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
            tabIndex={0}
          >
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-700 font-bold text-xl sm:text-2xl flex-shrink-0 select-none">
              {icon}
              <span className="absolute -top-1 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-xs font-semibold">
                {index + 1}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-700 leading-relaxed max-w-prose">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Overview;
