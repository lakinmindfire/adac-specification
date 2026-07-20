import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FileCode2, CheckCircle, Zap, Layers, Image as ImageIcon } from 'lucide-react';

interface PipelineStep {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const pipelineSteps: PipelineStep[] = [
  {
    id: 'yaml',
    label: 'YAML Input',
    icon: <FileCode2 size={24} />,
    description: 'Your infrastructure definition',
    color: '#3b82f6',
  },
  {
    id: 'parser',
    label: 'Parser',
    icon: <Layers size={24} />,
    description: 'Parse YAML structure',
    color: '#06b6d4',
  },
  {
    id: 'validator',
    label: 'Validator',
    icon: <CheckCircle size={24} />,
    description: 'Validate against schema',
    color: '#10b981',
  },
  {
    id: 'optimizer',
    label: 'Optimizer',
    icon: <Zap size={24} />,
    description: 'Analyze & optimize',
    color: '#f59e0b',
  },
  {
    id: 'output',
    label: 'SVG Output',
    icon: <ImageIcon size={24} />,
    description: 'Generate visual diagram',
    color: '#ef4444',
  },
];

export function ArchitectureDiagramComponent() {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const arrowVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Desktop View - Horizontal Flow */}
      <motion.div
        className="hidden md:flex gap-4 items-stretch overflow-auto pb-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {pipelineSteps.map((step, idx) => (
          <React.Fragment key={step.id}>
            {/* Step Card */}
            <motion.div
              variants={stepVariants}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              style={{
                flex: '0 0 200px',
                cursor: 'pointer',
                borderRadius: '12px',
                background: 'var(--card-background)',
                border: '2px solid var(--card-border)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{
                scale: 1.05,
                borderColor: step.color,
                boxShadow: `0 0 20px ${step.color}40`,
              }}
            >
              {/* Animated Background */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(135deg, ${step.color}10, transparent)`,
                  opacity: activeStep === step.id ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 0,
                }}
              />

              {/* Icon */}
              <motion.div
                style={{
                  color: step.color,
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                animate={{
                  rotate: activeStep === step.id ? 360 : 0,
                  scale: activeStep === step.id ? 1.2 : 1,
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {step.icon}
              </motion.div>

              {/* Label */}
              <motion.div
                style={{
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  color: 'var(--text-primary)',
                  zIndex: 1,
                }}
                animate={{
                  fontSize: activeStep === step.id ? '1rem' : '0.875rem',
                }}
              >
                {step.label}
              </motion.div>

              {/* Description */}
              <motion.div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--muted-foreground)',
                  opacity: activeStep === step.id ? 1 : 0.6,
                  transition: 'opacity 0.3s ease',
                  zIndex: 1,
                }}
              >
                {step.description}
              </motion.div>

              {/* Pulsing Border for Active */}
              {activeStep === step.id && (
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: `2px solid ${step.color}`,
                    borderRadius: '12px',
                    zIndex: -1,
                  }}
                  animate={{
                    opacity: [1, 0.3, 1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.div>

            {/* Arrow Between Steps */}
            {idx < pipelineSteps.length - 1 && (
              <motion.div
                style={{
                  flex: '0 0 40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <motion.path
                    d="M 10 20 L 30 20"
                    stroke="var(--text-secondary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={arrowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                  <motion.path
                    d="M 25 15 L 30 20 L 25 25"
                    stroke="var(--text-secondary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </svg>
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Mobile View - Vertical Stack */}
      <motion.div
        className="md:hidden space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {pipelineSteps.map((step, idx) => (
          <React.Fragment key={step.id}>
            <motion.div
              variants={stepVariants}
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              style={{
                borderRadius: '12px',
                background: 'var(--card-background)',
                border: '2px solid var(--card-border)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              {/* Animated Background */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(135deg, ${step.color}10, transparent)`,
                  opacity: activeStep === step.id ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}
              />

              {/* Icon */}
              <motion.div
                style={{
                  color: step.color,
                  flex: '0 0 40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                animate={{
                  rotate: activeStep === step.id ? 360 : 0,
                }}
                transition={{ duration: 0.6 }}
              >
                {step.icon}
              </motion.div>

              {/* Content */}
              <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                  {step.label}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
                  {step.description}
                </div>
              </div>
            </motion.div>

            {/* Arrow for Mobile */}
            {idx < pipelineSteps.length - 1 && (
              <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ fontSize: '1.5rem' }}
                >
                  ↓
                </motion.div>
              </div>
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Info Box */}
      <motion.div
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          borderRadius: '12px',
          background: 'color-mix(in oklab, hsl(var(--primary)) 8%, transparent)',
          border: '1px solid color-mix(in oklab, hsl(var(--primary)) 15%, transparent)',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
          💡 <strong>Tip:</strong> Click any step to learn more about what happens at that stage. The pipeline validates your YAML against the ADAC schema and generates optimized architecture diagrams.
        </p>
      </motion.div>
    </div>
  );
}
