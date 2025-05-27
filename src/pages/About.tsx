import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, CheckCircle, Award, Users, BarChart4, Globe } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Sasabot
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              We're on a mission to empower small and medium businesses across Africa with affordable, accessible AI technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="How Sasabot came to be"
              />
              <div className="prose prose-lg max-w-none">
                <p>
                  Sasabot was born out of a simple observation: small businesses across Kenya were spending hours managing customer conversations on WhatsApp, manually answering the same questions, and often missing messages during busy periods.
                </p>
                <p>
                  Our founder, James Mwangi, experienced this firsthand while helping at his family's electronics shop in Nairobi. He noticed how much time was spent responding to basic product inquiries and price checks on WhatsApp, and how many potential sales were lost when messages were missed.
                </p>
                <p>
                  In 2022, James teamed up with tech experts Sarah Omondi and David Kimani to create a solution specifically designed for African SMEs - a WhatsApp automation tool that was affordable, easy to use, and didn't require technical expertise.
                </p>
                <p>
                  After months of development and testing with local businesses, Sasabot launched in early 2023. Today, we're proud to serve hundreds of businesses across Kenya, with plans to expand throughout East Africa in the coming years.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
                alt="Sasabot founding team" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Mission & Values"
            subtitle="What drives us every day"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ValueCard
              icon={<Lightbulb size={24} />}
              title="Innovation for All"
              description="We believe advanced AI technology should be accessible to businesses of all sizes, not just large corporations."
            />
            <ValueCard
              icon={<CheckCircle size={24} />}
              title="Local Solutions"
              description="We build technology that addresses the specific needs and challenges of African businesses."
            />
            <ValueCard
              icon={<Award size={24} />}
              title="Quality Service"
              description="We're committed to providing reliable, high-quality service that our customers can depend on."
            />
            <ValueCard
              icon={<Users size={24} />}
              title="Customer Success"
              description="We measure our success by the success of our customers and their businesses."
            />
            <ValueCard
              icon={<BarChart4 size={24} />}
              title="Continuous Improvement"
              description="We're constantly learning and improving our platform based on customer feedback."
            />
            <ValueCard
              icon={<Globe size={24} />}
              title="Digital Inclusion"
              description="We're committed to bridging the digital divide by making technology accessible to all."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The people behind Sasabot"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TeamMember
              name="James Mwangi"
              role="Founder & CEO"
              bio="Former software engineer with a passion for making technology accessible to small businesses."
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
            />
            <TeamMember
              name="Sarah Omondi"
              role="CTO"
              bio="AI specialist with experience developing natural language processing systems for local languages."
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
            />
            <TeamMember
              name="David Kimani"
              role="Head of Customer Success"
              bio="Former small business owner who understands the challenges our customers face firsthand."
              image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
            />
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Journey"
            subtitle="The key milestones in Sasabot's growth"
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Partners"
            subtitle="Organizations that support our mission"
            centered
          />
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-12">
            <div className="text-gray-400 text-lg font-medium">Partner 1</div>
            <div className="text-gray-400 text-lg font-medium">Partner 2</div>
            <div className="text-gray-400 text-lg font-medium">Partner 3</div>
            <div className="text-gray-400 text-lg font-medium">Partner 4</div>
            <div className="text-gray-400 text-lg font-medium">Partner 5</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join us on our mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of the Sasabot community and transform the way you do business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/get-started" size="lg" variant="white">
              Get Started
            </Button>
            <Button 
              href="mailto:careers@sasabot.com" 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-primary-700"
              external
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white rounded-xl shadow-card p-6 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="inline-flex items-center justify-center p-3 bg-primary-100 text-primary-700 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image }) => (
  <motion.div 
    className="bg-white rounded-xl shadow-card overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <img 
      src={image} 
      alt={name} 
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-primary-700 font-medium mb-3">{role}</p>
      <p className="text-gray-600">{bio}</p>
      <div className="flex space-x-3 mt-4">
        <a 
          href="#" 
          className="text-gray-400 hover:text-gray-600 transition"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1.0-.02-2.3-1.392-2.3-1.397 0-1.613 1.086-1.613 2.2v4.278H8.338V8.5h2.438v1.14h.03c.34-.65 1.175-1.34 2.418-1.34 2.594 0 3.068 1.8 3.068 4.08v4.41zM5.36 7.5c-.78 0-1.41-.63-1.41-1.41 0-.78.63-1.41 1.41-1.41s1.41.63 1.41 1.41c0 .78-.63 1.41-1.41 1.41zm1.5 8.838H3.83V8.5h3.028v7.838zM17.5 1H2.5C1.378 1 .5 1.87.5 2.98v14.04c0 1.11.88 1.98 2 1.98h15c1.12 0 2-.87 2-1.98V2.98c0-1.11-.88-1.98-2-1.98z" clipRule="evenodd" />
          </svg>
        </a>
        <a 
          href="#" 
          className="text-gray-400 hover:text-gray-600 transition"
          aria-label="Twitter"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.258 3.266c-.693.32-1.437.537-2.218.636.797-.48 1.41-1.234 1.7-2.143-.75.45-1.58.775-2.465.95-.705-.76-1.712-1.235-2.82-1.235-2.14 0-3.87 1.74-3.87 3.886 0 .31.033.61.095.898-3.21-.16-6.06-1.7-7.96-4.046-.33.572-.52 1.235-.52 1.947 0 1.347.687 2.54 1.732 3.235-.64-.02-1.24-.195-1.767-.485v.047c0 1.886 1.34 3.46 3.12 3.816-.33.09-.673.138-1.03.138-.25 0-.495-.023-.73-.07.5 1.546 1.94 2.67 3.65 2.704-1.34 1.05-3.02 1.67-4.86 1.67-.32 0-.63-.017-.94-.057 1.73 1.115 3.79 1.757 6 1.757 7.2 0 11.13-5.965 11.13-11.13 0-.172-.006-.338-.013-.505.762-.554 1.423-1.244 1.947-2.02z" />
          </svg>
        </a>
      </div>
    </div>
  </motion.div>
);

const Timeline: React.FC = () => {
  const events = [
    {
      date: "Q4 2022",
      title: "Idea & Research",
      description: "The concept for Sasabot was born after observing the challenges faced by SMEs in Kenya."
    },
    {
      date: "Q1 2023",
      title: "Company Founded",
      description: "Sasabot was officially registered as a company and secured initial seed funding."
    },
    {
      date: "Q2 2023",
      title: "Beta Launch",
      description: "We launched our beta with 20 test businesses across different industries in Nairobi."
    },
    {
      date: "Q3 2023",
      title: "Official Launch",
      description: "Sasabot officially launched to the public with our Basic plan."
    },
    {
      date: "Q4 2023",
      title: "100+ Businesses",
      description: "We celebrated reaching our first 100 active business customers."
    },
    {
      date: "Q2 2024",
      title: "Expansion to Uganda & Tanzania",
      description: "Sasabot expanded operations to serve businesses in Uganda and Tanzania."
    },
    {
      date: "Q3 2024",
      title: "Premium AI Plan",
      description: "Coming soon: Our advanced AI features will launch to waitlist customers."
    }
  ];

  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <motion.div
          key={index}
          className="flex items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex flex-col items-center mr-4">
            <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
              {index + 1}
            </div>
            {index < events.length - 1 && (
              <div className="w-0.5 h-full bg-primary-200 my-1"></div>
            )}
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 flex-1">
            <div className="text-primary-700 font-semibold mb-1">{event.date}</div>
            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default About;