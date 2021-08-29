export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}

export function makeHairstyle(u: UserType, power: number) {
    return  {...u, hair: u.hair/2}
}
export const moveUserToOtherCity = (u: UserWithLaptopType , city: string) => {
    return {...u, address: {...u.address, title: city}}
}
export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBooksType , house: number) => {
    return {...u, address: {...u.address, house: house}}
}
export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {...u, laptop: {...u.laptop, title: laptop}}
}
export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooksType, newBooks: string[] ) => {
    let copyUser = {...u, books: [...u.books]}
    copyUser.books.push(...newBooks)
    return copyUser
}
export const changeBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) =>
    ({...u, books: u.books.map(b => b === oldBook ? b = newBook : b)})
export const removeBook = (u: UserWithLaptopType & UserWithBooksType, book: string) =>
    ({...u, books: u.books.filter(b => b !== book)})
export const addCompany = (u: UserWithLaptopType & WithCompaniesType, newCompany: string) => (
    {...u, companies: [...u.companies, {id: 3, title: newCompany}]}
)
// export function changeCompany(u: UserWithLaptopType & WithCompaniesType, oldCompany: string, newCompany: string) {
//     let copyUser = {...u}
//     copyUser.companies = [...u.companies]
//     let updateCompanies = copyUser.companies.map(cmp => {
//         if (cmp.title === oldCompany) {
//             cmp.title = newCompany
//             return cmp
//         } else return cmp
//     })
//     copyUser.companies = updateCompanies
//     return copyUser
// }
export const changeCompany = (u: WithCompaniesType, oldCompany: string, newCompany: string) => (
    {...u, companies: u.companies.map(cmp => cmp.title === oldCompany ? {...cmp, title: newCompany} : cmp)}
)

