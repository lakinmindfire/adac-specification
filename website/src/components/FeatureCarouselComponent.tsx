import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Cloud, Shield, Zap, Users, Package, GitBranch } from 'lucide-react';

interface CarouselFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  color: string;
}

const features: CarouselFeature[] = [
  {
    id: 'yaml-parsing',
    title: 'YAML Parsing',
    description: 'Parse infrastructure definitions in intuitive YAML format',
    icon: <GitBranch size={32} />,
    details: ['Schema validation', 'Error reporting', 'Format flexibility'],
    color: '#3b82f6',
  },
  {
    id: 'multi-cloud',
    title: 'Multi-Cloud Support',
    description: 'Design architectures for AWS, GCP, and more',
    icon: <Cloud size={32} />,
    details: ['AWS resources', 'GCP services', 'Cloud-agnostic'],
    color: '#06b6d4',
  },
  {
    id: 'compliance',
    title: 'Compliance Checking',
    description: 'Validate against security frameworks automatically',
    icon: <Shield size={32} />,
    details: ['PCI-DSS', 'SOC2', 'HIPAA', 'ISO 27001'],
    color: '#10b981',
  },
  {
    id: 'optimization',
    title: 'Cost Optimization',
    description: 'Analyze and suggest cost-saving measures',
    icon: <Zap size={32} />,
    details: ['Cost analysis', 'Recommendations', 'Budget tracking'],
    color: '#f59e0b',
  },
  {
    id: 'visualization',
    title: 'Auto Diagrams',
    description: 'Generate beautiful SVG architecture diagrams',
    icon: <Package size={32} />,
    details: ['SVG export', 'Interactive', 'Customizable'],
    color: '#8b5cf6',
  },
  {
    id: 'collaboration',
    title: 'Community',
    description: 'Share and collaborate with the ADAC community',
    icon: <Users size={32} />,
    details: ['GitHub integration', 'Open source', 'Contributions'],
    color: '#ef4444',
  },
];

export function FeatureCarouselComponent() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const currentFeature = features[currentIdx];
  const nextIdx = (currentIdx + 1) % features.length;
  const prevIdx = (currentIdx - 1 + features.length) % features.length;

  const handleNext = () => setCurrentIdx(nextIdx);
  const handlePrev = () => setCurrentIdx(prevIdx);
  const handleDot = (idx: number) => setCurrentIdx(idx);

  const itemVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      {/* Main Carousel */}
      <div
        style={{
          position: 'relative',
          height: '400px',
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'var(--card-background)',
          border: '2px solid var(--card-border)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Feature Cards Stack */}
        {features.map((feature, idx) => {
          const isActive = idx === currentIdx;
          const isNext = idx === nextIdx;
          const isPrev = idx === prevIdx;

          return (
            <motion.div
              key={feature.id}
              custom={idx - currentIdx}
              variants={itemVariants}
              initial="enter"
              animate={isActive ? 'center' : 'exit'}
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              style={{
                position: 'absolute',
                inset: 0,
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: isActive
                  ? `linear-gradient(135deg, ${feature.color}10, transparent)`
                  : 'transparent',
              }}
            >
              {/* Content */}
              <div>
                {/* Icon */}
                <motion.div
                  style={{
                    color: feature.color,
                    marginBottom: '1.5rem',
                    display: 'inline-flex',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: `${feature.color}15`,
                  }}
                  animate={isActive ? { scale: 1.1, rotate: [0, 10, -10, 0] } : {}}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <motion.h3
                  style={{
                    fontSize: '1.875rem',
                    fontWeight: '700',
                    margin: '0 0 0.5rem 0',
                    color: 'var(--text-primary)',
                  }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -20 }}
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)',
                    margin: '0 0 1.5rem 0',
                    lineHeight: '1.6',
                  }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 10 }}
                >
                  {feature.description}
                </motion.p>

                {/* Details List */}
                <motion.div
                  style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                  animate={isActive ? { opacity: 1 } : { opacity: 0.3 }}
                >
                  {feature.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        background: `${feature.color}20`,
                        fontSize: '0.875rem',
                        color: feature.color,
                        fontWeight: '500',
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.3 }}
                      transition={{ delay: isActive ? i * 0.1 : 0 }}
                    >
                      <ChevronRight size={14} />
                      {detail}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Slide Counter */}
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--muted-foreground)',
                  marginTop: '1rem',
                }}
              >
                {currentIdx + 1} / {features.length}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '2rem',
          gap: '1rem',
        }}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: '2px solid var(--card-border)',
            background: 'var(--card-background)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--primary)';
            e.currentTarget.style.color = 'var(--primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--card-border)';
            e.currentTarget.style.color = 'var(--text-primary)';
          }}
        >
          ← Previous
        </button>

        {/* Dot Indicators */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {features.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleDot(idx)}
              style={{
                width: idx === currentIdx ? '32px' : '10px',
                height: '10px',
                borderRadius: '9999px',
                border: 'none',
                background: idx === currentIdx ? `var(--primary)` : 'var(--card-border)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: '2px solid var(--card-border)',
            background: 'var(--card-background)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--primary)';
            e.currentTarget.style.color = 'var(--primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--card-border)';
            e.currentTarget.style.color = 'var(--text-primary)';
          }}
        >
          Next →
        </button>
      </div>

      {/* Auto-rotate Info */}
      <motion.div
        style={{
          marginTop: '1.5rem',
          padding: '1rem',
          borderRadius: '8px',
          background: 'color-mix(in oklab, hsl(var(--primary)) 8%, transparent)',
          border: '1px solid color-mix(in oklab, hsl(var(--primary)) 15%, transparent)',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          textAlign: 'center',
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ✨ Use arrow buttons or click dots to explore each feature
      </motion.div>
    </div>
  );
}
