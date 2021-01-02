export type BlockCreatedEventPayload = {
  id: string;
};

export class BlockCreatedEvent {
  private readonly VERSION = 1;

  constructor(
    private readonly id: string,
    private readonly payload: BlockCreatedEventPayload,
  ) {}

  getId(): string {
    return this.id;
  }

  getVersion(): number {
    return this.VERSION;
  }

  getPayload(): BlockCreatedEventPayload {
    return this.payload;
  }
}
