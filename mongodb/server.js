import mongoose from 'mongoose';
import routes from './routes';

mongoose.connect('...');

for(const name in routes) {
  let route = routes[name];
  app[route.method](route.path, route.handler);
}

server.listen()
