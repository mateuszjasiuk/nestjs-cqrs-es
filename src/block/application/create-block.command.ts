export class CreateBlockCommand {
  constructor(private readonly id: string) {}
  
  getId(): string {
    return this.id;
  }
}
