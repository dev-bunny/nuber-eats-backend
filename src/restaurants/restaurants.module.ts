import { Module } from '@nestjs/common';
import { RestaurantsResolve } from './restaurants.resolver';

@Module({
  providers: [RestaurantsResolve],
})
export class RestaurantsModule {}
