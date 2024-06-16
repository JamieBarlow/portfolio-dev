import React, { useEffect, useRef, useState, useCallback } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import useScript from "react-script-hook";
import p5 from "p5";

export default function ASCII() {
  // Attach p5 to the window object
  const [p5Attached, setP5Attached] = useState(false);
  const [loading, error] = useScript({
    src: p5Attached ? "js/p5.asciiart.min.js" : null,
    onload: () => console.log("p5 attached"),
  });
  useEffect(() => {
    if (error) {
      console.error("Failed to load the script", error);
    }
  }, [error]);
  useEffect(() => {
    if (!loading && !error) {
      // Ensure p5 is available globally for the custom script
      window.p5 = p5;
      setP5Attached(true);
      console.log("ASCII JS script loaded!");
    }
  }, [loading, error]);

  // Apply styles after mount
  const profilePic = useRef(null);
  useEffect(() => {
    if (profilePic.current) {
      //   profilePic.current.style.maxWidth = "20vw";
      //   console.log(cnv.elt);
    }
  }, [profilePic]);

  const sketch = useCallback((p) => {
    let myAsciiArt;
    let asciiart_width = 40;
    let asciiart_height = 80;
    let images = [];
    let cnv, gfx, ascii_arr, cyclic_t;
    p.preload = () => {
      images[0] = p.loadImage(
        "https://res.cloudinary.com/dakgl7s9n/image/upload/v1718175905/portfolio/jamie-1.jpg"
      );
      images[1] = p.loadImage(
        "https://res.cloudinary.com/dakgl7s9n/image/upload/v1718175905/portfolio/jamie-2.jpg"
      );
    };

    p.setup = () => {
      cnv = p.createCanvas(600, 912); // we need some space...
      gfx = p.createGraphics(asciiart_width, asciiart_height);
      console.log(gfx);
      gfx.pixelDensity(1);

      // Update styling
      const canvasElement = cnv.canvas;
      canvasElement.getContext("2d", {
        willReadFrequently: true,
      });
      canvasElement.style.height = "auto";
      const gfxCanvasElement = gfx.elt;
      gfxCanvasElement.getContext("2d", {
        willReadFrequently: true,
      });
      myAsciiArt = new p5.prototype.AsciiArt(p);
      //   myAsciiArt.printWeightTable();
      p.textAlign(p.CENTER, p.CENTER);
      p.textFont("monospace", 8);
      p.textStyle(p.NORMAL);
      p.noStroke();
      p.fill(255);
      p.frameRate(30);
    };
    p.draw = () => {
      p.background(0);
      cyclic_t = (p.millis() * 0.0002) % images.length;
      gfx.image(images[p.floor(cyclic_t)], 0, 0, gfx.width, gfx.height);
      gfx.filter(p.POSTERIZE, 2);
      ascii_arr = myAsciiArt.convert(gfx, 80, 80);
      myAsciiArt.typeArray2d = function (_arr2d, _dst, _x, _y, _w, _h) {
        if (_arr2d === null) {
          console.log("[typeArray2d] _arr2d === null");
          return;
        }
        if (_arr2d === undefined) {
          console.log("[typeArray2d] _arr2d === undefined");
          return;
        }
        switch (arguments.length) {
          case 2:
            _x = 0;
            _y = 0;
            _w = p.width;
            _h = p.height;
            break;
          case 4:
            _w = p.width;
            _h = p.height;
            break;
          case 6:
            /* nothing to do */ break;
          default:
            console.log(
              "[typeArray2d] bad number of arguments: " + arguments.length
            );
            return;
        }
        /*
              Because Safari in macOS seems to behave strangely in the case of multiple
              calls to the p5js text(_str, _x, _y) method for now I decided to refer
              directly to the mechanism for handling the canvas tag through the "pure"
              JavaScript.
            */
        if (_dst.canvas === null) {
          console.log("[typeArray2d] _dst.canvas === null");
          return;
        }
        if (_dst.canvas === undefined) {
          console.log("[typeArray2d] _dst.canvas === undefined");
          return;
        }
        var temp_ctx2d = _dst.canvas.getContext("2d");
        if (temp_ctx2d === null) {
          console.log("[typeArray2d] _dst canvas 2d context is null");
          return;
        }
        if (temp_ctx2d === undefined) {
          console.log("[typeArray2d] _dst canvas 2d context is undefined");
          return;
        }
        var dist_hor = _w / _arr2d.length;
        var dist_ver = _h / _arr2d[0].length;
        var offset_x = _x + dist_hor * 0.5;
        var offset_y = _y + dist_ver * 0.5;
        for (var temp_y = 0; temp_y < _arr2d[0].length; temp_y++)
          for (var temp_x = 0; temp_x < _arr2d.length; temp_x++)
            /*text*/ temp_ctx2d.fillText(
              _arr2d[temp_x][temp_y],
              offset_x + temp_x * dist_hor,
              offset_y + temp_y * dist_ver
            );
      };
      myAsciiArt.typeArray2d(ascii_arr, p);
      p.tint(255, p.pow(1.0 - (cyclic_t % 1.0), 4) * 255);
      p.image(images[p.floor(cyclic_t)], 0, 0, p.width, p.height);
      p.noTint();
    };
  }, []);

  return (
    <div ref={profilePic}>
      <ReactP5Wrapper sketch={sketch} id="profilePic" />
    </div>
  );
}

// export default function ASCII() {
//   const renderRef = useRef();
//   const canvasCreated = useRef(false);
//   useEffect(() => {
//     // Conditional to prevent multiple canvases being created
//     if (!canvasCreated.current) {
//       const p = new p5();
//       p.setup = () => {
//         p.createCanvas(500, 400).parent(renderRef.current);
//       };
//       p.draw = () => {
//         p.background(80);
//         p.stroke("gray");
//         p.strokeWeight(2);
//         p.fill("white");
//       };
//       canvasCreated.current = true;
//     }
//     // Cleanup function to remove canvas when component unmounts
//     return () => {
//       const canvas = renderRef.current.querySelector("canvas");
//       if (canvas) {
//         canvas.remove();
//         canvasCreated.current = false;
//       }
//     };
//   }, []);
//   return <div style={{ border: "1px solid red" }} ref={renderRef}></div>;
// }
