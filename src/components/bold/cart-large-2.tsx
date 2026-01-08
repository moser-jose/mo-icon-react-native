import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldCartLarge2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2.237 2.289a.75.75 0 0 0-.474 1.423l.265.088c.676.225 1.124.376 1.453.529.312.145.447.262.533.382s.155.285.194.626c.041.361.042.833.042 1.546v2.672c0 1.368 0 2.47.117 3.337.12.9.38 1.658.982 2.26.601.602 1.36.86 2.26.982.866.116 1.969.116 3.336.116H18a.75.75 0 0 0 0-1.5h-7c-1.435 0-2.436-.001-3.192-.103-.733-.099-1.122-.279-1.399-.556-.235-.235-.4-.55-.506-1.09h10.12c.959 0 1.438 0 1.814-.248s.565-.69.943-1.571l.428-1c.81-1.889 1.215-2.833.77-3.508S18.506 6 16.45 6H5.745a9 9 0 0 0-.047-.833c-.055-.484-.176-.93-.467-1.333-.291-.404-.675-.66-1.117-.865-.417-.194-.946-.37-1.572-.579zM7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldCartLarge2 };
export default React.memo(BoldCartLarge2);
