const alwaysFalse = () => false;

type StateHandler = () => boolean;

type InterfaceProps = {
    isSuccess?: StateHandler,
    isLoading?: StateHandler,
    isError?: StateHandler,
    isEmpty?: StateHandler,
    isPartial?: StateHandler,
}

type InterfaceHook = (props: InterfaceProps) => {
    isSuccess: boolean,
    isLoading: boolean,
    isError: boolean,
    isEmpty: boolean,
    isPartial: boolean,
}
    

export const useInterfaceState: InterfaceHook = ({
    isSuccess = alwaysFalse,
    isLoading = alwaysFalse,
    isError = alwaysFalse,
    isEmpty = alwaysFalse,
    isPartial = alwaysFalse,
}) => {
    const isLoadingResult = isLoading();
    const isSuccessResult = !isLoadingResult && isSuccess();
    const isErrorResult = !isLoadingResult && !isSuccessResult && isError();
    const isEmptyResult = !isLoadingResult && !isErrorResult && isEmpty();
    const isPartialResult = !isLoadingResult && !isSuccessResult && isPartial();

    return {
        isSuccess: isSuccessResult,
        isLoading: isLoadingResult,
        isError: isErrorResult,
        isEmpty: isEmptyResult,
        isPartial: isPartialResult,
    }
}