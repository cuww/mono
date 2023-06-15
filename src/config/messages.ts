import { DomainMessages } from "@/apps/domain/interface";


const flatten = (messages: any) => {
    var res: any = {};

    function handler(obj: any, current?: any) {
        for (var key in obj) {
            var value = obj[key];
            var newKey = (current ? current + "." + key : key);  // joined key with dot
            if (value && typeof value === "object") {
                handler(value, newKey);  // it's a nested object, so do it again
            } else {
                res[newKey] = value;  // it's not an object, so set the property
            }
        }
    }

    handler(messages);

    return res;
}

export default {
    ...flatten(DomainMessages),
} as any