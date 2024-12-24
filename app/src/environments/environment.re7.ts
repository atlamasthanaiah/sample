import { Environment } from './environment.model';

export const environment:Environment = {
    production : false,
    api : '/api',
    auth : '',
    envName : 'RE7',
    version : require('../../package.json')?.version,
    matomoSiteID : 2,
    matomoSiteURL : '',
    MAIN_API_URL : 'http://atla-api.re7.applis.atlainstitute.fr',
    API_CONST : {
        'ALL-PROJECT' : 'project/project-details'    //api url details
    }
}

