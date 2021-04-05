import { Injectable } from '@angular/core';
import { GlobalConstants } from './GlobalConstants';

@Injectable()
export class GlobalMethods {

    public static getError(error: any) {

        if (error.status != undefined) {
            let status = error.status;

            switch (status) {
                case 404: case 0: return error.message;
                case 500: return check500 (error);
                default: break;
            }

        }

        else if (error.message != undefined) {
            return error.message;
        }
        
        else {
            return error;
        }

    }

}

function check500 (error: any) {
    if (error.error != undefined) {
        if (error.error.message != undefined) {
            let errorMessage = error.error.message;
            let isCovidBE = GlobalConstants.COVID_APP;
            let isBEMessage = errorMessage.indexOf(isCovidBE);

            if (isBEMessage) {
                return errorMessage;
            }
        }

        return error.error;
    }
}
