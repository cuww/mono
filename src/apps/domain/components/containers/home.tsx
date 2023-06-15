import { useQueryController } from "@/apps/domain/controllers/query"
import { Alert, Space, Spin } from "antd"
import { FC, useEffect } from "react"
import { CurrencySelector } from "../currency/selector"
import { getCurrencyRateService } from "@/apps/domain/services/currency"
import { fromCurrencyAtom, toCurrencyAtom } from "@/apps/domain/store/currency"
import { useAtomValue } from "jotai"
import { useDebounceEffect } from "ahooks"
import { FormattedNumber } from "react-intl"

export const HomeContainer: FC = () => {
    const fromCurrencyValue = useAtomValue(fromCurrencyAtom)
    const toCurrencyValue = useAtomValue(toCurrencyAtom)

    const { run, context, loading, data } = useQueryController(() => {
        return getCurrencyRateService(fromCurrencyValue, toCurrencyValue)
    })

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
                {data?.price && <Alert message={
                     <FormattedNumber value={data.price} currency="USD" style="currency" />
                } />}
            </Space>
        </Spin>
    )
}