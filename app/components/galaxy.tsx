"use client";

import { Renderer, Program, Mesh, Triangle, Color } from "ogl";
import { useEffect, useRef } from "react";

/* ================= SHADERS ================= */

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uResolution;

varying vec2 vUv;

/* ---------- Noise ---------- */
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 34.45);
  return fract(p.x * p.y);
}

/* ---------- Star ---------- */
float star(vec2 uv) {
  float d = length(uv);
  float m = 0.0025 / (d + 0.03);
  m *= smoothstep(0.6, 0.0, d);
  return m;
}

void main() {
  /* -------- UV + ZOOM OUT -------- */
  vec2 uv = (vUv - 0.5) * 1.6;   // 👈 ZOOM OUT HERE
  uv.x *= uResolution.x / uResolution.y;

  /* -------- Rotation -------- */
  float a = uTime * 0.05;
  uv *= mat2(cos(a), -sin(a), sin(a), cos(a));

  /* -------- Galaxy -------- */
  vec3 col = vec3(0.0);

  for (int i = 0; i < 28; i++) {
    vec2 gv = fract(uv * float(i + 8)) - 0.5;
    col += star(gv) * 0.08;
  }

  /* -------- Tone Mapping -------- */
  col = 1.0 - exp(-col * 1.4);
  col = clamp(col, 0.0, 1.0);

  gl_FragColor = vec4(col, 1.0);
}
`;

/* ================= COMPONENT ================= */

export default function Galaxy() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const renderer = new Renderer({ alpha: false });
    const gl = renderer.gl;

    gl.clearColor(0, 0, 0, 1);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Color(1, 1, 1) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    el.appendChild(gl.canvas);

    /* ---------- Resize ---------- */
    const resize = () => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      if (!w || !h) return;

      const dpr = Math.min(window.devicePixelRatio, 2);
      renderer.setSize(w * dpr, h * dpr);

      gl.canvas.style.width = "100%";
      gl.canvas.style.height = "100%";

      program.uniforms.uResolution.value = new Color(
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height
      );
    };

    resize();
    window.addEventListener("resize", resize);

    /* ---------- Loop ---------- */
    let raf = 0;
    const loop = (t: number) => {
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    /* ---------- Cleanup ---------- */
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      el.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return <div ref={container} className="w-full h-full bg-black" />;
}
