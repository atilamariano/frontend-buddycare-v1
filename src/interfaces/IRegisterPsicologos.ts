export interface IRegisterPsicologos {
  name: string;
  email: string;
  password: string;
  crp?: string;
  phone?: string;
  cep?: string;
  clinicAddress?: string;
  startingTime?: string;
  endTime?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
