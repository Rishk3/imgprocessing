import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function ImgProcessing() {
  const events = useSelector((state) => state);
  const canvas = useRef(null);
  const originalImgRef = useRef(null);
  const [localImgUrl, setlocalImgUrl] = useState("");

  useEffect(() => {
    let myCanvas = canvas.current;
    let context = myCanvas.getContext("2d");
    context.drawImage(originalImgRef.current, 0, 0);
    const speed = 3000;
    let imgData = context.getImageData(0, 0, myCanvas.width, myCanvas.height);

    setInterval(drawImg, speed);
    let x = 10;
    function drawImg() {
      context.putImageData(imgData, 0, 0, 30, 30, 40, 40);
    }

    // const objectURL = window.URL.createObjectURL(events[0].imgToProcess);
    // console.log(objectURL);
    // setlocalImgUrl(objectURL);
  }, [events, canvas]);

  return (
    <div>
      <img
        crossOrigin="anonymous"
        ref={originalImgRef}
        src="https://images.unsplash.com/photo-1603993097397-89c963e325c7?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <h1>===>>></h1>
      <canvas
        crossOrigin="anonymous"
        style={{
          margin: "30px",
          border: "5px solid red",
        }}
        ref={canvas}
      />
    </div>
  );
}
