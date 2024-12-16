export namespace UserManagement {
  export namespace Admin {
    export class UserAdmin {
      private name: string;
      private email: string;
      private isSuperAdmin: boolean;

      constructor(name: string, email: string, isSuperAdmin: boolean) {
        this.name = name;
        this.email = email;
        this.isSuperAdmin = isSuperAdmin;
      }

      public getUserInfo(): string {
        return `name: ${this.name}, email: ${this.email}, superAdmin: ${this.isSuperAdmin}`;
      }

      public setSuperAdmin(status: boolean): void {
        this.isSuperAdmin = status;
      }

      public setSuperAdminStatus(status: boolean): void {
        this.isSuperAdmin = status;
      }
    }
  }
}
