import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineRewindBack: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M22.75 6.426c0-1.136-.494-2.127-1.271-2.694-.797-.581-1.871-.686-2.808-.041l-.009.006L13.75 7.29v-.168c0-1.036-.473-1.933-1.204-2.442-.746-.52-1.745-.613-2.62-.038L2.51 9.52c-.87.572-1.259 1.562-1.259 2.48s.389 1.908 1.26 2.48l7.417 4.877c.874.575 1.873.482 2.619-.037.731-.51 1.204-1.407 1.204-2.443v-.167l4.912 3.593.01.006c.936.645 2.01.54 2.807-.041.777-.567 1.27-1.557 1.27-2.694zm-9 8.425 5.78 4.228c.363.247.738.215 1.065-.023.349-.255.655-.772.655-1.482V6.426c0-.71-.306-1.227-.655-1.482-.327-.238-.701-.27-1.065-.023l-5.78 4.228zm-3-8.954a.79.79 0 0 1 .938.014c.301.21.562.631.562 1.212v9.754c0 .58-.261 1.003-.562 1.212a.79.79 0 0 1-.937.015l-7.418-4.877c-.358-.236-.583-.695-.583-1.227 0-.531.225-.99.583-1.226z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineRewindBack };
export default React.memo(OutlineRewindBack);
