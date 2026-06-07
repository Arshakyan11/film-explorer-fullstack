export const errorThrower = (text: string, status: number = 400): never => {
  const err = new Error(text);
  (err as any).status = status;
  throw err;
};
