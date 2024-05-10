import React from 'react';
import { createRoot } from 'react-dom/client';
import VideoIntro from './Components/VideoIntro/VideoIntro';
import "./index.css"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<VideoIntro />);