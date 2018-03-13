interface CompanyInterface {
  name: string,
  catchPhrase: string,
  bs: string
}

export interface UserInterface {
  id: number,
  name: string,
  username: string,
  email: string,
  address: string,
  phone: string,
  website: string,
  company: {
    [key: string]: CompanyInterface
  }
}
