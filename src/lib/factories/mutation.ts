import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export function createMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>({
  mutationFn,
  ...configs
}: UseMutationOptions<TData, TError, TVariables, TContext>) {
  return function (
    options?: Omit<
      UseMutationOptions<TData, TError, TVariables, TContext>,
      "mutationFn"
    >
  ) {
    if (options) {
      // @ts-expect-error guarantee for runtime
      delete options?.mutationFn;
    }

    return useMutation<TData, TError, TVariables, TContext>({
      ...configs,
      ...options,
      onSuccess(...args) {
        configs?.onSuccess?.(...args);
        options?.onSuccess?.(...args);
      },
      onError(...args) {
        configs?.onError?.(...args);
        options?.onError?.(...args);
      },
      onSettled(...args) {
        configs?.onSettled?.(...args);
        options?.onSettled?.(...args);
      },
      mutationFn,
    });
  };
}
