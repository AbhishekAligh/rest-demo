import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //  GET /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER') {
    return `This will return an array of users or array of users with the queried role: ${role}`;
  }
  // @Get('interns') // GET /users/interns
  // findAllInterns() {
  //   return "This will return an array of interns.";
  // }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }
  // NOTE: The order does matter. If we add the interns route after the :id route we would get intern as an id and not the empty array

  @Post() // POST /users
  create(@Body() user: object) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: object) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
