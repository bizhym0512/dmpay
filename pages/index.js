import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>

      {/* 2カラム全体 */}
      <div style={styles.mainArea}>

        {/* 左側：メイン紹介 */}
        <div style={styles.leftArea}>
          <img src="/usagi-logo.png" alt="usagi logo" style={styles.logo} />

          <h1 style={styles.title}>うさぎで仲介</h1>

          <p style={styles.catch}>
            手数料は業界最安の4%<br />
            SNS依頼の“お金トラブル”をゼロに！
          </p>

          <p style={styles.subtitle}>
            支払い・納品のすれ違いを防ぐ、クリエイター向け安全決済アプリ
          </p>

          <div style={styles.downloadArea}>
            <button style={styles.downloadBtn}>iOS版（準備中）</button>
            <button style={styles.downloadBtn}>Android版（準備中）</button>
          </div>
        </div>

        {/* 右側：公式X + 囲い枠 */}
        <div style={styles.rightArea}>
          <a
            href="https://x.com/usagidechukai"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.xLink}
          >
            公式X（最新情報）
          </a>

          <div style={styles.box}>
            <h3 style={styles.boxTitle}>このアプリの特徴</h3>
            <p style={styles.boxText}>・SNS依頼の決済を安全に</p>
            <p style={styles.boxText}>・支払い／納品トラブルを防止</p>
            <p style={styles.boxText}>・匿名でスムーズに取引できます</p>
          </div>
        </div>

      </div>

      {/* フッターリンク：間隔を狭めて */}
      <div style={styles.links}>
        <Link href="/terms" style={styles.link}>利用規約</Link>
        <Link href="/privacy" style={styles.link}>プライバシーポリシー</Link>
        <Link href="/tokushoho" style={styles.link}>特商法</Link>
        <Link href="/contact" style={styles.link}>お問い合わせ</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
  },

  /* 2カラム領域 */
  mainArea: {
    display: "flex",
    justifyContent: "center",
    gap: "60px",
    marginBottom: 20,
    flexWrap: "wrap",
  },

  /* 左エリア */
  leftArea: {
    maxWidth: "350px",
    textAlign: "left",
  },

  logo: {
    width: 140,
    marginBottom: 10,
  },

  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: 10,
  },

  catch: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: 15,
    lineHeight: 1.6,
  },

  subtitle: {
    fontSize: "15px",
    color: "#444",
    marginBottom: 20,
  },

  downloadArea: {
    display: "flex",
    gap: "10px",
    marginBottom: 10,
  },

  downloadBtn: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    background: "#fafafa",
  },

  /* 右エリア */
  rightArea: {
    maxWidth: "300px",
    textAlign: "left",
  },

  xLink: {
    color: "#1d9bf0",
    textDecoration: "underline",
    fontSize: "15px",
  },

  box: {
    marginTop: 15,
    padding: "15px 18px",
    borderRadius: "12px",
    background: "#f9f9f9",
    border: "1px solid #eee",
  },

  boxTitle: {
    margin: 0,
    marginBottom: 10,
    fontSize: "17px",
    fontWeight: "bold",
  },

  boxText: {
    margin: "4px 0",
    fontSize: "14px",
  },

  /* フッターリンク */
  links: {
    textAlign: "center",
    marginTop: "auto",
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  link: {
    color: "#666",
    fontSize: "14px",
    textDecoration: "underline",
  },
};
