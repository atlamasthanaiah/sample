import { Environment } from './environment.model';

export const environment:Environment = {
    production : true,
    api: '/api',
    auth: '',
    envName: 'prod',
    version: require('../../package.json')?.version,
    matomoSiteID : 2,
    matomoSiteURL :'',
    MAIN_API_URL: 'http://atla-api.prod.applis.atlainstitute.fr',
    API_CONST : {
        'ALL-PROJECT' : 'project/project-details' ,   //api url details
        'DMM-OFFER'   :  'project/dmm-offerdetails',
        'CREATE-PROJECT' : 'project/create-project',
        'STUDENT-LIST' : 'student/student-list',
        'EMPLOYEE-DETAILS' : 'estimation/employee-details'
    }

}