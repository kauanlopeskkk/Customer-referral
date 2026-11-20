export interface customer{
    id: string,
    name:string,
    email:string,
    referralCode:string,
    referredBy?: string,
    createdAt: Date;
}
