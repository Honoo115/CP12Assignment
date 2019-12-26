import React from "react";
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});
function MainTotal(props) {
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {USCurrencyFormat.format(props.total)}
      </div>
    </div>
  );
}
export default MainTotal;
