import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@theme/Layout';
import { Button } from '../components/ui/Button';
import Link from '@docusaurus/Link';
import { ArrowRight, GithubIcon } from 'lucide-react';
import { ToolsGridComponent } from '../components/ToolsGridComponent';
import { BuildOnAdacComponent } from '../components/BuildOnAdacComponent';
import { CLICommandShowcaseComponent } from '../components/CLICommandShowcaseComponent';

/* ─── Section Title Capsule ─────────────────────────────────── */
function SectionCapsule({ text }: { text: string }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--muted-foreground)',
        marginBottom: '1rem',
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
        background: 'color-mix(in oklab, hsl(var(--primary)) 8%, transparent)',
        border: '1px solid color-mix(in oklab, hsl(var(--primary)) 15%, transparent)',
      }}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'hsl(var(--primary))',
          animation: 'pulse 2s infinite',
        }}
      />
      {text}
    </div>
  );
}

export default function Ecosystem() {
  return (
    <Layout
      title="Ecosystem"
      description="Tools built by MindfireDigital and the community on top of the ADAC specification."
    >
      <main className="ambient-glow-wrapper w-full relative overflow-hidden">


        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-5 z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <SectionCapsule text="The Platform" />
              <h1 className="font-extrabold tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-6" style={{ color: 'var(--foreground)' }}>
                The ADAC <span style={{ color: 'hsl(var(--primary))' }}>Ecosystem</span>
              </h1>
              <p className="text-xl mx-auto max-w-2xl mb-8" style={{ color: 'var(--muted-foreground)' }}>
                Tools built by the Mindfire team — and a powerful platform for the community to build upon.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" variant="default" className="rounded-xl font-semibold px-8 py-4">
                  <Link href="https://github.com/mindfiredigital/adac-tools" className="hover:no-underline flex items-center gap-2">
                    View MonoRepo on GitHub <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Official Tools Section */}
        <section className="relative py-20 px-5 z-10" style={{ background: 'color-mix(in oklab, var(--muted) 30%, transparent)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Official Packages</h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
                We maintain a suite of tools that make up the reference implementation of ADAC.
              </p>
            </div>
            
            <ToolsGridComponent />
          </div>
        </section>

        {/* CLI Command Showcase */}
        <section className="relative py-20 px-5 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <SectionCapsule text="Command Line" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Powerful CLI Tools</h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
                Complete control from the terminal. Integrate ADAC into your CI/CD workflow easily.
              </p>
            </div>
            <CLICommandShowcaseComponent />
          </div>
        </section>

        {/* Build on ADAC Section */}
        <section className="relative py-24 px-5 z-10" style={{ background: 'color-mix(in oklab, var(--muted) 30%, transparent)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <SectionCapsule text="Developer Guide" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Build your own tools</h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
                ADAC isn't just a diagramming tool—it's an open standard. Here's how you can leverage our core packages to build the next big thing.
              </p>
            </div>

            <BuildOnAdacComponent />
            
            <div className="text-center mt-20">
              <Button asChild size="lg" variant="outline" className="rounded-xl font-semibold px-8 py-4">
                <Link to="/docs/reference/schema" className="hover:no-underline flex items-center gap-2">
                  Read the Core Schema Reference <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
