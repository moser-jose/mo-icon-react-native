import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldWashingMachineMinimalistic: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M8.115 14.208q-.17.11-.344.218A4.25 4.25 0 0 0 16.25 14v-.005q-.201.035-.404.065l-.015.003q-.241.037-.486.079c-.7.126-1.267.075-1.758-.106-.457-.168-.801-.436-1.055-.633l-.024-.018c-.275-.214-.455-.347-.678-.43-.203-.074-.493-.123-.973-.036-.704.126-1.333.426-1.915.769-.248.147-.48.296-.707.443z"/><path fill="${color}" fill-rule="evenodd" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14zm14.75 4q0-.33-.036-.649l.02-.013-.091-.448A5.752 5.752 0 0 0 6.25 14a5.75 5.75 0 0 0 11.5 0M8 5.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldWashingMachineMinimalistic };
export default React.memo(BoldWashingMachineMinimalistic);
