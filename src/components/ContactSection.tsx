import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/Button';

const contactSchema = z.object({
  userType: z.enum(['developer', 'brokerage'], {
    required_error: 'Please select your user type',
  }),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      userType: 'brokerage',
    },
  });

  const userType = watch('userType');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      alert('Thank you for your inquiry! We will get back to you soon.');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img
            src="/images/footer.png"
            alt="Modern glass city buildings"
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>
        
        <div className="w-full lg:w-1/2 bg-gray-100 p-8 lg:p-16">
          <h2 className="text-black text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Be The First To<br />Grow With Banke
          </h2>
          
          <p className="text-black text-lg md:text-xl font-light leading-relaxed mb-8">
            Banke International Properties brings you residential and commercial exclusives that are not available elsewhere. Gain priority access, tailored advisory, and investment-ready opportunities today.
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <div className="flex items-center space-x-6 mb-6">
                <span className="text-gray-700 text-base">Are you a</span>
                
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="developer"
                    {...register('userType')}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center ${userType === 'developer' ? 'bg-green-500' : 'bg-white'}`}>
                    {userType === 'developer' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <span className="text-gray-700">Developer</span>
                </label>
                
                <span className="text-gray-400">|</span>
                
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="brokerage"
                    {...register('userType')}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center ${userType === 'brokerage' ? 'bg-green-500' : 'bg-white'}`}>
                    {userType === 'brokerage' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <span className="text-gray-700">Brokerage House</span>
                </label>
              </div>
              {errors.userType && (
                <p className="text-red-500 text-sm">{errors.userType.message}</p>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  {...register('name')}
                  className="w-full p-4 border-b border-gray-400 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-600"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                  className="w-full p-4 border-b border-gray-400 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-600"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register('phone')}
                  className="w-full p-4 border-b border-gray-400 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-600"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  {...register('company')}
                  className="w-full p-4 border-b border-gray-400 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-600"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  {...register('message')}
                  className="w-full p-4 border-b border-gray-400 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-600 resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              variant="outline"
              size="lg"
              disabled={isSubmitting}
              className="w-auto"
            >
              {isSubmitting ? 'Submitting...' : 'ENQUIRE NOW'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
