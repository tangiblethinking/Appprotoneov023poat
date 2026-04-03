/**
 * Christopher Kenreigh Resume HTML
 * This file contains the HTML resume that opens in a new tab
 */

export const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Christopher Kenreigh – Director of Digital Product</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue: #2563c7;
      --dark: #111111;
      --mid: #444444;
      --light: #666666;
      --rule: #dddddd;
      --bg: #ffffff;
      --sidebar-bg: #f7f8fa;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      font-size: 10.5pt;
      color: var(--dark);
      background: #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 32px 16px;
      min-height: 100vh;
    }

    .page {
      background: var(--bg);
      width: 850px;
      max-width: 100%;
      box-shadow: 0 4px 40px rgba(0,0,0,0.18);
      display: grid;
      grid-template-rows: auto 1fr;
    }

    /* ── HEADER ── */
    header {
      padding: 28px 36px 18px;
      border-bottom: 2px solid var(--rule);
    }
    header h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(20pt, 5vw, 30pt);
      font-weight: 400;
      color: var(--dark);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }
    header .title-line {
      font-size: clamp(9pt, 2.5vw, 11pt);
      font-weight: 700;
      color: var(--blue);
      margin: 3px 0 8px;
      letter-spacing: 0.2px;
    }
    header .contact {
      font-size: 9.5pt;
      color: var(--mid);
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    header .contact a {
      color: var(--blue);
      text-decoration: none;
      font-weight: 500;
    }
    header .contact span { color: var(--rule); }

    /* ── BODY LAYOUT ── */
    .body {
      display: grid;
      grid-template-columns: 1fr 240px;
    }

    /* ── LEFT (Experience) ── */
    .main {
      padding: 24px 36px 32px;
      border-right: 1px solid var(--rule);
    }

    .section-title {
      font-family: 'DM Serif Display', serif;
      font-size: 14pt;
      font-weight: 400;
      color: var(--dark);
      border-bottom: 1.5px solid var(--dark);
      padding-bottom: 4px;
      margin-bottom: 14px;
    }

    .job { margin-bottom: 20px; }

    .job-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .job-company {
      font-size: 10pt;
      font-weight: 500;
      color: var(--blue);
      text-decoration: none;
    }
    .job-company:hover { text-decoration: underline; }

    .job-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin: 2px 0 6px;
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .job-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 16px;
      vertical-align: middle;
    }

    .job ul {
      list-style: disc;
      padding-left: 16px;
    }
    .job ul li {
      font-size: 9.5pt;
      color: var(--mid);
      line-height: 1.5;
      margin-bottom: 3px;
    }

    /* ── RIGHT (Sidebar) ── */
    .sidebar {
      background: var(--sidebar-bg);
      padding: 24px 22px 32px;
    }

    .sidebar-section { margin-bottom: 22px; }

    .sidebar .section-title {
      font-size: 12pt;
      border-bottom-color: var(--mid);
    }

    .summary-quote {
      font-size: 9.5pt;
      font-style: italic;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .summary-bullets {
      list-style: disc;
      padding-left: 14px;
    }
    .summary-bullets li {
      font-size: 8.8pt;
      color: var(--mid);
      line-height: 1.55;
      margin-bottom: 3px;
    }

    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 6px;
    }
    .tag {
      font-size: 8pt;
      font-weight: 500;
      color: var(--blue);
      background: rgba(37,99,199,0.08);
      border-radius: 3px;
      padding: 2px 7px;
    }

    .dot-list {
      list-style: disc;
      padding-left: 14px;
    }
    .dot-list li {
      font-size: 9pt;
      color: var(--mid);
      line-height: 1.6;
    }

    /* Education */
    .edu-degree {
      font-size: 9.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .edu-school {
      font-size: 9pt;
      color: var(--blue);
      font-weight: 500;
    }
    .edu-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
    }
    .edu-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 15px;
      vertical-align: middle;
    }

    /* ── MOBILE RESPONSIVE ── */
    @media (max-width: 680px) {
      body {
        padding: 0;
        background: var(--bg);
        align-items: stretch;
      }
      .page {
        width: 100%;
        box-shadow: none;
        border-radius: 0;
      }
      header { padding: 20px 18px 14px; }
      header h1 { font-size: 22pt; }
      header .title-line { font-size: 9pt; }
      header .contact { font-size: 9pt; gap: 6px; row-gap: 4px; }
      .body {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
      }
      .main {
        padding: 18px 18px 24px;
        border-right: none;
        border-bottom: 1px solid var(--rule);
        order: 2;
      }
      .sidebar {
        padding: 18px 18px 20px;
        order: 1;
        border-bottom: 2px solid var(--rule);
      }
      .section-title { font-size: 13pt; }
      .sidebar .section-title { font-size: 11pt; }
      .job ul li { font-size: 9pt; }
      .job-meta { font-size: 8pt; gap: 4px; }
      .summary-quote { font-size: 9pt; }
      .tag { font-size: 7.5pt; }
    }

    @media (min-width: 681px) and (max-width: 900px) {
      body { padding: 16px 8px; }
      .page { width: 100%; }
      header { padding: 22px 24px 14px; }
      .main { padding: 20px 24px 28px; }
      .sidebar { padding: 20px 16px 28px; }
      .body { grid-template-columns: 1fr 200px; }
    }

    @media print {
      body { background: white; padding: 0; }
      .page { box-shadow: none; width: 100%; }
    }
  </style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <header>
    <h1>Christopher Kenreigh</h1>
    <div class="title-line">Product Design Director | Fintech &amp; Spend Management UX | Design Systems Governance | AI-Powered Design Leadership</div>
    <div class="contact">
      <span style="color: #212121; font-weight:700">480-206-2145</span>
      <span>|</span>
      <a href="mailto:c.kenreigh@gmail.com" style="font-weight:800;">c.kenreigh@gmail.com</a>
      <span>|</span>
      <a href="https://www.linkedin.com/in/kenreigh/" target="_blank">LinkedIn</a>
      <span>|</span>
      <a href="https://www.uxapex.com/portfolioa21" target="_blank">Portfolio</a>
    </div>
  </header>

  <!-- BODY -->
  <div class="body">

    <!-- MAIN EXPERIENCE -->
    <main class="main">
      <h2 class="section-title">Experience</h2>

      <div class="job">
        <div class="job-title">Director of Digital Product Experience (Principal)</div>
        <a class="job-company" href="https://www.plexusworldwide.com" target="_blank">Plexus Worldwide</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2024 – Present
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Own digital product roadmap end-to-end — intake, prioritization, sequencing, and delivery — for a DTC subscription business across three international regions; manage design and project management direct reports</li>
          <li>Run structured intake across retention and cross-functional teams; define the problem before accepting solutions; write functional specs with business logic, edge cases, and acceptance criteria engineering executes against</li>
          <li>Own the experimentation framework: define what gets A/B tested, in what sequence, and how success is measured — producing 43% reduction in checkout abandonment and measurable subscription retention lift</li>
          <li>Partner with engineering as a peer on sprint alignment, feasibility, and execution; enable backend work to begin before design is finalized; own post-launch performance reviews tied to revenue outcomes</li>
          <li>Integrate LLM-based AI across discovery, documentation, spec writing, and analysis; set the team execution standard and increased delivery velocity 35%</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Digital Product Manager</div>
        <a class="job-company" href="https://www.freeportmcmoran.com" target="_blank">Freeport-McMoRan</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          08/2022 – 10/2023
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Led end-to-end digital product delivery — owned roadmap, wrote functional specs, and partnered with engineering to improve operational efficiency 30% through responsive web and mobile platforms</li>
          <li>Facilitated 10+ structured intake and discovery workshops; translated user needs into prioritized backlogs with acceptance criteria for cross-functional engineering teams</li>
          <li>Presented product roadmaps and Agile delivery strategies to C-suite; defined success metrics upfront and secured approval for 5 major releases with post-launch performance reviews</li>
          <li>Built scalable MUI React design system adopted across web, iOS, and Android; established documentation and standards enabling engineering to build without friction</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Digital Product Manager</div>
        <a class="job-company" href="https://www.opentechalliance.com" target="_blank">OpenTech Alliance</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2021 – 08/2022
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Owned customer portal roadmap and conversion strategy for a DTC-adjacent SaaS platform; secured budget for 3 new product initiatives through C-suite roadmap presentations</li>
          <li>Led mobile-first customer portal redesign with structured intake, A/B testing, and post-launch measurement — boosting task completion rates 75%</li>
          <li>Defined compliant data capture acceptance criteria, reducing legal risk exposure 100%; drove subscription retention improvements 25% through data-informed product optimizations</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Digital Product Lead</div>
        <a class="job-company" href="https://www.siemens.com" target="_blank">Siemens</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          07/2020 – 05/2021
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Remote
        </div>
        <ul>
          <li>Led cross-functional digital product delivery across 4 simultaneous initiatives; owned roadmap sequencing, sprint planning, and stakeholder alignment</li>
          <li>Produced functional specs and product documentation that reduced engineering rework 50% and enabled teams to build without friction</li>
          <li>Managed intake-to-delivery lifecycle for 2 high-impact product initiatives; defined success metrics upfront and owned post-launch reviews</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior Digital Product Designer</div>
        <a class="job-company" href="https://www.glynlyon.com" target="_blank">Glynlyon Inc</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          02/2014 – 04/2019
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Owned digital product delivery for multi-platform consumer education software; drove data-informed roadmap decisions through user research and usability testing — increased task success rates 65%</li>
          <li>Defined product requirements, acceptance criteria, and WCAG-compliant specifications for cross-platform web, iOS, and Android delivery</li>
          <li>Led cross-functional teams through structured discovery to define user needs, align on product strategy, and sequence delivery priorities</li>
        </ul>
      </div>
    </main>

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <div class="sidebar-section">
        <h2 class="section-title">Summary</h2>
        <p class="summary-quote" style="color: #212121; font-weight:700">"Digital product leader who owns the roadmap end-to-end — intake through post-launch performance review — with a metrics-first mindset, structured experimentation, and engineering partnership that drives DTC subscription revenue and retention."</p>
        <ul class="summary-bullets">
          <li>12+ years in DTC digital product management, including 4+ years in people leadership</li>
          <li>Functional spec writing: business logic, edge cases, acceptance criteria</li>
          <li>Experimentation framework ownership: hypothesis, test design, statistical measurement</li>
          <li>Mobile-first subscription and customer portal delivery</li>
          <li>AI across discovery, documentation, and spec writing</li>
          <li>Omni-channel: DTC, subscription, retail, and marketplace surfaces</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Key Achievements</h2>
        <ul class="dot-list">
          <li>43% checkout abandonment reduction via experimentation framework</li>
          <li>–17% to +2% margin reversal through AI-driven roadmap initiative</li>
          <li>35% velocity increase via AI across spec writing &amp; delivery</li>
          <li>10+ C-suite roadmap approvals with upfront success metrics</li>
          <li>3× deliverable output through people leadership &amp; team development</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Skills</h2>
        <div class="tag-list">
          <span class="tag">DTC Roadmap Ownership</span>
          <span class="tag">Subscription &amp; Retention</span>
          <span class="tag">Functional Spec Writing</span>
          <span class="tag">Experimentation Framework</span>
          <span class="tag">Mobile-First Product</span>
          <span class="tag">Engineering Partnership</span>
          <span class="tag">Sprint Alignment</span>
          <span class="tag">People Leadership</span>
          <span class="tag">Intake &amp; Prioritization</span>
          <span class="tag">Shopify</span>
          <span class="tag">Agile / Scrum</span>
          <span class="tag">Figma</span>
          <span class="tag">A/B Testing</span>
          <span class="tag">Data-Informed Decisions</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">AI</h2>
        <div class="tag-list">
          <span class="tag">LLM-Based Workflows</span>
          <span class="tag">AI Across Spec Writing</span>
          <span class="tag">Agentic AI</span>
          <span class="tag">RAG Systems</span>
          <span class="tag">Multimodal AI</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Education</h2>
        <div class="edu-degree">Bachelor of Art</div>
        <div class="edu-school">The Art Institute of Phoenix</div>
        <div class="edu-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          09/2002 – 09/2005
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ
        </div>
      </div>
		    </aside>
  </div><!-- /body -->
</div><!-- /page -->
</body>
</html>`;

/**
 * Opens the resume HTML in a new browser tab using Blob URL
 */
export function openResumeInNewTab(): void {
  // Create a Blob from the HTML string
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  
  // Generate a blob URL
  const blobURL = URL.createObjectURL(blob);
  
  // Open in new tab
  const newWindow = window.open(blobURL, '_blank');
  
  // Clean up the blob URL after a delay to ensure the page loads
  if (newWindow) {
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
    }, 1000);
  }
}
