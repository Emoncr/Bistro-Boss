import React from 'react'

const PaymentTable = () => {
    return (
        <>
            <div className="max-w-full mx-auto">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:rounded-t-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead className="bg-brandPrimary text-white font-inter font-semibold">
                                        <tr >
                                            <th
                                                scope="col"
                                                className="py-5 px-6 text-xs font-medium tracking-wider text-left   uppercase dark:text-gray-400"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-5 px-6 text-xs font-medium tracking-wider text-left   uppercase dark:text-gray-400"
                                            >
                                                Category
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-5 px-6 text-xs font-medium tracking-wider text-left   uppercase dark:text-gray-400"
                                            >
                                                Total Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-5 px-6 text-xs font-medium tracking-wider text-left   uppercase dark:text-gray-400"
                                            >
                                                Date
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className=" divide-y divide-[#E8E8E8]  text-[#737373] ">
                                        <tr >
                                            <th
                                                scope="col"
                                                className="py-5 px-6 text-xs font-medium tracking-wider text-left     dark:text-gray-400"
                                            >
                                                biplob@gmail.com
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-5 px-6 text-xs font-medium tracking-wider text-left    dark:text-gray-400"
                                            >
                                                Cart
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-5 px-6 text-xs font-medium tracking-wider text-left   uppercase dark:text-gray-400"
                                            >
                                               $445
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-5 px-6 text-xs font-medium tracking-wider text-left   uppercase "
                                            >
                                                Mon,22/4/24
                                            </th>

                                        </tr>
                                        <tr >
                                            <th
                                                scope="col"
                                                className="py-5 px-6 text-xs font-medium tracking-wider text-left     dark:text-gray-400"
                                            >
                                                biplob@gmail.com
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-5 px-6 text-xs font-medium tracking-wider text-left    dark:text-gray-400"
                                            >
                                                Cart
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-5 px-6 text-xs font-medium tracking-wider text-left   uppercase dark:text-gray-400"
                                            >
                                               $445
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-5 px-6 text-xs font-medium tracking-wider text-left   uppercase "
                                            >
                                                Mon,22/4/24
                                            </th>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentTable