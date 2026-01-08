import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneNotebookSquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M2 9c0-3.771 0-5.657 1.172-6.828S6.229 1 10 1h4c3.771 0 5.657 0 6.828 1.172S22 5.229 22 9v4c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z" opacity=".5"/><path fill="${color}" d="M6 12.91V7.497c0-.823.665-1.495 1.487-1.435.513.037 1.069.101 1.513.21.824.201 1.851.7 2.465 1.022l.035.018v8.415l-.007-.004c-.61-.321-1.656-.832-2.493-1.037-.438-.107-.984-.17-1.49-.208-.83-.062-1.51-.733-1.51-1.566m6.5 2.814.007-.004c.61-.321 1.656-.832 2.493-1.037.438-.107.984-.17 1.49-.208.83-.062 1.51-.733 1.51-1.566V7.45c0-.806-.638-1.469-1.443-1.43-.616.031-1.317.1-1.857.25-.731.203-1.625.68-2.178 1l-.022.012z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneNotebookSquare };
export default React.memo(BoldDuotoneNotebookSquare);
