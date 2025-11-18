export default function Contact() {
  return (
    <div style={styles.container}>
      <h1>お問い合わせ</h1>

      <p>
        ご質問やご相談は、以下のメールアドレスまでご連絡ください。
      </p>

      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        ✉️ <a href="mailto:usagi.chukai@gmail.com">
          usagi.chukai@gmail.com
        </a>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    lineHeight: 1.8,
    fontFamily: "sans-serif",
  },
};

