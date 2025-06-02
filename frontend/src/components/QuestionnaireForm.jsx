import React, { useState } from "react";
import { ChevronRight, ChevronLeft, User, Truck, Check } from "lucide-react";

const QuestionnaireForm = () => {
  const [userType, setUserType] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Common fields
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    whatsapp: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",

    // Farmer specific
    farmSize: "",
    cropTypes: [],
    organicCertified: false,
    productionVolume: "",
    harvestFrequency: "",
    deliveryCapability: false,
    deliveryRadius: "",
    storageCapability: "",
    preferredDonationSize: "",
    availableDays: [],

    // Recipient specific
    organizationType: "",
    peopleServedWeekly: "",
    currentFoodSources: [],
    storageCapacity: "",
    refrigerationAvailable: false,
    transportationAvailable: false,
    pickupRadius: "",
    neededFoodTypes: [],
    dietaryRestrictions: [],
    preferredDeliveryDays: [],
    urgencyLevel: "",
  });

  const farmerQuestions = [
    {
      title: "Basic Information",
      fields: [
        {
          name: "organizationName",
          label: "Farm Name",
          type: "text",
          required: true,
        },
        {
          name: "contactName",
          label: "Contact Person",
          type: "text",
          required: true,
        },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone Number", type: "tel", required: true },
        {
          name: "whatsapp",
          label: "WhatsApp Number",
          type: "tel",
          required: false,
        },
      ],
    },
    {
      title: "Location",
      fields: [
        {
          name: "address",
          label: "Farm Address",
          type: "text",
          required: true,
        },
        { name: "city", label: "City", type: "text", required: true },
        { name: "state", label: "State", type: "text", required: true },
        { name: "zipCode", label: "ZIP Code", type: "text", required: true },
      ],
    },
    {
      title: "Farm Details",
      fields: [
        {
          name: "farmSize",
          label: "Farm Size",
          type: "select",
          options: ["< 10 acres", "10-50 acres", "50-100 acres", "> 100 acres"],
          required: true,
        },
        {
          name: "cropTypes",
          label: "What do you grow?",
          type: "multiselect",
          options: [
            "Vegetables",
            "Fruits",
            "Grains",
            "Dairy",
            "Eggs",
            "Meat",
            "Other",
          ],
          required: true,
        },
        {
          name: "organicCertified",
          label: "Organic Certified?",
          type: "checkbox",
        },
        {
          name: "productionVolume",
          label: "Weekly Production Volume (lbs)",
          type: "select",
          options: ["< 100", "100-500", "500-1000", "> 1000"],
          required: true,
        },
      ],
    },
    {
      title: "Availability & Logistics",
      fields: [
        {
          name: "harvestFrequency",
          label: "Harvest Frequency",
          type: "select",
          options: ["Daily", "Twice a week", "Weekly", "Bi-weekly"],
          required: true,
        },
        {
          name: "deliveryCapability",
          label: "Can you deliver?",
          type: "checkbox",
        },
        {
          name: "deliveryRadius",
          label: "Delivery Radius (miles)",
          type: "number",
          condition: (data) => data.deliveryCapability,
        },
        {
          name: "availableDays",
          label: "Available Days",
          type: "multiselect",
          options: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          required: true,
        },
      ],
    },
  ];

  const recipientQuestions = [
    {
      title: "Basic Information",
      fields: [
        {
          name: "organizationName",
          label: "Organization Name",
          type: "text",
          required: true,
        },
        {
          name: "contactName",
          label: "Contact Person",
          type: "text",
          required: true,
        },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone Number", type: "tel", required: true },
        {
          name: "whatsapp",
          label: "WhatsApp Number",
          type: "tel",
          required: false,
        },
      ],
    },
    {
      title: "Location",
      fields: [
        { name: "address", label: "Address", type: "text", required: true },
        { name: "city", label: "City", type: "text", required: true },
        { name: "state", label: "State", type: "text", required: true },
        { name: "zipCode", label: "ZIP Code", type: "text", required: true },
      ],
    },
    {
      title: "Organization Details",
      fields: [
        {
          name: "organizationType",
          label: "Organization Type",
          type: "select",
          options: [
            "Food Bank",
            "Shelter",
            "Community Center",
            "School",
            "Religious Organization",
            "Other",
          ],
          required: true,
        },
        {
          name: "peopleServedWeekly",
          label: "People Served Weekly",
          type: "select",
          options: ["< 50", "50-100", "100-250", "250-500", "> 500"],
          required: true,
        },
        {
          name: "urgencyLevel",
          label: "Current Need Level",
          type: "select",
          options: [
            "Critical - Need food immediately",
            "High - Need within days",
            "Medium - Need within a week",
            "Low - Building reserves",
          ],
          required: true,
        },
      ],
    },
    {
      title: "Food Needs & Capabilities",
      fields: [
        {
          name: "neededFoodTypes",
          label: "Food Types Needed",
          type: "multiselect",
          options: [
            "Fresh Vegetables",
            "Fresh Fruits",
            "Grains",
            "Dairy",
            "Eggs",
            "Meat",
            "Canned Goods",
            "Other",
          ],
          required: true,
        },
        {
          name: "dietaryRestrictions",
          label: "Dietary Restrictions to Consider",
          type: "multiselect",
          options: [
            "Vegetarian",
            "Vegan",
            "Halal",
            "Kosher",
            "Gluten-Free",
            "Diabetic-Friendly",
            "None",
          ],
        },
        {
          name: "refrigerationAvailable",
          label: "Refrigeration Available?",
          type: "checkbox",
        },
        {
          name: "storageCapacity",
          label: "Storage Capacity",
          type: "select",
          options: ["Very Limited", "Moderate", "Good", "Excellent"],
          required: true,
        },
      ],
    },
    {
      title: "Logistics",
      fields: [
        {
          name: "transportationAvailable",
          label: "Can you pick up donations?",
          type: "checkbox",
        },
        {
          name: "pickupRadius",
          label: "Pickup Radius (miles)",
          type: "number",
          condition: (data) => data.transportationAvailable,
        },
        {
          name: "preferredDeliveryDays",
          label: "Preferred Receiving Days",
          type: "multiselect",
          options: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          required: true,
        },
      ],
    },
  ];

  const questions =
    userType === "farmer" ? farmerQuestions : recipientQuestions;

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((v) => v !== value)
        : [...prev[name], value],
    }));
  };

  const renderField = (field) => {
    if (field.condition && !field.condition(formData)) return null;

    const baseInputClasses =
      "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors";
    const baseLabelClasses = "block text-sm font-medium text-gray-700 mb-2";

    switch (field.type) {
      case "text":
      case "email":
      case "tel":
      case "number":
        return (
          <div key={field.name} className="mb-6">
            <label className={baseLabelClasses}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type={field.type}
              value={formData[field.name]}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className={baseInputClasses}
              required={field.required}
            />
          </div>
        );

      case "select":
        return (
          <div key={field.name} className="mb-6">
            <label className={baseLabelClasses}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <select
              value={formData[field.name]}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className={baseInputClasses}
              required={field.required}
            >
              <option value="">Select an option...</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );

      case "checkbox":
        return (
          <div key={field.name} className="mb-6">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData[field.name]}
                onChange={(e) =>
                  handleInputChange(field.name, e.target.checked)
                }
                className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="text-sm font-medium text-gray-700">
                {field.label}
              </span>
            </label>
          </div>
        );

      case "multiselect":
        return (
          <div key={field.name} className="mb-6">
            <label className={baseLabelClasses}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
              {field.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData[field.name]?.includes(option)}
                    onChange={() => handleMultiSelect(field.name, option)}
                    className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleSubmit = async () => {
    // Here you would submit to your backend
    console.log("Submitting:", { userType, ...formData });
    // Add API call to save to Supabase
    alert("Form submitted successfully! We will match you with partners soon.");
  };

  if (!userType) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#4CAF50] px-6 py-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-2">Become a Partner</h2>
          <p className="text-lg text-green-100">
            Join our community to share or receive fresh, local food.
          </p>
        </div>

        <div className="p-8 space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
            Tell us a bit about yourself...
          </h3>

          <button
            onClick={() => setUserType("farmer")}
            className="w-full p-6 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all flex items-center justify-between group bg-white"
          >
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Farmer / Producer
                </h3>
                <p className="text-sm text-gray-600">
                  I grow delicious food and want to share my harvest.
                </p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-green-600" />
          </button>

          <button
            onClick={() => setUserType("recipient")}
            className="w-full p-6 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all flex items-center justify-between group bg-white"
          >
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <User className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Food Bank / Organization
                </h3>
                <p className="text-sm text-gray-600">
                  We need fresh food to nourish our community.
                </p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-green-600" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-[#4CAF50] px-6 py-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-2">
          {userType === "farmer"
            ? "Farmer Information"
            : "Organization Information"}
        </h2>
        <p className="text-lg text-green-100">
          {userType === "farmer"
            ? "Help us learn about your farm and what you grow."
            : "Tell us about your organization and food needs."}
        </p>
      </div>

      <div className="p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-2 mx-1 rounded-full transition-colors duration-300 ${
                  index <= currentStep ? "bg-green-500" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 text-center">
            Step {currentStep + 1} of {questions.length} -{" "}
            {questions[currentStep].title}
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 relative">
            {questions[currentStep].title}
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-green-500"></div>
          </h3>

          <div className="space-y-6">
            {questions[currentStep].fields.map((field) => renderField(field))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </button>
            )}

            {currentStep < questions.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="ml-auto flex items-center px-8 py-3 bg-[#4CAF50] text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Next Step
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="ml-auto flex items-center px-8 py-3 bg-[#4CAF50] text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Check className="w-5 h-5 mr-2" />
                Submit and Connect
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireForm;
