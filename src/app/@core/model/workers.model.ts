import { emit } from 'process';

export class Workers {
  BannerId: string;
  FirstName: string;
  LastName: string;
  Email: string;
  RoleId: number;
  RoleName: string;

  constructor(BannerId: string, FirstName: string, LastName: string, Email: string, RoleId: number, RoleName: string) {
    this.BannerId = BannerId;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Email = Email;
    this.RoleId = RoleId;
    this.RoleName = RoleName;
  }
}

export interface WorkersResponse {
  success: boolean;
  statusCode: number;
  message?: string;
  items?: Workers[];
  error?: any;
}

export class UserRoles {
  BannerId: string;
  RoleId: number;

  constructor(BannerId: string, RoleId: number) {
    this.BannerId = BannerId;
    this.RoleId = RoleId;
  }
}

export interface UserRolesResponse {
  success: boolean;
  statusCode: number;
  message?: string;
  items?: UserRoles[];
  error?: any;
}
