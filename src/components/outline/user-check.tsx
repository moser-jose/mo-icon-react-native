import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineUserCheck: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd"/><path fill="${color}" d="M19.856 14.573a.75.75 0 0 1 .015 1.06l-1.833 1.89a.75.75 0 0 1-1.114-.043l-.834-1a.75.75 0 1 1 1.153-.96l.3.36 1.252-1.291a.75.75 0 0 1 1.06-.016"/><path fill="${color}" fill-rule="evenodd" d="M14.775 12.513A14.5 14.5 0 0 0 12 12.25c-2.314 0-4.445.526-6.025 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.003 2.62 1.276 3.662.63.512 1.51.877 2.7 1.117 1.193.242 2.748.369 4.774.369 2.868 0 4.81-.254 6.12-.741 1.178-.44 1.877-1.082 2.25-1.892a4.75 4.75 0 1 0-5.596-7.604M14.75 16a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m-.994-2.135A4.75 4.75 0 0 0 17.31 20.7c-1.07.337-2.733.55-5.311.55-1.974 0-3.42-.125-4.476-.339-1.06-.214-1.68-.509-2.05-.81-.684-.557-.724-1.293-.724-2.601 0-.851.621-1.775 1.96-2.528 1.317-.74 3.185-1.222 5.29-1.222q.911.001 1.756.115" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineUserCheck);
