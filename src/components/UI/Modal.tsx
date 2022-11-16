import React from "react";
import { XCircle } from "react-feather";

export default function Modal({ Title, showModal, setShowModal, children }: any) {
  return (<>
    {showModal ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black" >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className=" relative flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-xl font-semibold">{Title}</h3>
                {/* <span className="absolute right-0 top-0 cursor-pointer" onClick={() => setShowModal(false)}>
                  <XCircle color="red" size={20} />
                </span> */}
              </div>
              {/*body*/}
              <div className="relative p-4">
                {children}
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-white" onClick={() => setShowModal(false)}></div>
      </>
    ) : null}
  </>
  )
}