import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface ComparisonItem {
  feature: string;
  traditional: string;
  adac: string;
  traditionalBenefit: boolean;
  adacBenefit: boolean;
}

const comparisonData: ComparisonItem[] = [
  {
    feature: 'Diagram Creation',
    traditional: 'Manual drawing tools, time-consuming',
    adac: 'Automatic generation from YAML',
    traditionalBenefit: false,
    adacBenefit: true,
  },
  {
    feature: 'Compliance Checking',
    traditional: 'Manual review, error-prone',
    adac: 'Automated validation against frameworks',
    traditionalBenefit: false,
    adacBenefit: true,
  },
  {
    feature: 'Cost Analysis',
    traditional: 'Spreadsheet calculations',
    adac: 'Real-time cost estimation and optimization',
    traditionalBenefit: false,
    adacBenefit: true,
  },
  {
    feature: 'Multi-Cloud Support',
    traditional: 'Separate tools per cloud',
    adac: 'Single tool for all cloud providers',
    traditionalBenefit: false,
    adacBenefit: true,
  },
  {
    feature: 'Documentation',
    traditional: 'Manual documentation maintenance',
    adac: 'Auto-updated from source YAML',
    traditionalBenefit: false,
    adacBenefit: true,
  },
  {
    feature: 'Version Control',
    traditional: 'Difficult to track changes',
    adac: 'Full Git integration, trackable changes',
    traditionalBenefit: false,
    adacBenefit: true,
  },
  {
    feature: 'Setup Time',
    traditional: '2-3 weeks for infrastructure',
    adac: 'Days with reusable components',
    traditionalBenefit: false,
    adacBenefit: true,
  },
  {
    feature: 'Team Collaboration',
    traditional: 'Communication overhead',
    adac: 'Unified source of truth',
    traditionalBenefit: false,
    adacBenefit: true,
  },
];

export function ComparisonSliderComponent() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Visual Slider */}
      <motion.div
        style={{
          position: 'relative',
          marginBottom: '3rem',
          borderRadius: '16px',
          overflow: 'hidden',
          height: '300px',
          background: 'var(--card-background)',
          border: '2px solid var(--card-border)',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side - Traditional */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #ef444440, #f87171a0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '2rem',
            overflow: 'hidden',
            width: `${sliderPosition}%`,
            transition: 'width 0.1s linear',
          }}
        >
          <motion.div
            animate={{
              opacity: sliderPosition > 30 ? 1 : 0.3,
              x: sliderPosition > 30 ? 0 : -20,
            }}
            style={{
              textAlign: 'left',
            }}
          >
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: '700' }}>
              Traditional Approach
            </h3>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>
              Manual, time-consuming, error-prone
            </p>
          </motion.div>
        </div>

        {/* Right Side - ADAC */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #10b98140, #34d39950)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '2rem',
            overflow: 'hidden',
            width: `${100 - sliderPosition}%`,
            marginLeft: 'auto',
            transition: 'width 0.1s linear',
          }}
        >
          <motion.div
            animate={{
              opacity: sliderPosition < 70 ? 1 : 0.3,
              x: sliderPosition < 70 ? 0 : 20,
            }}
            style={{
              textAlign: 'right',
            }}
          >
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: '700' }}>
              ADAC Solution
            </h3>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>
              Automated, fast, reliable
            </p>
          </motion.div>
        </div>

        {/* Slider Handle */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'var(--primary)',
            left: `${sliderPosition}%`,
            transform: 'translateX(-50%)',
            cursor: 'ew-resize',
            zIndex: 10,
          }}
          whileHover={{ width: '8px' }}
          transition={{ width: 0.2 }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              boxShadow: '0 0 20px var(--primary)',
            }}
          >
            ↔
          </motion.div>
        </motion.div>

        {/* Hidden Range Input for Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'ew-resize',
            zIndex: 5,
          }}
        />
      </motion.div>

      {/* Comparison Table */}
      <motion.div
        style={{
          borderRadius: '12px',
          background: 'var(--card-background)',
          border: '2px solid var(--card-border)',
          overflow: 'hidden',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Table Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            background: 'color-mix(in oklab, hsl(var(--primary)) 8%, transparent)',
            borderBottom: '2px solid var(--card-border)',
          }}
          className="hidden sm:grid"
        >
          {/* Feature Column */}
          <motion.div
            style={{
              padding: '1.5rem',
              fontWeight: '700',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-primary)',
              borderRight: '1px solid var(--card-border)',
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Feature
          </motion.div>

          {/* Traditional Column */}
          <motion.div
            style={{
              padding: '1.5rem',
              fontWeight: '700',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-primary)',
              borderRight: '1px solid var(--card-border)',
              textAlign: 'center',
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            Traditional
          </motion.div>

          {/* ADAC Column */}
          <motion.div
            style={{
              padding: '1.5rem',
              fontWeight: '700',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-primary)',
              textAlign: 'center',
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            ADAC
          </motion.div>
        </div>

        {/* Table Rows */}
        {comparisonData.map((item, idx) => (
          <motion.div
            key={idx}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderBottom: idx < comparisonData.length - 1 ? '1px solid var(--card-border)' : 'none',
              transition: 'all 0.3s ease',
            }}
            className="hidden sm:grid"
            whileHover={{
              background: 'color-mix(in oklab, hsl(var(--primary)) 3%, transparent)',
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + idx * 0.05 }}
          >
            {/* Feature Cell */}
            <div
              style={{
                padding: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                borderRight: '1px solid var(--card-border)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {item.feature}
            </div>

            {/* Traditional Cell */}
            <div
              style={{
                padding: '1.5rem',
                color: 'var(--text-secondary)',
                borderRight: '1px solid var(--card-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  flex: '0 0 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={18} style={{ color: '#ef4444' }} />
              </div>
              <span style={{ fontSize: '0.875rem' }}>{item.traditional}</span>
            </div>

            {/* ADAC Cell */}
            <div
              style={{
                padding: '1.5rem',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  flex: '0 0 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Check size={18} style={{ color: '#10b981' }} />
              </div>
              <span style={{ fontSize: '0.875rem' }}>{item.adac}</span>
            </div>
          </motion.div>
        ))}

        {/* Mobile View - Stack Cards */}
        <div style={{ display: 'none' }} className="sm:hidden">
          {comparisonData.map((item, idx) => (
            <motion.div
              key={idx}
              style={{
                padding: '1.5rem',
                borderBottom: idx < comparisonData.length - 1 ? '1px solid var(--card-border)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.05 }}
            >
              {/* Feature Title */}
              <h4 style={{ margin: 0, fontWeight: '700', fontSize: '1rem', color: 'var(--text-primary)' }}>
                {item.feature}
              </h4>

              {/* Traditional */}
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    flex: '0 0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px',
                  }}
                >
                  <X size={18} style={{ color: '#ef4444' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--muted-foreground)', marginBottom: '0.25rem' }}>
                    Traditional
                  </div>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {item.traditional}
                  </p>
                </div>
              </div>

              {/* ADAC */}
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    flex: '0 0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px',
                  }}
                >
                  <Check size={18} style={{ color: '#10b981' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--muted-foreground)', marginBottom: '0.25rem' }}>
                    ADAC
                  </div>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {item.adac}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Summary Box */}
      <motion.div
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, hsl(var(--primary))08, hsl(var(--primary))15)',
          border: '1px solid hsl(var(--primary))20',
          textAlign: 'center',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          💡 <strong>Quick Look:</strong> Drag the slider above to compare, view complete comparison table below
        </p>
      </motion.div>
    </div>
  );
}
