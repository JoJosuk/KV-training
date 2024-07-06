declare namespace NodeJS {
  interface ProcessEnv {
    "PG-USERNAME": string;
    "PG-PASSWORD": string;
    "JWTSECRETKEY": string;
    "PG_PORT": string;
    "PG_DATABASE ": string;
  }
}
