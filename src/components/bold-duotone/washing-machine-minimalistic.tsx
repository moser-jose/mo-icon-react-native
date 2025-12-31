import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneWashingMachineMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z" opacity=".5"/><path fill="${color}" d="M7.25 6A.75.75 0 0 1 8 5.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6"/><path fill="${color}" fill-rule="evenodd" d="M17.714 14.649a5.75 5.75 0 1 0-.07.461l.09-.448zm-9.599-.857a18 18 0 0 0-.344-.218A4.25 4.25 0 0 1 16.25 14v.005q-.201-.035-.404-.065l-.015-.003q-.241-.037-.486-.079c-.7-.126-1.267-.075-1.758.106-.457.168-.801.436-1.055.633l-.024.018c-.275.214-.455.347-.678.43-.203.074-.493.123-.973.036-.704-.126-1.333-.426-1.915-.769-.248-.147-.48-.296-.707-.443z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneWashingMachineMinimalistic);
