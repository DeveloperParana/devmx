import { AccessTokenPayload, Authentication } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/server';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(env: Env) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: env.jwt.secret,
    });
  }

  validate(payload: AccessTokenPayload): Authentication {
    return {
      id: payload.sub,
      name: payload.name,
      contact: payload.contact,
      roles: payload.roles,
      displayName: payload.displayName,
    };
  }
}
