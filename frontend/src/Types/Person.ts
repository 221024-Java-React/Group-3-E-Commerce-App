import { Order } from "./Order";

export interface Person{
    id: number;
	firstName: string;
	lastName:string;
	email:string;
	password:string;
	phone:string;
	image:string;
	theme:number;
	role: Role;
	orders: Order[]
}

export interface Role{
	roleId: number;
  role: string

}