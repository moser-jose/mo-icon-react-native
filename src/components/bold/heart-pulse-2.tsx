import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldHeartPulse2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2.346 11.25A6.3 6.3 0 0 1 2 9.26C2 3.35 7.5.663 12 5.5 16.5.663 22 3.349 22 9.26a6.3 6.3 0 0 1-.346 1.99h-3.13c-.546 0-1.03-.002-1.471.195-.441.196-.765.557-1.13.963l-.075.084-1.029 1.143q-.113.127-.194.214l-.185-.221-3.551-4.305c-.14-.17-.289-.35-.435-.485a1.24 1.24 0 0 0-.773-.353 1.24 1.24 0 0 0-.81.258c-.16.116-.33.278-.49.43l-1.53 1.456c-.471.45-.57.526-.672.567-.103.042-.228.054-.879.054z"/><path fill="${color}" d="M3.004 12.75c1.381 2.562 3.926 4.964 5.958 6.62C10.294 20.458 10.96 21 12 21s1.706-.543 3.038-1.63c2.032-1.656 4.577-4.058 5.958-6.62h-2.36c-.724 0-.861.015-.973.065s-.215.142-.7.68l-1.054 1.172a5 5 0 0 1-.486.496c-.185.155-.46.33-.833.321-.373-.008-.641-.194-.82-.357a5 5 0 0 1-.463-.515l-3.552-4.306-.171-.205q-.081.074-.194.183l-1.577 1.501c-.356.34-.671.642-1.077.804s-.843.162-1.335.161z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldHeartPulse2 };
export default React.memo(BoldHeartPulse2);
