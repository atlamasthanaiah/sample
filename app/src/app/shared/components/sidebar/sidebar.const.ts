import { RoutesPath } from "../../const/routing/router-path.const";
 export interface SidenavRoutes {
    route? : string;
    icon? : string;
    title? : string;
    type? : string
 }
export const appWorkSpaceRoutes : SidenavRoutes [] = [
    {
        icon : 'home',
        route : RoutesPath.Home.base.path,
        title : 'BASIC_HOME',  /// we csn find this in en.json file (same name for language translation)
        type : 'link'
    },
    {
        // icon : 'home',
        icon : 'crate-project',
        route : RoutesPath.sideNav.base.path+ '/'+ RoutesPath.sideNav.CREATE_PROJECT.path,
        // route : '${RoutesPath.sideNav.base.path}/${RoutesPath.sideNav.CREATE_PROJECT.path}',
        title : 'CREATE_PROJECT',  /// we csn find this in en.json file (same name for language translation)
        type : 'link'
    },
    {
        // icon : 'home',
        icon : 'all-project',
        route : RoutesPath.sideNav.base.path + '/' + RoutesPath.sideNav.ALL_PROJECT.path,
        // route : '${RoutesPath.sideNav.base.path}/${RoutesPath.sideNav.ALL_PROJECT.path}',
        title : 'ALL_PROJECT',  /// we csn find this in en.json file (same name for language translation)
        type : 'link'
    },
    {
        // icon : 'home',
        icon : 'dmm-offers',
        route : RoutesPath.sideNav.base.path + '/'+ RoutesPath.sideNav.DMM_OFFER.path,
        // route : '${RoutesPath.sideNav.base.path}/${RoutesPath.sideNav.DMM-OFFER.path}',
        title : 'DMM_OFFER',  /// we csn find this in en.json file (same name for language translation)
        type : 'link'
    },
    {
        // icon : 'create-project',
        icon : 'course',
        route : RoutesPath.sideNav.base.path + '/'+ RoutesPath.sideNav.COURSE.path,
        // route :'${RoutesPath.sideNav.base.path}/${RoutesPath.sideNav.COURSE.path} ,
        title : 'STD_COUSR',   /// we csn find this in en.json file (same name for language translation)
        type : 'link'
    },
    {
       
        icon : 'contact',
        route : RoutesPath.sideNav.base.path + '/' + RoutesPath.sideNav.CONTACT.path,
        // route : '${RoutesPath.sideNav.base.path}/${RoutesPath.sideNav.CONTACT.path}',
        title : 'CONTACT',  /// we can find this in en.json file (same name for language translation)
        type : 'link'
    }
   
]