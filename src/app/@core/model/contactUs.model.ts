/**
 * @author Asmita Chaudhari <Asmita.Chaudhari@dal.ca>
 *
 */

export class ContactUsModel {
  BannerId: string;
  FirstName: string;
  Email: string;
  Message: string;

  constructor(BannerId: string, FirstName: string, Email: string, Message: string) {
    this.BannerId = BannerId;
    this.FirstName = FirstName;
    this.Email = Email;
    this.Message = Message;
  }
}
