import React from 'react';
import { motion } from 'framer-motion';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { ArrowRight, Download, BookOpen } from 'lucide-react';

/* Standard Github SVG Icon */
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const steps = [
  {
    number: 1,
    title: 'Read the Specification',
    description: 'Start with the ADAC v0.1 specification to understand the schema, structure, and core concepts.',
    icon: '📖',
    action: 'Read Spec',
    link: '/docs/reference/adac-v0.1',
  },
  {
    number: 2,
    title: 'Create Your First Architecture',
    description: 'Write a simple YAML file describing your infrastructure using the ADAC schema.',
    icon: '✍️',
    action: 'See Examples',
    link: '#',
  },
  {
    number: 3,
    title: 'Validate Your ADAC File',
    description: 'Use the community validators to check your ADAC file for errors and compliance.',
    icon: '✅',
    action: 'Validate',
    link: '#',
  },
  {
    number: 4,
    title: 'Generate Diagrams',
    description: 'Use any ADAC-compatible tool to generate diagrams and documentation from your specification.',
    icon: '📊',
    action: 'Explore Tools',
    link: '#',
  },
];

const resources = [
  {
    title: 'API Reference',
    description: 'Complete API and schema documentation',
    icon: '🔧',
    link: '/docs/reference/adac-v0.1',
  },
  {
    title: 'Examples',
    description: 'Real-world ADAC specifications you can use as templates',
    icon: '📚',
    link: '#',
  },
  {
    title: 'Community Tools',
    description: 'Discover tools built by the ADAC community',
    icon: '🛠️',
    link: '#',
  },
  {
    title: 'GitHub Discussions',
    description: 'Ask questions and discuss with the community',
    icon: '💬',
    link: 'https://github.com/lakinmindfire/adac-specification/discussions',
  },
];

export default function GettingStarted() {
  return (
    <Layout title="Getting Started" description="Get up and running with ADAC in minutes">
      <main style={{ width: '100%' }}>
        {/* Hero */}
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
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1
                className="font-extrabold tracking-tight text-5xl sm:text-6xl leading-[1.08] mb-6"
                style={{ color: 'var(--foreground)' }}
              >
                Getting Started with{' '}
                <span style={{ color: 'hsl(var(--primary))' }}>ADAC</span>
              </h1>

              <p
                style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.75rem',
                  color: 'var(--muted-foreground)',
                  margin: '0 auto 2rem',
                }}
              >
                Learn how to write your first ADAC specification in just a few minutes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Steps */}
        <section
          style={{
            width: '100%',
            paddingTop: '2rem',
            paddingBottom: '4rem',
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
            background: 'color-mix(in oklab, hsl(var(--primary)) 3%, transparent)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
              <h2
                className="font-semibold tracking-tight text-3xl sm:text-4xl leading-[1.08]"
                style={{ color: 'var(--foreground)' }}
              >
                Four Simple Steps
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
              }}
            >
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    interactive="lift"
                    style={{
                      background: 'var(--card)',
                      borderColor: 'var(--border)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardHeader>
                      <div
                        style={{
                          fontSize: '2.5rem',
                          marginBottom: '0.5rem',
                          display: 'inline-block',
                        }}
                      >
                        {step.icon}
                      </div>
                      <CardTitle size="md" style={{ color: 'var(--foreground)' }}>
                        {step.number}. {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <CardDescription style={{ color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                        {step.description}
                      </CardDescription>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
                      >
                        <Link to={step.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          {step.action} <ArrowRight size={16} />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section
          style={{
            width: '100%',
            paddingTop: '4rem',
            paddingBottom: '4rem',
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
              <h2
                className="font-semibold tracking-tight text-3xl sm:text-4xl leading-[1.08]"
                style={{ color: 'var(--foreground)' }}
              >
                Essential Resources
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
              }}
            >
              {resources.map((resource, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <a
                    href={resource.link}
                    style={{
                      display: 'block',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      height: '100%',
                    }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
                      {resource.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: 'var(--foreground)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {resource.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--muted-foreground)',
                        margin: 0,
                      }}
                    >
                      {resource.description}
                    </p>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            width: '100%',
            paddingTop: '4rem',
            paddingBottom: '4rem',
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
            background: 'color-mix(in oklab, hsl(var(--primary)) 5%, transparent)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="font-semibold tracking-tight text-3xl sm:text-4xl leading-[1.08] mb-4"
                style={{ color: 'var(--foreground)' }}
              >
                Ready to dive in?
              </h2>

              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--muted-foreground)',
                  marginBottom: '2rem',
                }}
              >
                Start building infrastructure as code with ADAC today.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button asChild size="lg" variant="default" style={{ gap: '0.5rem' }}>
                  <Link to="/docs/reference/adac-v0.1">
                    <BookOpen size={18} /> Read Documentation
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" style={{ gap: '0.5rem' }}>
                  <a href="https://github.com/lakinmindfire/adac-specification">
                    <GithubIcon size={18} /> GitHub Repository
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
