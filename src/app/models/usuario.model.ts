export class Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public password: string,
    public dia?: number,
    public mes?: number,
    public ano?: number,
    public codigo_postal?: string,
    public img?: string,
    public role?: string,
    public google?: boolean,
    public _id?: string
  ) {}
}
