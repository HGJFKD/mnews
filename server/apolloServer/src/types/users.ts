export type User = {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    phone: string,
    permissions: UserPermissionsEnum,
}

export enum UserPermissionsEnum {
    director = 'director',
    salesAgent = 'sales Agent',
    chiefGraphicArtist = 'chief graphic artist',
    subGraphicDesigner = 'sub graphic designer'
}


