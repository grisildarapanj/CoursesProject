import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/entities/course.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>
    ) { }

  async create(createCourseDto: CreateCourseDto) {
    return await this.courseRepository.save(createCourseDto);
  }

  async findAll() {
    return await this.courseRepository.find();
  }

  async findOne(id: number) {
    return await this.courseRepository.findOne(id);
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const updatedCourse = await this.courseRepository.update(id,updateCourseDto);
    const course = await this.courseRepository.findOne(id)
    return course
  }

  async remove(id: number) {
    const course = await this.courseRepository.findOne(id)
    const deletedCourse =  await this.courseRepository.delete(id);
    return course
  }
}
