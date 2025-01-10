new TradingView.widget({
  width: "100%",
  height: "100%",
  symbol: "ZM",
  interval: "D",
  timezone: "Etc/UTC",
  theme: "dark",
  style: "9",
  locale: "USD",
  toolbar_bg: "#f1f3f9",
  enable_publishing: false,
  hide_side_toolbar: true,
  allow_symbol_change: true,
  details: true,
  studies: ["BB@tv-basicstudies", "Volume@tv-basicstudies"]
});