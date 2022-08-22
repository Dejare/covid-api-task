import React from 'react'

const State = ({ state, cases, admission, discharged, death }) => {
    return (
        <div className='border mx-3 my-6'>
            <div>
                <style dangerouslySetInnerHTML={{ __html: "table.GeneratedTable {  width: 100%;  background-color: #293143;  border-collapse: collapse;  border-width: 2px;  border-color: #000;  border-style: solid;  color: #000;}table.GeneratedTable td, table.GeneratedTable th { border-bottom: .1px solid white  padding: 3px;}table.GeneratedTable thead {  background-color: #d4d4d4;}" }} />

                <table className="GeneratedTable">

                    <tbody>
                        <tr className='flex items-center justify-around py-4 flex-row '>
                            <td className='font-bold'>{state}</td>
                            <td>{cases}</td>
                            <td className='text-red-300'>{admission}</td>
                            <td className='text-green-300'>{discharged}</td>
                            <td className='text-red-600'>{death}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default State