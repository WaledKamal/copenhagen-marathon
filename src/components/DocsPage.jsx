import React, { useState } from 'react';
import {
  BookOpen,
  Layers,
  Sparkles,
  Smartphone,
  Code2,
  ArrowLeft,
  Check,
  Copy,
  Lightbulb,
  Palette,
  Compass,
  Zap,
  ChevronRight,
  Terminal,
  Eye,
} from 'lucide-react';

/**
 * Reusable Styled Code Block Component
 * - Dark slate/carbon terminal aesthetic (Vercel / Tailwind Docs style)
 * - Copy-to-clipboard button with visual feedback
 * - Line-by-line rendering with syntax coloring for comments, strings, tags, and keywords
 */
function CodeBlock({ title, language = 'jsx', code, annotations = [] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-5 rounded-xl overflow-hidden border border-slate-800 bg-[#0d1117] shadow-xl">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-1">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-pureWhite bg-slate-800/70 hover:bg-slate-700/80 px-2.5 py-1 rounded-md transition-colors"
            title="Copy code snippet"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Area */}
      <pre className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed font-mono overflow-x-auto text-slate-200 selection:bg-primaryYellow selection:text-pureBlack">
        <code>
          {code.split('\n').map((line, i) => {
            const isComment =
              line.trim().startsWith('//') ||
              line.trim().startsWith('/*') ||
              line.trim().startsWith('*') ||
              line.trim().startsWith('{/*');

            return (
              <div key={i} className="table-row">
                <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">
                  {i + 1}
                </span>
                <span
                  className={`table-cell whitespace-pre ${
                    isComment ? 'text-emerald-400/90 italic' : 'text-slate-100'
                  }`}
                >
                  {line}
                </span>
              </div>
            );
          })}
        </code>
      </pre>

      {/* Optional Beginner Annotations Footer */}
      {annotations.length > 0 && (
        <div className="bg-[#131922] border-t border-slate-800/80 px-4 py-3 sm:px-5 space-y-1.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-primaryYellow flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5" /> What to notice in this snippet:
          </p>
          <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
            {annotations.map((note, idx) => (
              <li key={idx} className="leading-relaxed">
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/**
 * Friendly Callout / Analogy Card
 */
function AnalogyCard({ title, children }) {
  return (
    <div className="my-5 rounded-xl bg-amber-50/90 border-l-4 border-amber-400 p-4 sm:p-5 text-slate-800 shadow-sm">
      <div className="flex items-center gap-2 font-bold text-sm text-amber-900 mb-1.5">
        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
        <span>Real-World Analogy: {title}</span>
      </div>
      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

/**
 * `/docs` Route Component — Technical Handover & Team Learning Guide
 */
export default function DocsPage({ onBackToApp }) {
  const [skewDemoActive, setSkewDemoActive] = useState(true);
  const [counterSkewText, setCounterSkewText] = useState(true);
  const [activeSection, setActiveSection] = useState('tech-stack');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 w-full h-dvh overflow-y-auto overscroll-y-contain bg-slate-50 text-slate-900 font-montserrat selection:bg-primaryYellow selection:text-pureBlack">
      {/* Sticky Documentation Top Navbar */}
      <header className="sticky top-0 z-40 bg-pureWhite/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-pureBlack flex items-center justify-center shadow-sm border border-slate-800">
              <span className="font-black italic text-primaryYellow text-sm -skew-x-12">
                CPH
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
                  Copenhagen Marathon PWA
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider bg-primaryYellow px-2 py-0.5 rounded-full text-pureBlack border border-amber-300">
                  Team Handover Docs
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                A beginner-friendly guide to our React &amp; Tailwind CSS architecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
              <Terminal className="w-3.5 h-3.5 text-slate-600" />
              route: <strong className="text-slate-800">/docs</strong>
            </span>

            <button
              onClick={onBackToApp}
              className="inline-flex items-center gap-2 bg-pureBlack hover:bg-slate-800 text-pureWhite font-bold text-xs sm:text-sm px-4 py-2 rounded-lg shadow-sm transition-all active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 text-primaryYellow" />
              <span>Back to Live App</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout: Left Sidebar TOC (Desktop) + Content Column */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:grid lg:grid-cols-12 lg:gap-10">
        {/* Left Sidebar Navigation */}
        <aside className="hidden lg:block lg:col-span-3">
          <nav className="sticky top-24 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
                On This Page
              </p>
              <ul className="space-y-1 text-sm">
                {[
                  {
                    id: 'tech-stack',
                    label: '1. Tech Stack Overview',
                    icon: Layers,
                  },
                  {
                    id: 'custom-ui',
                    label: '2. How We Built the UI',
                    icon: Sparkles,
                  },
                  {
                    id: 'pwa-magic',
                    label: '3. PWA Mobile Magic',
                    icon: Smartphone,
                  },
                  {
                    id: 'component-arch',
                    label: '4. Component Architecture',
                    icon: Code2,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left font-medium transition-colors ${
                          isActive
                            ? 'bg-pureBlack text-primaryYellow font-semibold shadow-sm'
                            : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Extracted Design Tokens Quick Reference Card */}
            <div className="p-4 rounded-xl bg-pureWhite border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-slate-700 mb-3">
                <Palette className="w-4 h-4 text-amber-500" />
                <span>SVG Color Cheat Sheet</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-medium text-slate-700">
                    <span className="w-4 h-4 rounded bg-[#FFEE00] border border-slate-300" />
                    primaryYellow
                  </span>
                  <code className="font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">
                    #FFEE00
                  </code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-medium text-slate-700">
                    <span className="w-4 h-4 rounded bg-[#FFEE32] border border-slate-300" />
                    buttonYellow
                  </span>
                  <code className="font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">
                    #FFEE32
                  </code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-medium text-slate-700">
                    <span className="w-4 h-4 rounded bg-[#494949] border border-slate-300" />
                    buttonTextDark
                  </span>
                  <code className="font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">
                    #494949
                  </code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-medium text-slate-700">
                    <span className="w-4 h-4 rounded bg-[#888888] border border-slate-300" />
                    darkOverlay
                  </span>
                  <code className="font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">
                    #888888
                  </code>
                </div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Documentation Content */}
        <main className="lg:col-span-9 space-y-12">
          {/* Welcome Banner */}
          <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-neutral-800 text-pureWhite p-6 sm:p-10 shadow-xl overflow-hidden border border-slate-800">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primaryYellow/15 border border-primaryYellow/40 text-primaryYellow text-xs font-bold uppercase tracking-wider mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Developer Handover &amp; Study Guide</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black italic tracking-tight text-pureWhite leading-tight">
                Welcome to the{' '}
                <span className="text-primaryYellow">Copenhagen Marathon</span>{' '}
                Codebase!
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                If you are currently learning JavaScript, jumping into a full project can
                feel intimidating—but don&apos;t worry! Every screen in this app is built
                from simple JavaScript functions and small, reusable building blocks.
                This guide walks you through <strong>how</strong> and{' '}
                <strong>why</strong> we built everything, step by step.
              </p>
            </div>
            {/* Decorative right chevron matching Landing Page */}
            <svg
              viewBox="706 43 79 63"
              className="hidden sm:block absolute -right-4 -bottom-6 w-48 h-48 opacity-10 pointer-events-none"
              fill="none"
            >
              <path
                d="M771.839 43H758.671L771.839 64.0002L758.671 85.0003L771.839 106.001H785.006L771.839 85.0003L785.006 64.0002L771.839 43ZM719.168 64.0002H706L719.168 85.0003H745.503L758.671 64.0002L745.503 43H732.335L745.503 64.0002L732.335 85.0003L719.168 64.0002Z"
                fill="#FFEE00"
              />
            </svg>
          </div>

          {/* =====================================================================
              SECTION 1: TECH STACK OVERVIEW
          ===================================================================== */}
          <section
            id="tech-stack"
            className="scroll-mt-24 bg-pureWhite rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pureBlack text-primaryYellow flex items-center justify-center font-black italic text-lg shadow-sm">
                01
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Tech Stack Overview
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Why we chose React (Component-Based UI) and Tailwind CSS (Utility-First Styling)
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              When building a modern web app, writing one giant HTML file and one giant
              CSS file quickly becomes messy. Imagine trying to find a single typo in a
              3,000-line file! Instead, we use two tools that keep our code organized:
              <strong> React</strong> and <strong>Tailwind CSS</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 my-6">
              {/* React Card */}
              <div className="rounded-xl border border-slate-200 p-5 bg-slate-50/60">
                <div className="flex items-center gap-2 font-bold text-base text-slate-900 mb-2">
                  <Layers className="w-5 h-5 text-sky-600" />
                  <span>1. React (Component-Based UI)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  Notice how our <strong>wavy white footer</strong>, our{' '}
                  <strong>top-right double arrow logo</strong>, and our{' '}
                  <strong>slanted yellow buttons</strong> appear on almost every screen?
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In React, we build each of those once as a custom{' '}
                  <strong>Component</strong> (like a custom HTML tag:{' '}
                  <code className="bg-slate-200 px-1.5 py-0.5 rounded font-mono text-xs">
                    &lt;SlantedButton /&gt;
                  </code>
                  ). Whenever we need a button on the Landing Page, Homepage, or Zones
                  Page, we reuse that exact same block!
                </p>
              </div>

              {/* Tailwind Card */}
              <div className="rounded-xl border border-slate-200 p-5 bg-slate-50/60">
                <div className="flex items-center gap-2 font-bold text-base text-slate-900 mb-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <span>2. Tailwind CSS (Utility-First Styling)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  Normally in CSS, you have to invent class names like{' '}
                  <code className="bg-slate-200 px-1.5 py-0.5 rounded font-mono text-xs">
                    .yellow-parallelogram-wrapper
                  </code>{' '}
                  and switch back and forth between `.html` and `.css` files.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tailwind gives us tiny, single-purpose helper classes (called{' '}
                  <strong>utilities</strong>) that we write directly on our HTML elements:
                  for example,{' '}
                  <code className="bg-slate-200 px-1.5 py-0.5 rounded font-mono text-xs">
                    bg-primaryYellow
                  </code>{' '}
                  sets the background color and{' '}
                  <code className="bg-slate-200 px-1.5 py-0.5 rounded font-mono text-xs">
                    font-bold
                  </code>{' '}
                  makes text bold.
                </p>
              </div>
            </div>

            <AnalogyCard title="LEGO Bricks vs. Sculpting from Clay">
              <p>
                Think of <strong>React Components</strong> like pre-built LEGO kits (a
                wheel, a windshield, a door). Once you build a door, you can snap four of
                them onto your car without rebuilding each one from scratch.
              </p>
              <p>
                Think of <strong>Tailwind CSS</strong> like having labeled paint buckets
                and stickers right next to your workbench. Instead of walking to another
                room (a separate `.css` file) every time you want to paint a brick yellow,
                you just slap the <code className="font-mono font-bold">bg-primaryYellow</code>{' '}
                label right onto the brick!
              </p>
            </AnalogyCard>
          </section>

          {/* =====================================================================
              SECTION 2: HOW WE BUILT THE CUSTOM UI
          ===================================================================== */}
          <section
            id="custom-ui"
            className="scroll-mt-24 bg-pureWhite rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pureBlack text-primaryYellow flex items-center justify-center font-black italic text-lg shadow-sm">
                02
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  How We Built the Custom UI
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Slanted Parallelogram Buttons, Wavy SVG Containers, and Exact Color Extraction
                </p>
              </div>
            </div>

            {/* 2A: The Slanted Buttons */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-amber-500" />
                A. The Slanted Parallelogram Buttons (The Skew &amp; Un-Skew Trick)
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In HTML and CSS, every element on a webpage is naturally a{' '}
                <strong>rectangle</strong>. So how did we turn our{' '}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                  START
                </code>
                ,{' '}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                  Updates
                </code>
                ,{' '}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                  Explore
                </code>
                , and{' '}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                  Track Runner
                </code>{' '}
                buttons into sporty, slanted parallelograms?
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                We used CSS <strong>Skew Transform</strong>! However, there is a catch:
                when you slant a parent box to the left (e.g.,{' '}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs font-bold">
                  -skew-x-[23deg]
                </code>{' '}
                or{' '}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs font-bold">
                  -skew-x-12
                </code>
                ), <strong>everything inside it slants too</strong>—making the text look
                squished and dizzying! To fix this, we put the text inside an inner{' '}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                  &lt;span&gt;
                </code>{' '}
                and slant it by the <strong>exact opposite angle</strong> (
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs font-bold">
                  skew-x-[23deg]
                </code>{' '}
                or{' '}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs font-bold">
                  skew-x-12
                </code>
                ) so the text stands upright again.
              </p>

              {/* Interactive Playground for Teammates */}
              <div className="rounded-xl border-2 border-slate-200 bg-slate-900 p-5 text-pureWhite">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primaryYellow">
                    <Eye className="w-4 h-4" />
                    <span>Interactive Skew Playground (Try toggling these!)</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSkewDemoActive((v) => !v)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                        skewDemoActive
                          ? 'bg-primaryYellow text-pureBlack'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      1. Parent Box: {skewDemoActive ? '-skew-x-[23deg] (ON)' : 'No Skew (OFF)'}
                    </button>
                    <button
                      onClick={() => setCounterSkewText((v) => !v)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                        counterSkewText
                          ? 'bg-emerald-400 text-pureBlack'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      2. Inner Text: {counterSkewText ? 'skew-x-[23deg] (ON)' : 'No Counter-Skew (OFF)'}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-4">
                  <div
                    className={`w-56 h-16 bg-buttonYellow flex items-center justify-center shadow-lg transition-transform duration-300 ${
                      skewDemoActive ? '-skew-x-[23deg]' : 'skew-x-0'
                    }`}
                  >
                    <span
                      className={`font-montserrat font-bold italic text-buttonTextDark text-2xl transition-transform duration-300 inline-block ${
                        skewDemoActive && counterSkewText
                          ? 'skew-x-[23deg]'
                          : !skewDemoActive && counterSkewText
                          ? 'skew-x-[23deg]'
                          : 'skew-x-0'
                      }`}
                    >
                      START
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                    {skewDemoActive && counterSkewText && (
                      <>
                        ✅ <strong>Perfect!</strong> The outer yellow button is slanted at{' '}
                        <code className="text-primaryYellow">-23deg</code>, and the inner
                        text is counter-slanted at{' '}
                        <code className="text-emerald-400">+23deg</code> so they cancel
                        each other out!
                      </>
                    )}
                    {skewDemoActive && !counterSkewText && (
                      <>
                        ⚠️ <strong>Notice the problem?</strong> Without counter-skewing the
                        inner <code className="text-amber-300">&lt;span&gt;</code>, the
                        text gets stretched and leans way too far!
                      </>
                    )}
                    {!skewDemoActive && (
                      <>
                        📦 <strong>Plain Rectangle:</strong> When we turn off the parent
                        skew, the button goes back to a regular HTML box.
                      </>
                    )}
                  </p>
                </div>
              </div>

              <CodeBlock
                title="src/components/SlantedButton.jsx"
                language="jsx"
                code={`// 1. Outer button handles click events and hover animations
<button onClick={onClick} className="group relative inline-flex items-center justify-center">

  {/* 2. PARENT BOX: We slant the yellow background left using -skew-x-[23deg] (or -skew-x-12) */}
  <span className="w-60 h-16 bg-buttonYellow -skew-x-[23deg] flex items-center justify-center shadow-lg">

    {/* 3. INNER TEXT: We reverse the slant with +skew-x-[23deg] (or skew-x-12)
           so our Montserrat Bold Italic text stays upright and easy to read! */}
    <span className="skew-x-[23deg] font-montserrat font-bold italic text-buttonTextDark text-2xl">
      START
    </span>

  </span>
</button>`}
                annotations={[
                  '`-skew-x-[23deg]` tilts the yellow box to the left into a parallelogram.',
                  '`skew-x-[23deg]` on the child `<span>` tilts the text back to the right by the exact same amount.',
                  'Important CSS tip: `transform: skew()` only works on `block` or `inline-block` / `flex` elements, not plain inline text!',
                ]}
              />
            </div>

            <hr className="border-slate-200" />

            {/* 2B: The Wavy Bottom Container */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-amber-500" />
                B. The Wavy Bottom Container (Responsive SVG Waves)
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every screen in our design has a signature <strong>white wavy footer</strong>{' '}
                at the bottom holding the QR code and the{' '}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                  EN / DK
                </code>{' '}
                language switch. If we used a fixed PNG image for that wave, it would look
                pixelated on large tablets or squished on narrow phones.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Instead, we stacked two pieces together like a two-layer cake:
              </p>
              <ol className="list-decimal list-inside text-sm sm:text-base text-slate-700 space-y-1.5 pl-2">
                <li>
                  <strong>Top Layer (The Curved Edge):</strong> An inline{' '}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                    &lt;svg&gt;
                  </code>{' '}
                  with{' '}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                    preserveAspectRatio=&quot;none&quot;
                  </code>{' '}
                  and{' '}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                    w-full
                  </code>
                  . This lets the mathematical curve stretch smoothly from edge to edge on
                  any screen width!
                </li>
                <li>
                  <strong>Bottom Layer (The White Content Box):</strong> A standard{' '}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                    bg-pureWhite
                  </code>{' '}
                  flexbox container directly underneath that holds the QR code and
                  language buttons.
                </li>
              </ol>

              <CodeBlock
                title="src/components/WavyFooter.jsx"
                language="jsx"
                code={`<footer className="relative w-full z-20 shrink-0">
  {/* LAYER 1: The Wavy Top Edge (SVG mathematical curve)
      - preserveAspectRatio="none" allows the wave to stretch across mobile, tablet, or desktop
      - "-mb-1" pulls the white box 4px up so there is never a hairline gap between them */}
  <div className="relative w-full overflow-hidden leading-none -mb-1">
    <svg
      viewBox="0 980 834 95"
      preserveAspectRatio="none"
      className="w-full h-10 sm:h-14 md:h-[78px] block"
    >
      <path
        d="M15.8552 1055.35C161.779 897.008 417.968 1089.62 861 1055.35V1237H15.8552Z"
        fill="#FFFFFF"
      />
    </svg>
  </div>

  {/* LAYER 2: Solid White Flexbox Container for QR Code (left) & Language Switch (right) */}
  <div className="bg-pureWhite w-full px-5 pb-4 pt-1 flex items-end justify-between">
    <QrCodeSection />
    <LanguagePillSwitch />
  </div>
</footer>`}
                annotations={[
                  '`viewBox="0 980 834 95"` crops directly into the wave coordinates from our designer’s 834×1194 Figma SVG.',
                  '`flex items-end justify-between` pushes the QR code to the far left and the EN/DK toggle to the far right.',
                ]}
              />
            </div>

            <hr className="border-slate-200" />

            {/* 2C: Color Extraction */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-amber-500" />
                C. Extracting Exact Colors from the SVG Files
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Did you know that an{' '}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                  .svg
                </code>{' '}
                file is actually just a text file written in XML? You can open any SVG in
                VS Code and read the exact HEX codes the designer used in Figma! Instead
                of guessing with Tailwind&apos;s default{' '}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                  bg-yellow-400
                </code>
                , we inspected the raw SVG paths and registered custom color names in{' '}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                  tailwind.config.js
                </code>
                :
              </p>

              <CodeBlock
                title="tailwind.config.js"
                language="javascript"
                code={`export default {
  theme: {
    extend: {
      colors: {
        // Extracted directly from Landing Page.svg, Homepage.svg, and Zones Page.svg:
        primaryYellow: '#FFEE00',                  // "COPENHAGEN MARATHON" title & active 'EN' pill
        buttonYellow: '#FFEE32',                   // Slanted parallelogram button fill
        buttonShadowYellow: 'rgba(255,238,0,0.36)',// Offset rectangle behind nav buttons (fill-opacity="0.36")
        buttonTextDark: '#494949',                 // Dark charcoal text inside yellow buttons
        darkOverlay: '#888888',                    // Grayscale runner backdrop & QR helper text
        zoneYellow: 'rgba(255, 238, 0, 0.13)',     // Map zone polygons (fill-opacity="0.13")
      },
    },
  },
}`}
                annotations={[
                  'Now anywhere in our project, writing `bg-primaryYellow` or `text-buttonTextDark` uses the exact HEX code from the design!',
                ]}
              />
            </div>
          </section>

          {/* =====================================================================
              SECTION 3: PROGRESSIVE WEB APP (PWA) MAGIC
          ===================================================================== */}
          <section
            id="pwa-magic"
            className="scroll-mt-24 bg-pureWhite rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pureBlack text-primaryYellow flex items-center justify-center font-black italic text-lg shadow-sm">
                03
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Progressive Web App (PWA) Magic
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  How our website installs on a phone’s home screen and feels like a native iOS/Android app
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              On race day, thousands of spectators are standing on the streets of
              Copenhagen. Nobody wants to wait in the App Store to download a 150 MB app!
              A <strong>Progressive Web App (PWA)</strong> gives us the best of both
              worlds: spectators visit a normal web link, and with one tap, it can be
              added to their phone&apos;s home screen and open <strong>full-screen</strong>{' '}
              without the browser URL bar.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-xl border border-slate-200 p-5 bg-slate-50/70">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-2 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-indigo-600" />
                  <span>1. Manifest.json (The App’s ID Card)</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Located at{' '}
                  <code className="bg-slate-200 px-1.5 py-0.5 rounded font-mono text-xs">
                    public/manifest.json
                  </code>
                  , this simple JSON file tells the phone: <em>&quot;Here is my app name, my home screen icon, my yellow theme color, and please open me in{' '}
                  <code className="font-mono font-bold">standalone</code> mode (hide the Safari/Chrome address bar!).&quot;</em>
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-5 bg-slate-50/70">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-2 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                  <span>2. Service Workers (The Pocket Butler)</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A Service Worker is a background JavaScript script that sits between our
                  app and the internet. It saves (caches) our map images and styles on the
                  phone so even if 50,000 marathon spectators clog up the mobile network,
                  the app still loads fast!
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Stopping the &quot;Rubber-Band Bounce&quot; with{' '}
                <code className="bg-slate-100 px-2 py-0.5 rounded font-mono text-sm text-rose-600">
                  overscroll-behavior-y: none
                </code>
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Have you ever pulled your finger down at the top of a mobile webpage and
                watched the whole page stretch and bounce—or accidentally triggered a page
                reload while panning around a map? Real native apps don&apos;t bounce like
                webpages. Here is the exact CSS in{' '}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                  src/index.css
                </code>{' '}
                that locks our app into a native-feeling frame:
              </p>

              <CodeBlock
                title="src/index.css"
                language="css"
                code={`@layer base {
  html,
  body,
  #root {
    /* 100dvh = 100% of the "Dynamic Viewport Height" (accounts for mobile toolbars) */
    height: 100dvh;
    width: 100%;
    margin: 0;
    overflow: hidden;

    /* CRUCIAL FOR PWAs:
       Prevents the mobile browser's rubber-band "pull-to-refresh" bounce
       so dragging on our Zones Map feels like a native iOS/Android app! */
    overscroll-behavior-y: none;
    overscroll-behavior-x: none;
  }
}`}
                annotations={[
                  '`height: 100dvh` ensures our app fits the exact screen height without accidental vertical scrolling.',
                  '`overscroll-behavior-y: none` disables the browser pull-to-refresh bounce and rubber-banding.',
                ]}
              />
            </div>
          </section>

          {/* =====================================================================
              SECTION 4: COMPONENT ARCHITECTURE (JAVASCRIPT FOCUS)
          ===================================================================== */}
          <section
            id="component-arch"
            className="scroll-mt-24 bg-pureWhite rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pureBlack text-primaryYellow flex items-center justify-center font-black italic text-lg shadow-sm">
                04
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Component Architecture (Connecting Your JS Knowledge to React)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  How JavaScript functions, parameters (Props), and return statements power our UI
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Here is the best secret about React:{' '}
              <strong>a React Component is just a regular JavaScript function!</strong> If
              you know how to write a JavaScript function that takes parameters and
              returns a value, you already understand 90% of React:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Step 1: Props (Parameters)
                </span>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                  Just like a JS function takes arguments{' '}
                  <code className="font-mono text-xs bg-slate-200 px-1 rounded">
                    function greet(name)
                  </code>
                  , a React component receives an object called <strong>Props</strong>{' '}
                  (short for properties) like{' '}
                  <code className="font-mono text-xs bg-slate-200 px-1 rounded">
                    {`{ label, onClick, isActive }`}
                  </code>
                  .
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Step 2: The Return Statement
                </span>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                  Instead of returning a number or string, a React function{' '}
                  <code className="font-mono text-xs bg-slate-200 px-1 rounded">
                    return (...)
                  </code>{' '}
                  outputs <strong>JSX</strong>—which looks just like HTML, where curly
                  braces <code className="font-mono text-xs bg-slate-200 px-1 rounded">{`{ }`}</code>{' '}
                  let you plug in JavaScript variables!
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Step 3: Tailwind Classes
                </span>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                  Because <code className="font-mono text-xs bg-slate-200 px-1 rounded">class</code>{' '}
                  is a reserved word in JavaScript, we write{' '}
                  <code className="font-mono text-xs bg-slate-200 px-1 rounded">
                    className=&quot;...&quot;
                  </code>{' '}
                  to attach our Tailwind CSS styles.
                </p>
              </div>
            </div>

            <CodeBlock
              title="Example: How a Reusable Component Works in Our Project"
              language="jsx"
              code={`// 1. A React component is a normal JavaScript function!
//    We use JS object destructuring { label, isActive, onClick } to read its "Props" (inputs).
export default function NavButton({ label, isActive, onClick }) {

  // 2. We can use regular JavaScript variables & ternary operators (?) before returning:
  const buttonHeight = isActive ? 'h-[87px]' : 'h-[55px]';

  // 3. The return statement describes what HTML should appear on screen (JSX):
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center focus:outline-none"
    >
      {/* Template literals (\`...\`) let us combine static Tailwind classes with JS variables */}
      <span className={\`w-full bg-buttonYellow -skew-x-12 flex items-center justify-center \${buttonHeight}\`}>
        
        {/* Curly braces {label} inject our JavaScript variable right into the HTML! */}
        <span className="skew-x-12 font-montserrat font-bold italic text-buttonTextDark">
          {label}
        </span>

      </span>
    </button>
  );
}

// 4. HOW WE USE IT IN ANOTHER FILE (like BottomNav.jsx):
// <NavButton label="Updates" isActive={false} onClick={() => openUpdates()} />
// <NavButton label="Explore" isActive={true}  onClick={() => openMapZones()} />
// <NavButton label="Track Runner" isActive={false} onClick={() => openTracker()} />`}
              annotations={[
                '`{ label, isActive, onClick }` are Props—inputs passed from a parent component into this child component.',
                'Curly braces `{ }` inside JSX mean "Pause HTML mode and run JavaScript right here!"',
                'We wrote `NavButton` once, and at the bottom (lines 25–27) we reused it 3 times with different `label` props!',
              ]}
            />

            {/* Supportive Closing Note */}
            <div className="rounded-xl bg-slate-900 text-pureWhite p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-slate-800">
              <div>
                <h3 className="font-bold italic text-primaryYellow text-base sm:text-lg">
                  Ready to explore the live app?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Try opening <code className="text-primaryYellow font-mono">src/components/</code>{' '}
                  in your code editor alongside the live preview—change a color or button
                  label and watch it update immediately!
                </p>
              </div>
              <button
                onClick={onBackToApp}
                className="shrink-0 bg-buttonYellow hover:bg-primaryYellow -skew-x-12 px-6 py-2.5 text-buttonTextDark font-bold italic text-sm shadow-md transition-transform active:scale-95"
              >
                <span className="skew-x-12 inline-flex items-center gap-2">
                  <span>Launch Spectator PWA</span>
                </span>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

