'use client'

import './landing.css'

function CopyButton({ text }: { text: string }) {
  return (
    <button
      className="landing-install-copy"
      onClick={() => {
        navigator.clipboard.writeText(text)
      }}
      aria-label="Copy to clipboard"
    >
      copy
    </button>
  )
}

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* --- Nav --- */}
      <nav className="landing-nav">
        <div className="landing-nav-inner">
          <a href="/" className="landing-nav-logo">
            <span className="landing-nav-logo-icon">A</span>
            AI Kit
          </a>
          <div className="landing-nav-links">
            <a href="/docs" className="landing-nav-link">Docs</a>
            <a href="/docs/getting-started" className="landing-nav-link">Get Started</a>
            <a href="/docs/cli-reference" className="landing-nav-link">CLI</a>
            <a href="/docs/agents" className="landing-nav-link">Agents</a>
            <a href="https://github.com/mikulgohil/ai-kit" className="landing-nav-link" target="_blank" rel="noreferrer">GitHub</a>
            <a href="/docs/support" className="landing-nav-link">Support</a>
            <a href="https://www.npmjs.com/package/@mikulgohil/ai-kit" className="landing-nav-link landing-nav-link--cta" target="_blank" rel="noreferrer">npm</a>
          </div>
        </div>
      </nav>

      {/* --- Hero --- */}
      <section className="landing-hero landing-section">
        <div className="landing-hero-glow" />
        <div className="landing-badge">
          <span className="landing-badge-dot" />
          v2.0.0 — kit- namespace prefix for all 48 skills &amp; 16 agents
        </div>
        <h1>
          Make AI assistants<br />
          <span>actually useful.</span>
        </h1>
        <p className="landing-hero-subtitle">
          One command. AI Kit scans your project, detects the stack, and generates
          tailored rules, skills, and agents for Claude Code, Cursor, and 3 more tools.
          Zero config. Project-aware from the first conversation.
        </p>

        <div className="landing-install">
          <span className="landing-install-prompt">$</span>
          <code className="landing-install-cmd">npx @mikulgohil/ai-kit init</code>
          <CopyButton text="npx @mikulgohil/ai-kit init" />
        </div>

        <div className="landing-hero-actions">
          <a href="/docs/getting-started" className="landing-btn landing-btn--primary">
            Get Started
          </a>
          <a href="/docs" className="landing-btn landing-btn--secondary">
            Read the Docs
          </a>
          <a href="https://github.com/mikulgohil/ai-kit" className="landing-btn landing-btn--secondary" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>

      {/* --- Stats --- */}
      <section className="landing-section">
        <div className="landing-stats">
          <div className="landing-stat">
            <div className="landing-stat-value">49</div>
            <div className="landing-stat-label">Pre-built Skills</div>
          </div>
          <div className="landing-stat">
            <div className="landing-stat-value">16</div>
            <div className="landing-stat-label">Specialized Agents</div>
          </div>
          <div className="landing-stat">
            <div className="landing-stat-value">5+</div>
            <div className="landing-stat-label">AI Tools Supported</div>
          </div>
          <div className="landing-stat">
            <div className="landing-stat-value">30 sec</div>
            <div className="landing-stat-label">Setup Time</div>
          </div>
        </div>
      </section>

      {/* --- Features --- */}
      <section className="landing-features landing-section">
        <div className="landing-section-header">
          <span className="landing-section-tag">Features</span>
          <h2>Everything your AI assistant needs to know</h2>
          <p>
            AI Kit generates persistent, project-aware configuration so every
            conversation starts informed.
          </p>
        </div>

        <div className="landing-feature-grid">
          {/* Wide card — Auto Detection */}
          <div className="landing-feature-card landing-feature-card--wide">
            <div>
              <div className="landing-feature-icon landing-feature-icon--amber">
                &#x26A1;
              </div>
              <h3>Auto Stack Detection</h3>
              <p>
                Scans your package.json, config files, and directory structure.
                Detects framework, router, CMS, styling, TypeScript config,
                monorepo setup, and package manager — then generates rules
                specific to your exact stack.
              </p>
            </div>
            <div className="landing-feature-preview">
              <div className="landing-feature-preview-line">
                <span className="landing-feature-preview-check">&#x2713;</span>
                <span>Next.js 16 — App Router + Turbopack</span>
              </div>
              <div className="landing-feature-preview-line">
                <span className="landing-feature-preview-check">&#x2713;</span>
                <span>TypeScript — strict mode enabled</span>
              </div>
              <div className="landing-feature-preview-line">
                <span className="landing-feature-preview-check">&#x2713;</span>
                <span>Tailwind CSS v4 — @theme tokens</span>
              </div>
              <div className="landing-feature-preview-line">
                <span className="landing-feature-preview-check">&#x2713;</span>
                <span>Turborepo — 3 workspaces found</span>
              </div>
              <div className="landing-feature-preview-line">
                <span className="landing-feature-preview-check">&#x2713;</span>
                <span>Sitecore XM Cloud — Content SDK v2</span>
              </div>
              <div className="landing-feature-preview-line">
                <span className="landing-feature-preview-x">&#x2717;</span>
                <span>Figma — not detected</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="landing-feature-card">
            <div className="landing-feature-icon landing-feature-icon--green">
              &#x2318;
            </div>
            <h3>49 Pre-Built Skills</h3>
            <p>
              Structured AI workflows — <code>/review</code>, <code>/new-component</code>,
              <code>/security-check</code>, <code>/fetch-docs</code> and 45 more.
              No prompt writing needed.
            </p>
          </div>

          {/* Agents */}
          <div className="landing-feature-card">
            <div className="landing-feature-icon landing-feature-icon--purple">
              &#x2726;
            </div>
            <h3>16 Specialized Agents</h3>
            <p>
              Delegate to focused AI agents — planner, code-reviewer,
              security-reviewer, build-resolver, data-scientist, api-designer, and more.
            </p>
          </div>

          {/* Hooks */}
          <div className="landing-feature-card">
            <div className="landing-feature-icon landing-feature-icon--blue">
              &#x21BB;
            </div>
            <h3>Automated Quality Hooks</h3>
            <p>
              Auto-format, type-check, lint warnings, and git safety — running
              in real-time as the AI writes code. Three profiles: minimal,
              standard, strict.
            </p>
          </div>

          {/* Security */}
          <div className="landing-feature-card">
            <div className="landing-feature-icon landing-feature-icon--red">
              &#x1F6E1;
            </div>
            <h3>Built-in Security Audit</h3>
            <p>
              Scans for exposed secrets, OWASP risks, XSS vectors, and
              misconfigurations. A-F health grade with actionable
              recommendations.
            </p>
          </div>

          {/* Multi-tool */}
          <div className="landing-feature-card">
            <div className="landing-feature-icon landing-feature-icon--amber">
              &#x2B50;
            </div>
            <h3>5+ AI Tools from One Source</h3>
            <p>
              Generates configs for Claude Code, Cursor, Windsurf, Aider, and
              Cline from a single scan. Switch tools without losing context.
            </p>
          </div>

          {/* Learning */}
          <div className="landing-feature-card">
            <div className="landing-feature-icon landing-feature-icon--green">
              &#x1F4C8;
            </div>
            <h3>AI That Improves Over Time</h3>
            <p>
              Mistakes log auto-captures build failures. Decisions log tracks
              technical choices. The AI references both — getting smarter every
              session.
            </p>
          </div>

          {/* Component scanner */}
          <div className="landing-feature-card">
            <div className="landing-feature-icon landing-feature-icon--blue">
              &#x1F50D;
            </div>
            <h3>Component Scanner</h3>
            <p>
              Discovers all React components and generates <code>.ai.md</code> docs
              with health scores, props tables, and Sitecore field
              mappings.
            </p>
          </div>

          {/* Token tracking */}
          <div className="landing-feature-card">
            <div className="landing-feature-icon landing-feature-icon--purple">
              &#x1F4B0;
            </div>
            <h3>Token Tracking &amp; Cost Estimates</h3>
            <p>
              Daily/weekly/monthly usage summaries, per-project cost breakdown,
              budget alerts, model recommendations, and ROI estimates.
            </p>
          </div>
        </div>
      </section>

      {/* --- How It Works --- */}
      <section className="landing-how landing-section">
        <div className="landing-section-header">
          <span className="landing-section-tag">How It Works</span>
          <h2>30 seconds to project-aware AI</h2>
          <p>No manual configuration. No YAML files. No prompt engineering.</p>
        </div>

        <div className="landing-steps">
          <div className="landing-step">
            <div className="landing-step-num">1</div>
            <h3>Run init</h3>
            <p><code>npx @mikulgohil/ai-kit init</code> in any project directory</p>
          </div>
          <div className="landing-step">
            <div className="landing-step-num">2</div>
            <h3>Auto-detect</h3>
            <p>AI Kit scans your stack, configs, and project structure</p>
          </div>
          <div className="landing-step">
            <div className="landing-step-num">3</div>
            <h3>Generate</h3>
            <p>Tailored rules, skills, agents, hooks, and guides appear</p>
          </div>
          <div className="landing-step">
            <div className="landing-step-num">4</div>
            <h3>Commit &amp; go</h3>
            <p>Commit the files — every developer gets project-aware AI instantly</p>
          </div>
        </div>
      </section>

      {/* --- Tools Supported --- */}
      <section className="landing-tools landing-section">
        <div className="landing-section-header">
          <span className="landing-section-tag">Multi-Tool</span>
          <h2>One scan. Every AI tool.</h2>
          <p>Generate configs for all major AI coding assistants from a single source of truth.</p>
        </div>

        <div className="landing-tools-grid">
          <div className="landing-tool-card">
            <span className="landing-tool-icon">&#x1F4AC;</span>
            <div className="landing-tool-name">Claude Code</div>
            <div className="landing-tool-output">CLAUDE.md + skills + agents</div>
          </div>
          <div className="landing-tool-card">
            <span className="landing-tool-icon">&#x25CE;</span>
            <div className="landing-tool-name">Cursor</div>
            <div className="landing-tool-output">.cursorrules + .mdc files</div>
          </div>
          <div className="landing-tool-card">
            <span className="landing-tool-icon">&#x1F30A;</span>
            <div className="landing-tool-name">Windsurf</div>
            <div className="landing-tool-output">.windsurfrules</div>
          </div>
          <div className="landing-tool-card">
            <span className="landing-tool-icon">&#x1F916;</span>
            <div className="landing-tool-name">Aider</div>
            <div className="landing-tool-output">.aider.conf.yml</div>
          </div>
          <div className="landing-tool-card">
            <span className="landing-tool-icon">&#x2699;</span>
            <div className="landing-tool-name">Cline</div>
            <div className="landing-tool-output">.clinerules</div>
          </div>
        </div>
      </section>

      {/* --- Agents --- */}
      <section className="landing-agents landing-section">
        <div className="landing-section-header">
          <span className="landing-section-tag">Agents</span>
          <h2>16 specialists. Always on call.</h2>
          <p>Delegate complex tasks to focused AI agents with domain expertise.</p>
        </div>

        <div className="landing-agents-grid">
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x1F4CB;</div>
            <div>
              <h4>@planner</h4>
              <p>Break features into implementation plans with dependencies and risk assessment</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x1F50E;</div>
            <div>
              <h4>@code-reviewer</h4>
              <p>Deep quality review — patterns, performance, types, and conventions</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x1F6E1;</div>
            <div>
              <h4>@security-reviewer</h4>
              <p>OWASP Top 10, XSS, CSRF, secrets detection, and auth flow analysis</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x1F527;</div>
            <div>
              <h4>@build-resolver</h4>
              <p>Diagnose and fix build errors, type conflicts, and dependency issues</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x1F4DD;</div>
            <div>
              <h4>@doc-updater</h4>
              <p>Keep documentation in sync with code changes automatically</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x2702;</div>
            <div>
              <h4>@refactor-cleaner</h4>
              <p>Find and remove dead code, unused imports, and unnecessary complexity</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x1F9EA;</div>
            <div>
              <h4>@tdd-guide</h4>
              <p>Test-driven development workflow — red, green, refactor with guidance</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x1F6A8;</div>
            <div>
              <h4>@ci-debugger</h4>
              <p>Analyze CI/CD failures, parse logs, and suggest targeted fixes</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x1F3AD;</div>
            <div>
              <h4>@e2e-runner</h4>
              <p>Playwright tests with Page Object Model and smart selectors</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x1F3DB;</div>
            <div>
              <h4>@sitecore-specialist</h4>
              <p>XM Cloud patterns, Content SDK v2, Experience Edge, and field helpers</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x1F3D7;</div>
            <div>
              <h4>@architect</h4>
              <p>SSR/SSG/ISR strategy, component hierarchy, data flow, and rendering patterns</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x1F4CA;</div>
            <div>
              <h4>@data-scientist</h4>
              <p>ML pipelines, model evaluation, data analysis, and experiment tracking</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x26A1;</div>
            <div>
              <h4>@performance-profiler</h4>
              <p>Core Web Vitals, bundle analysis, runtime profiling, and rendering optimization</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x1F504;</div>
            <div>
              <h4>@migration-specialist</h4>
              <p>Framework upgrades, breaking change detection, codemods, and incremental adoption</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x1F50D;</div>
            <div>
              <h4>@dependency-auditor</h4>
              <p>Vulnerability scanning, outdated packages, license compliance, and bundle impact</p>
            </div>
          </div>
          <div className="landing-agent">
            <div className="landing-agent-avatar">&#x1F310;</div>
            <div>
              <h4>@api-designer</h4>
              <p>REST/GraphQL API design, schema validation, versioning, and error handling</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Comparison --- */}
      <section className="landing-comparison landing-section">
        <div className="landing-section-header">
          <span className="landing-section-tag">Before &amp; After</span>
          <h2>The impact is measurable</h2>
          <p>Real numbers from teams using AI Kit in production.</p>
        </div>

        <table className="landing-comparison-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>With AI Kit</th>
              <th>Without AI Kit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Context setup per conversation</td>
              <td>Auto-loaded in 30 sec</td>
              <td>5-10 min re-explaining</td>
            </tr>
            <tr>
              <td>Code review cycles per PR</td>
              <td>1-2 rounds</td>
              <td>2-4 rounds</td>
            </tr>
            <tr>
              <td>Component creation time</td>
              <td>10-15 min</td>
              <td>30-60 min</td>
            </tr>
            <tr>
              <td>New developer onboarding</td>
              <td>2-3 days</td>
              <td>1-2 weeks</td>
            </tr>
            <tr>
              <td>Security issues caught</td>
              <td>At development time</td>
              <td>At PR review or production</td>
            </tr>
            <tr>
              <td>Knowledge retention</td>
              <td>Logged in decisions &amp; mistakes</td>
              <td>Lost when developers leave</td>
            </tr>
            <tr>
              <td>AI tool switching cost</td>
              <td>Zero — same rules, 5+ tools</td>
              <td>Start over from scratch</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* --- CLI Commands --- */}
      <section className="landing-section" style={{ marginTop: 'var(--section-gap)' }}>
        <div className="landing-section-header">
          <span className="landing-section-tag">CLI</span>
          <h2>14 commands. Full control.</h2>
          <p>From initial setup to ongoing maintenance — everything from the terminal.</p>
        </div>

        <div className="landing-feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
          {[
            { cmd: 'init', desc: 'Scan project and generate all configs', icon: '\u25B6' },
            { cmd: 'update', desc: 'Re-scan and refresh (preserves custom edits)', icon: '\u21BB' },
            { cmd: 'health', desc: 'One-glance A-F project health dashboard', icon: '\u2764' },
            { cmd: 'audit', desc: 'Security and configuration health check', icon: '\uD83D\uDEE1' },
            { cmd: 'doctor', desc: 'Diagnose setup issues and misconfigurations', icon: '\uD83E\uDE7A' },
            { cmd: 'stats', desc: 'Project complexity metrics and analysis', icon: '\uD83D\uDCCA' },
            { cmd: 'tokens', desc: 'Token usage summary and cost estimates', icon: '\uD83D\uDCB0' },
            { cmd: 'diff', desc: 'Preview what would change on update', icon: '\uD83D\uDD0D' },
            { cmd: 'export', desc: 'Export rules to Windsurf, Aider, Cline', icon: '\uD83D\uDCE6' },
            { cmd: 'patterns', desc: 'Generate pattern library from codebase', icon: '\uD83C\uDFA8' },
            { cmd: 'dead-code', desc: 'Find unused components and dead code', icon: '\u2702' },
            { cmd: 'drift', desc: 'Detect code vs documentation drift', icon: '\uD83D\uDCCF' },
            { cmd: 'component-registry', desc: 'Generate component catalog for AI discovery', icon: '\uD83D\uDCDA' },
            { cmd: 'reset', desc: 'Remove all AI Kit generated files cleanly', icon: '\uD83D\uDDD1' },
          ].map(({ cmd, desc, icon }) => (
            <div className="landing-feature-card" key={cmd} style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.1rem', width: '32px', textAlign: 'center', flexShrink: 0 }}>
                  {icon}
                </span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '2px' }}>
                    ai-kit {cmd}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.8rem' }}>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="landing-faq landing-section">
        <div className="landing-section-header">
          <span className="landing-section-tag">FAQ</span>
          <h2>Common questions</h2>
          <p>Quick answers. <a href="/docs/faq" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Full FAQ in the docs.</a></p>
        </div>

        <div className="landing-faq-list">
          {[
            {
              q: 'Is AI Kit free?',
              a: 'Yes. AI Kit is 100% free and open source under the MIT license. It works with any AI coding tool — free or paid.',
            },
            {
              q: 'Does AI Kit work with the Claude $20 plan?',
              a: 'Yes — that\'s actually the sweet spot. The $20 plan gives you enough tokens to be productive but not enough to waste. AI Kit eliminates the #1 token sink: re-explaining your project every session. Every token goes to actual coding, not context setup.',
            },
            {
              q: 'Does AI Kit work with Cursor?',
              a: 'Yes. AI Kit generates configs for both Claude Code and Cursor (plus Windsurf, Aider, and Cline). Skills work in both tools via auto-discovery — the AI reads skill descriptions and applies the right one automatically.',
            },
            {
              q: 'Does it modify my source code?',
              a: 'No. AI Kit only creates configuration files (CLAUDE.md, .cursorrules, skills, agents, etc.). It never touches your source code, dependencies, or existing configs.',
            },
            {
              q: 'How long does setup take?',
              a: 'About 30 seconds. Run npx @mikulgohil/ai-kit init, answer a few prompts (tool choice, strictness level), and everything is generated. Zero manual configuration.',
            },
            {
              q: 'Will it slow down my AI assistant?',
              a: 'No. The generated files are static markdown read once at session start. No runtime cost, no background processes, no API calls. It\'s just context — the AI loads it and forgets the file exists.',
            },
            {
              q: 'Can I customize the generated rules?',
              a: 'Yes. Add your own rules outside the AI-KIT markers — they\'re preserved when you run ai-kit update. You can also add custom skills and agents that AI Kit won\'t overwrite.',
            },
            {
              q: 'What if my framework isn\'t supported?',
              a: 'AI Kit still generates base rules (coding standards, naming, testing, security, docs) that apply to any project. Framework-specific fragments are additive — they\'re only included when detected.',
            },
          ].map(({ q, a }, i) => (
            <div
              className="landing-faq-item"
              key={i}
              onClick={(e) => {
                const el = e.currentTarget
                el.dataset.open = el.dataset.open === 'true' ? 'false' : 'true'
              }}
            >
              <button className="landing-faq-q">
                {q}
                <span className="landing-faq-q-icon">+</span>
              </button>
              <div className="landing-faq-a">{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Consulting --- */}
      <section className="landing-consult landing-section">
        <div className="landing-consult-box">
          <div className="landing-consult-content">
            <span className="landing-section-tag">Need Expert Help?</span>
            <h2>Let&apos;s set up AI Kit for your team</h2>
            <p>
              Whether you&apos;re rolling out AI-assisted development across your organization
              or need a tailored setup for a complex project — I can help. From initial
              configuration to team training, get hands-on guidance from the creator of AI Kit.
            </p>
            <div className="landing-consult-services">
              <div className="landing-consult-service">
                <span className="landing-consult-service-icon">&#x2699;</span>
                <div>
                  <strong>Project Setup</strong>
                  <p>Custom AI Kit configuration tailored to your stack, conventions, and workflow</p>
                </div>
              </div>
              <div className="landing-consult-service">
                <span className="landing-consult-service-icon">&#x1F465;</span>
                <div>
                  <strong>Team Rollout</strong>
                  <p>Deploy AI Kit across your team with shared presets, skills, and agents</p>
                </div>
              </div>
              <div className="landing-consult-service">
                <span className="landing-consult-service-icon">&#x1F393;</span>
                <div>
                  <strong>Training &amp; Workshops</strong>
                  <p>Help your developers get the most out of AI-assisted development</p>
                </div>
              </div>
              <div className="landing-consult-service">
                <span className="landing-consult-service-icon">&#x1F6E0;</span>
                <div>
                  <strong>Custom Extensions</strong>
                  <p>Build custom skills, agents, and hooks specific to your organization</p>
                </div>
              </div>
            </div>
            <div className="landing-consult-actions">
              <a href="https://www.linkedin.com/in/mikulgohil" className="landing-btn landing-btn--primary" target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </a>
              <a href="https://x.com/mikulgohil" className="landing-btn landing-btn--secondary" target="_blank" rel="noreferrer">
                DM on Twitter / X
              </a>
              <a href="https://www.mikul.me" className="landing-btn landing-btn--secondary" target="_blank" rel="noreferrer">
                Visit mikul.me
              </a>
            </div>
          </div>
          <div className="landing-consult-author">
            <div className="landing-consult-author-name">Mikul Gohil</div>
            <div className="landing-consult-author-role">Creator of AI Kit</div>
            <div className="landing-consult-author-bio">
              Senior developer and tech lead specializing in Sitecore, Next.js, and AI-assisted development workflows. Building tools that make development teams more productive.
            </div>
            <div className="landing-consult-author-links">
              <a href="https://www.mikul.me" target="_blank" rel="noreferrer">mikul.me</a>
              <a href="https://github.com/mikulgohil" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/mikulgohil" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://x.com/mikulgohil" target="_blank" rel="noreferrer">Twitter / X</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="landing-cta landing-section">
        <div className="landing-cta-box">
          <h2>Ready to make AI actually useful?</h2>
          <p>
            One command. 30 seconds. Your AI assistant goes from generic to project-aware.
          </p>
          <div className="landing-install">
            <span className="landing-install-prompt">$</span>
            <code className="landing-install-cmd">npx @mikulgohil/ai-kit init</code>
            <CopyButton text="npx @mikulgohil/ai-kit init" />
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="landing-footer">
        MIT {new Date().getFullYear()} &copy; <a href="https://www.mikul.me" target="_blank" rel="noreferrer">Mikul Gohil</a>
        &nbsp;&middot;&nbsp;
        <a href="https://github.com/mikulgohil/ai-kit" target="_blank" rel="noreferrer">GitHub</a>
        &nbsp;&middot;&nbsp;
        <a href="https://www.npmjs.com/package/@mikulgohil/ai-kit" target="_blank" rel="noreferrer">npm</a>
        &nbsp;&middot;&nbsp;
        <a href="/docs">Documentation</a>
        &nbsp;&middot;&nbsp;
        <a href="https://www.linkedin.com/in/mikulgohil" target="_blank" rel="noreferrer">LinkedIn</a>
        &nbsp;&middot;&nbsp;
        <a href="https://x.com/mikulgohil" target="_blank" rel="noreferrer">Twitter / X</a>
      </footer>
    </div>
  )
}
