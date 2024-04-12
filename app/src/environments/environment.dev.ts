import { Environment } from './environment.model';

export const environment: Environment = {

    api:'http:localhost:8080/v1',
    envName : 'DEV',
    production : false,
    auth : '',
    version : require('../../packaje.json')?.version,
    matomoSiteID : 0, // need o check why it change re7 env and prod environment ( matomoSiteID value )
    matomoSiteURL : '',
    MAIN_API_URL : 'http:localhost:8080/v1',
    API_CONST : {
        'ALL-PROJECT' : 'project/project-details'    //api url details
        // have to add all api details
    }
};