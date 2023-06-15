import { useAtom } from "jotai"
import { LabelView } from "../views/string";

export type IOptions = {
    labelRender?: any,    
}

export const getSelectOptions = (myEnum: any, opts?: IOptions): any => {
    let values = [];
    for (var enumMember in myEnum) {
        values.push({
            label: opts?.labelRender(myEnum[enumMember]) || <LabelView value={myEnum[enumMember]} />,
            value: enumMember,
        })
    }
    return values;
}

export const useSelectController = (atom: any, myenum: any, opts?: IOptions): any => {
    const [value, setValue] = useAtom(atom)
    const options = getSelectOptions(myenum, opts)

    const onChange = (value: string) => {
        setValue(value);
    }

    return [
        value,
        setValue, {
            options,
            value,
            defaultValue: value,
            onChange,
        }];
}