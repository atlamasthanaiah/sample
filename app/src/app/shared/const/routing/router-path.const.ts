export class RoutesPath {
    static Home = {
        base:{
            path: 'Home'
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
            path : 'not-authorized'
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
            path : 'conact'
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

        student : {
            path : 'student'
        },

        meditation : {
            path : 'meditation'
        },
    }

    static employee = {

        base : {
            path : 'gridTable'
        },

        employee : {
            path : 'employee'
        },

        meditation : {
            path : 'meditation'
        },
    }

    static estimation = {

        base : {
            path : 'estimation'
        },

        virtualscroll : {
            path: 'virtualscroll'
        },
        infinity_scroll:{
            path : 'infinityscroll'
        },
        result : {
            path : 'result'
        }
       
    }

    static TraingDetails = {

        base : {
            path : 'training'
        },

        liveproject : {
            path : 'liveproject'
        },
        intership : {
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