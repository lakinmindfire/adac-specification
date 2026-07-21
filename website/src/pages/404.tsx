import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Home, Search, BookOpen } from 'lucide-react';

export default function Custom404() {
  return (
    <Layout
      title="Page Not Found"
      description="The page you're looking for could not be found."
    >
      <main className="w-full relative overflow-hidden grid-bg" style={{ minHeight: 'calc(100vh - 60px)' }}>
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="glow-blob -top-40 -left-40 opacity-30" />
          <div className="glow-blob top-40 -right-40 opacity-20" />
        </div>

        <div className="flex flex-col items-center justify-center text-center px-4 relative z-10 h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-9xl font-extrabold mb-4" style={{ color: 'hsl(var(--primary))' }}>
              404
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Page Not Found
            </h1>
            <p className="text-lg md:text-xl max-w-lg mx-auto mb-10" style={{ color: 'var(--muted-foreground)' }}>
              We couldn't find what you were looking for. The page might have been moved, renamed, or doesn't exist.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="default" className="w-full sm:w-auto gap-2 rounded-xl">
                <Link href="/">
                  <Home size={18} /> Return Home
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 rounded-xl">
                <Link href="/docs/getting-started/quick-start">
                  <BookOpen size={18} /> Read Docs
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </Layout>
  );
}
