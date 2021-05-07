import { AggregateRoot } from "../../shared/domain/AggregateRoot";

export class User extends AggregateRoot {

    private _id?: string;
    readonly userName: string;
    readonly email: number;
    readonly password: string;
    readonly accountStatus: string;

    constructor(userName: string, email: number, password: string) {
        super();
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    static create(userName: string, email: number, password: string): User {
        return new User(userName, email, password);
    }

    static fromPrimitive(plainData: { _id: string; name: string; price: number; description: string; image: string }): Product {
        const product = new Product(plainData.name, plainData.price, plainData.description, plainData.image)
        product.id = plainData._id;
        return product;
    }


    public set id(_id: string) {
        this._id = _id;

        // this.record(
        //     new UserCreatedDomainEvent({
        //         ...
        //     })
        // );
    }

    public get id(): string | undefined {
        return this._id;
    }



    toPrimitives(): Record<string, unknown> {
        return {
            _id: this._id,
            name: this.name,
            price: this.price,
            description: this.description,
            image: this.image
        };
    }
}