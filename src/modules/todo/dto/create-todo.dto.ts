import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  checked: boolean;
}
