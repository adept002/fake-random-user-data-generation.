import React from 'react';

const DataTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Идентификатор</th>
                    <th>ФИО</th>
                    <th>Адрес</th>
                    <th>Телефон</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.number}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
