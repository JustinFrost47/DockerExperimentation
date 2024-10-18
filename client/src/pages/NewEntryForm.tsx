
import React, { useState } from 'react';
import axios from 'axios';
import {  toast } from 'react-toastify';
import { useProducts } from '../Contexts/ProductContext';


const NewEntryForm: React.FC = () => {

  const {refetchProducts} = useProducts()
  const [formData, setFormData] = useState({
    name: '',
    stock: '',
    image: '',
    description: ''
  });



  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    if (!formData.name || !formData.stock || !formData.image || !formData.description) {
        toast('All fields are required!');
      return;
    }

    try {

      const response = await axios.post(import.meta.env.VITE_APP_BACKEND_URL + 'phone', formData);

      if (response.status === 200) {
        // Clear form on successful submission
        setFormData({ name: '', stock: '', image: '', description: '' });

        toast('Phone entry added successfully!');
        refetchProducts()
      }
    } catch (err) {
        toast('Failed to add entry. Please try again.');
      console.error(err);
    }
  };

  return (
<>

<div className="bg-tblack text-twhite p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-3xl mb-4 text-tred text-center">New Phone Entry</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        
        <div>
          <label className="block text-twhite" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded bg-tblack text-twhite"
            required
          />
        </div>

        <div>
          <label className="block text-twhite" htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded bg-tblack text-twhite"
            required
          />
        </div>

        <div>
          <label className="block text-twhite" htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded bg-tblack text-twhite"
            required
          />
        </div>

        <div>
          <label className="block text-twhite" htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded bg-tblack text-twhite"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-tred text-twhite font-semibold rounded hover:bg-red-700 transition"
        >
          Add Phone
        </button>
      </form>
    </div>
    </>
  );
};

export default NewEntryForm;
