import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class UniqueIdService {

    private numberofGeneratedIds = 0;

    public generateUniqueIdWithPrefix(prefix: string): string {
        if (!prefix) {
            throw Error('Prefix can not be empty');
        }
        const uniqueId = this.generateUniqueId();
        this.numberofGeneratedIds++;
        return `${prefix}-${uniqueId}`;
    }
    
    public getNumberOfGenerateUniqueIds(): number {
        return this.numberofGeneratedIds;
    }

    private generateUniqueId(): string {
        return uuidv4();
    }
}