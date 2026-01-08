import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineMirrorFull: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 2.25c-5.398 0-9.75 4.454-9.75 9.918 0 1.46.31 2.847.868 4.096a2.114 2.114 0 0 0-1.868 2.1 4.386 4.386 0 0 0 4.386 4.386h12.728a4.386 4.386 0 0 0 4.386-4.386 2.114 2.114 0 0 0-1.868-2.1 10 10 0 0 0 .868-4.096c0-5.464-4.352-9.918-9.75-9.918m7.217 14a8.5 8.5 0 0 0 1.033-4.082c0-4.662-3.707-8.418-8.25-8.418s-8.25 3.756-8.25 8.418a8.5 8.5 0 0 0 1.033 4.082h2.389c.729 0 1.428.29 1.944.805l.829.829c.234.234.552.366.883.366h2.344c.331 0 .649-.132.883-.366l.829-.829a2.75 2.75 0 0 1 1.944-.805zM2.75 18.364c0-.34.275-.614.614-.614h3.808c.331 0 .649.132.883.366l.829.829a2.75 2.75 0 0 0 1.944.805h2.344c.729 0 1.428-.29 1.944-.805l.829-.829a1.25 1.25 0 0 1 .883-.366h3.808c.34 0 .614.275.614.614a2.886 2.886 0 0 1-2.886 2.886H5.636a2.886 2.886 0 0 1-2.886-2.886" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineMirrorFull };
export default React.memo(OutlineMirrorFull);
