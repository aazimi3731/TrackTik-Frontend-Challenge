import { IAddress } from './IAddress';

export interface IContact {
    main: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        jobTitle: string;
        address: IAddress;
    };
}
