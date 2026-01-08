import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCartPlus: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/><path fill="${color}" d="M2.084 2.751a.75.75 0 0 1 .956-.458l.301.106c.617.216 1.14.4 1.553.603.44.216.818.482 1.102.898.282.413.399.865.452 1.362q.035.333.044.738H17.13c1.685 0 3.202 0 3.646.577s.27 1.447-.077 3.186l-.5 2.425c-.315 1.529-.472 2.293-1.024 2.743s-1.332.45-2.893.45h-5.303c-2.79 0-4.184 0-5.05-.915-.866-.913-.93-1.884-.93-4.826v-2.6c0-.74 0-1.236-.042-1.616-.04-.363-.109-.545-.2-.677-.087-.129-.22-.249-.524-.398-.323-.158-.762-.314-1.43-.548l-.26-.092a.75.75 0 0 1-.46-.957" opacity=".5"/><path fill="${color}" d="M13.75 9a.75.75 0 0 0-1.5 0v1.25H11a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H15a.75.75 0 0 0 0-1.5h-1.25z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneCartPlus };
export default React.memo(BoldDuotoneCartPlus);
