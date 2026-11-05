/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL de l'API qui reçoit le formulaire de contact (backend). Sans elle, le formulaire ouvre la messagerie. */
  readonly VITE_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
