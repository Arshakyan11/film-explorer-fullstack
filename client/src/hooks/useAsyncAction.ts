import { notifyForSmthBad, notifyForSmth } from "../helpers/notifyUser";

type AsyncActionOptions<T> = {
  action: () => Promise<T>;
  successMessage: (res: T) => string;
};

export const useAsyncAction = () => {
  const run = async <T>({
    action,
    successMessage,
  }: AsyncActionOptions<T>): Promise<T | null> => {
    try {
      const res = await action();
      notifyForSmth(successMessage(res));
      return res;
    } catch (error) {
      notifyForSmthBad(error as string);
      return null;
    }
  };
  return run;
};
