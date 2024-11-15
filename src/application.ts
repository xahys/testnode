import {ApplicationConfig} from '@loopback/core';
import {RestApplication} from '@loopback/rest';
import {RestExplorerBindings} from '@loopback/rest-explorer';
import {PingController} from './controllers/ping.controller';

export class Application extends RestApplication {
  constructor(options: ApplicationConfig = {}) {
    super(options);
    this.projectRoot = __dirname;
    this.controller(PingController);
    this.bind(RestExplorerBindings.CONFIG).to({
      path: '/explorer',
    });
  }
}

