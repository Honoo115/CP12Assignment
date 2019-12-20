import React from "react";
import slugify from "slugify";

function FeatureItems(props) {
  const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  return (
    <div>
      <input
        type="radio"
        id={props.itemHash}
        className="feature__option"
        name={slugify(props.feature)}
        checked={props.checked}
        onChange={e => props.updateFeature(e, props.feature, props.item)}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.name} ({USCurrencyFormat.format(props.cost)})
      </label>
    </div>
  );
}
export default FeatureItems;
