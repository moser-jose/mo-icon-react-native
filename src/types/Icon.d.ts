/* Author: @moser-jose */
/* Date: 2025-09-04 */
/*
  - Builds src/types/Icon.d.ts mapping: { [variant]: [nameKey1, nameKey2, ...] }
  - Name key is the file path relative to the variant dir without extension (e.g. "bell-bing")
*/

export interface IconNamesByVariant {
  'bold': 'archive' | 'archive-check' | 'archive-down' | 'archive-down-minimlistic' | 'archive-minimalistic' | 'archive-up' | 'archive-up-minimlistic' | 'bell' | 'bell-bing' | 'bell-off' | 'clipboard' | 'clipboard-add' | 'clipboard-check' | 'clipboard-heart' | 'clipboard-list' | 'clipboard-remove' | 'clipboard-text' | 'document' | 'document-add' | 'document-medicine' | 'document-text' | 'documents' | 'documents-minimalistic' | 'notebook' | 'notes' | 'notes-minimalistic' | 'notification-lines-remove' | 'notification-remove' | 'notification-unread' | 'notification-unread-lines';
  'bold-duotone': 'archive' | 'archive-check' | 'archive-down' | 'archive-down-minimlistic' | 'archive-minimalistic' | 'archive-up' | 'archive-up-minimlistic' | 'bell' | 'bell-bing' | 'bell-off' | 'clipboard' | 'clipboard-add' | 'clipboard-check' | 'clipboard-heart' | 'clipboard-list' | 'clipboard-remove' | 'clipboard-text' | 'document' | 'document-add' | 'document-medicine' | 'document-text' | 'documents' | 'documents-minimalistic' | 'notebook' | 'notes' | 'notes-minimalistic' | 'notification-lines-remove' | 'notification-remove' | 'notification-unread' | 'notification-unread-lines';
  'broken': 'archive' | 'archive-check' | 'archive-down' | 'archive-down-minimlistic' | 'archive-minimalistic' | 'archive-up' | 'archive-up-minimlistic' | 'bell' | 'bell-bing' | 'bell-off' | 'clipboard' | 'clipboard-add' | 'clipboard-check' | 'clipboard-heart' | 'clipboard-list' | 'clipboard-remove' | 'clipboard-text' | 'document' | 'document-add' | 'document-medicine' | 'document-text' | 'documents' | 'documents-minimalistic' | 'notebook' | 'notes' | 'notes-minimalistic' | 'notification-lines-remove' | 'notification-remove' | 'notification-unread' | 'notification-unread-lines';
  'outline': 'archive' | 'archive-check' | 'archive-down' | 'archive-down-minimlistic' | 'archive-minimalistic' | 'archive-up' | 'archive-up-minimlistic' | 'bell' | 'bell-bing' | 'bell-off' | 'clipboard' | 'clipboard-check' | 'clipboard-heart' | 'clipboard-list' | 'clipboard-remove' | 'clipboard-text' | 'document' | 'document-add' | 'document-medicine' | 'document-text' | 'documents' | 'documents-minimalistic' | 'notebook' | 'notes' | 'notes-minimalistic' | 'notification-lines-remove' | 'notification-remove' | 'notification-unread' | 'notification-unread-lines';
  'outline-duotone': 'archive' | 'archive-check' | 'archive-down' | 'archive-down-minimlistic' | 'archive-minimalistic' | 'archive-up' | 'archive-up-minimlistic' | 'bell' | 'bell-bing' | 'bell-off' | 'clipboard' | 'clipboard-add' | 'clipboard-check' | 'clipboard-heart' | 'clipboard-list' | 'clipboard-remove' | 'clipboard-text' | 'document' | 'document-add' | 'document-medicine' | 'document-text' | 'documents' | 'documents-minimalistic' | 'notebook' | 'notes' | 'notes-minimalistic' | 'notification-lines-remove' | 'notification-remove' | 'notification-unread' | 'notification-unread-lines';
}

export type IconVariant = keyof IconNamesByVariant;
export type AnyIconName = IconNamesByVariant[IconVariant];
export type IconComponentProps = { size?: number; color?: string };
