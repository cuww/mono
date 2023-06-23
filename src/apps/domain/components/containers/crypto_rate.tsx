import { Alert, Button, Space, Spin } from "antd"
import { FC } from "react"
import { CurrencySelector } from "../currency/selector"
import { getCurrencyRateService } from "@/apps/domain/services/currency"
import { fromCurrencyAtom, toCurrencyAtom } from "@/apps/domain/store/currency"
import { useAtomValue } from "jotai"
import { useDebounceEffect } from "ahooks"
import { FormattedNumber } from "react-intl"
import { InvalidCurrencyPair } from "@/apps/domain/errors/InvalidCurrencyPair"
import { useQueryController } from "@@/core/controllers"
import { track, trackEvent } from "@@/analytics"
import { ButtonClick } from "@/apps/domain/events/analytics/ButtonClick"

export const CryptoRateContainer: FC = () => {
    const fromCurrencyValue = useAtomValue(fromCurrencyAtom)
    const toCurrencyValue = useAtomValue(toCurrencyAtom)

    const { run, context, loading, data } = useQueryController(() => {
        return getCurrencyRateService(fromCurrencyValue, toCurrencyValue)
    }, [
        InvalidCurrencyPair
    ])

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
        <Spin spinning={loading}>
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
                {data?.price && <Alert message={
                     <FormattedNumber value={data.price} currency="USD" style="currency" />
                } />}
            </Space>
        </Spin>
    )
}