"use client";

import { useState } from 'react';
import Link from "next/link";
import axios from "axios";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateName = (name: string) => /^[a-zA-Z ]{2,30}$/.test(name);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (!value) return 'Name is required';
        if (!validateName(value)) return 'Name must be 2-30 letters, only alphabets and spaces';
        return '';
      case 'email':
        if (!value) return 'Email is required';
        if (!validateEmail(value)) return 'Invalid email format';
        return '';
      case 'subject':
        if (!value) return 'Subject is required';
        if (value.length < 3) return 'Subject must be at least 3 characters';
        if (value.length > 100) return 'Subject must be less than 100 characters';
        return '';
      case 'message':
        if (!value) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        if (value.length > 1000) return 'Message must be less than 1000 characters';
        return '';
      default:
        return '';
    }
  };

  const validateAll = () => {
    return {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    };
  };

  const isFormValid = () => {
    const errs = validateAll();
    return Object.values(errs).every(e => !e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name as keyof typeof touched]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTouched = { name: true, email: true, subject: true, message: true };
    setTouched(newTouched);
    const newErrors = validateAll();
    setErrors(newErrors);
    if (!Object.values(newErrors).every(e => !e)) return;
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      toast.success('Form submitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({ name: false, email: false, subject: false, message: false });
    } catch {
      toast.error('There was an error submitting the form.');
    }
  };

  return (
    <div className="min-h-screen bg-[#232536] flex items-center justify-center py-12 px-4">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl  max-w-lg w-full"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
              minLength={2}
              maxLength={30}
              placeholder="Your name"
            />
            {errors.name && touched.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Your email"
            />
            {errors.email && touched.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border ${errors.subject && touched.subject ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
              minLength={3}
              maxLength={100}
              placeholder="Subject"
            />
            {errors.subject && touched.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={4}
              minLength={10}
              maxLength={1000}
              placeholder="Write your message..."
              className={`w-full border ${errors.message && touched.message ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.message && touched.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition text-sm disabled:opacity-50"
            disabled={!isFormValid()}
          >
            Send Message
          </motion.button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-5">
          Back to{' '}
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
