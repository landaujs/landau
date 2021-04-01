import React from "react";
import path from "path";

import JscadRenderer from "../src";

const outputPath = {
  path: path.join(__dirname, "../output/colors2.stl"),
};

JscadRenderer.render(
  <colorize color={[1, 0, 0]}>
    <union>
      <center>
        <cuboid size={[2, 4, 8]} center={[5, 0, 0]} />
      </center>
      <colorize color={[0, 1, 0]}>
        <cuboid size={[8, 4, 2]} />
      </colorize>
    </union>
  </colorize>,
  outputPath
);
