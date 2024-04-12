import { Environment } from './environment.model';

export const envoronment:Environment = {
    production : false,
    api : '/api',
    auth : '',
    envName : 'RE7',
    version : require('../../package.json')?.version,
    matomoSiteID : 2,
    matomoSiteURL : '',
    MAIN_API_URL : '',
    API_CONST : {
        'ALL-PROJECT' : 'project/project-details'    //api url details
    }
}