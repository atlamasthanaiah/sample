
import { Environment } from "./environment.model";

export const environment: Environment = {

    production : false,
    api : 'http://localhost:3000',
    auth : 'http://localhost:3000',
    envName : 'DEV',
    version : require('../../package.json')?.version,
    matomoSiteID : 0,
    matomoSiteURL : '',
    MAIN_API_URL : '',
    API_CONST : {
        'ALL-PROJECT' : 'project/project-details'    //api url details
        // have to add all api details
    }

}


// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
