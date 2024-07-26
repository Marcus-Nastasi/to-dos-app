export class Cookies {

   private static getExpirationString(days: number): string {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      return "expires=" + date.toUTCString();
   }

   public static create(name: string, value: string, expiration: number): void {
      document.cookie = `${name}=${value}; ${this.getExpirationString(expiration)};`;
   }
}

