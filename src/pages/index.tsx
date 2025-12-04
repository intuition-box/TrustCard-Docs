import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

type Tile = {
  title: string;
  desc: string;
  to: string;
  tag?: string;
  emoji?: string;
  span?: "wide" | "tall" | "normal";
};

const tiles: Tile[] = [
  {
    title: "Overview",
    desc: "How collectibles, invitations, and trust links form a living reputation graph.",
    to: "/docs/tutorial/overview",
    tag: "Start",
    emoji: "🌐",
    span: "wide",
  },
  {
    title: "Waves",
    desc: "Limited drops with evolving frames and rarity distributions across Waves.",
    to: "/docs/tutorial/waves",
    tag: "Drops",
    emoji: "🌊",
  },
  {
    title: "Invitations",
    desc: "Cardholders invite others. Curated onboarding grows the Trust Graph.",
    to: "/docs/tutorial/invitations",
    tag: "Onboarding",
    emoji: "✉️",
  },
  {
    title: "Physical Edition",
    desc: "Premium prints with NFC/QR to carry your identity IRL.",
    to: "/docs/tutorial/physical-card",
    tag: "IRL",
    emoji: "📇",
  },
  {
    title: "Personal Domain",
    desc: "Claim yourname.box — your shareable identity hub.",
    to: "/docs/tutorial/domain",
    tag: "Identity",
    emoji: "🔗",
  },
];

const WAVES = ["Wave 1", "Wave 2", "Wave 3", "Wave 0"] as const;
const ACTIVE_WAVE: (typeof WAVES)[number] = "Wave 1";

