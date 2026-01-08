import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneWalking: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12.528 10.753a4 4 0 0 0-.258-.003h-1.091l-.091.912c-.174 1.74-.235 2.44-.08 3.101.156.662.522 1.261 1.452 2.742l2.575 4.096a.75.75 0 0 1-1.27.798l-2.575-4.096-.072-.116c-.835-1.327-1.35-2.146-1.57-3.08s-.123-1.898.033-3.459l.014-.136.076-.761c-.501.003-.872.012-1.171.049-.377.045-.553.125-.678.225s-.24.254-.367.613c-.133.377-.248.888-.419 1.657l-.304 1.368a.75.75 0 1 1-1.464-.326l.313-1.411c.159-.714.292-1.314.46-1.788.177-.502.419-.943.843-1.283.423-.34.906-.48 1.435-.545.499-.06 1.114-.06 1.845-.06h2.13c.136 0 .242 0 .341.007a2.75 2.75 0 0 1 2.417 1.887c.03.094.056.197.09.329l.005.024c.056.224.073.288.088.332.21.606.846.955 1.47.807.046-.01.108-.031.328-.104l.73-.243a.75.75 0 0 1 .474 1.422l-.73.244-.032.01a5 5 0 0 1-.424.13 2.75 2.75 0 0 1-3.233-1.774 6 6 0 0 1-.118-.427l-.008-.034a4 4 0 0 0-.066-.25 1.25 1.25 0 0 0-1.098-.857" clip-rule="evenodd"/><path fill="${color}" d="M14 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M9.416 16.876a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneWalking };
export default React.memo(BoldDuotoneWalking);
