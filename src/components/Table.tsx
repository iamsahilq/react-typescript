import * as React from 'react';

import '../styles/Table.css';
import { userType, userWithId } from '../types/UserType';

export interface ITableProps {
  headers: string[];
  data: userWithId[];
  editAction: (user: userWithId) => void;
  deleteAction: (userId: string | number) => void;
}

export default function Table(props: ITableProps) {
  const { headers, data, editAction, deleteAction } = props;
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
                <td>
                  <img
                    width={200}
                    className="preview my20"
                    src={val.profilePic}
                    alt=""
                  />
                </td>
                <td>
                  <button
                    type="button"
                    id={val.id as string}
                    onClick={() => editAction(val)}
                    className="btn btn-sm btn-secondary"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    id={val.id as string}
                    onClick={() => deleteAction(val.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
