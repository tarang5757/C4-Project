import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mission Section */}
      <section className="py-10 px-4 bg-white">
        <div className="flex justify-center items-center">
          <img
            src="/about.png"
            alt="Our Team"
            className="w-1/2 h-1/2 rounded-2xl shadow-lg mb-5"
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-[#4CAF50] mx-auto"></div>
          </div>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              {" "}
              Our story starts with C4 at York University, a place where we
              create projects that go beyond the classroom and have a real
              impact on the community. It was here that we recognized the
              growing challenges of food insecurity and nutrition, and knew we
              needed to take action.{" "}
            </p>{" "}
            <p className="text-gray-700 leading-relaxed text-lg">
              {" "}
              Today, we're working to make it easy for anyone to contribute to
              solving the food insecurity problem. Whether you're a farmer with
              extra produce or simply someone who wants to help nourish your
              community, we're here to make that connection happen.{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10  bg-[#214F4B] opacity-100 ">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold  mb-4 text-white">
              What Matters to Us
            </h2>
            <div className="w-24 h-1 bg-[#4CAF50] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-[#4CAF50] mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Build Strong Communities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We know that sharing food brings people together. When we help
                each other, we build stronger, happier communities where
                everyone feels welcome and cared for.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-[#4CAF50] mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Take Care of Our Planet
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in doing our part to keep our planet healthy. By
                sharing food instead of wasting it, we're helping to take care
                of the earth for future generations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-[#4CAF50] mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do What's Right
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in being honest, fair, and kind in everything we do.
                We treat everyone with respect and work hard to earn your trust
                every day.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 items-center">
          <a
            href="/BecomePartner"
            className="bg-[#FFC709] text-food-black-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-lg text-black inline-block"
          >
            Join Us
          </a>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-24 px-4 bg-[#5DAA75] opacity-100 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold  mb-6 text-white">
            Support Food Security
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8 "></div>
          <p className="text-xl  mb-12 max-w-2xl mx-auto text-white">
            Together, we can make a difference in our community. Your support
            helps ensure that fresh, nutritious food reaches those who need it
            most.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="mb-6">
                <img
                  src="/Logo.png"
                  alt="Open Doors Logo"
                  className="h-16 mx-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Open Doors
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Join us in our mission to connect communities and reduce food
                waste by sharing fresh, nutritious food with those who need it
                most.
              </p>
              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="inline-block bg-[#4CAF50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#45a049] transition-colors w-full text-center"
                >
                  Get Involved
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Food Banks Mississauga
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Food Banks Mississauga provides food to over 56,000 neighbors in
                need and serves over 9 million meals through their network each
                year.
              </p>
              <div className="mt-auto">
                <a
                  href="https://www.foodbanksmississauga.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#4CAF50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#45a049] transition-colors w-full text-center"
                >
                  Donate Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Scott Mission
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Scott Mission provides practical, emotional, and spiritual care
                to help our neighbors thrive, including essential food support
                and meals.
              </p>
              <div className="mt-auto">
                <a
                  href="https://donate.scottmission.com/page/155726/donate/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#4CAF50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#45a049] transition-colors w-full text-center"
                >
                  Donate Now
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Other Ways to Help
              </h3>
              <ul className="text-gray-600 space-y-3 mb-6 text-left flex-grow">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#4CAF50] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Volunteer at local food banks
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#4CAF50] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Share information about food security
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#4CAF50] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Support local food initiatives
                </li>
              </ul>
              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="inline-block border-2 border-[#4CAF50] text-[#4CAF50] px-8 py-3 rounded-lg font-semibold hover:bg-[#4CAF50] hover:text-white transition-colors w-full text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
