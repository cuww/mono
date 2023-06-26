export class KeyBuilder {
    
    build(...args: any): string {
        return args.join('_');
    }

}