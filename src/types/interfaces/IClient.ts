export interface IClient {
    id: string;
    givenName: string;
    logo: string;
    createdAt?: string;
    updatedAt?: string;
    tags: Array<string>;
}
