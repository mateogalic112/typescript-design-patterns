export interface User {
  username: string;
}

export interface AuthStrategy<T extends string[] = string[]> {
  authenticate(args: T): User | null;
}
