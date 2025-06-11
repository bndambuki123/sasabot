import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { PRICING_PLANS, type PricingPlan } from '../types/pricing';

interface FormState {
  fullName: string;
  email: string;
  phoneNumber: string;
  preferredContact: string;
  businessName: string;
  industrySector: string;
  companySize: string;
  businessLocation: {
    country: string;
    city: string;
  };
  customerChannels: string[];
  customerEnquiries: string;
  expectations: string;
  shareData: boolean;
  feedbackPreference: string[];
  referralSource: string;
  agreeToTerms: boolean;
  submitted: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const BetaSignup: React.FC = () => {
  const location = useLocation();
  const selectedPlan = new URLSearchParams(location.search).get('plan') as PricingPlan || PRICING_PLANS.MSINGI;
  
  const [formState, setFormState] = useState<FormState>({
    fullName: '',
    email: '',
    phoneNumber: '',
    preferredContact: '',
    businessName: '',
    industrySector: '',
    companySize: '',
    businessLocation: {
      country: 'Kenya',
      city: ''
    },
    customerChannels: [],
    customerEnquiries: '',
    expectations: '',
    shareData: false,
    feedbackPreference: [],
    referralSource: '',
    agreeToTerms: false,
    submitted: false
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = ['Email', 'WhatsApp', 'SMS'];
  const industries = ['Retail', 'Hospitality', 'Financial Services', 'Services', 'Logistics', 'Other'];
  const companySizes = ['1-10', '11-50', '51-200', '201-500', '500+'];
  const customerChannels = ['WhatsApp', 'Instagram', 'Facebook Messenger', 'SMS', 'Phone Calls', 'E-commerce site', 'Walk-in', 'Other'];
  const enquiryRanges = ['<10', '10-50', '50-100', '100-200', '200-300', '300+'];
  const feedbackMethods = ['WhatsApp chat', 'Google Form', 'Email', 'Scheduled call'];
  const referralSources = ['Google', 'Instagram', 'Facebook', 'Whastapp Group', 'Friend/Colleague', 'Business Network', 'Other'];

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formState.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!formState.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formState.businessName.trim()) {
      errors.businessName = 'Business name is required';
    }

    if (!formState.businessLocation.city.trim()) {
      errors.city = 'City is required';
    }

    if (formState.phoneNumber && !/^\+?[0-9\s-()]+$/.test(formState.phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formState.agreeToTerms) {
      errors.agreeToTerms = 'You must agree to receive updates and provide feedback';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.preventDefault(); // Prevent default behavior
    const { name, value } = e.target;
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormState(prev => ({
        ...prev,
        [parent]: { ...prev[parent as keyof FormState], [child]: value }
      }));
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault(); // Prevent default behavior
    const { name, value, checked } = e.target;
    
    if (name === 'customerChannels' || name === 'feedbackPreference') {
      setFormState(prev => ({
        ...prev,
        [name]: checked 
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } else {
      setFormState(prev => ({ ...prev, [name]: checked }));
    }

    // Clear error when user checks a box
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('beta_registrations').insert([
        {
          full_name: formState.fullName,
          email: formState.email,
          phone_number: formState.phoneNumber,
          preferred_contact: formState.preferredContact,
          business_name: formState.businessName,
          industry_sector: formState.industrySector,
          company_size: formState.companySize,
          business_location_country: formState.businessLocation.country,
          business_location_city: formState.businessLocation.city,
          customer_channels: formState.customerChannels,
          customer_enquiries: formState.customerEnquiries,
          expectations: formState.expectations,
          share_data: formState.shareData,
          feedback_preference: formState.feedbackPreference,
          referral_source: formState.referralSource,
          selected_plan: selectedPlan
        }
      ]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          toast.error('This email is already registered');
          setFormErrors(prev => ({ ...prev, email: 'This email is already registered' }));
        } else {
          throw error;
        }
      } else {
        setFormState(prev => ({ ...prev, submitted: true }));
        toast.success('Registration submitted successfully!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const FormSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      {children}
    </div>
  );

  const FormField = ({ 
    label, 
    name, 
    type = 'text',
    value, 
    onChange, 
    error,
    required = false,
    ...props 
  }: { 
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    error?: string;
    required?: boolean;
    [key: string]: any;
  }) => (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`form-input ${error ? 'border-red-500' : ''}`}
          {...props}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`form-input ${error ? 'border-red-500' : ''}`}
          {...props}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );

  return (
    <section id="beta-signup" className="py-20 bg-gray-50">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Join Our Pilot Program</h2>
            <p className="text-lg text-gray-700">
              Be among the first businesses to experience SasaBot™ and help shape its development
            </p>
            {selectedPlan && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800">Selected Plan: {selectedPlan}</p>
              </div>
            )}
          </div>
          
          {formState.submitted ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center" data-aos="zoom-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Interest!</h3>
              <p className="text-gray-700 mb-6">
                Your application for the pilot program has been received. We'll review your submission and contact you soon via your preferred contact method.
              </p>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setFormState(prev => ({ ...prev, submitted: false }));
                }}
                className="btn-secondary"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up">
              <FormSection title="Contact Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Full Name"
                    name="fullName"
                    value={formState.fullName}
                    onChange={handleInputChange}
                    error={formErrors.fullName}
                    required
                    placeholder="Enter your full name"
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    error={formErrors.email}
                    required
                    placeholder="your@email.com"
                  />
                  <FormField
                    label="Phone Number (WhatsApp)"
                    name="phoneNumber"
                    type="tel"
                    value={formState.phoneNumber}
                    onChange={handleInputChange}
                    error={formErrors.phoneNumber}
                    placeholder="+254"
                  />
                  <div>
                    <label htmlFor="preferredContact" className="form-label">Preferred Contact Method</label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formState.preferredContact}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select Contact Method</option>
                      {contactMethods.map(method => (
                        <option key={method} value={method}>{method}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </FormSection>

              <FormSection title="Business Details">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Business Name"
                    name="businessName"
                    value={formState.businessName}
                    onChange={handleInputChange}
                    error={formErrors.businessName}
                    required
                    placeholder="Enter your business name"
                  />
                  <div>
                    <label htmlFor="industrySector" className="form-label">Industry Sector</label>
                    <select
                      id="industrySector"
                      name="industrySector"
                      value={formState.industrySector}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select Industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="companySize" className="form-label">Company Size</label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formState.companySize}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select Company Size</option>
                      {companySizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <FormField
                    label="City"
                    name="businessLocation.city"
                    value={formState.businessLocation.city}
                    onChange={handleInputChange}
                    error={formErrors.city}
                    required
                    placeholder="Enter your city"
                  />
                </div>

                <div className="mt-4">
                  <p className="form-label mb-2">How do you currently interact with customers?</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {customerChannels.map(channel => (
                      <div key={channel} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`channel-${channel}`}
                          name="customerChannels"
                          value={channel}
                          checked={formState.customerChannels.includes(channel)}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`channel-${channel}`} className="ml-2 text-sm text-gray-700">
                          {channel}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="customerEnquiries" className="form-label">Estimated customer enquiries per day</label>
                  <select
                    id="customerEnquiries"
                    name="customerEnquiries"
                    value={formState.customerEnquiries}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="">Select Range</option>
                    {enquiryRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </FormSection>

              <FormSection title="Expectations & Permissions">
                <div>
                  <label htmlFor="expectations" className="form-label">What would you like SasaBot™ to help you with the most?</label>
                  <textarea
                    id="expectations"
                    name="expectations"
                    value={formState.expectations}
                    onChange={handleInputChange}
                    rows={4}
                    className="form-input"
                    placeholder="E.g., handling customer chats, tracking orders, sending payment links, post on socials, etc."
                  ></textarea>
                </div>

                <div className="mt-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="shareData"
                      name="shareData"
                      checked={formState.shareData}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="shareData" className="ml-2 text-sm text-gray-700">
                      I agree to share anonymous chat data to improve SasaBot's accuracy
                      <p className="text-xs text-gray-500 mt-1">
                        Your data will be anonymized and used only to improve our service. No personal or sensitive information will be shared.
                      </p>
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="form-label mb-2">How would you prefer to give feedback during the beta?</p>
                  <div className="grid grid-cols-2 gap-3">
                    {feedbackMethods.map(method => (
                      <div key={method} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`feedback-${method}`}
                          name="feedbackPreference"
                          value={method}
                          checked={formState.feedbackPreference.includes(method)}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`feedback-${method}`} className="ml-2 text-sm text-gray-700">
                          {method}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </FormSection>

              <FormSection title="Additional Information">
                <div>
                  <label htmlFor="referralSource" className="form-label">How did you hear about us?</label>
                  <select
                    id="referralSource"
                    name="referralSource"
                    value={formState.referralSource}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="">Select Source</option>
                    {referralSources.map(source => (
                      <option key={source} value={source}>{source}</option>
                    ))}
                  </select>
                </div>

                <div className="mt-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formState.agreeToTerms}
                      onChange={handleCheckboxChange}
                      className={`mt-1 w-4 h-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded ${
                        formErrors.agreeToTerms ? 'border-red-500' : ''
                      }`}
                    />
                    <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
                      I agree to receive updates about SasaBot™ and provide feedback during the beta phase *
                      {formErrors.agreeToTerms && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.agreeToTerms}</p>
                      )}
                    </label>
                  </div>
                </div>
              </FormSection>

              <div className="text-center">
                <button 
                  type="submit" 
                  className={`btn-primary px-8 py-3 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BetaSignup;