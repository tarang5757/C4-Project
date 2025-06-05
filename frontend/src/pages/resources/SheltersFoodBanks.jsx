import React from "react";

const SheltersFoodBanks = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Toronto Shelters, Food Banks & Soup Kitchens</h1>

      <p className="mb-4 text-lg">
        Toronto is home to many incredible organizations dedicated to helping individuals and families experiencing homelessness or food insecurity. Below is a list of resources to help you find shelters, food banks, and soup kitchens in the city.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Toronto Shelters and Housing Assistance</h2>
        <p className="mb-4">
          In Toronto, there are various types of shelters that provide emergency housing, transitional support, and long-term solutions for individuals in need. These organizations also often provide additional services, including meals, job training, and mental health support.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Emergency Shelters:</strong> Temporary accommodation for those in urgent need of a place to stay.
          </li>
          <li>
            <strong>Transitional Housing:</strong> Longer-term accommodation that helps individuals transition back into independent living.
          </li>
          <li>
            <strong>Family Shelters:</strong> Shelters offering safe spaces for families, including children.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Toronto Food Banks and Soup Kitchens</h2>
        <p className="mb-4">
          Toronto's food banks and soup kitchens work together to ensure that no one in the city goes hungry. Many of these organizations provide free meals and grocery items to those in need, regardless of their circumstances.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Food Banks:</strong> Organizations that distribute food to individuals and families in need.
          </li>
          <li>
            <strong>Shelter Kitchens & Soup Kitchens:</strong> Locations that provide free, hot meals to those in need.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Find Toronto Shelters, Food Banks, and Soup Kitchens</h2>
        <p>
          Below are some local resources where you can find shelters, food banks, and soup kitchens in Toronto:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <a
              href="https://www.sheltertoronto.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-food-green-600 underline"
            >
              Shelter Toronto
            </a>
            : A comprehensive list of shelters across Toronto and the Greater Toronto Area.
          </li>
          <li>
            <a
              href="https://www.dailybread.ca/find-food/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-food-green-600 underline"
            >
              Daily Bread Food Bank
            </a>
            : Find food banks in Toronto and learn how to get food assistance.
          </li>
          <li>
            <a
              href="https://www.foodrescue.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-food-green-600 underline"
            >
              Food Rescue Toronto
            </a>
            : Helping individuals and communities access food resources in Toronto.
          </li>
          <li>
            <a
              href="https://www.toronto.ca/services-payments/homeless-services/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-food-green-600 underline"
            >
              City of Toronto Homeless Services
            </a>
            : Information on shelters, housing programs, and other homelessness services in Toronto.
          </li>
          <li>
            <a
              href="https://www.soupkitchen.org/locations/toronto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-food-green-600 underline"
            >
              Soup Kitchen Locations (Toronto)
            </a>
            : A list of soup kitchens offering hot meals throughout the city.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SheltersFoodBanks;
