import { PickType } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class SignUpDto extends PickType(User, ['email', 'password']) {}
