interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    category: 'regular' | 'business';
    discount?: number;
}

export default Customer