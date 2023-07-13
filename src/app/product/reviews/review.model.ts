export class Review{
    constructor(
        public customerId: string,
        public rating: number,
        public date: string,
        public headline: string,
        public content: string,
        public status: string
    ){}
}