import { RiGhost2Fill } from "react-icons/ri";
import { useNavigate } from "react-router";

function SuccessfulOrderModal() {
    const navigate = useNavigate();
  return (
    <>
      <dialog
        id="successfulOrder_modal"
        className="modal modal-bottom sm:modal-middle sm:min-w-[70vw] z-50"
      >
        <div className="modal-box sm:min-w-[70vw]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-gray-300"
              id="successfulOrderModal-close"
            >
              ✕
            </button>
          </form>
          <div className="text-center flex flex-col items-center">
            <RiGhost2Fill size={'100%'} className="h-48 w-48 text-main-purple" />
            <h1 className="text-main-purple font-bold text-2xl my-4">თქვენი შეკვეთა მიღებულია!</h1>
            <h4 className="text-main-purple text-sm my-2 font-bold">ჩვენი თანამშრომელი უმოკლესს დროში შეაფასებს თქვენს საჭიროებებს და დაგიკავშირდებათ ფასით!</h4>
            <h4 className="text-main-purple text-sm my-4">თქვენი შეკვეთების სანახავად, გადადით გვერდზე სახელად "ჩემი შეკვეთები"</h4>
            <button className="btn w-full bg-main-purple text-white hover:bg-main-red"
            onClick={() => navigate('/my-orders')}
            >
                ჩემი შეკვეთები
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default SuccessfulOrderModal;
