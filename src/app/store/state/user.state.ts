import {IUser} from '../../models/user.interface';

export interface IUserState {
    users: IUser[];
    selectedUser: IUser;
}

const user1 = {
    id: 1,
    name: 'Sean',
    cardNumber: '111',
    cardType: '12211'
};

const user2 = {
    id: 2,
    name: 'Roy',
    cardNumber: '2112111',
    cardType: '1fdfdfd2211'
};

export const initialUserState: IUserState = {
    users: [user1,user2],
    selectedUser: null
};
