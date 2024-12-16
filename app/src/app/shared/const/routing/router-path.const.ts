export class RoutesPath {
    static Home = {
        base:{
            path: 'Home'
        },
        // home:{
        //     path: 'home'
        // },
        signin:{
            path: 'signin'
        },
        login:{
            path: 'login'
        }
    };
    static PATHMATCH = 'full';
    static WILDCARD = '**'; 
    // if u add more than 2 * symbol. pagenotfound should not display
    static PATHMATCH_PREFIX = 'prefix';

    static PAGE_NOT_FOUND = {
        BASE :{
            label : 'Page Not Found',
            path: 'page-not-found'
            // path : '404'
        }
    };

    static NOT_AUTHORIZED = {
        BASE : {
            label : 'Not Authorized',
            path : 'access-denied'

            // path : 'not-authorized'
        }
    };
    
    static sideNav = {
        base:{
           path : 'project'
        },
        
        ALL_PROJECT: {
            path : 'all-project',
        },
        DMM_OFFER: {
            path : 'dmm-offer',
        },
        COURSE : {
            path : 'course',
        },
        
        CONTACT : {
            path : 'contact'
        },
        CREATE_PROJECT: {
            path : 'create-project',
        },
       
        vehicle : {
            path : 'vehicle'
        },
        help : {
            path : 'help'
        }
    };

    static student = {

        base : {
            path : 'student'
        },

        stdregistration : {
            path : 'stdregistration'
        },

        meditation : {
            path : 'meditation'
        },
    }

    static employee = {

        base : {
            path : 'employee'
        },

        emptable : {
            path : 'emptable'
        },

        addemployee : {
            path : 'addemployee'
        },

        meditation : {
            path : 'meditation'
        },
    }

    static estimation = {

        base : {
            path : 'estimation'
        },

        n2estimation : {
            path: 'n2estimation'
        },
        n3estimation:{
            path : 'n3estimation'
        },
        result : {
            path : 'result'
        }
       
    }

    static traingDetails = {

        base : {
            path : 'training'
        },

        liveproject : {
            path : 'liveproject'
        },
        internship : {
            path : 'internship'
        },
        meditation : {
            path : 'meditation'
        },
    }

    static HRDetail = {
        base : {
            path : 'HRDetails'
        },

        hr : {
            path : 'hr'
        },
    }
}