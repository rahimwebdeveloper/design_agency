import React, { useRef, useState } from 'react';

const Service = ({ services, index, refetch }) => {
    const selectRef = useRef();
    const { email, companyName, service, details, pay, _id, position } = services;
    const [state, setSate] = useState(position);

    const changeStatus = (id) => {

        const value = selectRef.current.value;
        setSate(value);
        fetch(`http://localhost:5000/order/${id}?position=${value}`, {
            method: 'PUT',
        })
            .then(res => res.json)
            .then(data => {
                console.log(data)


            })

    }




    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{companyName}</td>
                <td>{email}</td>
                <td>{service}</td>
                <td>{details.slice(0, 30)}</td>
                {pay ?
                    <td  className='p-0 w-full'>
                        <select className='bg-neutral text-white font-bold p-1' value={state} onChange={() => changeStatus(_id)} ref={selectRef}>
                            <option value="Pending">Pending</option>
                            <option value="onGoing">On Going</option>
                            <option value="done"> Done</option>
                        </select>
                    </td>
                    :
                    <td className=' text-red-500 font-bold'>Not Paid</td>
                }
            </tr>
        </>
    );
};

export default Service;