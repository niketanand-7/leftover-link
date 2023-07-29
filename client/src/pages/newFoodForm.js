import React, { useState } from 'react';

const NewFoodForm = ({ restaurantId }) => {
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleAddFood = async () => {
    try {
      const newFood = {
        name,
        unit,
        quantity,
        expirationDate,
      };

      const response = await fetch(`/api/restaurants/add-food/${restaurantId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFood),
      });

      if (response.ok) {
        console.log('Food added successfully');
        setName('');
        setUnit('');
        setQuantity('');
        setExpirationDate('');
      } else {
        console.log('Failed to add food');
      }
    } catch (error) {
      console.error('Error adding food:', error);
    }
  };

  return (
    <section id="foodform" className="p-8">
      <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center">Food Form</h1>
        <p className="text-lg leading-relaxed mb-6">
        Welcome to the Food Form page! Add leftover food items from your restaurant to our database. Together, we can make a positive impact on reducing food waste and connecting with those in need. Thank you for your contribution!
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700" style={{fontSize: "20px"}}>Food Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Food Name..."
            />
          </div>
          <div>
            <label htmlFor="unit" className="block text-sm font-medium text-gray-700" style={{fontSize: "20px"}}>Unit:</label>
            <input
              type="text"
              id="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
              className="border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Units..."
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700" style={{fontSize: "20px"}}>Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              className="border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Quantity..."
            />
          </div>
          <div>
            <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700" style={{fontSize: "20px"}}>Expiration Date:</label>
            <input
              type="date"
              id="expirationDate"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              required
              className="border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button type="button" 
          onClick={handleAddFood}
          className="text-white bg-sunset_orange hover:bg-another_sunset focus:ring-4 focus:outline-none focus:bg-another_sunset dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:bg-gray-600 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >
            Add Food
          </button>
        </form>
      </div>
      <hr className="w-1/2 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700" />
    </section>
  );
};

export default NewFoodForm;
