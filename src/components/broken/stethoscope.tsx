import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenStethoscope: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 14.235V17a5 5 0 0 0 3 4.584m2.882.416a4.12 4.12 0 0 0 3.964-3"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12.286 3h.091c.313 0 .47 0 .601.012a3 3 0 0 1 2.725 2.724c.011.132.011.288.011.6v.9c0 .981-.202 1.916-.567 2.764M5.43 3h-.092c-.313 0-.47 0-.601.012a3 3 0 0 0-2.724 2.724C2 5.868 2 6.024 2 6.336v1.185a6.714 6.714 0 0 0 6.714 6.714 7 7 0 0 0 3-.673"/><circle cx="19" cy="16" r="3" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 2v2M6 2v2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenStethoscope };
export default React.memo(BrokenStethoscope);
