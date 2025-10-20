"use client";

import React from "react";
import { motion } from "framer-motion";

const SyntalixFontDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="syntalix-brand text-6xl md:text-8xl syntalix-gradient-text mb-4">
            SYNTALIX
          </h1>
          <p className="syntalix-body text-xl text-muted-foreground">
            Custom Typography System Showcase
          </p>
        </motion.div>

        {/* Font Styles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Brand Font */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg"
          >
            <h2 className="syntalix-heading text-3xl mb-4 text-primary">
              Brand Typography
            </h2>
            <div className="space-y-4">
              <div className="syntalix-brand text-4xl text-foreground">
                SYNTALIX BRAND
              </div>
              <div className="syntalix-brand text-2xl syntalix-glow">
                AI INNOVATION
              </div>
              <p className="syntalix-body text-sm text-muted-foreground">
                Perfect for logos, headlines, and brand statements. Features tight letter-spacing and bold weight.
              </p>
            </div>
          </motion.div>

          {/* Heading Font */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg"
          >
            <h2 className="syntalix-heading text-3xl mb-4 text-primary">
              Heading Typography
            </h2>
            <div className="space-y-4">
              <h1 className="syntalix-heading text-4xl text-foreground">
                Main Headlines
              </h1>
              <h2 className="syntalix-heading text-3xl text-foreground">
                Section Titles
              </h2>
              <h3 className="syntalix-heading text-2xl text-foreground">
                Subsection Headers
              </h3>
              <p className="syntalix-body text-sm text-muted-foreground">
                Optimized for readability with perfect line-height and spacing.
              </p>
            </div>
          </motion.div>

          {/* Body Font */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg"
          >
            <h2 className="syntalix-heading text-3xl mb-4 text-primary">
              Body Typography
            </h2>
            <div className="space-y-4">
              <p className="syntalix-body text-lg text-foreground">
                This is the primary body text for content, descriptions, and paragraphs.
              </p>
              <p className="syntalix-body text-base text-foreground">
                Regular body text with optimal readability and comfortable line spacing.
              </p>
              <p className="syntalix-body text-sm text-muted-foreground">
                Smaller text for captions, metadata, and secondary information.
              </p>
              <p className="syntalix-body text-sm text-muted-foreground">
                Perfect for long-form content with excellent legibility across all screen sizes.
              </p>
            </div>
          </motion.div>

          {/* Monospace Font */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg"
          >
            <h2 className="syntalix-heading text-3xl mb-4 text-primary">
              Monospace Typography
            </h2>
            <div className="space-y-4">
              <code className="syntalix-mono text-lg text-foreground bg-muted px-3 py-2 rounded">
                const syntalix = "innovation";
              </code>
              <pre className="syntalix-mono text-sm text-foreground bg-muted p-4 rounded overflow-x-auto">
{`function createAI() {
  return {
    company: "Syntalix",
    expertise: ["AI", "ML", "Web", "Mobile"]
  };
}`}
              </pre>
              <p className="syntalix-body text-sm text-muted-foreground">
                Ideal for code snippets, technical documentation, and data display.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Special Effects Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg"
        >
          <h2 className="syntalix-heading text-3xl mb-8 text-center text-primary">
            Special Text Effects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Gradient Text */}
            <div className="text-center space-y-3">
              <div className="syntalix-heading text-3xl syntalix-gradient-text">
                GRADIENT
              </div>
              <p className="syntalix-body text-sm text-muted-foreground">
                Animated gradient effect
              </p>
            </div>

            {/* Glow Effect */}
            <div className="text-center space-y-3">
              <div className="syntalix-heading text-3xl text-primary syntalix-glow">
                GLOW
              </div>
              <p className="syntalix-body text-sm text-muted-foreground">
                Subtle glow effect
              </p>
            </div>

            {/* 3D Effect */}
            <div className="text-center space-y-3">
              <div className="syntalix-heading text-3xl text-primary syntalix-3d">
                3D TEXT
              </div>
              <p className="syntalix-body text-sm text-muted-foreground">
                Layered shadow depth
              </p>
            </div>

            {/* Outline Effect */}
            <div className="text-center space-y-3">
              <div className="syntalix-heading text-3xl syntalix-outline">
                OUTLINE
              </div>
              <p className="syntalix-body text-sm text-muted-foreground">
                Stroke outline style
              </p>
            </div>
          </div>
        </motion.div>

        {/* Usage Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg"
        >
          <h2 className="syntalix-heading text-3xl mb-8 text-center text-primary">
            Usage Examples
          </h2>

          <div className="space-y-8">
            {/* Hero Section Example */}
            <div className="text-center space-y-4 p-6 bg-muted/50 rounded-xl">
              <div className="syntalix-brand text-5xl syntalix-gradient-text">
                SYNTALIX
              </div>
              <h1 className="syntalix-heading text-4xl text-foreground">
                AI-Powered Innovation
              </h1>
              <p className="syntalix-body text-xl text-muted-foreground max-w-2xl mx-auto">
                We specialize in building cutting-edge AI solutions, web applications,
                and mobile apps that transform businesses worldwide.
              </p>
            </div>

            {/* Card Example */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-muted/50 rounded-xl text-center space-y-3">
                <h3 className="syntalix-heading text-xl text-primary">AI Solutions</h3>
                <p className="syntalix-body text-sm text-muted-foreground">
                  Custom AI integrations and machine learning models.
                </p>
              </div>
              <div className="p-6 bg-muted/50 rounded-xl text-center space-y-3">
                <h3 className="syntalix-heading text-xl text-primary">Web Development</h3>
                <p className="syntalix-body text-sm text-muted-foreground">
                  Modern, responsive websites and web applications.
                </p>
              </div>
              <div className="p-6 bg-muted/50 rounded-xl text-center space-y-3">
                <h3 className="syntalix-heading text-xl text-primary">Mobile Apps</h3>
                <p className="syntalix-body text-sm text-muted-foreground">
                  Native and cross-platform mobile applications.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Implementation Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg"
        >
          <h2 className="syntalix-heading text-3xl mb-6 text-primary">
            Implementation Guide
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="syntalix-heading text-xl text-foreground">CSS Classes</h3>
              <div className="syntalix-mono text-sm bg-muted p-4 rounded space-y-2">
                <div>• .syntalix-brand - Brand typography</div>
                <div>• .syntalix-heading - Headings</div>
                <div>• .syntalix-body - Body text</div>
                <div>• .syntalix-mono - Code/monospace</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="syntalix-heading text-xl text-foreground">Special Effects</h3>
              <div className="syntalix-mono text-sm bg-muted p-4 rounded space-y-2">
                <div>• .syntalix-gradient-text - Gradient</div>
                <div>• .syntalix-glow - Glow effect</div>
                <div>• .syntalix-3d - 3D shadow</div>
                <div>• .syntalix-outline - Text outline</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SyntalixFontDemo;
