import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(7, 'Phone is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    // You can handle the form submission here (e.g., send to API)
    alert('Message sent!');
    reset();
  };

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Contact</span>
      </nav>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow p-6 flex-1 max-w-md min-w-[260px] flex flex-col gap-8 justify-between">
          {/* Call To Us */}
          <div className="flex items-start gap-4">
            <div className="bg-red-500 rounded-full p-3 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" /></svg>
            </div>
            <div>
              <div className="font-semibold text-lg text-gray-900 mb-1">Call To Us</div>
              <div className="text-gray-600 text-sm mb-2">We are available 24/7, 7 days a week.</div>
              <div className="text-gray-900 font-medium text-sm">Phone: +8801611112222</div>
            </div>
          </div>
          <hr className="my-2 border-gray-200" />
          {/* Write To Us */}
          <div className="flex items-start gap-4">
            <div className="bg-red-500 rounded-full p-3 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M22 6l-10 7L2 6" /></svg>
            </div>
            <div>
              <div className="font-semibold text-lg text-gray-900 mb-1">Write To US</div>
              <div className="text-gray-600 text-sm mb-2">Fill out our form and we will contact you within 24 hours.</div>
              <div className="text-gray-900 font-medium text-sm">Emails: customer@exclusive.com</div>
              <div className="text-gray-900 font-medium text-sm">Emails: support@exclusive.com</div>
            </div>
          </div>
        </div>
        {/* Right Card - Contact Form */}
        <form className="bg-white rounded-xl shadow p-6 flex-[2] min-w-[280px] flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <input type="text" placeholder="Your Name *" {...register('name')} className="bg-gray-100 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-200" />
              {errors.name && <span className="text-xs text-red-500 ml-1">{errors.name.message}</span>}
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <input type="email" placeholder="Your Email *" {...register('email')} className="bg-gray-100 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-200" />
              {errors.email && <span className="text-xs text-red-500 ml-1">{errors.email.message}</span>}
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <input type="tel" placeholder="Your Phone *" {...register('phone')} className="bg-gray-100 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-200" />
              {errors.phone && <span className="text-xs text-red-500 ml-1">{errors.phone.message}</span>}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <textarea placeholder="Your Massage" rows={6} {...register('message')} className="bg-gray-100 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-200 resize-none" />
            {errors.message && <span className="text-xs text-red-500 ml-1">{errors.message.message}</span>}
          </div>
          <div className="flex justify-end">
            <button type="submit" disabled={isSubmitting} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-md transition-all shadow disabled:opacity-60">{isSubmitting ? 'Sending...' : 'Send Massage'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
