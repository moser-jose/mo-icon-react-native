import React from "react";
import { iconRegistry } from "../registry";
import type { IconComponentProps } from "../types";

export type IconType = keyof typeof iconRegistry;

export type IconProps = {
  name: string;
  type?: IconType;
  size?: number;
  color?: string;
} & Record<string, unknown>;

export const Icon: React.FC<IconProps> = ({
  name,
  type = "outline",
  size = 24,
  color = "#1C274C",
  ...props
}) => {
  const byType = iconRegistry[type] as Record<
    string,
    React.ComponentType<IconComponentProps>
  >;
  if (!byType) {
    console.warn(`[Icon] Unknown type: ${type}`);
    return null;
  }

  if (!name) {
    console.warn(`[Icon] Missing 'name' prop`);
    return null;
  }

  const Component = byType[name];

  if (!Component) {
    console.warn(`[Icon] Unknown icon name: ${name} for type ${type}`);
    return null;
  }
  return <Component size={size} color={color} {...props} />;
};
