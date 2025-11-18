import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <img src="/usagi-logo.png" alt="usagi logo" style={styles.logo} />

      <h1 style={styles.title}>うさぎで仲介</h1>
      <p style={styles.desc}>
        個人クリエイターと依頼者のための、安全・簡単・匿名で使える
        エスクロー型決済サービス。
      </p>

      <div style={styles.links}>
        <Link href="/terms" style={styles.link}>利用規約</Link>
        <Link href="/privacy" style={styles.link}>プライバシーポリシー</Link>
        <Link href="/tokushoho" style={styles.link}>特定商取引法に基づく表記</Link>
        <Link href="/contact" style={styles.link}>お問い合わせ</Link>
      </div>

      <p style={{ marginTop: "40px", color: "#aaa" }}>© 2025 うさぎで仲介</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "40px 20px",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  logo: {
    width: "120px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "40px",
    marginBottom: "20px",
  },
  desc: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#444",
  },
  links: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  link: {
    fontSize: "20px",
    color: "#0070f3",
  },
};
