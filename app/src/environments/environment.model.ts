export interface Environment{
    production: boolean;
    api: string;
    auth: string;
    envName: string;
    version?: string;
    matomoSiteID: number;
    matomoSiteURL: string;
    MAIN_API_URL: string;
    API_CONST: any;

}