"use client";

import React from "react";

const TypographyShowcase = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="syntalix-hero-title">Syntalix Typography System</h1>
          <p className="syntalix-body-text text-muted-foreground max-w-2xl mx-auto">
            A comprehensive typography system designed specifically for Syntalix Consultancy Services,
            featuring modern fonts, gradient effects, and AI-themed styling.
          </p>
        </div>

        {/* Logo Typography */}
        <section className="space-y-6">
          <h2 className="syntalix-section-title">Brand Typography</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="syntalix-card-title">Logo Text</h3>
              <div className="syntalix-logo-text text-6xl">Syntalix</div>
              <p className="syntalix-caption text-muted-foreground">
                Primary brand typography with gradient effect
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="syntalix-card-title">Hero Title</h3>
              <div className="syntalix-hero-title">Innovation with AI</div>
              <p className="syntalix-caption text-muted-foreground">
                Hero section titles with responsive sizing
              </p>
            </div>
          </div>
        </section>

        {/* Typography Scale */}
        <section className="space-y-6">
          <h2 className="syntalix-section-title">Typography Scale</h2>
          <div className="space-y-4">
            <div className="syntalix-text-9xl syntalix-font-display">Display 9XL</div>
            <div className="syntalix-text-8xl syntalix-font-display">Display 8XL</div>
            <div className="syntalix-text-7xl syntalix-font-display">Display 7XL</div>
            <div className="syntalix-text-6xl syntalix-font-heading">Heading 6XL</div>
            <div className="syntalix-text-5xl syntalix-font-heading">Heading 5XL</div>
            <div className="syntalix-text-4xl syntalix-font-heading">Heading 4XL</div>
            <div className="syntalix-text-3xl syntalix-font-heading">Heading 3XL</div>
            <div className="syntalix-text-2xl syntalix-font-heading">Heading 2XL</div>
            <div className="syntalix-text-xl syntalix-font-body">Text XL</div>
            <div className="syntalix-text-lg syntalix-font-body">Text Large</div>
            <div className="syntalix-text-base syntalix-font-body">Text Base</div>
            <div className="syntalix-text-sm syntalix-font-body">Text Small</div>
            <div className="syntalix-text-xs syntalix-font-body">Text Extra Small</div>
          </div>
        </section>

        {/* Gradient Effects */}
        <section className="space-y-6">
          <h2 className="syntalix-section-title">Gradient Effects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="syntalix-card-title">Primary Gradient</h3>
              <div className="syntalix-gradient-primary text-4xl font-bold">
                AI Solutions
              </div>
              <p className="syntalix-caption text-muted-foreground">
                Main brand gradient for headings
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="syntalix-card-title">Tech Gradient</h3>
              <div className="syntalix-gradient-tech text-4xl font-bold">
                Development
              </div>
              <p className="syntalix-caption text-muted-foreground">
                Technology-focused gradient
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="syntalix-card-title">AI Gradient</h3>
              <div className="syntalix-gradient-ai text-4xl font-bold">
                Machine Learning
              </div>
              <p className="syntalix-caption text-muted-foreground">
                AI-themed multi-color gradient
              </p>
            </div>
          </div>
        </section>

        {/* Font Families */}
        <section className="space-y-6">
          <h2 className="syntalix-section-title">Font Families</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="syntalix-card-title">Space Grotesk</h3>
              <div className="syntalix-font-display text-2xl">
                Display & Headings
              </div>
              <p className="syntalix-font-display syntalix-weight-light text-lg">
                Light weight for elegance
              </p>
              <p className="syntalix-font-display syntalix-weight-bold text-lg">
                Bold weight for emphasis
              </p>
              <p className="syntalix-caption text-muted-foreground">
                Modern geometric sans-serif for headlines
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="syntalix-card-title">Inter</h3>
              <div className="syntalix-font-body text-2xl">Body Text</div>
              <p className="syntalix-font-body text-lg">
                Highly readable body text with excellent legibility across all sizes.
                Perfect for paragraphs and user interface elements.
              </p>
              <p className="syntalix-caption text-muted-foreground">
                Optimized for reading and UI elements
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="syntalix-card-title">JetBrains Mono</h3>
              <div className="syntalix-font-mono text-xl">
                const syntalix = &quot;AI Solutions&quot;;
              </div>
              <div className="syntalix-code text-lg">
                function innovate() &#123;<br />
                &nbsp;&nbsp;return &quot;Future Tech&quot;;<br />
                &#125;
              </div>
              <p className="syntalix-caption text-muted-foreground">
                Code and technical content with ligatures
              </p>
            </div>
          </div>
        </section>

        {/* Text Effects */}
        <section className="space-y-6">
          <h2 className="syntalix-section-title">Text Effects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="syntalix-card-title">Glowing Text</h3>
              <div className="syntalix-text-glow text-4xl font-bold text-primary">
                Syntalix AI
              </div>
              <p className="syntalix-caption text-muted-foreground">
                Animated glow effect for special emphasis
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="syntalix-card-title">Weight Variations</h3>
              <div className="space-y-2">
                <div className="syntalix-font-heading syntalix-weight-light text-xl">Light</div>
                <div className="syntalix-font-heading syntalix-weight-normal text-xl">Normal</div>
                <div className="syntalix-font-heading syntalix-weight-medium text-xl">Medium</div>
                <div className="syntalix-font-heading syntalix-weight-semibold text-xl">Semibold</div>
                <div className="syntalix-font-heading syntalix-weight-bold text-xl">Bold</div>
                <div className="syntalix-font-heading syntalix-weight-extrabold text-xl">Extra Bold</div>
                <div className="syntalix-font-heading syntalix-weight-black text-xl">Black</div>
              </div>
            </div>
          </div>
        </section>

        {/* Component Examples */}
        <section className="space-y-6">
          <h2 className="syntalix-section-title">Component Typography</h2>
          <div className="grid gap-8">
            {/* Card Example */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h3 className="syntalix-card-title">AI Chatbot Development</h3>
              <p className="syntalix-body-text text-muted-foreground">
                We create intelligent chatbots powered by advanced AI models like ChatGPT,
                providing 24/7 customer support and engagement for your business.
              </p>
              <div className="syntalix-caption text-primary font-medium">
                Price: ₹15,000 - ₹30,000 | Duration: 1-2 weeks
              </div>
            </div>

            {/* Code Block Example */}
            <div className="bg-muted/30 border border-border rounded-lg p-6">
              <h3 className="syntalix-card-title mb-4">Technical Implementation</h3>
              <pre className="syntalix-code text-sm overflow-x-auto">
{`import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function createChatbot() {
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash'
  });
  return model;
}`}
              </pre>
            </div>

            {/* Quote Example */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
              <blockquote className="syntalix-text-lg syntalix-font-heading italic text-foreground">
                &quot;Syntalix delivered our AI chatbot ahead of schedule with exceptional quality.
                Customer satisfaction increased by 40%!&quot;
              </blockquote>
              <footer className="syntalix-caption text-muted-foreground mt-4">
                — Ahmed Hassan, Business Owner, Dubai
              </footer>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="space-y-6">
          <h2 className="syntalix-section-title">Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="syntalix-card-title text-green-600">✓ Do</h3>
              <ul className="space-y-2 syntalix-body-text">
                <li>• Use Space Grotesk for headings and display text</li>
                <li>• Use Inter for body text and UI elements</li>
                <li>• Use JetBrains Mono for code and technical content</li>
                <li>• Apply gradients sparingly for emphasis</li>
                <li>• Maintain consistent letter spacing</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="syntalix-card-title text-red-600">✗ Don&apos;t</h3>
              <ul className="space-y-2 syntalix-body-text">
                <li>• Mix too many font weights in one section</li>
                <li>• Overuse gradient effects</li>
                <li>• Use monospace fonts for body text</li>
                <li>• Ignore responsive scaling</li>
                <li>• Compromise readability for style</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-12 border-t border-border">
          <p className="syntalix-caption text-muted-foreground">
            Syntalix Custom Typography System - Designed for modern AI-powered applications
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TypographyShowcase;
