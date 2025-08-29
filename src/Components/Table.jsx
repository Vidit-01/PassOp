import React from 'react'

const Table = (params) => {
    return (
        <>

            <div className='flex w-full justify-center'>
                <div className='flex w-3/4 justify-center'>
                    <table class="table-auto w-3/4">
                        <thead className='bg-green-800 text-white text-center'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>UserName</th>
                                <th className='py-2'>Password</th>
                            </tr>
                        </thead>
                    
                    
                        <tbody className='bg-green-100'>
                            <tr>
                                <td className='py-1'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className='py-1'>Malcolm Lockyer</td>
                                <td className='py-1'>1961</td>
                            </tr>
                            <tr>
                                <td className='py-1'>Witchy Woman</td>
                                <td className='py-1'>The Eagles</td>
                                <td className='py-1'>1972</td>
                            </tr>
                            <tr>
                                <td className='py-1'>Shining Star</td>
                                <td className='py-1'>Earth, Wind, and Fire</td>
                                <td className='py-1'></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table
