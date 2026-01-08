import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldCartLarge3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M2.084 2.751a.75.75 0 0 1 .956-.458l.302.106c.616.216 1.14.4 1.552.603.44.216.819.482 1.103.898.282.413.398.865.452 1.362q.035.333.043.738H8.15l1.655 9.377c-2.025-.018-3.14-.135-3.876-.91C5.063 13.552 5 12.581 5 9.64v-2.6c0-.74 0-1.236-.041-1.616-.04-.363-.11-.545-.2-.677-.088-.129-.221-.249-.525-.398-.322-.158-.761-.314-1.429-.548l-.261-.092a.75.75 0 0 1-.459-.957m9.244 12.628h2.842L15.827 6H9.673zM17.35 6c1.596.001 3.002.025 3.426.577.444.577.27 1.447-.076 3.186l-.5 2.425c-.315 1.529-.473 2.293-1.025 2.743s-1.332.45-2.893.45h-.588z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldCartLarge3 };
export default React.memo(BoldCartLarge3);
