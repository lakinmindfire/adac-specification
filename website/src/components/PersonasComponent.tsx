import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/Card';
import { Code2, Network, TrendingUp } from 'lucide-react';

export function PersonasComponent() {
  const personas = [
    {
      role: 'Developers & Engineers',
      tagline: 'Define infrastructure the way you write code.',
      icon: <Code2 size={40} className="mb-4" style={{ color: 'hsl(var(--primary))' }} />,
      pain: 'Context-switching to visual tools; diagrams always out-of-date.',
      gain: 'YAML-first workflow, CLI tools, IDE validation, Git-diffable.',
      color: 'hsl(var(--primary))'
    },
    {
      role: 'Cloud Architects',
      tagline: 'Enforce standards. Eliminate drift.',
      icon: <Network size={40} className="mb-4 text-emerald-500" />,
      pain: 'Teams using different tools, no way to enforce baselines.',
      gain: 'Schema validation, compliance checks, reusable templates.',
      color: '#10b981'
    },
    {
      role: 'Leadership / CTOs',
      tagline: 'Visibility without whiteboard meetings.',
      icon: <TrendingUp size={40} className="mb-4 text-purple-500" />,
      pain: 'No visibility into cloud costs, security gaps found too late.',
      gain: 'Cost transparency in PRs, automated compliance reports.',
      color: '#a855f7'
    }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {personas.map((persona, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="h-full"
          >
            <Card 
              className="h-full relative overflow-hidden group" 
              style={{ background: 'var(--card)', border: '1px solid var(--border)', transition: 'all 0.3s ease' }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${persona.color}, transparent)` }}
              />
              <CardContent className="p-8 h-full flex flex-col relative z-10">
                {persona.icon}
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>{persona.role}</h3>
                <p className="text-lg font-medium mb-6" style={{ color: persona.color }}>"{persona.tagline}"</p>
                
                <div className="mt-auto space-y-4">
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-semibold mb-1" style={{ color: 'var(--muted-foreground)' }}>The Pain</h4>
                    <p className="text-sm" style={{ color: 'var(--foreground)' }}>{persona.pain}</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-semibold mb-1" style={{ color: 'var(--muted-foreground)' }}>The ADAC Gain</h4>
                    <p className="text-sm" style={{ color: 'var(--foreground)' }}>{persona.gain}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
