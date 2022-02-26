import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Course } from './entities/course.entity';
import { StudentCourse } from './entities/student_courses.entity';
import { CourseModule } from './course/course.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'password',
      database: 'courses_project',
      entities: [
        User, Course, StudentCourse
      ],
      // entities: ['../typeorm/entities/*.ts'],

      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Course, StudentCourse]),
    CourseModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
