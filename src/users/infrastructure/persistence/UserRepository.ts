
export interface UserRepository {
    save(product: User): Promise<string | null>;
}