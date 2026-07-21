import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/Card';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export function ProblemSolutionComponent() {
  const problems = [
    'Drag-and-drop tools (Lucidchart, draw.io) — diagrams go stale within days',
    'No standard format — every team reinvents the wheel',
    'Security/compliance checked manually at audit time',
    'Cost estimated in spreadsheets',
    'Architecture knowledge is siloed in one person\'s head'
  ];

  const solutions = [
    'YAML spec = single source of truth, lives in Git',
    'One open spec — any tool can read, validate, render',
    'Automatic compliance checks on every commit',
    'Built-in cost metadata, generate reports from CLI',
    'Version-controlled, reviewable, diffable architecture'
  ];

  return (
    <section className="w-full relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card style={{ background: 'color-mix(in oklab, var(--card) 95%, red)', border: '1px solid color-mix(in oklab, var(--border) 80%, red)', height: '100%' }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6 text-red-500">
                <AlertCircle size={28} />
                <h3 className="text-2xl font-bold m-0" style={{ color: 'var(--foreground)' }}>Before ADAC</h3>
              </div>
              <ul className="space-y-4 m-0 p-0 list-none text-muted-foreground">
                {problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-red-500/70 text-sm">✖</span>
                    <span style={{ fontSize: '1.05rem' }}>{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card style={{ background: 'color-mix(in oklab, var(--card) 95%, var(--primary))', border: '1px solid color-mix(in oklab, var(--border) 80%, var(--primary))', height: '100%' }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6" style={{ color: 'hsl(var(--primary))' }}>
                <CheckCircle2 size={28} />
                <h3 className="text-2xl font-bold m-0" style={{ color: 'var(--foreground)' }}>With ADAC</h3>
              </div>
              <ul className="space-y-4 m-0 p-0 list-none text-muted-foreground">
                {solutions.map((solution, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1" style={{ color: 'hsl(var(--primary))' }}><CheckCircle2 size={16} /></span>
                    <span style={{ fontSize: '1.05rem', fontWeight: 500 }}>{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Average Time Spent on Architecture Docs</h4>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Per project lifecycle</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2 text-sm font-medium" style={{ color: 'var(--foreground)' }}>
              <span className="flex items-center gap-2"><Clock size={16} style={{ color: 'var(--destructive)' }} /> Traditional (Manual Draw)</span>
              <span>40+ Hours</span>
            </div>
            <div className="w-full h-8 rounded-full overflow-hidden" style={{ background: 'var(--muted)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'color-mix(in oklab, var(--muted) 20%, var(--destructive))' }}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2 text-sm font-medium" style={{ color: 'var(--foreground)' }}>
              <span className="flex items-center gap-2"><Clock size={16} style={{ color: 'hsl(var(--primary))' }} /> ADAC (Automated)</span>
              <span>8 Hours</span>
            </div>
            <div className="w-full h-8 rounded-full overflow-hidden" style={{ background: 'var(--muted)' }}>
              <motion.div
                className="h-full rounded-full relative"
                style={{ background: 'hsl(var(--primary))' }}
                initial={{ width: 0 }}
                whileInView={{ width: '20%' }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </motion.div>
            </div>
            <p className="text-right text-xs mt-2 font-bold" style={{ color: 'hsl(var(--primary))' }}>80% Reduction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
