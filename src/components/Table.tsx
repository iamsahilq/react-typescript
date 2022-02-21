import * as React from 'react';
import UserType from '../types/UserType';

import '../styles/Table.css';

export interface ITableProps {
  headers: string[];
  data: UserType[];
}

export default function Table(props: ITableProps) {
  const { headers, data } = props;
  return (
    <div className="MyTable">
      <table>
        <tbody>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.gender}</td>
                <td>{val.dob}</td>
                <td>{val.loe}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
