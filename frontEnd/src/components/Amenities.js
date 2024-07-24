import React from 'react';

function Amenities() {
  return (
    <section className="amenities-container">
      <h2>What this place offers</h2>
      <ul className="amenities-list">
        <li>
          <div className="icon icon-kitchen"></div>
          Kitchen
        </li>
        <li>
          <div className="icon icon-tv"></div>
          TV
        </li>
        <li>
          <div className="icon icon-washer"></div>
          Washer
        </li>
        <li>
          <div className="icon icon-hair-dryer"></div>
          Hair dryer
        </li>
        <li className="disabled1">
          <div className="icon icon-co-alarm"></div>
          Carbon monoxide alarm
        </li>
        <li>
          <div className="icon icon-wifi"></div>
          Wifi
        </li>
        <li>
          <div className="icon icon-elevator"></div>
          Elevator
        </li>
        <li>
          <div className="icon icon-dryer"></div>
          Dryer
        </li>
        <li>
          <div className="icon icon-refrigerator"></div>
          Refrigerator
        </li>
        <li className="disabled1">
          <div className="icon icon-smoke-alarm"></div>
          Smoke alarm
        </li>
      </ul>
      <button>Show all 32 amenities</button>
    </section>
  );
}

export default Amenities;
