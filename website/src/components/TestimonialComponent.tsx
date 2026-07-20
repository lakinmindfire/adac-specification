import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image?: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alex Chen',
    role: 'DevOps Engineer',
    company: 'TechFlow Inc.',
    quote:
      'ADAC has transformed how we document infrastructure. What used to take hours in Visio now takes minutes, and everything stays in sync with our actual deployment.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Infrastructure Architect',
    company: 'CloudScale Systems',
    quote:
      'The schema validation catches mistakes before they reach production. The multi-cloud support makes it perfect for our hybrid infrastructure.',
    rating: 5,
  },
  {
    name: 'Mike Rodriguez',
    role: 'Platform Lead',
    company: 'DataDrive Co.',
    quote:
      'Finally, a specification that treats infrastructure as code should be treated. ADAC integrates seamlessly with our CI/CD pipeline.',
    rating: 5,
  },
];

interface TestimonialComponentProps {
  title?: string;
  description?: string;
}

export const TestimonialComponent: React.FC<TestimonialComponentProps> = ({
  title = "Loved by Infrastructure Teams",
  description = "See what developers and architects are saying about ADAC."
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem',
        background: 'color-mix(in oklab, hsl(var(--primary)) 3%, transparent)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-4"
              style={{ color: 'var(--foreground)' }}
            >
              {title}
            </h2>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75rem',
                color: 'var(--muted-foreground)',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              {description}
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              style={{
                padding: '1.5rem',
                borderRadius: '12px',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    style={{
                      color: '#fbbf24',
                      fill: '#fbbf24',
                    }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: 'var(--foreground)',
                  marginBottom: '1.5rem',
                  flex: 1,
                  fontStyle: 'italic',
                }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <div style={{ fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.25rem' }}>
                  {testimonial.name}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
