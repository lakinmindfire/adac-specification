import React from 'react';
import { motion } from 'framer-motion';
import { FileCode2, CheckCircle, Zap, Eye } from 'lucide-react';

interface ScrollyStep {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  color: string;
}

const scrollySteps: ScrollyStep[] = [
  {
    id: 'problem',
    title: 'The Challenge',
    description: 'Managing cloud architectures is complex and error-prone',
    details: [
      'Manual diagram creation takes hours',
      'Compliance checking is often overlooked',
      'Cost analysis is disconnected from design',
      'Documentation gets out of sync',
    ],
    icon: <FileCode2 size={40} />,
    color: '#ef4444',
  },
  {
    id: 'solution',
    title: 'The ADAC Solution',
    description: 'Define architecture once, get everything automatically',
    details: [
      'Write your architecture in simple YAML',
      'Instant validation and compliance checks',
      'Real-time cost analysis and optimization',
      'Auto-generated diagrams and documentation',
    ],
    icon: <Zap size={40} />,
    color: '#f59e0b',
  },
  {
    id: 'benefits',
    title: 'Real Benefits',
    description: 'See the impact on your workflow',
    details: [
      '80% faster architecture documentation',
      'Catch compliance issues before deployment',
      'Identify cost-saving opportunities instantly',
      'Keep teams synchronized on design changes',
    ],
    icon: <CheckCircle size={40} />,
    color: '#10b981',
  },
  {
    id: 'action',
    title: 'Ready to Start?',
    description: 'Join thousands using ADAC for their architectures',
    details: [
      'Explore the documentation',
      'Try our interactive examples',
      'Join the community',
      'Start building today',
    ],
    icon: <Eye size={40} />,
    color: '#3b82f6',
  },
];

export function ScrollytellingComponent() {
  const [inViewIdx, setInViewIdx] = React.useState(0);

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      {scrollySteps.map((step, idx) => (
        <motion.div
          key={step.id}
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
          onViewportEnter={() => setInViewIdx(idx)}
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Background Gradient */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, ${step.color}08, ${step.color}04)`,
              zIndex: 0,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3 }}
          />

          {/* Content Container */}
          <motion.div
            style={{
              maxWidth: '1000px',
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
            }}
            className="grid-cols-1 lg:grid-cols-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.4 }}
          >
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Step Counter */}
              <motion.div
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  background: `${step.color}15`,
                  border: `1px solid ${step.color}40`,
                  fontSize: '0.875rem',
                  color: step.color,
                  fontWeight: '600',
                  marginBottom: '1rem',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                Step {idx + 1} of {scrollySteps.length}
              </motion.div>

              {/* Title */}
              <motion.h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  margin: '1rem 0 0.5rem 0',
                  color: 'var(--text-primary)',
                  lineHeight: '1.2',
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                {step.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  margin: '1rem 0 2rem 0',
                  lineHeight: '1.6',
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {step.description}
              </motion.p>

              {/* Details List */}
              <motion.div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {step.details.map((detail, i) => (
                  <motion.div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                    }}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.25, delay: 0.25 + i * 0.05 }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: `${step.color}20`,
                        border: `2px solid ${step.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: '0 0 24px',
                        marginTop: '2px',
                        fontSize: '0.875rem',
                        color: step.color,
                        fontWeight: '700',
                      }}
                    >
                      ✓
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.5',
                      }}
                    >
                      {detail}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Icon/Visual */}
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="hidden lg:flex"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <motion.div
                style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${step.color}15, ${step.color}05)`,
                  border: `2px solid ${step.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: step.color,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle, ${step.color}20, transparent)`,
                  }}
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Icon */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {step.icon}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '0.5rem',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {scrollySteps.map((_, i) => (
              <motion.div
                key={i}
                style={{
                  width: i === idx ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '9999px',
                  background: i === idx ? step.color : 'var(--card-border)',
                }}
                animate={i === idx ? { scale: [1, 1.15, 1] } : {}}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      ))}

      {/* Call to Action */}
      <motion.div
        style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          background: 'var(--card-background)',
          borderTop: '2px solid var(--card-border)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
          Ready to Transform Your Architecture?
        </h3>
        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
          }}
        >
          Start exploring ADAC today and experience the future of architecture design.
        </p>
      </motion.div>
    </div>
  );
}
