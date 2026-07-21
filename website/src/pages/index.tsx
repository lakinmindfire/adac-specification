import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import { motion, useInView, animate } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { ShineBorder } from '../components/ui/ShineBorder';
import { ArrowRight, Copy, Terminal, Check, Server, ShieldCheck, Box, CheckCircle } from 'lucide-react';
import { ArchitectureDiagramComponent } from '../components/ArchitectureDiagramComponent';
import { ComparisonSliderComponent } from '../components/ComparisonSliderComponent';
import { ProblemSolutionComponent } from '../components/ProblemSolutionComponent';
import { PersonasComponent } from '../components/PersonasComponent';

/* ─── Standard Github SVG Icon ──────────────────────────────── */
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

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

/* ─── Hero Section ──────────────────────────────────────────── */
function InstallCommand() {
  const [copied, setCopied] = React.useState(false);
  const code = "npm i -g @mindfiredigital/adac-diagram";
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div 
      className="flex items-center justify-between px-4 py-3 rounded-xl border cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors max-w-sm mt-6 mx-auto lg:mx-0"
      style={{ borderColor: 'var(--border)', backgroundColor: 'color-mix(in oklab, var(--card) 50%, transparent)' }}
      onClick={handleCopy}
      title="Click to copy"
    >
      <div className="flex items-center gap-3">
        <Terminal size={16} style={{ color: 'var(--muted-foreground)' }} />
        <code className="text-sm bg-transparent border-0 p-0" style={{ color: 'var(--foreground)' }}>{code}</code>
      </div>
      <div style={{ color: 'var(--muted-foreground)' }}>
        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section aria-label="Hero" className="relative overflow-hidden grid-bg">
      <div className="glow-blob -top-48 -left-48" />
      <div className="glow-blob -bottom-48 -right-48" />
      <div className="glow-blob top-1/2 right-1/4" style={{ opacity: 0.5 }} />
      <header className="flex items-center justify-center sm:py-24 py-16 relative z-10">
        <div className="w-full relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-left sm:text-center lg:text-left flex flex-col items-start sm:items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full text-xs font-semibold"
                  style={{
                    background: 'color-mix(in oklab, hsl(var(--primary)) 15%, transparent)',
                    color: 'hsl(var(--primary))',
                    border: '1px solid color-mix(in oklab, hsl(var(--primary)) 30%, transparent)'
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" style={{ backgroundColor: 'hsl(var(--primary))' }}></span>
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'hsl(var(--primary))' }}></span>
                  </span>
                  NEW • ADAC v0.1 Released
                </div>

                <h1 className="font-extrabold tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-6">
                  Architecture Diagram{' '}
                  <span style={{ color: 'hsl(var(--primary))' }}>as Code</span>
                </h1>

                <p
                  className="mx-auto lg:mx-0"
                  style={{
                    fontSize: '1.25rem',
                    lineHeight: '1.75rem',
                    color: 'var(--muted-foreground)',
                    maxWidth: '560px',
                    marginBottom: '2.5rem',
                  }}
                >
                  ADAC is an open specification for describing cloud infrastructure
                  architectures in YAML format. Think of it as{' '}
                  <strong>OpenAPI for infrastructure</strong>.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="default"
                  className="rounded-xl font-semibold px-8 py-4 w-full sm:w-auto"
                >
                  <Link
                    to="/docs/getting-started/quick-start"
                    className="hover:no-underline flex items-center justify-center gap-2"
                  >
                    Start in 5 Minutes <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl font-semibold px-8 py-4 w-full sm:w-auto"
                >
                  <Link
                    href="https://github.com/lakinmindfire/adac-specification"
                    className="hover:no-underline flex items-center justify-center gap-2"
                  >
                    <GithubIcon size={18} /> GitHub
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <InstallCommand />
              </motion.div>
            </div>

            {/* Right Column: Code Preview */}
            <motion.div 
              className="relative w-full mt-12 lg:mt-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div 
                className="absolute inset-0 rounded-2xl blur-xl"
                style={{ background: 'color-mix(in oklab, hsl(var(--primary)) 20%, transparent)' }}
              />
              <ShineBorder borderRadius={16} borderWidth={1.5} color={['hsl(var(--primary))', '#ffffff', 'hsl(var(--primary))']} className="w-full relative z-10 !p-0">
                <div 
                  className="relative rounded-2xl overflow-hidden w-full"
                  style={{ 
                    backgroundColor: 'var(--background)',
                  }}
                >
                  <div className="flex items-center px-4 py-3 border-b" style={{ borderColor: 'var(--border)', backgroundColor: 'color-mix(in oklab, var(--muted) 30%, transparent)' }}>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/20" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                      <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    </div>
                    <div className="ml-4 text-xs text-muted-foreground font-mono">architecture.yaml</div>
                  </div>
                  <div className="p-4 text-sm font-mono overflow-hidden">
                    <CodeBlock language="yaml" className="mb-0">
{`version: "0.1"
metadata:
  name: "Global E-Commerce API"
  environment: "production"

infrastructure:
  clouds:
    - provider: "aws"
      region: "us-east-1"
      services:
        - id: "api-gateway"
          service: "apigateway"
          security:
            waf: true
        - id: "lambda-compute"
          service: "lambda"
          memory: 1024
          timeout: 30

connections:
  - from: "api-gateway"
    to: "lambda-compute"
    type: "trigger"`}
                    </CodeBlock>
                  </div>
                </div>
              </ShineBorder>
            </motion.div>

          </div>
        </div>
      </header>
    </section>
  );
}

