/** @jsxImportSource react */
import React from "react";
import { createRoot } from "react-dom/client";
import { styled, css } from "@linaria/react";

const globalStyles = css`
  :global() {
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue';
    }

    a {
      -webkit-tap-highlight-color: transparent;
    }

    body {
      height: 100vh;
      width: 100%;
      overflow: hidden;
      background-color: #000;
    }

    @keyframes rotarColor {
      0% {
        --linear-1: 45deg;
        --linear-2: 135deg;
      }
      100% {
        --linear-1: 405deg;
        --linear-2: 495deg;
      }
    }

    @property --linear-1 {
      syntax: '<angle>';
      inherits: true;
      initial-value: 45deg;
    }

    @property --linear-2 {
      syntax: '<angle>';
      inherits: true;
      initial-value: 135deg;
    }
  }
`;

const Rectangle = styled.aside`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #111;
  position: relative;
  background-size: cover;
  background-position: center;
  filter: saturate(400%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: linear-gradient(var(--linear-1), springgreen, violet, cyan),
      linear-gradient(var(--linear-2), springgreen, violet, cyan);
    background-blend-mode: exclusion;
    inset: -5px;
    z-index: -1;
    animation: rotarColor 10s ease infinite both;
  }

  &::after {
    filter: blur(30px);
  }
`;

function App() {
  return <Rectangle />;
}

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
