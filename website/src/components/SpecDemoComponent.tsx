import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Play } from 'lucide-react';
import { Button } from './ui/Button';

interface SpecDemoComponentProps {
  title?: string;
  description?: string;
}

const SAMPLE_ADAC = `architecture:
  name: E-Commerce Platform
  version: "1.0.0"
  metadata:
    team: platform-eng
    cost-center: engineering
    
infrastructure:
  cloud: aws
  regions:
    - us-east-1
    - eu-west-1

resources:
  compute:
    - id: api-servers
      type: ec2
      count: 3
      size: t3.large
      tags:
        tier: application
        
    - id: worker-nodes
      type: eks
      capacity: 5
      
  storage:
    - id: db-primary
      type: rds
      engine: postgres
      multi-az: true
      
    - id: cache-layer
      type: elasticache
      engine: redis
      node-type: cache.r6g.xlarge
      
  networking:
    - id: load-balancer
      type: alb
      protocol: https
      
connections:
  - source: load-balancer
    target: api-servers
    protocol: http
    port: 8080
    
  - source: api-servers
    target: db-primary
    protocol: tcp
    port: 5432`;

export const SpecDemoComponent: React.FC<SpecDemoComponentProps> = ({ 
  title = "ADAC in Action",
  description = "This interactive demo shows a simplified but real-world ADAC specification for an e-commerce platform."
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'yaml' | 'preview'>('yaml');

  const handleCopy = () => {
    navigator.clipboard.writeText(SAMPLE_ADAC);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

        {/* Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            background: 'var(--card)',
          }}
        >
          {/* Header with Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
              borderBottom: '1px solid var(--border)',
              background: 'color-mix(in oklab, var(--card) 50%, var(--background) 50%)',
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {(['yaml', 'preview'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    border: 'none',
                    background: activeTab === tab ? 'hsl(var(--primary))' : 'transparent',
                    color: activeTab === tab ? '#fff' : 'var(--muted-foreground)',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: activeTab === tab ? 600 : 400,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>

            <Button
              size="sm"
              variant="ghost"
              onClick={handleCopy}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied' : 'Copy'}
            </Button>
          </div>

          {/* Content */}
          <div
            style={{
              position: 'relative',
              minHeight: '400px',
              padding: '1.5rem',
              background: 'var(--background)',
              overflow: 'auto',
            }}
          >
            {activeTab === 'yaml' ? (
              <pre
                style={{
                  margin: 0,
                  fontFamily: '"Monaco", "Menlo", monospace',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  color: 'var(--foreground)',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}
              >
                <code>{SAMPLE_ADAC}</code>
              </pre>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                }}
              >
                {[
                  { label: 'Compute Resources', value: '8', icon: '⚙️' },
                  { label: 'Storage Systems', value: '3', icon: '💾' },
                  { label: 'Network Components', value: '2', icon: '🌐' },
                  { label: 'Cloud Regions', value: '2', icon: '🌍' },
                  { label: 'Connections', value: '2', icon: '🔗' },
                  { label: 'Multi-AZ Ready', value: '✓', icon: '✅' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    style={{
                      padding: '1rem',
                      borderRadius: '8px',
                      background: 'color-mix(in oklab, hsl(var(--primary)) 10%, transparent)',
                      border: '1px solid var(--border)',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                      {item.icon}
                    </div>
                    <div
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'hsl(var(--primary))',
                      }}
                    >
                      {item.value}
                    </div>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--muted-foreground)',
                        marginTop: '0.25rem',
                      }}
                    >
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              padding: '1rem',
              borderTop: '1px solid var(--border)',
              background: 'color-mix(in oklab, var(--card) 50%, var(--background) 50%)',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '0.5rem',
            }}
          >
            <Button size="sm" variant="outline">
              Download
            </Button>
            <Button size="sm" variant="default" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Play size={16} /> Validate
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecDemoComponent;
