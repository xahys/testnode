import {
  SequenceHandler,
  FindRoute,
  ParseParams,
  InvokeMethod,
  Send,
  Reject,
  RequestContext,
} from '@loopback/rest';

export class MySequence implements SequenceHandler {
  constructor(
    public findRoute: FindRoute,
    public parseParams: ParseParams,
    public invoke: InvokeMethod,
    public send: Send,
    public reject: Reject,
  ) {}

  async handle(context: RequestContext): Promise<void> {
    const {request, response} = context;
    try {
      const route = this.findRoute(request);

      const args = await this.parseParams(request, route);

      const result = await this.invoke(route, args);

      this.send(response, result);
    } catch (error) {
      this.reject(context, error);
    }
  }
}

