import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

interface TimelineItem {
  version: string;
  date: string;
  title: string;
  description: string;
  features: string[];
  isCompleted: boolean;
}

const timelineData: TimelineItem[] = [
  {
    version: 'v0.1.0',
    date: 'Released',
    title: 'Foundation',
    description: 'Initial release of ADAC specification',
    features: ['Core schema definition', 'Multi-cloud support', 'Basic validation'],
    isCompleted: true,
  },
  {
    version: 'v0.2.0',
    date: 'Coming Soon',
    title: 'Enhanced Validation',
    description: 'Improved schema validation and compliance checking',
    features: ['Advanced validators', 'Custom rules engine', 'Policy support'],
    isCompleted: false,
  },
  {
    version: 'v0.3.0',
    date: 'Planned',
    title: 'Cost & Performance',
    description: 'Cost estimation and performance metrics',
    features: ['Cost calculation', 'Performance benchmarks', 'Optimization tips'],
    isCompleted: false,
  },
  {
    version: 'v1.0.0',
    date: 'Future',
    title: 'Production Ready',
    description: 'Stable production-ready specification',
    features: ['API stabilization', 'Extended tooling', 'Community features'],
    isCompleted: false,
  },
];

interface TimelineComponentProps {
  title?: string;
  description?: string;
}

export const TimelineComponent: React.FC<TimelineComponentProps> = ({
  title = "ADAC Roadmap",
  description = "Here's what's coming next for the ADAC specification."
}) => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--border)',
              transform: 'translateX(-50%)',
            }}
          />

          {/* Timeline items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem',
                  alignItems: 'center',
                }}
              >
                {/* Left content (alternating) */}
                {idx % 2 === 0 ? (
                  <>
                    <div style={{ textAlign: 'right', paddingRight: '2rem' }}>
                      <div
                        style={{
                          display: 'inline-block',
                          padding: '0.5rem 1rem',
                          borderRadius: '9999px',
                          background: item.isCompleted
                            ? 'color-mix(in oklab, #10b981 15%, transparent)'
                            : 'color-mix(in oklab, hsl(var(--primary)) 15%, transparent)',
                          color: item.isCompleted ? '#10b981' : 'hsl(var(--primary))',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          marginBottom: '0.5rem',
                        }}
                      >
                        {item.date}
                      </div>
                      <h3
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          color: 'var(--foreground)',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {item.version}: {item.title}
                      </h3>
                      <p
                        style={{
                          color: 'var(--muted-foreground)',
                          marginBottom: '1rem',
                        }}
                      >
                        {item.description}
                      </p>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem',
                        }}
                      >
                        {item.features.map((feature, fidx) => (
                          <li
                            key={fidx}
                            style={{
                              fontSize: '0.9rem',
                              color: 'var(--muted-foreground)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                            }}
                          >
                            <span style={{ color: 'hsl(var(--primary))', marginRight: '0.25rem' }}>◆</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Center dot */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        zIndex: 10,
                      }}
                    >
                      {item.isCompleted ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle2
                            size={40}
                            style={{
                              color: '#10b981',
                              background: 'var(--background)',
                              borderRadius: '50%',
                            }}
                            fill="#10b981"
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <Circle
                            size={40}
                            style={{
                              color: 'hsl(var(--primary))',
                              background: 'var(--background)',
                              borderRadius: '50%',
                            }}
                            fill="var(--background)"
                            strokeWidth={2}
                          />
                        </motion.div>
                      )}
                    </div>

                    <div />
                  </>
                ) : (
                  <>
                    <div />

                    {/* Center dot */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        zIndex: 10,
                      }}
                    >
                      {item.isCompleted ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle2
                            size={40}
                            style={{
                              color: '#10b981',
                              background: 'var(--background)',
                            }}
                            fill="#10b981"
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <Circle
                            size={40}
                            style={{
                              color: 'hsl(var(--primary))',
                              background: 'var(--background)',
                            }}
                            fill="var(--background)"
                            strokeWidth={2}
                          />
                        </motion.div>
                      )}
                    </div>

                    {/* Right content */}
                    <div style={{ paddingLeft: '2rem' }}>
                      <div
                        style={{
                          display: 'inline-block',
                          padding: '0.5rem 1rem',
                          borderRadius: '9999px',
                          background: item.isCompleted
                            ? 'color-mix(in oklab, #10b981 15%, transparent)'
                            : 'color-mix(in oklab, hsl(var(--primary)) 15%, transparent)',
                          color: item.isCompleted ? '#10b981' : 'hsl(var(--primary))',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          marginBottom: '0.5rem',
                        }}
                      >
                        {item.date}
                      </div>
                      <h3
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          color: 'var(--foreground)',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {item.version}: {item.title}
                      </h3>
                      <p
                        style={{
                          color: 'var(--muted-foreground)',
                          marginBottom: '1rem',
                        }}
                      >
                        {item.description}
                      </p>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem',
                        }}
                      >
                        {item.features.map((feature, fidx) => (
                          <li
                            key={fidx}
                            style={{
                              fontSize: '0.9rem',
                              color: 'var(--muted-foreground)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                            }}
                          >
                            <span style={{ color: 'hsl(var(--primary))', marginRight: '0.25rem' }}>◆</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineComponent;
