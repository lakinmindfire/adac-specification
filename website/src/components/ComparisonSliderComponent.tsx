import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ComparisonItem {
  feature: string;
  traditional: string;
  adac: string;
}

const comparisonData: ComparisonItem[] = [
  {
    feature: 'Diagram Creation',
    traditional: 'Manual drawing tools, time-consuming',
    adac: 'Automatic generation from YAML',
  },
  {
    feature: 'Compliance Checking',
    traditional: 'Manual review, error-prone',
    adac: 'Automated validation against frameworks',
  },
  {
    feature: 'Cost Analysis',
    traditional: 'Spreadsheet calculations',
    adac: 'Real-time cost estimation and optimization',
  },
  {
    feature: 'Multi-Cloud Support',
    traditional: 'Separate tools per cloud',
    adac: 'Single tool for all cloud providers',
  },
  {
    feature: 'Documentation',
    traditional: 'Manual documentation maintenance',
    adac: 'Auto-updated from source YAML',
  },
  {
    feature: 'Version Control',
    traditional: 'Difficult to track changes',
    adac: 'Full Git integration, trackable changes',
  },
];

export function ComparisonSliderComponent() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

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
        style={{ display: 'grid', gap: '1rem' }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {comparisonData.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            onClick={() => setExpandedRow(expandedRow === item.feature ? null : item.feature)}
            style={{
              borderRadius: '12px',
              background: 'var(--card-background)',
              border: '2px solid var(--card-border)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            whileHover={{
              borderColor: 'var(--primary)',
              boxShadow: '0 0 20px var(--primary)20',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0, fontWeight: '600', fontSize: '1rem' }}>
                  {item.feature}
                </h4>
              </div>
              <motion.div
                animate={{
                  rotate: expandedRow === item.feature ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </div>

            {/* Expanded Content */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: expandedRow === item.feature ? 'auto' : 0,
                opacity: expandedRow === item.feature ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{
                overflow: 'hidden',
                borderTop: '1px solid var(--card-border)',
              }}
            >
              <div
                style={{
                  padding: '1.5rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                }}
              >
                {/* Traditional Column */}
                <div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--muted-foreground)',
                      marginBottom: '0.5rem',
                      fontWeight: '600',
                    }}
                  >
                    Traditional
                  </div>
                  <motion.div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div
                      style={{
                        color: '#ef4444',
                        fontWeight: '700',
                        flex: '0 0 24px',
                        marginTop: '2px',
                      }}
                    >
                      ✗
                    </div>
                    <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.5' }}>
                      {item.traditional}
                    </p>
                  </motion.div>
                </div>

                {/* ADAC Column */}
                <div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: 'var(--muted-foreground)',
                      marginBottom: '0.5rem',
                      fontWeight: '600',
                    }}
                  >
                    ADAC
                  </div>
                  <motion.div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                    }}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <div
                      style={{
                        color: '#10b981',
                        fontWeight: '700',
                        flex: '0 0 24px',
                        marginTop: '2px',
                      }}
                    >
                      ✓
                    </div>
                    <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.5' }}>
                      {item.adac}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
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
          💡 <strong>Pro Tip:</strong> Drag the slider above to compare, then click any row to see detailed differences
        </p>
      </motion.div>
    </div>
  );
}
