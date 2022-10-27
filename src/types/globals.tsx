export {};

declare global {
  interface Window {
    __RUNTIME_CONFIG__: {
      ENABLED_PLUGINS: string[];
    };
  }
}
