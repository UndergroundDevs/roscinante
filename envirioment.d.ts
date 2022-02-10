declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL: string;
      PASS: string;
      SMTP: string;
      URL: string;
      PORT: number;
    }
  }
}

export { }