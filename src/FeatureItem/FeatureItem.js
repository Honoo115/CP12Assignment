import React from "react";

function FeatureItem(props) {
  return (
    <div>
      <input
        type="radio"
        id={props.itemHash}
        className="feature__option"
        name={slugify(props.feature)}
        checked={props.checked}
        onChange={e => props.updateFeature(event, props.feature, props.item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {props.name} ({USCurrencyFormat.format(props.cost)})
      </label>
    </div>
  );
}
export default FeatureItem;
