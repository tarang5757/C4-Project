import React from "react";

const FoodStorageGuidelines = () => {
  const guidelines = [
    {
      number: 1,
      title: "🧼 Clean & Sanitize",
      items: [
        "Wash hands and wear clean clothing (hairnets if necessary)",
        "Sanitize tools, work surfaces, and containers before use",
      ],
    },
    {
      number: 2,
      title: "❄️ Proper Food Storage",
      items: [
        "Store food in clean, sealed containers, off the ground",
        "Keep raw meat away from ready-to-eat foods",
        <>
          Maintain safe temperatures:
          <ul className="ml-6 list-disc mt-2 space-y-1 text-base">
            <li>Cold: ≤ 4°C</li>
            <li>Frozen: ≤ -18°C</li>
            <li>Hot: ≥ 60°C</li>
          </ul>
        </>,
      ],
    },
    {
      number: 3,
      title: "🚚 Safe Transport",
      items: [
        "Use clean, disinfected vehicles for delivery",
        "Keep food at safe temperatures during transport",
        "Prevent cross-contamination of raw and cooked food",
      ],
    },
    {
      number: 4,
      title: "💧 Water & Handwashing",
      items: [
        "Only use potable (safe-to-drink) water",
        "Provide soap, water, and paper towels for handwashing if prepping food",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-start py-14 px-6">
      <div
        className="max-w-4xl rounded-2xl shadow-xl p-12 font-sans"
        style={{ backgroundColor: "#F0F7E9   ", color: "#5B3A29" }}
      >
        <h1
          className="text-4xl font-extrabold mb-12 tracking-wide leading-tight"
          style={{ color: "#000000" }}
        >
          🥫 Guidelines for Food Storage and Handling
        </h1>

        <section className="mb-16">
          <h2
            className="text-3xl font-semibold mb-6"
            style={{ color: "#000000" }}
          >
            🥕 Food Safety Guidelines
          </h2>
          <p
            className="text-lg max-w-prose mb-6 leading-relaxed"
            style={{ color: "#000000" }}
          >
            Farmers play a crucial role in supporting community health by
            donating surplus fresh food. To keep donations safe and compliant
            with Ontario regulations, please follow these essential guidelines.
          </p>
          <p
            className="text-lg max-w-prose mb-10 leading-relaxed"
            style={{ color: "#000000" }}
          >
            For the complete set of rules, visit{" "}
            <a
              href="https://www.toronto.ca/community-people/health-wellness-care/health-programs-advice/food-safety/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "#000000" }}
            >
              Ontario’s official site
            </a>
            .
          </p>

          <div className="space-y-10">
            {guidelines.map(({ number, title, items }) => (
              <div
                key={number}
                className="flex space-x-8 rounded-xl p-6 shadow-sm"
                style={{ backgroundColor: "#FFF6E6" }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className="text-4xl font-extrabold border-r-4 pr-6 select-none min-w-[3rem] text-center"
                    style={{ borderColor: "#D9A441", color: "#000000" }}
                  >
                    {number}
                  </div>
                </div>
                <div>
                  <h3
                    className="text-2xl font-semibold mb-4 tracking-tight"
                    style={{ color: "#000000" }}
                  >
                    {title}
                  </h3>
                  <ul
                    className="list-disc list-inside text-lg space-y-3 max-w-prose"
                    style={{ color: "#000000" }}
                  >
                    {items.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-3xl font-semibold mb-6"
            style={{ color: "#000000" }}
          >
            🛡️ Legal Protection for Donors
          </h2>
          <div
            className="max-w-prose space-y-5 text-lg leading-relaxed"
            style={{ color: "#000000" }}
          >
            <p>
              Donating food? You’re protected by Ontario law under the{" "}
              <strong>Donation of Food Act, 1994</strong>.
            </p>
            <p>
              📜 Read the full act{" "}
              <a
                href="https://www.ontario.ca/laws/statute/94d19"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "#000000" }}
              >
                here
              </a>
              .
            </p>

            <div
              className="border-l-4 p-4 rounded-md shadow-sm"
              style={{ backgroundColor: "#FFF6E6", borderColor: "#D9A441" }}
            >
              <p className="mb-3 font-semibold" style={{ color: "#000000" }}>
                The Act protects donors from liability as long as:
              </p>
              <ul
                className="list-disc list-inside space-y-2 ml-4"
                style={{ color: "#000000" }}
              >
                <li>The food was not knowingly unsafe or spoiled</li>
                <li>
                  There was no intent to harm, and no gross negligence occurred
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FoodStorageGuidelines;
