import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneSmartphoneUpdate: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><g clip-path="url(#a)"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13 2c3.114.01 4.765.108 5.828 1.17C20 4.343 20 6.229 20 10v4c0 3.77 0 5.656-1.172 6.828-1.171 1.171-3.057 1.171-6.828 1.171s-5.657 0-6.828-1.171S4 17.77 4 13.999V11"/><path fill="${color}" d="M2.73 4h-.75zm0 .8-.554.506a.75.75 0 0 0 1.108 0zm1.284-.294a.75.75 0 1 0-1.108-1.012zm-1.46-1.012a.75.75 0 0 0-1.108 1.012zM8.54 1.83A.75.75 0 0 0 9.71.892zM6.38-.75c-2.494 0-4.4 2.193-4.4 4.75h1.5c0-1.86 1.36-3.25 2.9-3.25zM1.981 4v.8h1.5V4zm1.303 1.306.73-.8-1.108-1.012-.73.8zm0-1.012-.73-.8-1.108 1.012.73.8zM9.71.892C8.914-.1 7.726-.75 6.381-.75v1.5c.843 0 1.617.404 2.159 1.08z"/><path fill="${color}" d="m10.27 3.2.554-.506a.75.75 0 0 0-1.108 0zm-1.284.294a.75.75 0 0 0 1.108 1.01zm1.46 1.01a.75.75 0 0 0 1.108-1.01zm-5.87 1.801A.75.75 0 1 0 3.461 7.31zM6.62 8.75c2.494 0 4.4-2.192 4.4-4.75h-1.5c0 1.861-1.36 3.25-2.9 3.25zM11.02 4v-.8h-1.5V4zM9.717 2.694l-.73.8 1.108 1.01.73-.8zm0 1.01.73.8 1.108-1.01-.73-.8zM3.46 7.31c.79.878 1.908 1.44 3.158 1.44v-1.5c-.785 0-1.509-.35-2.043-.944z" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 19H9" opacity=".5"/></g><defs><clipPath id="a"><path fill="${color}" d="M0 0h24v24H0z"/></clipPath></defs></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneSmartphoneUpdate };
export default React.memo(OutlineDuotoneSmartphoneUpdate);
