import { useSelectController } from "@/apps/domain/controllers/select";
import { BinanceCurrency } from "@/apps/domain/store/currency";
import { Select } from "antd"
import { CurrencyPath } from "../../messages";
import { FormattedMessage } from "react-intl";

export const CurrencySelector = ({ atom }: any) => {
    const [_a, _b, selectProps] = useSelectController(atom, BinanceCurrency, {
        labelRender: (value: string) => {
            return (
                <FormattedMessage id={`${CurrencyPath}.${value}`} />
            )
        }
    });

    return (
        <Select
            {...selectProps}
            dropdownStyle={{ minWidth: 200 }}

        />
    )
}