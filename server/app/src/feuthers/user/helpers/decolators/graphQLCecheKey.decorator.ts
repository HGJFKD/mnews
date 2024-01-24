import { SetMetadata } from '@nestjs/common';

export const GraphQlCecheKey = (cecheKeyValue) =>
  SetMetadata('graphQLCecheKey', cecheKeyValue);