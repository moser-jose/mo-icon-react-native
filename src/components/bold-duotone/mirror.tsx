import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMirror: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M5.25 8.75A.75.75 0 0 1 6 9.5V19q0 .126-.008.25h12.516A4 4 0 0 1 18.5 19V9.5a.75.75 0 0 1 1.5 0V19c0 .487.158.96.45 1.35l.9 1.2a.75.75 0 1 1-1.2.9l-.9-1.2a4 4 0 0 1-.317-.5H5.567a4 4 0 0 1-.317.5l-.9 1.2a.75.75 0 1 1-1.2-.9l.9-1.2c.292-.39.45-.863.45-1.35V9.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M12.25 17c3.866 0 7-3.358 7-7.5s-3.134-7.5-7-7.5-7 3.358-7 7.5 3.134 7.5 7 7.5m1.577-12.407c-.427-.194-.957-.054-1.183.312s-.064.82.363 1.014c.792.36 1.55 1.322 1.791 2.693.073.41.518.692.996.63s.807-.444.735-.854c-.292-1.652-1.252-3.136-2.702-3.795" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneMirror);
