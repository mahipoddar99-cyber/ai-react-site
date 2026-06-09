import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🌱',
    title: 'Eco-Friendly',
    description: 'Made from sustainable materials that minimize environmental impact and support biodiversity.',
  },
  {
    icon: '♻️',
    title: 'Recyclable',
    description: 'Fully recyclable products designed to complete the circular economy and reduce landfill waste.',
  },
  {
    icon: '🌍',
    title: 'Carbon Neutral',
    description: 'We offset our carbon footprint through verified climate action projects worldwide.',
  },
  {
    icon: '✓',
    title: 'Certified',
    description: 'Third-party certified products meet international environmental and sustainability standards.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Eco-Friendly?</h2>
          <p className="text-xl text-gray-600">
            Our products are designed with the planet in mind, offering sustainable solutions without compromise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;