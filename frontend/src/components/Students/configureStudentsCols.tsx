import React from 'react';
import BaseIcon from '../BaseIcon';
import { mdiEye, mdiTrashCan, mdiPencilOutline } from '@mdi/js';
import axios from 'axios';
import {
    GridActionsCellItem,
    GridRowParams,
    GridValueGetterParams,
} from '@mui/x-data-grid';
import dataFormatter from '../../helpers/dataFormatter'
import DataGridMultiSelect from "../DataGridMultiSelect";
import ListActionsPopover from '../ListActionsPopover';
type Params = (id: string) => void;

export const loadColumns = async (
    onDelete: Params,
    entityName: string,
) => {
    async function callOptionsApi(entityName: string) {
        try {
        const data = await axios(`/${entityName}/autocomplete?limit=100`);
        return data.data;
        } catch (error) {
         console.log(error);
         return [];
        }
    }
    return [

        {
            field: 'first_name',
            headerName: 'FirstName',
            flex: 1,
            minWidth: 120,
            filterable: false,
            headerClassName: 'datagrid--header',
            cellClassName: 'datagrid--cell',

            editable: true,

        },

        {
            field: 'last_name',
            headerName: 'LastName',
            flex: 1,
            minWidth: 120,
            filterable: false,
            headerClassName: 'datagrid--header',
            cellClassName: 'datagrid--cell',

            editable: true,

        },

        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
            minWidth: 120,
            filterable: false,
            headerClassName: 'datagrid--header',
            cellClassName: 'datagrid--cell',

            editable: true,

        },

        {
            field: 'birth_date',
            headerName: 'BirthDate',
            flex: 1,
            minWidth: 120,
            filterable: false,
            headerClassName: 'datagrid--header',
            cellClassName: 'datagrid--cell',

            editable: true,
            type: 'dateTime',
            valueGetter: (params: GridValueGetterParams) =>
                new Date(params.row.birth_date),

        },

        {
            field: 'actions',
            type: 'actions',
            minWidth: 30,
            headerClassName: 'datagrid--header',
            cellClassName: 'datagrid--cell',
            getActions: (params: GridRowParams) => {

               return [
                   <div key={params?.row?.id}>
                      <ListActionsPopover
                      onDelete={onDelete}
                      itemId={params?.row?.id}
                      pathEdit={`/students/students-edit/?id=${params?.row?.id}`}
                      pathView={`/students/students-view/?id=${params?.row?.id}`}
                      hasUpdatePermission={true}
                    />
                   </div>,
                  ]
            },
        },
    ];
};
