import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldStationMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 2.75c-3.446 0-6.25 2.817-6.25 6.305a6.3 6.3 0 0 0 1.795 4.421.75.75 0 0 1-1.074 1.048 7.8 7.8 0 0 1-2.221-5.47C4.25 4.75 7.714 1.25 12 1.25s7.75 3.5 7.75 7.805a7.8 7.8 0 0 1-2.186 5.433.75.75 0 1 1-1.08-1.04 6.3 6.3 0 0 0 1.766-4.393c0-3.488-2.804-6.305-6.25-6.305"/><path fill="${color}" d="M12 5.572c-1.9 0-3.45 1.554-3.45 3.483 0 .946.372 1.801.978 2.429a.75.75 0 0 1-1.08 1.041 5 5 0 0 1-1.398-3.47c0-2.747 2.21-4.983 4.95-4.983s4.95 2.236 4.95 4.983a5 5 0 0 1-1.361 3.432.75.75 0 1 1-1.091-1.03c.59-.625.952-1.47.952-2.402 0-1.93-1.55-3.483-3.45-3.483"/><path fill="${color}" fill-rule="evenodd" d="M11.284 9.775A1.249 1.249 0 0 1 12 7.5a1.25 1.25 0 0 1 .716 2.275l2.49 7.471.011.033 1.495 4.484a.75.75 0 0 1-1.423.474l-1.33-3.987h-3.918l-1.33 3.987a.75.75 0 0 1-1.423-.474l1.495-4.484.011-.033zM12 12.372l1.46 4.378h-2.92z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldStationMinimalistic);
