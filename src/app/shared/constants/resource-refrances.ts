import { environment } from "@app/environments/environment";

export class ApiUrl {
    static backendUrl =  `${environment.backend_url}`;
    static article =  'article';
    static create =  'create';
}