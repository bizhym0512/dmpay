import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>

      <div style={styles.mainArea}>

        {/* 左側エリア */}
        <div style={styles.leftArea}>
          <img src="/usagi-logo.png" alt="usagi logo" style={styles.logo} />

          <h1 style={styles.title}>うさぎで仲介</h1>

          <div style={styles.downloadArea}>
            <button style={styles.downloadBtn}>iOS版（準備中）</button>
            <button style={styles.downloadBtn}>Android版（準備中）</button>
          </div>

          <a
            href="https://x.com/usagidechukai"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.xLink}
          >
            公式X（最新情報）
          </a>
        </div>

        {/* 右側エリア */}
        <div style={styles.rightArea}>

          <div style={styles.box}>
            <h3 style={styles.boxTitle}>このアプリの特徴</h3>
            <p style={styles.boxText}>・手数料は4%（業界最安値）</p>
            <p style={styles.boxText}>・未払い／納品トラブルを防ぐ</p>
            <p style={styles.boxText}>・匿名でかんたんに取引</p>
          </div>

          <div style={styles.box}>
            <h3 style={styles.boxTitle}>使い方</h3>
            <p style={styles.boxText}>1. 金額とタイトルを書いてURLを作成</p>
            <p style={styles.boxText}>2. 納品</p>
            <p style={styles.boxText}>3. 完了！</p>
          </div>

        </div>

      </div>

      {/* フッター */}
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
    paddingTop: "60px",
    paddingBottom: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  mainArea: {
    display: "flex",
    gap: "30px",               // ← 左右の距離を詰める
    alignItems: "flex-start",  // 上端揃え
    flexWrap: "wrap",
  },

  /* 左側 */
  leftArea: {
    textAlign: "left",
    maxWidth: "260px",
  },

  logo: {
    width: 150,                // ← 少し大きく
    marginBottom: 10,
  },

  title: {
    fontSize: "34px",          // ← 大きく
    fontWeight: "bold",
    marginBottom: 15,
  },

  downloadArea: {
    display: "flex",
    gap: "10px",
    marginBottom: 8,
  },

  downloadBtn: {
    padding: "10px 18px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    background: "#fafafa",
    fontSize: "15px",
  },

  xLink: {
    marginTop: 8,
    display: "inline-block",
    color: "#1d9bf0",
    fontSize: "15px",
    textDecoration: "underline",
  },

  /* 右側 */
  rightArea: {
    maxWidth: "300px",
    marginTop: "65px",         // ← ウサギの足あたりに揃える
  },

  box: {
    padding: "18px 20px",
    border: "1px solid #eee",
    borderRadius: "12px",
    background: "#fafafa",
    marginBottom: 20,
  },

  boxTitle: {
    margin: 0,
    fontSize: "20px",          // ← もっと大きく
    fontWeight: "bold",
    marginBottom: 12,
  },

  boxText: {
    margin: "6px 0",
    fontSize: "16px",          // ← 大きく読みやすく
    lineHeight: 1.5,
  },

  /* フッターリンク */
  links: {
    textAlign: "center",
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  link: {
    color: "#555",
    fontSize: "13px",
    textDecoration: "underline",
  },
};
