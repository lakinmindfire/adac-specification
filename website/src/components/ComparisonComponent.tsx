import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  adac: boolean;
  traditional: boolean;
}

const comparisonData: ComparisonRow[] = [
  { feature: 'Version controlled architectures', adac: true, traditional: false },
  { feature: 'Automated diagram generation', adac: true, traditional: false },
  { feature: 'Schema validation', adac: true, traditional: false },
  { feature: 'Multi-cloud support', adac: true, traditional: true },
  { feature: 'Cost estimation', adac: true, traditional: false },
  { feature: 'Compliance checking', adac: true, traditional: false },
  { feature: 'Interactive collaboration', adac: true, traditional: true },
  { feature: 'Infrastructure as Code integration', adac: true, traditional: false },
];

interface ComparisonComponentProps {
  title?: string;
  description?: string;
}

export const ComparisonComponent: React.FC<ComparisonComponentProps> = ({
  title = "ADAC vs Traditional Approaches",
  description = "See how ADAC compares to traditional architecture documentation and diagramming tools."
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

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
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

        {/* Comparison Table */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            background: 'var(--card)',
          }}
        >
          {/* Header Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              borderBottom: '2px solid var(--border)',
              background: 'color-mix(in oklab, var(--card) 50%, var(--background) 50%)',
            }}
          >
            {['Feature', 'ADAC', 'Traditional'].map((header, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1rem',
                  fontWeight: 600,
                  textAlign: idx === 0 ? 'left' : 'center',
                  color: idx === 0 ? 'var(--foreground)' : 'var(--foreground)',
                  fontSize: '0.95rem',
                }}
              >
                {header}
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {comparisonData.map((row, idx) => (
            <motion.div
              key={idx}
              variants={rowVariants}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                borderBottom: idx < comparisonData.length - 1 ? '1px solid var(--border)' : 'none',
                background: idx % 2 === 0 ? 'var(--card)' : 'color-mix(in oklab, var(--card) 50%, var(--background) 50%)',
              }}
            >
              <div style={{ padding: '1rem', color: 'var(--foreground)', fontSize: '0.95rem' }}>
                {row.feature}
              </div>

              <div
                style={{
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {row.adac ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      background: 'color-mix(in oklab, #10b981 20%, transparent)',
                      color: '#10b981',
                    }}
                  >
                    <Check size={16} strokeWidth={3} />
                  </motion.div>
                ) : (
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      background: 'color-mix(in oklab, var(--muted) 50%, transparent)',
                    }}
                  />
                )}
              </div>

              <div
                style={{
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {row.traditional ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      background: 'color-mix(in oklab, #10b981 20%, transparent)',
                      color: '#10b981',
                    }}
                  >
                    <Check size={16} strokeWidth={3} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      background: 'color-mix(in oklab, #ef4444 20%, transparent)',
                      color: '#ef4444',
                    }}
                  >
                    <X size={16} strokeWidth={3} />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonComponent;