/* ─── Animated Counter Component ──────────────────────────────── */
function AnimatedCounter({ from, to, duration = 1.5, suffix = '' }: { from: number, to: number, duration?: number, suffix?: string }) {
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  React.useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView, suffix]);
  
  return <span ref={nodeRef}>{from}{suffix}</span>;
}

/* ─── Stats Bar Section ─────────────────────────────────────── */
function StatsBar() {
  return (
    <section 
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'color-mix(in oklab, var(--muted) 20%, transparent)',
        position: 'relative',
        zIndex: 20
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-2 mb-2" style={{ color: 'hsl(var(--primary))' }}>
              <Server size={20} />
            </div>
            <div className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
              <AnimatedCounter from={0} to={200} suffix="+" />
            </div>
            <div className="text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>Cloud Services Supported</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-2 mb-2" style={{ color: 'hsl(var(--primary))' }}>
              <ShieldCheck size={20} />
            </div>
            <div className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
              <AnimatedCounter from={0} to={6} />
            </div>
            <div className="text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>Compliance Frameworks</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-2 mb-2" style={{ color: 'hsl(var(--primary))' }}>
              <Box size={20} />
            </div>
            <div className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>v0.1</div>
            <div className="text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>Release Candidate</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-2 mb-2" style={{ color: 'hsl(var(--primary))' }}>
              <CheckCircle size={20} />
            </div>
            <div className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>Apache 2.0</div>
            <div className="text-sm font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>Open Source</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="ADAC — an open specification for describing cloud infrastructure architectures in YAML format."
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        <main className="w-full">
          <HeroSection />
          <StatsBar />

          <section
            style={{
              paddingTop: '5rem',
              paddingBottom: '5rem',
              paddingLeft: '1.25rem',
              paddingRight: '1.25rem',
            }}
          >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <header style={{ textAlign: 'center', maxWidth: '868px', margin: '0 auto 3.5rem auto' }}>
                <SectionCapsule text="The Challenge" />
                <h2
                  className="font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.08]"
                  style={{ color: 'var(--foreground)' }}
                >
                  Architecture shouldn't be an <span style={{ color: 'hsl(var(--primary))' }}>afterthought</span>
                </h2>
              </header>
              <ProblemSolutionComponent />
            </div>
          </section>

          <section
            style={{
              paddingTop: '5rem',
              paddingBottom: '5rem',
              paddingLeft: '1.25rem',
              paddingRight: '1.25rem',
              background: 'color-mix(in oklab, hsl(var(--primary)) 3%, transparent)',
              borderTop: '1px solid var(--card-border)',
              borderBottom: '1px solid var(--card-border)',
            }}
          >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <header style={{ textAlign: 'center', maxWidth: '868px', margin: '0 auto 3.5rem auto' }}>
                <SectionCapsule text="Who is this for?" />
                <h2
                  className="font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.08]"
                  style={{ color: 'var(--foreground)' }}
                >
                  Built for <span style={{ color: 'hsl(var(--primary))' }}>everyone</span>
                </h2>
              </header>
              <PersonasComponent />
            </div>
          </section>

          {/* Architecture Diagram Pipeline */}
          <section
            style={{
              paddingTop: '4rem',
              paddingBottom: '4rem',
              paddingLeft: '1.25rem',
              paddingRight: '1.25rem',
              background: 'color-mix(in oklab, hsl(var(--primary)) 3%, transparent)',
              borderTop: '1px solid var(--card-border)',
              borderBottom: '1px solid var(--card-border)',
            }}
          >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <header style={{ textAlign: 'center', maxWidth: '868px', margin: '0 auto 3.5rem auto' }}>
                <SectionCapsule text="How It Works" />
                <h2
                  className="font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.08]"
                  style={{ color: 'var(--foreground)' }}
                >
                  ADAC <span style={{ color: 'hsl(var(--primary))' }}>Processing Pipeline</span>
                </h2>
                <p
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                    color: 'var(--muted-foreground)',
                    maxWidth: '600px',
                    margin: '1rem auto 0',
                  }}
                >
                  From YAML input to beautiful diagrams in seconds. Click each step to learn more.
                </p>
              </header>
              <ArchitectureDiagramComponent />
            </div>
          </section>

          {/* Comparison Slider */}
          <section
            style={{
              paddingTop: '4rem',
              paddingBottom: '4rem',
              paddingLeft: '1.25rem',
              paddingRight: '1.25rem',
            }}
          >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <header style={{ textAlign: 'center', maxWidth: '868px', margin: '0 auto 3.5rem auto' }}>
                <SectionCapsule text="Comparison" />
                <h2
                  className="font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.08]"
                  style={{ color: 'var(--foreground)' }}
                >
                  ADAC vs <span style={{ color: 'hsl(var(--primary))' }}>Traditional Approach</span>
                </h2>
                <p
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                    color: 'var(--muted-foreground)',
                    maxWidth: '600px',
                    margin: '1rem auto 0',
                  }}
                >
                  See how ADAC simplifies your architecture workflow
                </p>
              </header>
              <ComparisonSliderComponent />
            </div>
          </section>

          {/* Ecosystem CTA */}
          <section
            style={{
              paddingTop: '4rem',
              paddingBottom: '4rem',
              paddingLeft: '1.25rem',
              paddingRight: '1.25rem',
              background: 'color-mix(in oklab, hsl(var(--primary)) 3%, transparent)',
              borderTop: '1px solid var(--card-border)',
            }}
          >
            <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
              <header style={{ maxWidth: '868px', margin: '0 auto 2rem auto' }}>
                <SectionCapsule text="Ecosystem" />
                <h2
                  className="font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.08]"
                  style={{ color: 'var(--foreground)' }}
                >
                  Growing <span style={{ color: 'hsl(var(--primary))' }}>Ecosystem</span>
                </h2>
                <p
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.75rem',
                    color: 'var(--muted-foreground)',
                    maxWidth: '600px',
                    margin: '1rem auto 0',
                  }}
                >
                  Discover the suite of tools built on top of the ADAC specification.
                </p>
              </header>
              <Button asChild size="lg" variant="default" className="rounded-xl font-semibold px-8 py-4">
                <Link to="/ecosystem" className="hover:no-underline flex items-center justify-center gap-2 mx-auto" style={{ width: 'fit-content' }}>
                  Explore Ecosystem <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </section>

        </main>
      </div>
    </Layout>
  );
}
