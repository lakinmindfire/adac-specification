import React from 'react';
import { motion } from 'framer-motion';

import CodeBlock from '@theme/CodeBlock';

export function BuildOnAdacComponent() {
  const steps = [
    {
      title: '1. Parse',
      desc: 'Use our parser to load YAML securely into structured data.',
      code: `import { parseAdac } from '@mindfiredigital/adac-parser';\n\nconst spec = await parseAdac('./arch.yaml');`
    },
    {
      title: '2. Validate',
      desc: 'Ensure the architecture matches the official schema.',
      code: `import { validate } from '@mindfiredigital/adac-schema';\n\nconst isValid = validate(spec);\nif (!isValid) throw new Error('Invalid ADAC');`
    },
    {
      title: '3. Process / Render',
      desc: 'Do something awesome: generate Terraform, draw SVG, or calculate costs.',
      code: `import { generateTerraform } from './my-plugin';\n\nconst tf = generateTerraform(spec);`
    },
    {
      title: '4. Publish',
      desc: 'Share your tool with the ADAC community!',
      code: `$ npm publish my-adac-plugin`
    }
  ];

  return (
    <div className="w-full relative">
      {/* Decorative vertical line */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
      
      <div className="space-y-12 relative z-10">
        {steps.map((step, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
              
              {/* Text Side */}
              <motion.div 
                className="w-full lg:flex-1 min-w-0"
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`flex flex-col ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} text-center`}>
                  <div className="inline-block px-4 py-2 rounded-full mb-4 font-bold text-sm" style={{ background: 'color-mix(in oklab, hsl(var(--primary)) 15%, transparent)', color: 'hsl(var(--primary))' }}>
                    Step {idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>{step.title}</h3>
                  <p className="text-lg mb-0" style={{ color: 'var(--muted-foreground)' }}>{step.desc}</p>
                </div>
              </motion.div>

              {/* Center Dot (Desktop only) */}
              <div className="hidden lg:flex w-12 h-12 rounded-full border-4 items-center justify-center bg-background absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20" style={{ borderColor: 'color-mix(in oklab, var(--border) 50%, transparent)' }}>
                <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(var(--primary))' }} />
              </div>

              {/* Code Side */}
              <motion.div 
                className="w-full lg:flex-1 min-w-0"
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CodeBlock language="typescript" className="m-0 w-full shadow-2xl">
                  {step.code}
                </CodeBlock>
              </motion.div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
