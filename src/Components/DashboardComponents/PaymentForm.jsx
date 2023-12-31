import React from 'react'

const PaymentForm = () => {
    return (
        <>
            <div className="max-w-2xl mx-auto mt-20 bg-white rounded-md shadow-md overflow-hidden">
                <div className="px-6 py-4 bg-brandPrimary text-white">
                    <h1 className="text-lg font-bold font-inter uppercase">
                        Payment Information
                    </h1>
                </div>

                <form className="px-6 py-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 font-inter" htmlFor="card-number">
                            Card Number*
                        </label>
                        <input
                            className="appearance-none border border-[#E8E8E8] rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="card-number"
                            type="text"
                            required
                            placeholder="**** **** **** ****"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 font-inter" htmlFor="expiration-date">
                            Expiration Date*
                        </label>
                        <input
                            className="appearance-none border border-[#E8E8E8] rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="expiration-date"
                            type="text"
                            required
                            placeholder="MM/YY"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-inter text-gray-700 font-bold mb-2" htmlFor="cvv">
                            CVV*
                        </label>
                        <input
                            className="appearance-none border border-[#E8E8E8] rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cvv"
                            type="text"
                            required
                            placeholder="***"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 font-inter" htmlFor="cardholder-name">
                            Cardholder Name*
                        </label>
                        <input
                            className="appearance-none border border-[#E8E8E8] rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            required
                            placeholder="Full Name"
                        />
                    </div>
                    <button type='submit' className="bg-brandSecoundry hover:bg-brandSecoundry/90 duration-300  text-white font-bold py-3 px-6 rounded-lg font-inter uppercase ">
                        Pay Now
                    </button>
                </form>

            </div>
        </>
    )
}

export default PaymentForm