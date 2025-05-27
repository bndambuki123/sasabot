import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Hotel, Smartphone, ShoppingBag, ShieldCheck, Hammer, Truck, Flower2, Cake, BookOpen, Check } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { supabase } from '../lib/supabase';

const GetStarted: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    whatsappNumber: '',
    companyName: '',
    shopUrl: '',
    industry: '',
    country: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error: signupError } = await supabase
        .from('basic_signups')
        .insert([
          {
            full_name: formData.fullName,
            business_email: formData.businessEmail,
            whatsapp_number: formData.whatsappNumber,
            company_name: formData.companyName,
            shop_url: formData.shopUrl || null,
            industry: formData.industry,
            country: formData.country,
          },
        ]);

      if (signupError) throw signupError;

      setIsSubmitted(true);
      window.scrollTo(0, 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form');
      console.error('Error submitting form:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const features = {
    sales: [
      'Send Cart/Buy for Customer',
      'Sales team tracking',
      'Pay directly in WhatsApp'
    ],
    marketing: [
      'Customer Segmentation',
      'WhatsApp Surveys',
      'Broadcast messaging'
    ],
    aiTools: [
      'AI chat-to-cart Conversion',
      'Customer Behaviour Insights',
      'Customized Chatbots'
    ],
    support: [
      '24/7 Ticketing system',
      'Assign tasks',
      'Centralized support for multiple stores'
    ]
  };

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Features */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Popular Features</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">SALES</h3>
                  <ul className="space-y-3">
                    {features.sales.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">MARKETING</h3>
                  <ul className="space-y-3">
                    {features.marketing.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">AI-POWERED TOOLS</h3>
                  <ul className="space-y-3">
                    {features.aiTools.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">CUSTOMER SUPPORT</h3>
                  <ul className="space-y-3">
                    {features.support.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <p className="text-lg">
                    Find out why <span className="text-green-600 font-semibold">150+ customers</span> across the globe trust Sasabot to grow your sales and streamline operations
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              {isSubmitted ? (
                <Card className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
                    <p className="text-gray-600 mb-6">
                      Thank you for booking a demo with us. A customer service representative will be in touch with you shortly to schedule your personalized demo.
                    </p>
                    <p className="text-gray-600 mb-6">
                      In the meantime, feel free to explore our resources or reach out to us on WhatsApp if you have any questions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button to="/help" variant="outline">
                        View Resources
                      </Button>
                      <Button 
                        href="https://wa.me/254762222000"
                        variant="primary"
                        external
                      >
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Book a demo with us today</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Name*
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Email*
                      </label>
                      <input
                        type="email"
                        id="businessEmail"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter Your Business Email"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        WhatsApp Number*
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="whatsappNumber"
                          name="whatsappNumber"
                          value={formData.whatsappNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Enter WhatsApp Number"
                          required
                        />
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        As a platform built around WhatsApp, we'll send you a demo to show you first hand what an interaction with your clients could look like.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name*
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Enter Company Name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="shopUrl" className="block text-sm font-medium text-gray-700 mb-1">
                          Shop URL
                        </label>
                        <input
                          type="url"
                          id="shopUrl"
                          name="shopUrl"
                          value={formData.shopUrl}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Enter your store URL"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                        Industry*
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="">Select Industry</option>
                        <option value="retail">Retail & E-commerce</option>
                        <option value="restaurant">Restaurant & Food</option>
                        <option value="hospitality">Hospitality & Travel</option>
                        <option value="fashion">Fashion & Apparel</option>
                        <option value="electronics">Electronics & Technology</option>
                        <option value="services">Professional Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country*
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                      <p className="mt-1 text-sm text-gray-500">Where your business operates</p>
                    </div>

                    {error && (
                      <div className="text-red-500 text-sm">{error}</div>
                    )}

                    <Button 
                      type="submit" 
                      variant="primary" 
                      fullWidth
                      disabled={isLoading}
                    >
                      {isLoading ? 'Submitting...' : 'Submit'}
                    </Button>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;