"use client";

import { GET_CHANNELS } from '@/apollo/query';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { mockedResponse } from '../../mockdata';

export const satsToBtc = (sats: number, decimal = 2) => {
    if (!(Number(sats) > 0)) return "0";
    return (Number(sats) / 100000000).toFixed(decimal);
}

const OffersTable = () => {
    const [offers, setOffers]:Array<any> = React.useState(mockedResponse);
    const { data, loading, error } = useQuery(GET_CHANNELS);

    useEffect(() => {
        if (data) {
            console.log(data.getOffers.list);
            setOffers(data.getOffers.list);
        }
    }, [data]);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    return (
        <>
            <div className='flex w-full'>
                <div className='flex w-full justify-between'>
                    <h1 className='text-4xl font-bold'>Explore Offers ({offers.length})</h1>
                </div>
                <div className='flex float-right'>
                    <button className='w-[200] p-2 bg-black mx-5 text-white rounded-md bold amboss-border'>
                        <a href="/sell">Sell Channels</a>
                    </button>
                    <button className="w-[200] p-2 bg-white text-black rounded-md bold amboss-border">
                        <a href="/sell">Buy Channels</a>
                    </button>
                </div>
                </div>
        
            <div className='table-wrapper mt-10 w-full'>
                <table className='w-full amboss-border border-collapse table-auto'>
                    <thead>
                        <tr>
                            <th className='rounded-tl-lg'></th>
                            <th></th>
                            <th>Cost</th>
                            <th></th>
                            <th>Promises</th>
                            <th></th>
                            <th>APR</th>
                            <th></th>
                            <th>Size Limits</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr className='font-secondary amboss-border-bottom'>
                                <th className='pl-8'>Seller</th>
                                <th className="flex items-center pt-5 relative group w-40">
                                    <div className="mr-2">Seller Score</div>
                                    <Image src="/info.svg" alt="info" width={20} height={20} />
                                    <div className="absolute w-120 left-1/2 transform -translate-x-1/2 top-15 mt-2 bg-gray-700 text-white text-sm p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        Based on the number of successful transactions.
                                    </div>
                                </th>
                                <th>Fixed (sats)</th>
                                <th>Max Fee Rate (ppm)</th>
                                <th>Min Channel Age</th>
                                <th>Variable (ppm)</th>
                                <th>Min (APR)</th>
                                <th>Max (APR)</th>
                                <th>Min (Size limits)</th>
                                <th>Max (Size limits)</th>
                                <th>Available Liquidity</th>
                                <th>History</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offers.map((offer:any) => (
                        <tr className='tr-bg' key={offer.id}>
                            <td className='flex items-center w-90'>
                                <div className='flex items-center ml-5'>
                                    <Image src="/pfp1.png" alt="pfp" width={40} height={40} className="rounded-full" />
                                </div>
                                <div className='m-2 w-60'>
                                    <div>{offer?.name || "⚡ G-Spot-21_69..."}</div>
                                    <div className='flex my-1'>
                                    {offer.tags?.map((tag:any) => {
                                        if (tag.name === 'Node Runner') {
                                            return <span key={offer.i + "_node"} className='text-lime-400 bold border-4 border-lime-400 rounded-lg px-2 mx-1'>{tag.name}</span>
                                        } else if (tag.name === 'Fast') {
                                            return <span key={offer.id + "_fast"} className='text-blue-400 bold border-4 border-blue-400 rounded-lg px-2 mx-1'>{tag.name}</span>
                                        } else if (tag.name === 'Fastest') {
                                            return <span key={offer.id + "_fastest"} className='text-fuchsia-400 bold border-4 border-fuchsia-400 rounded-lg px-2 mx-1'>{tag.name}</span>
                                        } else {
                                            return <span key={offer.id + "_operator"} className='text-yellow-400 bold border-4 border-yellow-400 rounded-lg px-2 mx-1'>{tag.name}</span>
                                        }
                                    })}
                                    </div>
                                <div>1099 ch / 39.23 BTC cap</div>
                            </div>
                            </td>
                            <td>{offer?.seller_score}<span className='font-secondary'>/100</span></td>
                            <td>{offer?.base_fee.toFixed() || '100'}</td>
                            <td>{offer?.fee_rate_cap.toFixed() || '500'}</td>
                            {/* Mocked # days */}
                            <td>~90d</td> 
                            <td>{offer?.var_ppm || '14,900'}</td>
                            <td>{offer?.apr_min || '3.00%'}</td>
                            <td>{offer?.apr_max || '6.00%'}</td>
                            <td>{satsToBtc(offer?.min_block_length)}</td>
                            <td>{satsToBtc(offer?.max_size)}</td>
                            <td>
                                <div>{satsToBtc(offer?.available_liquidity,3)} BTC</div>
                                <div className='font-secondary slightly-smaller'>Total: 4.158 BTC</div>
                            </td>
                            <td className='font-secondary slightly-smaller w-36'>
                                <div>100 orders</div>
                                <div>{satsToBtc(offer?.orders?.locked_size) || '6.305'} BTC Capacity</div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default OffersTable;