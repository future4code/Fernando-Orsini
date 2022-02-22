import {v4} from "uuid"

export class IdGenerated {
    generateId = ():string => v4();  
}