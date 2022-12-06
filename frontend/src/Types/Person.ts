<<<<<<< HEAD
import { OrderDetail } from "./OrderDetail";
=======
import { Order } from "./Order";
>>>>>>> 9fc0b33f91a120ad8cc614abd87ebe81c7827079

export interface Person{
    id: number;
	firstName: string;
	lastName:string;
	email:string;
	password:string;
	phone:string;
	image:string;
	theme:number;
<<<<<<< HEAD
	role: number;
	orders:OrderDetail[];
=======
	role: Role;
	orders: Order[]
}

export interface Role{
	roleId: number;
  role: string

>>>>>>> 9fc0b33f91a120ad8cc614abd87ebe81c7827079
}