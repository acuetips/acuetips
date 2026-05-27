import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "about — GOD OF CUE TIP",
  description: "GOD OF CUE TIP — 專注撞球皮頭選品與介紹。",
};

export default function AboutPage() {
  return (
    <main className="page-about">
      <Link href="/" className="back-link">
        ← back
      </Link>

      <nav className="site-nav site-nav--page">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
      </nav>

      <article className="about-content">
        <img
          className="about-logo"
          src="/logo.png"
          alt="GOD OF CUE TIP logo"
          width={400}
          height={400}
        />

        <h1 className="about-title">about</h1>

        <p className="about-lead">
          GOD OF CUE TIP 專注於撞球皮頭的選品與展示。皮頭是球桿與母球之間最直接的接觸點，
          硬度、材質與結構都會影響控球、旋球與擊球穩定度——我們希望用清楚的方式，把這些差異介紹給每一位玩家。
        </p>

        <section className="about-section">
          <h2 className="about-heading">我們在做什麼</h2>
          <p>
            我們整理各品牌、各類型的皮頭資訊，包含單層、多層、不同硬度與常見規格，
            讓你在選擇時能先了解每一款皮頭適合的打法與使用情境。
            目前網站以展示為主，協助玩家建立對皮頭的基本認識與比較方向。
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-heading">為什麼皮頭很重要</h2>
          <p>
            同一支球桿，換上不同皮頭，打感可能完全不同。偏硬的皮頭通常能帶來較多的旋球與推杆力量；
            偏軟的皮頭則較容易控制母球走位，適合需要精細操作的球路。
            此外，皮頭的層數、直徑與保養方式，也會影響耐用度與擊球一致性。
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-heading">如何挑選</h2>
          <ul className="about-list">
            <li>依打法選硬度：進攻型可考慮偏硬，控球型可考慮中硬或偏軟</li>
            <li>確認直徑是否與球桿先角匹配，常見為 13mm</li>
            <li>單層皮頭旋球量大，多層皮頭控球與穩定度通常較均衡</li>
            <li>定期打磨與更換，才能維持最佳擊球狀態</li>
          </ul>
        </section>

        <section className="about-section">
          <h2 className="about-heading">關於我們</h2>
          <p>
            我們來自高雄，長期接觸撞球運動，也實際測試過不同品牌與規格的皮頭。
            GOD OF CUE TIP 的名字聽起來有點浮誇，但我們對皮頭的選擇是認真的——
            希望無論你是入門還是進階玩家，都能在這裡找到有用的參考。
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-heading">聯絡我們</h2>
          <p>
            若有合作、選品或產品展示相關問題，歡迎來信 info@godofcuetip.com，
            或透過 Instagram @god_of_cue_tip 與我們聯繫。
          </p>
          <p className="about-note">Kaohsiung, TW</p>
        </section>
      </article>
    </main>
  );
}
