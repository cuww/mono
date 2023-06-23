import { env } from "@@/runtime-env"

export default {
    NEXT_PUBLIC_TEST: env('NEXT_PUBLIC_TEST', 'no value'),
    NEXT_PUBLIC_WEBPACK: env('NEXT_PUBLIC_WEBPACK', 'no value'),
    APP_NAME: env('APP_NAME', 'no value'),
}