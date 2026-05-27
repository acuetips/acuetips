import type { Metadata } from "next";
import Link from "next/link";
import {
  IconBond,
  IconCraft,
  IconDurability,
  IconLeather,
} from "@/components/about/AboutIcons";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "about — acuetips.com",
  description: "A CUE TIPS — 專注撞球皮頭研發與製造。",
};

const features = [
  {
    icon: IconLeather,
    title: "嚴選頂級皮革",
    body: "皮革是手感的靈魂。A CUE TIPS 堅持選用纖維最堅韌的頂級皮革，並經過嚴格的測試與改良。我們拒絕隨機的手感，透過標準化的職人工法，確保你換上的每一顆皮頭都具備極佳的抓粉力與黏球性，讓你在極限桿法的運用上更加隨心所欲。",
  },
  {
    icon: IconDurability,
    title: "長效耐用與抗變形",
    body: "針對球友最困擾的「香菇頭」問題進行優化。透過高壓工法與纖維強化處理，我們的皮頭即使在長時間的高強度打擊下，依然能保持形狀穩定、不易死硬。這份持久的彈性，讓你能長時間保有熟悉的擊球節奏，無需頻繁更換。",
  },
  {
    icon: IconBond,
    title: "真空極薄黏合工法",
    body: "我們採用特殊的真空極薄黏合技術，讓層與層之間的膠層幾乎隱形。這種極致的薄度，不僅大幅提升了擊球時的能量傳導，更確保了皮頭結構的緊密與穩定，給予你最直接、不發散的擊球回饋。",
  },
];

export default function AboutPage() {
  return (
    <main className="page-about">
      <article className="about-content">
        <section className="about-story">
          <div className="about-story__media">
            <img
              className="about-story__image"
              src="/about-hero.webp"
              alt="A CUE TIPS"
              width={640}
              height={880}
            />
          </div>

          <div className="about-story__copy">
            <header className="about-story__head">
              <h1 className="about-title">關於我們</h1>
              <p className="about-est">EST.2021</p>
            </header>

            <div className="about-intro">
              <p>
                品牌與「少年球王」陳英傑合作，針對職業賽場的極致需求進行研發。共同投入了三年多的時間，進行無數次的反覆測試與修正。
              </p>
              <p>
                我們承諾提供最穩定、最紮實的打感，讓你每一桿都能得到最真實的回饋。
              </p>
              <p>
                追求卓越的路上，A CUE TIPS 願做你最穩定的後盾。
              </p>
            </div>
          </div>
        </section>

        <section className="about-features" aria-label="品牌特色">
          <h2 className="about-section-label">
            <IconCraft className="about-section-label__icon" />
            Craftsmanship
          </h2>
          <div className="about-features__grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="about-feature">
                  <span className="about-feature__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3 className="about-feature__title">{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-series">
          <h2 className="about-series__title">專注研發，實戰淬煉</h2>

          <div className="about-series__grid">
            <article className="about-series__item">
              <h3 className="about-series__name">經典 A 系列</h3>
              <ul className="about-list">
                <li>S (Soft)：具備優異的軟 Q 感與黏球性，能釋放出色的旋轉值。</li>
                <li>M (Medium)：擊球感紮實飽滿，是兼顧控制與力道的全方位選擇。</li>
                <li>H (Hard)：提供極佳的穿透力與穩定度，將修正量降至最低。</li>
              </ul>
            </article>

            <article className="about-series__item">
              <h3 className="about-series__name">Premium A 系列</h3>
              <p className="about-series__desc">
                M (Medieum)：定義全方位的競技基準。選用法國頂級牛皮，不僅賦予了超越以往的擊球力道與耐用度，更完美保留了細膩的 Q 彈手感與吸附黏著性。力量與精準，自此無需折衷。
              </p>
            </article>
          </div>

          <Link href={routes.home} className="about-series__link">
            系列全覽 →
          </Link>
        </section>
      </article>
    </main>
  );
}
