import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneLinkRoundAngle: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M2.277 7.934a6.75 6.75 0 0 0 4.398 11.513.75.75 0 1 0 .083-1.498 5.25 5.25 0 0 1-3.42-8.954l2.828-2.828a5.25 5.25 0 1 1 7.425 7.424l-1.414 1.414a.75.75 0 0 0 1.06 1.061l1.415-1.414a6.75 6.75 0 0 0-9.546-9.546z" clip-rule="evenodd"/><path fill="${color}" d="M10.409 17.833a5.25 5.25 0 0 1 0-7.424l1.414-1.415a.75.75 0 0 0-1.06-1.06L9.348 9.348a6.75 6.75 0 1 0 9.546 9.546l2.829-2.828a6.75 6.75 0 0 0-4.398-11.513.75.75 0 1 0-.083 1.498 5.25 5.25 0 0 1 3.42 8.954l-2.828 2.828a5.25 5.25 0 0 1-7.425 0" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneLinkRoundAngle };
export default React.memo(BoldDuotoneLinkRoundAngle);
