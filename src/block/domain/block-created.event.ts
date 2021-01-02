export type BlockCreatedEventPayload = {
  id: string;
};

export class BlockCreatedEvent {
  constructor(private readonly payload: BlockCreatedEventPayload) {}
}
