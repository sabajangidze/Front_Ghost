import React, { useEffect, useState } from 'react'
import { OrderStatus } from '../../../../../types/OrderStatus';
import Post from '../../../../../types/Post';
import { FetchPosts } from '../../../../../api/FetchInformation';
import Autocomplete from '../../../../../components/Inputs/Autocomplete/Autocomplete';

import { AddOrder as AddOrderFunction } from '../../../../../api/PostInformation';

function AddOrder() {
    const [amount, setAmount] = useState("");
    const [paymentDate, setPaymentDate] = useState(new Date().toISOString());
    const [iBan, setIBan] = useState("");
    const [status, setStatus] = useState<OrderStatus>(OrderStatus.Paid);
    const [post, setPost] = useState("");
  
    const [allPosts, setAllPosts] = useState<Post[]>([]);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      AddOrderFunction(amount, paymentDate, iBan, status, post );
    };
  
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const postData = await FetchPosts();
          setAllPosts(postData);

          
          
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
  
      fetchData();
    }, []);
      // console.log(status);
  
  
    return (
      <div className="grid grid-cols-1 gap-4 overflow-y-auto">
        <h1 className="font-bold">დაამატე გადახდა</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="დასახელება"
            className="input input-bordered w-full"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="აღწერა"
            className="input input-bordered w-full"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="აღწერა"
            className="input input-bordered w-full"
            value={iBan}
            onChange={(e) => setIBan(e.target.value)}
          />
          <select
            className="select select-bordered w-full"
            value={status}
            onChange={(e) => setStatus(Number(e.target.value))}
          >
            <option disabled>
              აირჩიე სტატუსი
            </option>
            <option value={OrderStatus.Paid} onClick={() => setStatus(OrderStatus.Paid)}>გადახდილია</option>
            <option value={OrderStatus.Cancelled} onClick={() => setStatus(OrderStatus.Cancelled)}>გაუქმებული</option>
          </select>
  
          
          {allPosts && 
          <Autocomplete items={allPosts.map((post) => post.id)} onChange={setPost} value={post} label={"მოძებნე პოსტი"}></Autocomplete>}
  
          
  
          <button className="btn" type="submit">
            დადასტურება
          </button>
        </form>
      </div>
    );
}

export default AddOrder