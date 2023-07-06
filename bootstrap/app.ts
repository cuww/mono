import { Application } from '@cuww/app/src/index'
import AppConfig from "@config/app";

/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
*/
const app = new Application(AppConfig as any);

/*
|--------------------------------------------------------------------------
| Register Applications
|--------------------------------------------------------------------------
|
*/
import { boot as DomainAppBoot } from '@apps/domain'

app.addDomain('Domain', DomainAppBoot);

export {
    app
}