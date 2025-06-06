import QuestionnaireForm from "../components/QuestionnaireForm";

const BecomePartner = () => {
  return (
    <div className="space-y-0">
      {/* Questionnaire Form */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Let's Get Started
            </h2>
            <div className="w-24 h-1 bg-[#4CAF50] mx-auto"></div>
            <p className="mt-6 text-gray-600 text-lg">
              Take a quick moment to tell us about yourself and how you'd like
              to help
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <QuestionnaireForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomePartner;
