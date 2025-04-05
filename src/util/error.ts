export class FetchError extends Error {
  status: number;

  constructor({ status, message }: { status: number; message: string }) {
    super(message);
    this.name = "FetchError";
    this.status = status;
  }
}
