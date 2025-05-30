import teamWorking from '../images/team-working.jpg';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 mb-20">
      {/* Centered Team Image */}
      <img
        src={teamWorking}
        alt="Team working together"
        className="mt-10  rounded-xl border-4 shadow-lg block mx-auto"
      />

      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600">
          We are a purpose-driven team committed to building sustainable
          solutions that empower communities and reduce waste.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our mission is to create lasting impact by connecting people,
          resources, and ideas in innovative ways. We aim to reduce waste,
          support circular economies, and foster collaborative communities.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We believe that sustainability isn’t just a goal — it’s a shared
          responsibility. Through education, technology, and grassroots efforts,
          we work to ensure a healthier planet for future generations.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-food-green-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-food-green-700 mb-4">
            Sustainability
          </h3>
          <p className="text-gray-700">
            We prioritize sustainable practices in everything we do, from
            sourcing to delivery, ensuring minimal environmental impact.
          </p>
        </div>
        <div className="bg-food-orange-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-food-orange-600 mb-4">
            Community
          </h3>
          <p className="text-gray-700">
            Building stronger, more connected communities is at the heart of our
            mission. We collaborate with local partners to create real change.
          </p>
        </div>
        <div className="bg-food-green-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-food-green-700 mb-4">
            Innovation
          </h3>
          <p className="text-gray-700">
            By embracing technology and creative problem-solving, we develop
            solutions that scale and adapt to real-world challenges.
          </p>
        </div>
        <div className="bg-food-orange-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-food-orange-600 mb-4">
            Integrity
          </h3>
          <p className="text-gray-700">
            We operate with transparency, accountability, and a deep respect for
            the people and environments we serve.
          </p>
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-food-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-food-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Samantha Lee</h3>
            <p className="text-food-green-600 font-medium">Co-Founder & CEO</p>
            <p className="text-gray-600 text-sm mt-2">
              Samantha leads our vision and strategy, ensuring every initiative
              aligns with our sustainability goals.
            </p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-food-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-food-orange-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Alex Chen</h3>
            <p className="text-food-orange-600 font-medium">Director of Operations</p>
            <p className="text-gray-600 text-sm mt-2">
              Alex manages our day-to-day functions and coordinates across
              departments to drive efficiency.
            </p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-food-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-food-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Jordan Smith</h3>
            <p className="text-food-green-600 font-medium">Community Lead</p>
            <p className="text-gray-600 text-sm mt-2">
              Jordan works closely with local partners to grow our outreach and
              community programs.
            </p>
          </div>
        </div>
      </div> */}

      {/* History Section */}
      {/* <div className="bg-food-green-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-food-green-700 mb-6">Our History</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>2019:</strong> Our organization was founded by a group of
            passionate individuals with a shared goal of reducing food waste and
            promoting sustainability.
          </p>
          <p>
            <strong>2020:</strong> We launched our first community partnership
            program, connecting local farms with food banks.
          </p>
          <p>
            <strong>2021:</strong> Expanded into new cities and rolled out our
            digital platform to increase accessibility and engagement.
          </p>
          <p>
            <strong>2022–Today:</strong> We continue to grow, innovate, and build
            a stronger, more sustainable world together.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
