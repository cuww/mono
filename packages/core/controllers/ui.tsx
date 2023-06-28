const alwaysFalse = () => false;

type StateHandler = () => boolean;

export const useInterfaceState = (
    isSuccessHandler: StateHandler = alwaysFalse,
    isLoadingHandler: StateHandler = alwaysFalse,
    isErrorHandler: StateHandler = alwaysFalse,
    isEmptyHandler: StateHandler = alwaysFalse,
    isPartialHandler: StateHandler = alwaysFalse,
) => {
    const isLoading = isLoadingHandler();
    const isSuccess = !isLoading && isSuccessHandler();
    const isError = !isLoading && !isSuccess && isErrorHandler();
    const isEmpty = !isLoading && !isError && isEmptyHandler();
    const isPartial = !isLoading && !isSuccess && isPartialHandler();

    return {
        isSuccess,
        isLoading,
        isError,
        isEmpty,
        isPartial,
    }
}