import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface Command {
  id: string;
  title: string;
  description: string;
  command: string;
  output: string[];
}

const commands: Command[] = [
  {
    id: 'diagram',
    title: 'Generate Diagram',
    description: 'Create SVG diagram from YAML (with auto-optimizer)',
    command: 'adac diagram architecture.yaml -l dagre -o diagram.svg',
    output: [
      '> Generating diagram from architecture.yaml...',
      '✓ Diagram successfully generated at diagram.svg',
      '> Automatically launching browser to view diagram...',
    ],
  },
  {
    id: 'validate',
    title: 'Validate Architecture',
    description: 'Check architecture schema compliance',
    command: 'adac validate architecture.yaml',
    output: [
      '> Validating architecture.yaml...',
      '✅ Validation passed.',
    ],
  },
  {
    id: 'cost',
    title: 'Analyze Costs',
    description: 'Get cost breakdown for your architecture',
    command: 'adac cost architecture.yaml --period monthly',
    output: [
      '💰 Estimated Monthly Cost: $367.02',
      '├─ Compute: $245.32 (67%)',
      '├─ Database: $87.50 (24%)',
      '├─ Storage: $24.20 (7%)',
      '└─ Networking: $10.00 (3%)',
    ],
  },
  {
    id: 'terraform',
    title: 'Export Terraform',
    description: 'Generate HCL code from your diagram',
    command: 'adac terraform architecture.yaml -o tf/',
    output: [
      '> Generating Terraform from architecture.yaml...',
      '✓ Terraform successfully generated in tf/',
    ],
  },
  {
    id: 'diagram-no-opt',
    title: 'Fast Diagram (No AI)',
    description: 'Generate diagram quickly without optimizer analysis',
    command: 'adac diagram architecture.yaml --no-optimize',
    output: [
      '> Generating diagram from architecture.yaml...',
      '✓ Diagram successfully generated at architecture.svg',
    ],
  },
];

export function CLICommandShowcaseComponent() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const [displayedOutput, setDisplayedOutput] = useState<string[]>([]);

  const selectedCommand = commands[selectedIdx];

  // Animate output lines
  useEffect(() => {
    setDisplayedOutput([]);
    const timer = setInterval(() => {
      setDisplayedOutput((prev) => {
        if (prev.length < selectedCommand.output.length) {
          return [...prev, selectedCommand.output[prev.length]];
        }
        return prev;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [selectedIdx, selectedCommand.output]);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyFeedback('copied');
      setTimeout(() => setCopyFeedback(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Command Selector */}
      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {commands.map((cmd, idx) => (
          <motion.button
            key={cmd.id}
            variants={itemVariants}
            onClick={() => setSelectedIdx(idx)}
            style={{
              padding: '1rem',
              borderRadius: '12px',
              border: '2px solid var(--card-border)',
              background: selectedIdx === idx ? 'var(--primary)' : 'var(--card-background)',
              color: selectedIdx === idx ? 'white' : 'var(--text-primary)',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.875rem',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.5rem',
            }}
            whileHover={{
              scale: 1.05,
              borderColor: 'var(--primary)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{cmd.title}</span>
            <span
              style={{
                fontSize: '0.75rem',
                opacity: 0.7,
                fontWeight: '400',
              }}
            >
              {cmd.description}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Terminal Output */}
      <motion.div
        style={{
          borderRadius: '12px',
          background: '#000',
          border: '2px solid #333',
          fontFamily: 'monospace',
          overflow: 'hidden',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Terminal Header */}
        <div
          style={{
            background: '#1a1a1a',
            padding: '1rem',
            borderBottom: '1px solid #333',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#ff5f56',
              }}
            />
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#ffbd2e',
              }}
            />
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#27c93f',
              }}
            />
          </div>
          <span style={{ fontSize: '0.875rem', color: '#888' }}>Terminal</span>
          <div style={{ width: '50px' }} />
        </div>

        {/* Command Line */}
        <div
          style={{
            padding: '1.5rem',
            borderBottom: '2px solid #333',
          }}
        >
          <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
            $ {selectedCommand.command}
          </div>
        </div>

        {/* Output */}
        <div
          style={{
            padding: '1.5rem',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {displayedOutput.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                color: line.startsWith('✓') ? '#10b981' : line.startsWith('⚠') ? '#f59e0b' : '#fff',
                fontSize: '0.875rem',
                fontFamily: 'monospace',
                lineHeight: '1.5',
              }}
            >
              {line}
            </motion.div>
          ))}

          {/* Cursor */}
          {displayedOutput.length === selectedCommand.output.length && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              style={{
                color: '#888',
                fontSize: '0.875rem',
              }}
            >
              ▊
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Copy Button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: '1rem',
          justifyContent: 'flex-end',
        }}
      >
        <button
          onClick={() => handleCopy(selectedCommand.command)}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: '2px solid var(--card-border)',
            background: 'var(--card-background)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
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
          {copyFeedback === 'copied' ? (
            <>
              <Check size={16} /> Copied!
            </>
          ) : (
            <>
              <Copy size={16} /> Copy Command
            </>
          )}
        </button>
      </div>

      {/* Info Box */}
      <motion.div
        style={{
          marginTop: '1.5rem',
          padding: '1.5rem',
          borderRadius: '12px',
          background: 'color-mix(in oklab, hsl(var(--primary)) 8%, transparent)',
          border: '1px solid color-mix(in oklab, hsl(var(--primary)) 15%, transparent)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          💻 <strong>Get Started:</strong> Install ADAC with <code style={{ background: 'var(--card-background)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>npm install -g @adac-tools/cli</code> and try these commands!
        </p>
      </motion.div>
    </div>
  );
}
