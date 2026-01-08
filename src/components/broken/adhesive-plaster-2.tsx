import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenAdhesivePlaster2: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12.765 20.416a5.41 5.41 0 1 0 7.65-7.651m-7.65 7.65 7.65-7.65m-7.65 7.65-4.59-4.59m-4.59-4.59a5.41 5.41 0 0 1 7.65-7.65m-7.65 7.65 7.65-7.65m-7.65 7.65L5 12.65m15.416.115L19 11.35m-7.765-7.766 4.59 4.59"/><circle cx="9.172" cy="12" r="1" fill="${color}" transform="rotate(-45 9.172 12)"/><circle cx="12" cy="14.828" r="1" fill="${color}" transform="rotate(-45 12 14.828)"/><circle cx="12" cy="9.172" r="1" fill="${color}" transform="rotate(-45 12 9.172)"/><circle cx="14.829" cy="12" r="1" fill="${color}" transform="rotate(-45 14.829 12)"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenAdhesivePlaster2 };
export default React.memo(BrokenAdhesivePlaster2);
