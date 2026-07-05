/* Icons — curated set from Lucide (lucide.dev, ISC license), inlined as React
   components for zero-dependency use. 1.75 stroke, currentColor. Add more as needed.
   Usage: <Ic.ArrowUpRight size={16}/> */
import React from 'react';

const S = ({ size = 20, children, fill = 'none', ...p }) => (
  React.createElement('svg', {
    width: size, height: size, viewBox: '0 0 24 24', fill,
    stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round',
    strokeLinejoin: 'round', ...p,
  }, children)
);
const P = (d) => React.createElement('path', { d, key: d });

export const Ic = {
  ArrowRight: (p) => S({ ...p, children: [P('M5 12h14'), P('m12 5 7 7-7 7')] }),
  ArrowLeft: (p) => S({ ...p, children: [P('M19 12H5'), P('m12 19-7-7 7-7')] }),
  ArrowUpRight: (p) => S({ ...p, children: [P('M7 7h10v10'), P('M7 17 17 7')] }),
  ArrowDown: (p) => S({ ...p, children: [P('M12 5v14'), P('m19 12-7 7-7-7')] }),
  Mail: (p) => S({ ...p, children: [React.createElement('rect', { key: 'r', width: 20, height: 16, x: 2, y: 4, rx: 2 }), P('m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7')] }),
  Phone: (p) => S({ ...p, children: [P('M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z')] }),
  MapPin: (p) => S({ ...p, children: [P('M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'), React.createElement('circle', { key: 'c', cx: 12, cy: 10, r: 3 })] }),
  Award: (p) => S({ ...p, children: [React.createElement('circle', { key: 'c', cx: 12, cy: 8, r: 6 }), P('M15.477 12.89 17 22l-5-3-5 3 1.523-9.11')] }),
  Copy: (p) => S({ ...p, children: [React.createElement('rect', { key: 'r', width: 14, height: 14, x: 8, y: 8, rx: 2, ry: 2 }), P('M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2')] }),
  Check: (p) => S({ ...p, children: [P('M20 6 9 17l-5-5')] }),
  Github: (p) => S({ ...p, fill: 'currentColor', stroke: 'none', children: [P('M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5Z')] }),
  Linkedin: (p) => S({ ...p, fill: 'currentColor', stroke: 'none', children: [P('M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z')] }),
  Terminal: (p) => S({ ...p, children: [P('m4 17 6-6-6-6'), P('M12 19h8')] }),
  Download: (p) => S({ ...p, children: [P('M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'), P('m7 10 5 5 5-5'), P('M12 15V3')] }),
  Menu: (p) => S({ ...p, children: [P('M4 6h16'), P('M4 12h16'), P('M4 18h16')] }),
  X: (p) => S({ ...p, children: [P('M18 6 6 18'), P('m6 6 12 12')] }),
};
