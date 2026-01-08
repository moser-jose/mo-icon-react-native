import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSmartphoneVibration: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M5.879 2.879C5 3.757 5 5.172 5 8v8c0 2.828 0 4.243.879 5.121S8.172 22 11 22h2c2.829 0 4.243 0 5.122-.879C19 20.243 19 18.828 19 16V8c0-2.828 0-4.243-.878-5.121C17.242 2 15.829 2 13 2h-2c-2.828 0-4.242 0-5.121.879" opacity=".5"/><path fill="${color}" d="M9.5 18.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"/><path fill="${color}" fill-rule="evenodd" d="M1.665 5.33a.75.75 0 0 1 1.006.335l.776 1.553a1.75 1.75 0 0 1 0 1.565l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.776 1.553a.75.75 0 0 1-1.342-.671l.777-1.553a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.565l.553-1.106a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.565l.553-1.106a.25.25 0 0 0 0-.224l-.777-1.552a.75.75 0 0 1 .336-1.007m20.67 0a.75.75 0 0 1 .336 1.006l-.776 1.552a.25.25 0 0 0 0 .224l.552 1.106a1.75 1.75 0 0 1 0 1.565l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.776 1.553a.75.75 0 0 1-1.342.67l-.776-1.552a1.75 1.75 0 0 1 0-1.566l.553-1.105a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.565l.553-1.106a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.565l.776-1.553a.75.75 0 0 1 1.007-.336" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneSmartphoneVibration };
export default React.memo(BoldDuotoneSmartphoneVibration);
