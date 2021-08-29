import {
    addCompany,
    addNewBooksToUser, changeBook, changeCompany,
    makeHairstyle,
    moveUserToOtherCity, moveUserToOtherHouse, removeBook,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";

beforeEach(() => {
    const user: UserWithLaptopType & UserWithBooksType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'react']
    }
})

test('Reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }
    let awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})
test('Change City address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }
    let movedUser = moveUserToOtherCity(user, 'Kiev')

    // user = movedUser

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.title).toBe('Kiev')
    expect(user.laptop).toBe(movedUser.laptop)
})
test('Change House number address', () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'react']
    }
    let movedUser = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.house).toBe(99)
    expect(user.address.house).toBe(12)
    expect(user.books).toBe(movedUser.books)
    expect(user.laptop).toBe(movedUser.laptop)
})
test('Upgrade User Laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }
    let UserCopy = upgradeUserLaptop(user, 'Macbook')


    expect(user).not.toBe(UserCopy)
    expect(user.laptop).not.toBe(UserCopy.laptop)
    expect(user.address).toBe(UserCopy.address)
    expect(UserCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Zenbook')
})
test('Add new books to User', () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'react']
    }

    let UserCopy = addNewBooksToUser(user, ['angular', 'rest api'])

    expect(user).not.toBe(UserCopy)
    expect(user.laptop).toBe(UserCopy.laptop)
    expect(user.address).toBe(UserCopy.address)
    expect(user.books).not.toBe(UserCopy.books)
    expect(user.books[4]).toBe(undefined)
    expect(UserCopy.books[4]).toBe('angular')
    expect(UserCopy.books[5]).toBe('rest api')
    expect(UserCopy.books[6]).toBe(undefined)
})
test('Change js to ts book to User', () => {

    const user: UserWithLaptopType & UserWithBooksType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'react']
    }

    let UserCopy = changeBook(user, 'js', 'ts')

    expect(user).not.toBe(UserCopy)
    expect(user.laptop).toBe(UserCopy.laptop)
    expect(user.address).toBe(UserCopy.address)
    expect(user.books.length).toBe(4)
    expect(UserCopy.books.length).toBe(4)
    expect(user.books[2]).toBe('js')
    expect(UserCopy.books[2]).toBe('ts')

})
test('Remove book User', () => {

    const user: UserWithLaptopType & UserWithBooksType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['html', 'css', 'js', 'react']
    }

    let UserCopy = removeBook(user, 'js')

    expect(user).not.toBe(UserCopy)
    expect(user.laptop).toBe(UserCopy.laptop)
    expect(user.address).toBe(UserCopy.address)
    expect(user.books.length).toBe(4)
    expect(UserCopy.books.length).toBe(3)
    expect(user.books[2]).toBe('js')
    expect(UserCopy.books[2]).toBe('react')

})
test('Add company User', () => {

    const user: UserWithLaptopType & WithCompaniesType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [{id: 1, title: 'EPAM'},{id: 2, title: 'IT-INCUBATOR'}]
    }

    let UserCopy = addCompany(user, 'EPAM')

    expect(user).not.toBe(UserCopy)
    expect(user.laptop).toBe(UserCopy.laptop)
    expect(user.address).toBe(UserCopy.address)
    expect(user.companies).not.toBe(UserCopy.companies)
    expect(user.companies.length).toBe(2)
    expect(UserCopy.companies.length).toBe(3)
    expect(UserCopy.companies[2].title).toBe('EPAM')
})
test('Change company User', () => {

    const user: UserWithLaptopType & WithCompaniesType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [{id: 1, title: 'EPAM'},{id: 2, title: 'IT-INCUBATOR'}]
    }

    let UserCopy = changeCompany(user, 'EPAM', 'GOOGLE') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(UserCopy)
    expect(user.laptop).toBe(UserCopy.laptop)
    expect(user.address).toBe(UserCopy.address)
    expect(user.companies).not.toBe(UserCopy.companies)
    expect(user.companies.length).toBe(2)
    expect(UserCopy.companies.length).toBe(2)
    expect(UserCopy.companies[0].title).toBe('GOOGLE')
})