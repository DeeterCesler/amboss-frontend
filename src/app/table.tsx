"use client";

import { GET_CHANNELS } from '@/apollo/query';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import React, { use, useEffect } from 'react';

const mockedResponse: any = [
    {
        "name": "⚡ G-Spot-21_69...",
        "account": "031e7ed74fd4ab8cd739a164f9857cd4116ea9441b9108bcd41b2905c965ae8321",
        "pfp_url": "/pfp1.png",
        "tags": ["Node Runner", "Fast"],
        "seller_score": 6.93,
        "fixed_sats": 10,
        "min_age_days": 6,
        "var_ppm": 100,
        "apr_min": 0.5,
        "apr_max": 2.5,
        "min_block_size": 3000000,
        "max_block_size": 5000000,
        "available_liquidity": 50000000,
        "num_orders": 0,
        "capacity": "50000000",
        "amboss_fee_rate": 7500,
        "base_fee": 10,
        "base_fee_cap": 10,
        "fee_rate": 100,
        "fee_rate_cap": 500,
        "id": "9fb293ef-0e3b-4991-ad56-64a5ff59789e",
        "min_block_length": 8640,
        "offer_type": "CHANNEL",
        "onchain_multiplier": null,
        "onchain_priority": null,
        "side": "BUY",
        "status": "ENABLED",
      },
    {
        "name": "⚡ G-Spot-21_69...",
        "account": "031e7ed74fd4ab8cd739a164f9857cd4116ea9441b9108bcd41b2905c965ae8555",
        "pfp_url": "/pfp2.png",
        "tags": ["Fastest", "Operator"],
        "seller_score": 6.93,
        "fixed_sats": 10,
        "fee_rate_cap": 500,
        "min_age_days": 6,
        "var_ppm": 100,
        "apr_min": 0.5,
        "apr_max": 2.5,
        "min_block_size": 3000000,
        "max_block_size": 5000000,
        "available_liquidity": 50000000,
        "num_orders": 0,
        "capacity": "50000000",
        "amboss_fee_rate": 7500,
        "base_fee": 10,
        "base_fee_cap": 10,
        "fee_rate": 100,
        "id": "9fb293ef-0e3b-4991-ad56-64a5ff59789f",
        "min_block_length": 8640,
        "offer_type": "CHANNEL",
        "onchain_multiplier": null,
        "onchain_priority": null,
        "side": "BUY",
        "status": "ENABLED",
      },
    {
        "name": "⚡ G-Spot-21_69...",
        "account": "031e7ed74fd4ab8cd739a164f9857cd4116ea9441b9108bcd41b2905c965ae8555",
        "pfp_url": "/pfp2.png",
        "tags": [],
        "seller_score": 6.93,
        "fixed_sats": 10,
        "fee_rate_cap": 500,
        "min_age_days": 6,
        "var_ppm": 100,
        "apr_min": 0.5,
        "apr_max": 2.5,
        "min_block_size": 3000000,
        "max_block_size": 5000000,
        "available_liquidity": 50000000,
        "num_orders": 0,
        "capacity": "50000000",
        "amboss_fee_rate": 7500,
        "base_fee": 10,
        "base_fee_cap": 10,
        "fee_rate": 100,
        "id": "9fb293ef-0e3b-4991-ad56-64a5ff59789f",
        "min_block_length": 8640,
        "offer_type": "CHANNEL",
        "onchain_multiplier": null,
        "onchain_priority": null,
        "side": "BUY",
        "status": "ENABLED",
      },
    {
        "name": "⚡ G-Spot-21_69...",
        "account": "031e7ed74fd4ab8cd739a164f9857cd4116ea9441b9108bcd41b2905c965ae8555",
        "pfp_url": "/pfp2.png",
        "tags": [],
        "seller_score": 6.93,
        "fixed_sats": 10,
        "fee_rate_cap": 500,
        "min_age_days": 6,
        "var_ppm": 100,
        "apr_min": 0.5,
        "apr_max": 2.5,
        "min_block_size": 3000000,
        "max_block_size": 5000000,
        "available_liquidity": 50000000,
        "num_orders": 0,
        "capacity": "50000000",
        "amboss_fee_rate": 7500,
        "base_fee": 10,
        "base_fee_cap": 10,
        "fee_rate": 100,
        "id": "9fb293ef-0e3b-4991-ad56-64a5ff59789f",
        "min_block_length": 8640,
        "offer_type": "CHANNEL",
        "onchain_multiplier": null,
        "onchain_priority": null,
        "side": "BUY",
        "status": "ENABLED",
      },
    {
        "name": "⚡ G-Spot-21_69...",
        "account": "031e7ed74fd4ab8cd739a164f9857cd4116ea9441b9108bcd41b2905c965ae8555",
        "pfp_url": "/pfp2.png",
        "tags": [],
        "seller_score": 6.93,
        "fixed_sats": 10,
        "fee_rate_cap": 500,
        "min_age_days": 6,
        "var_ppm": 100,
        "apr_min": 0.5,
        "apr_max": 2.5,
        "min_block_size": 3000000,
        "max_block_size": 5000000,
        "available_liquidity": 50000000,
        "num_orders": 0,
        "capacity": "50000000",
        "amboss_fee_rate": 7500,
        "base_fee": 10,
        "base_fee_cap": 10,
        "fee_rate": 100,
        "id": "9fb293ef-0e3b-4991-ad56-64a5ff59789f",
        "min_block_length": 8640,
        "offer_type": "CHANNEL",
        "onchain_multiplier": null,
        "onchain_priority": null,
        "side": "BUY",
        "status": "ENABLED",
      },
];


