import React from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: '100', label: 'Developers', suffix: '+' },
  { value: '50', label: 'Organizations', suffix: '+' },
  { value: '1000s', label: 'Architectures Defined' },
  { value: '24/7', label: 'Community Support' },
];

interface StatsComponentProps {
  title?: string;
  description?: string;
}

export const StatsComponent: React.FC<StatsComponentProps> = ({
  title = "Trusted by Teams Worldwide",
  description = "Join the growing community of infrastructure engineers using ADAC."
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
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
        background: 'color-mix(in oklab, hsl(var(--primary)) 5%, transparent)',
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

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
          }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              style={{
                textAlign: 'center',
                padding: '2rem',
                borderRadius: '12px',
                background: 'var(--card)',
                border: '1px solid var(--border)',
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  style={{
                    fontSize: '3.5rem',
                    fontWeight: 700,
                    background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-light)) 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat.value}
                  {stat.suffix}
                </div>
              </motion.div>
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--muted-foreground)',
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsComponent;
