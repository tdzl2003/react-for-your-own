/**
 * Created by tdzl2003 on 3/26/17.
 */

import React from 'react';

const el = document.createElement('div');
document.body.appendChild(el);

React.render(
  <div style={{
    width: 100,
    height: 100,
  }}>
    <div key="a">
      1
    </div>
    <div>
      2
    </div>
    {false}
    <div>
      3
    </div>
  </div>,
  el,
);

setTimeout(() => {
  React.render(
    <div style={{
      width: 200,
      height: 200,
    }}>
      <div>
        4
      </div>
      {false}
      <div>
        5
      </div>
      <div key="a">
        6
      </div>
    </div>,
    el,
  );
}, 5000);