const OffersTable = () => {
    const [offers, setOffers]:Array<any> = React.useState(mockedResponse);
    const { data, loading, error } = useQuery(GET_CHANNELS);

  

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
                        <tr className='amboss-border'>
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
                        <tr className='font-secondary'>
                                <th>Seller</th>
                                <th className="flex items-center relative group">
                                    <div className="mr-2">Seller Score</div>
                                    <Image src="/info.svg" alt="info" width={20} height={20} />
                                    <div className="absolute w-120 left-1/2 transform -translate-x-1/2 top-full mt-2 bg-gray-700 text-white text-sm p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        Based on the number of successful transactions.
                                    </div>
                                </th>
                                <th>Fixed (sats)</th>
                                <th>Max Fee Rate (ppm)</th>
                                <th>Min Channel Age</th>
                                <th>Variable (ppm)</th>
                                <th>Min</th>
                                <th>Max</th>
                                <th>Min</th>
                                <th>Max</th>
                                <th>Available Liquidity</th>
                                <th>History</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offers.map((offer:any) => (
                        <tr className='tr-bg' key={offer.id}>
                            <td className='flex items-center w-90'>
                            <div className='flex items-center'>
                                <Image src="/pfp1.png" alt="pfp" width={40} height={40} className="rounded-full" />
                            </div>
                            <div className='m-2'>
                                <div>
                                {offer?.name}
                                </div>
                                <div className='flex my-1'>
                                {offer.tags?.map((tag:any) => {
                                    if (tag === 'Node Runner') {
                                    return <span key={offer.id + tag} className='text-lime-400 bold border-4 border-lime-400 rounded-lg px-2 mx-1'>{tag}</span>
                                    } else if (tag === 'Fast') {
                                    return <span key={offer.id + tag} className='text-blue-400 bold border-4 border-blue-400 rounded-lg px-2 mx-1'>{tag}</span>
                                    } else if (tag === 'Fastest') {
                                    return <span key={offer.id + tag} className='text-fuchsia-400 bold border-4 border-fuchsia-400 rounded-lg px-2 mx-1'>{tag}</span>
                                    } else {
                                    return <span key={offer.id + tag} className='text-yellow-400 bold border-4 border-yellow-400 rounded-lg px-2 mx-1'>{tag}</span>
                                    }
                                })}
                                </div>
                            </div>
                            </td>
                            <td>{offer?.seller_score}<span className='font-secondary'>/100</span></td>
                            <td>{offer?.base_fee}</td>
                            <td>{offer?.fee_rate_cap}</td>
                            <td>{offer?.min_age_days}</td>
                            <td>{offer?.var_ppm}</td>
                            <td>{offer?.apr_min}</td>
                            <td>{offer?.apr_max}</td>
                            <td>{offer?.min_block_size/100000000}</td>
                            <td>{offer?.max_block_size/100000000}</td>
                            <td>{offer?.available_liquidity/100000000}</td>
                            <td>{offer?.num_orders}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default OffersTable;