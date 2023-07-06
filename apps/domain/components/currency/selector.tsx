import { useSelectController } from "@apps/domain/controllers/select";
import { BinanceCurrency } from "@apps/domain/store/currency";
import { Select } from "antd"
import { CurrencyPath } from "../../messages";
import { LabelView } from "../../views/label";

export const CurrencySelector = ({ atom }: any) => {
    const [_a, _b, selectProps] = useSelectController(atom, BinanceCurrency, {
        labelRender: (value: string) => {
            return (
                <LabelView value={`${CurrencyPath}.${value}`} />
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