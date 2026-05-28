import React from 'react';
import ReactDOM from 'react-dom/client';
import TecLiteQuiz from './TecLiteQuiz.jsx';
import './index.css';

// iframe auto-resize: post height to parent window
function postHeightToParent() {
  try {
    const h = document.documentElement.scrollHeight;
    window.parent.postMessage(
      { type: 'tec-lite-quiz-height', height: h },
      '*'
    );
  } catch (e) { /* cross-origin, ok */ }
}
window.addEventListener('load', postHeightToParent);
const observer = new ResizeObserver(postHeightToParent);
observer.observe(document.body);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TecLiteQuiz />
  </React.StrictMode>
);
