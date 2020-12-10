import { IAddress } from './IAddress';
import { IContact } from './IContact';

export interface ISite {
    id: string;
    clientId: string;
    title: string;
    createdAt?: string;
    updatedAt?: string;
    contacts: IContact;
    address: IAddress;
    images: Array<string>;
    tags: Array<string>;
}
