import React from "react";
import {strict} from "assert";

const increaseAge = (u: userType) => {
    u.age = u.age + 1;
}

type userType = {
    name: string,
    age: number,
    address?: {title: string}
}


test('reference type test', () => {
    let User: userType = {
        name: 'Artem',
        age: 36,
    }
    increaseAge(User);
    let superman = User
    superman.age = 1000;
    expect(User.age).toBe(1000)
})

test('Array reference test', () => {

    let Users = [
        {
        name: 'Artem',
        age: 36
        },
        {
        name: 'Bobik',
        age: 23
        }
    ]

    let admins = Users;

    admins.push({name: 'Bandyugan', age: 10})

    expect(Users[2]).toEqual({name: 'Bandyugan', age: 10})
})

test('Value reference test', () => {

    let UsersCount = 100

    let AdminsCount = UsersCount;

    AdminsCount = AdminsCount + 1;

    expect(UsersCount).toBe(100)
    expect(AdminsCount).toBe(101)
})

test('reference hard type test', () => {
    let User: userType = {
        name: 'Artem',
        age: 36,
        address: {
            title: 'Ryazan'
        }
    }

    let User2: userType = {
        name: 'Masha',
        age: 35,
        address: User.address
    }

    User2.address!.title = 'Kanary'


    expect(User.address!.title).toBe('Kanary')
})