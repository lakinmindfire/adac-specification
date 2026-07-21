import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import { Terminal, Layout, ShieldCheck, Box, Package, PenTool, Database, Image, Layers, Code } from 'lucide-react';
import Link from '@docusaurus/Link';

export function ToolsGridComponent() {
  const tools = [
    { name: '@mindfiredigital/adac-core', desc: 'The brain of the system. Orchestrates parsing, validation, compliance, and rendering.', icon: <Box size={24} />, tag: 'Core Engine', type: 'npm' },
    { name: '@mindfiredigital/adac-diagram', desc: 'Distribution package providing the `adac` CLI and public API.', icon: <Terminal size={24} />, tag: 'CLI & API', type: 'npm' },
    { name: '@mindfiredigital/adac-web', desc: 'React-based visual editor with drag-and-drop and real-time preview.', icon: <Layout size={24} />, tag: 'Frontend UI', type: 'github' },
    { name: '@mindfiredigital/adac-web-server', desc: 'Express server exposing diagram generation, optimization & compliance.', icon: <Database size={24} />, tag: 'API Server', type: 'github' },
    { name: '@mindfiredigital/adac-optimizer', desc: 'Automatic cost, security & reliability recommendations on every run.', icon: <PenTool size={24} />, tag: 'Optimizer AI', type: 'npm' },
    { name: '@mindfiredigital/adac-compliance', desc: 'Evaluates architecture against PCI-DSS, SOC2, HIPAA, etc.', icon: <ShieldCheck size={24} />, tag: 'Security', type: 'npm' },
    { name: '@mindfiredigital/adac-cost', desc: 'Evaluates cloud architecture to provide structural cost breakdowns.', icon: <Database size={24} />, tag: 'FinOps', type: 'npm' },
    { name: '@mindfiredigital/adac-parser', desc: 'Robust parsing of ADAC-formatted YAML files into structured data.', icon: <Code size={24} />, tag: 'Library', type: 'npm' },
    { name: '@mindfiredigital/adac-schema', desc: 'Formally defines the ADAC specification using JSON Schema.', icon: <Layers size={24} />, tag: 'Library', type: 'npm' },
    { name: 'adac-vscode', desc: 'Official VS Code extension for ADAC YAML autocompletion and preview.', icon: <Code size={24} />, tag: 'Extension', type: 'vscode' },
    { name: '@mindfiredigital/adac-export-terraform', desc: 'Generates Terraform HCL infrastructure-as-code from ADAC specs.', icon: <Package size={24} />, tag: 'Exporter', type: 'npm' },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <Card variant="elevated" className="h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'color-mix(in oklab, hsl(var(--primary)) 15%, transparent)', color: 'hsl(var(--primary))' }}>
                    {tool.icon}
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wider" style={{ background: 'var(--muted)', color: 'var(--muted-foreground)' }}>
                    {tool.tag}
                  </span>
                </div>
                <CardTitle size="sm" style={{ color: 'var(--foreground)' }}>
                  <code style={{ background: 'transparent', padding: 0, color: 'inherit' }}>{tool.name}</code>
                </CardTitle>
              </CardHeader>
              <CardContent style={{ flex: 1 }}>
                <CardDescription style={{ color: 'var(--muted-foreground)' }}>
                  {tool.desc}
                </CardDescription>
                
                <div className="mt-6 flex gap-3">
                  {tool.type === 'npm' && (
                    <Link href={`https://www.npmjs.com/package/${tool.name}`} className="text-sm font-medium hover:underline" style={{ color: 'hsl(var(--primary))' }}>
                      View on npm →
                    </Link>
                  )}
                  {tool.type === 'github' && (
                    <Link href={`https://github.com/mindfiredigital/adac-tools/tree/main/packages/${tool.name.split('/').pop()}`} className="text-sm font-medium hover:underline" style={{ color: 'hsl(var(--primary))' }}>
                      View Source on GitHub →
                    </Link>
                  )}
                  {tool.type === 'vscode' && (
                    <Link href="https://marketplace.visualstudio.com/" className="text-sm font-medium hover:underline" style={{ color: 'hsl(var(--primary))' }}>
                      View in VS Code Marketplace →
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
