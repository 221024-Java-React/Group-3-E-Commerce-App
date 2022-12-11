import { Order } from "./Order";
import { PAddress } from "./PAddress";

export interface Person{
    customerId: number;
	name: string;
	email:string;
	password:string;
	phone:string;
	image:string;
	theme:Theme;
	role: Role;
	orders: Order[];
	address?:PAddress;
}
export interface Role{
	roleId: number;
  role: string

}

export interface Theme{
themeId: number,
theme: string
}