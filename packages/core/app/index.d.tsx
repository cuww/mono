import { IService } from "../services"

export type ExposedServices = {
    [key: string]: IService
}