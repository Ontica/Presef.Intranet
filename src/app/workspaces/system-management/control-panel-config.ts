/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { PermissionsLibrary } from '@app/main-layout';


type ControlPanelOptionType = 'FinancialAccounting' |
                              'Land' |
                              'Compliance';



export interface ControlPanelOption {
  title: string;
  description: string;
  actionTitle: string;
  type: ControlPanelOptionType;
  permission: PermissionsLibrary;
}


export const ControlPanelOptionList: ControlPanelOption[] = [
  {
    title: 'Ventas',
    description: 'Aplicación para ventas.' ,
    actionTitle: 'Ventas',
    type: 'FinancialAccounting',
    permission: PermissionsLibrary.ALL,
  },
  {
    title: 'Pagos',
    description: 'Aplicación de administración de pagos.' ,
    actionTitle: 'Pagos',
    type: 'Land',
    permission: PermissionsLibrary.ALL,
  },
  {
    title: 'Comisiones',
    description: 'Aplicación administración de Comisiones.' ,
    actionTitle: 'Comisiones',
    type: 'Compliance',
    permission: PermissionsLibrary.ALL,
  },
];
