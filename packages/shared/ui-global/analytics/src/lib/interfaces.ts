export interface Gtag {
  <T extends 'set'>(command: T, params: object): void;
  <T extends 'config'>(command: T, id: string, config?: GtagConfig): void;
  <T extends 'event'>(
    command: T,
    event: GtagEvent,
    params?: GtagEventParams
  ): void;
}

export type GtagEvent =
  | 'page_view'
  | 'click'
  | 'purchase'
  | 'add_to_cart'
  | 'remove_from_cart'
  | 'begin_checkout'
  | 'sign_up'
  | 'login'
  | 'search'
  | 'view_item'
  | 'view_item_list'
  | 'share'
  | 'exception'
  | 'timing_complete';

export interface GtagConfig extends Record<string, unknown> {
  anonymize_ip?: boolean;
  page_path?: string;
  page_title?: string;
  user_id?: string;
  send_page_view?: boolean;
  allow_google_signals?: boolean;
}

export interface GtagEventParams extends Record<string, unknown> {
  event_category?: string;
  event_label?: string;
  value?: number;
  page_title?: string;
  page_location?: string;
  non_interaction?: boolean;
  currency?: string;
  transaction_id?: string;
  debug_mode?: boolean;
  items?: GtagEventItem[];
}

export interface GtagEventItem extends Record<string, unknown> {
  item_id?: string;
  item_name?: string;
  item_category?: string;
  price?: number;
  quantity?: number;
}
