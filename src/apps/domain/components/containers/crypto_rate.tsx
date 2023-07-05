import { Alert, Button, Space, Spin } from "antd"
import { FC } from "react"
import { CurrencySelector } from "../currency/selector"
import { getCurrencyRateService } from "@/apps/domain/services/currency"
import { fromCurrencyAtom, toCurrencyAtom } from "@/apps/domain/store/currency"
import { useAtomValue } from "jotai"
import { useDebounceEffect } from "ahooks"
import { FormattedNumber } from "react-intl"
import { useQueryController } from "@@/core/controllers"
import { track, trackEvent } from "@@/analytics"
import { ButtonClick } from "@/apps/domain/events/analytics/ButtonClick"
import { useInterfaceState } from "@@/core/controllers/ui"
import { InvalidCurrencyPair } from "../../errors/InvalidCurrencyPair"

export const CryptoRateContainer: FC = () => {
    const fromCurrencyValue = useAtomValue(fromCurrencyAtom)
    const toCurrencyValue = useAtomValue(toCurrencyAtom)

    const { run, context, loading, data, error } = useQueryController(() => {
        return getCurrencyRateService(fromCurrencyValue, toCurrencyValue)
    }, [
        InvalidCurrencyPair
    ])

    const { isSuccess, isError, isLoading, isEmpty } = useInterfaceState({
        isSuccess: () => !!data,
        isLoading: () => loading,
        isError: () => !!error,
        isEmpty: () => !data,
    });

    useDebounceEffect(
        () => {
            run();
        },
        [fromCurrencyValue, toCurrencyValue],
        {
            wait: 300,
        },
    );

    return (
        <Spin spinning={isLoading}>
            <Space size={10} direction={'vertical'}>
                {context}
                <Space>
                    <CurrencySelector atom={fromCurrencyAtom} />
                    <CurrencySelector atom={toCurrencyAtom} />
                </Space>
                <Button {...trackEvent('onClick', ButtonClick, () => {
                    return {
                        name: 'test',
                    }
                })}>Test Event</Button>
                {isEmpty && (
                    'No Data'
                )}
                {isError && (
                    'Error'
                )}
                {isSuccess && (
                    <Alert message={
                        <FormattedNumber value={data.price} currency="USD" style="currency" />
                   } />
                )}
            </Space>
        </Spin>
    )
}