function BentoCard({ t }: { t: Tile }) {
  const span =
    t.span === "wide" ? styles.spanWide : t.span === "tall" ? styles.spanTall : undefined;
  return (
    <Link to={t.to} className={clsx(styles.docCard, span)}>
      <div className={styles.cardGlow} />
      <div className={styles.cardHeader}>
        <span className={styles.cardEmoji}>{t.emoji ?? "✨"}</span>
        {t.tag && <span className={styles.cardTag}>{t.tag}</span>}
      </div>
      <div>
        <Heading as="h3" className={styles.cardTitle}>{t.title}</Heading>
        <p className={styles.cardDesc}>{t.desc}</p>
      </div>
      <div aria-hidden className={styles.cardArrow}>↗</div>
    </Link>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>

        <p className={clsx("hero__subtitle", styles.heroExplainer)}>
          Beyond being just an NFT, it's a mechanism for <strong>access</strong>, <strong>experience</strong>, and <strong>reputation</strong>.
        </p>

        <div className={styles.buttons}>
          <Link className={clsx("button button--lg", styles.btnPrimary)} to="/docs/tutorial/overview">
            How it works
          </Link>
          <Link className={clsx("button button--lg", styles.btnSecondary)} to="https://trustcard.box/">
            Vote for the firsts holders
          </Link>
        </div>
      </div>
    </header>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: 1,
      icon: "✉️",
      title: "Invitations open access",
      desc: "A limited set of invitations is issued and expands over time.",
    },
    {
      num: 2,
      icon: "🗝️",
      title: "Invitation → mint a Chest",
      desc: "You receive a chest that holds your future card’s rarity.",
    },
    {
      num: 3,
      icon: "🪪",
      title: "Reveal the NFT card (+ Physical)",
      desc: "Burn the chest to reveal the 3D NFT, with the possibility of also receiving a premium physical card.",
    },
    {
      num: 4,
      icon: "⭐",
      title: "Build trust → more invitations",
      desc: "Your Trust Score unlocks additional invite capacity.",
    },
  ];
  return (
    <div className="container">
      <Heading as="h2" className={styles.blockTitle}>How it works</Heading>
      <div className={styles.flowGrid} aria-label="Trust Card flow">
        {steps.map((s) => (
          <div key={s.num} className={styles.flowCard}>
            <div className={styles.flowTop}>
              <span className={styles.flowNum}>{s.num}</span>
              <span className={styles.flowIcon} aria-hidden>{s.icon}</span>
            </div>
            <div className={styles.flowTitle}>{s.title}</div>
            <div className={styles.flowDesc}>{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccessGrowthBlock() {
  return (
    <div className="container">
      <div className={styles.tsBlock}>
        <div className={styles.tsBadge}>Access & Growth</div>
        <Heading as="h3" className={styles.tsTitle}>
          <span className={styles.tsHighlight}>Invitation</span> gives mint access. <span className={styles.tsHighlight}>Trust Score</span> unlocks more invitations.
        </Heading>
        <p className={styles.tsLead}>
          Invitations grant access to minting. As trust grows across the network, holders unlock additional invitations to onboard others.
        </p>
        <div className={styles.ctaRow}>
          <Link className={clsx("button", styles.btnPrimary)} to="/docs/tutorial/invitations">
            See invitations
          </Link>
          <Link className={clsx("button", styles.btnSecondary)} to="/docs/tutorial/relic-holder">
            Relic Holder ?
          </Link>
        </div>
        <ul className={styles.checkList}>
          <li>Ownership → through minting, chests, and relics leading to cards.</li>
          <li>Reputation → mapped in the trust graph and explored via the reputation checker.</li>
          <li>Identity → enhanced by NFT formats, physical editions, and personal domains.</li>
        </ul>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Trust Card" description="Trust. Collect. Connect.">
      <HomepageHeader />
      <main>
        <section className={styles.mainSection}>
          <div className="container">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col col--6">
                <Heading as="h1" className={styles.heroTitle}>
                  Trust the network.
                </Heading>
                <p className={styles.heroLead}>
                  Not just a collectible — an invitation, a proof of trust, and a key to reputation.
                  Each wave introduces scarcity, each mint strengthens belonging, and each invitation consolidates the Trust Graph, paving the way for a community that grows progressively and with trust
                </p>
                <div className={styles.ctaRow}>
                  <Link className={clsx("button", styles.btnPrimary)} to="/docs/tutorial/overview">
                    Start reading
                  </Link>
                  <Link className={clsx("button", styles.btnSecondary)} to="/docs/tutorial/waves">
                    See Waves
                  </Link>
                </div>

                {/* Waves */}
                <div className={styles.waveWrap}>
                  <div className={styles.waveTitle}>Waves</div>
                  <ul className={styles.waveList}>
                    {WAVES.map((w) => {
                      const active = w === ACTIVE_WAVE;
                      return (
                        <li key={w} className={clsx(styles.waveItem, active && styles.waveItemActive)}>
                          <span className={clsx(styles.waveDot, active && styles.waveDotActive)} />
                          <span>{w}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className={styles.waveSubNote}>
                    Access spreads via invitations. Trust Score increases invitation capacity.
                  </div>
                  <div className={styles.waveLinks}>
                    <Link to="/docs/tutorial/trust-graph" className={styles.linkInline}>Trust Graph ↗</Link>
                    <span className={styles.bullet} />
                    <Link to="/docs/tutorial/reputation-checker" className={styles.linkInline}>Reputation Checker ↗</Link>
                  </div>
                </div>
              </div>

              <div className="col col--6">
                <div className={styles.viewer}>
                  <div className={styles.viewerFrame}>
                    <span className={styles.viewerBadge}>Card preview</span>
                    <img
                      src="/img/card-placeholder.png"
                      alt="Static preview of the Trust Card"
                      className={styles.viewerImage}
                    />
                  </div>
                  <div className={styles.viewerCaption}>
                    <Link className={styles.viewerSimBtn} to="https://trust-card-generator.intuition.box">
                      See the simulator
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AccessGrowthBlock />
          <HowItWorks />

          {/* Bento */}
          <div className="container">
            <div className={styles.bentoGrid}>
              {tiles.map((t, i) => (
                <BentoCard key={i} t={t} />
              ))}
            </div>
          </div>

          {/* Diagram */}
          <div className="container">
            <Heading as="h2" className={styles.subTitle}>👁️</Heading>
            <div className={styles.embedBox}>
              <div className={styles.embedPlaceholder}>
                <iframe style={{border:"none", borderRadius:"12px"}} width="100%" height="600" src="https://whimsical.com/embed/WPU73HZ7RAHdh3vjNfkPrU"></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
