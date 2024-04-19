import React, { useEffect, useState } from 'react'
import Order from '../../../../types/Order';
import { FetchOrders } from '../../../../api/FetchInformation';
import TableHead from './TableHead';
import TableRow from './TableRow';

function PaymentsTable() {
  const [orders, setOrders] = useState<Order[]>([]); // Use [] instead of null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchOrders();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, []);

  console.log(orders);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <TableHead />
        <tbody>
          {orders &&
            orders.map((order, index) => (
              <TableRow
                key={order.id}
                id={order.id}
                amount={order.amount}
                iBan={order.iBan}
                paymentDate={order.paymentDate}
                status={order.status}
                post={order.post}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentsTable