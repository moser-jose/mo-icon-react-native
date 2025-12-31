import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSimCard: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.04 4.04 0 0 0-.921-2.224 8 8 0 0 0-.483-.504l-5.167-5.167a9 9 0 0 0-.504-.483 4.04 4.04 0 0 0-2.224-.92C12.512 2 12.342 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12s0 7.071 1.464 8.535Z"/><path stroke="${color}" stroke-width="1.5" d="M12 12h-.5c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C8 13.393 8 14.096 8 15.5s0 2.107.337 2.611a2 2 0 0 0 .552.552C9.393 19 10.096 19 11.5 19h.5m0-7h.5c1.405 0 2.107 0 2.611.337.218.146.406.334.552.552.337.504.337 1.207.337 2.611M12 12v3.5m0 3.5h.5c1.405 0 2.107 0 2.611-.337.218-.146.406-.334.552-.552C16 17.607 16 16.904 16 15.5M12 19v-3.5m0 0h4" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneSimCard);
