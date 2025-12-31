import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineRunningRound: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M18.5 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M15.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M8.972 5.81a3.7 3.7 0 0 1 2.846-.062c2.568 1 3.188 4.35 1.15 6.204l-1.04.946-.06.054a1.25 1.25 0 0 0 .148 1.938l.004.002.125.096a7.75 7.75 0 0 1 3.005 6.045V22a.75.75 0 0 1-1.5 0v-.951a6.25 6.25 0 0 0-2.54-4.964l-.006-.005-.081-.062a2.75 2.75 0 0 1-.11-4.225l.005-.005 1.04-.946c1.215-1.104.845-3.1-.685-3.697a2.2 2.2 0 0 0-1.695.037l-.522.23c-.545.241-.797.352-1.042.474a12 12 0 0 0-1.2.683c-.23.148-.455.308-.94.654l-1.439 1.024a.75.75 0 1 1-.87-1.222L5.021 7.99c.464-.331.717-.511.978-.68q.653-.421 1.348-.767c.279-.138.563-.263 1.085-.493zm6.3 6.008a.75.75 0 0 1 .91-.546 7.5 7.5 0 0 0 3.636 0 .75.75 0 0 1 .364 1.456 9 9 0 0 1-4.364 0 .75.75 0 0 1-.546-.91M9.48 16.424a.75.75 0 0 1 .096 1.056l-.26.311A8.22 8.22 0 0 1 3 20.75a.75.75 0 0 1 0-1.5 6.72 6.72 0 0 0 5.164-2.419l.26-.311a.75.75 0 0 1 1.056-.096" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineRunningRound);
