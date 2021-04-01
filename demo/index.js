import React from "react";
import path from "path";

import JscadRenderer from "../src";

const outputPath = {
  path: path.join(__dirname, "../output/toasty.stl"),
};

JscadRenderer.render(
  <union>
    <center>
      <cuboid size={[2, 4, 8]} center={[5, 0, 0]} />
    </center>
    <cuboid size={[8, 4, 2]} />
  </union>,
  outputPath
);
