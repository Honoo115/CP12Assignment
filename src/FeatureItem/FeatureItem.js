import React from "react";
import slugify from "slugify";

function FeatureItem(props) {
  const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  const itemHash = slugify(JSON.stringify(item));
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
      <label htmlFor={itemHash} className="feature__label">
        {props.name} ({USCurrencyFormat.format(props.cost)})
      </label>
    </div>
  );
}
export default FeatureItem;
