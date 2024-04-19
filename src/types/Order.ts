import { OrderStatus } from "./OrderStatus";
import Post from "./Post";

export default interface Order {
    id: string;
    amount: number;
    paymentDate: string;
    iBan: string;
    status: OrderStatus;
    post: Post;
}