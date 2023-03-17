export type Context<Params = KeyValue> = {
  params: Params;
};

type KeyValue = {
  [key: string]: string;
};
