export default function Tokushoho() {
  return (
    <div style={styles.container}>
      <h1>特定商取引法に基づく表記</h1>

      <p>特定商取引法に基づく表記
________________________________________
■ 運営者

■ 所在地
東京都荒川区
■ メールアドレス
usagi.chukai@gmail.com
■ 電話番号

■ サービス名
うさぎで仲介（USAGIdeCHUKAI）
■ 価格
各決済リンクに記載（クリエイター設定金額）
■ サービス手数料
クリエイター：4.0%
Stripe決済手数料：別途 Stripe により自動控除
■ 商品代金以外の料金
インターネット接続費用
■ サービス提供時期
依頼者の支払い後、クリエイターとの連絡により提供
■ キャンセル・返金
納品が行われない場合、または双方合意による返金のみ対応。
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

