import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Course } from './course.entity';
import { User } from './user.entity';

@Entity('student_course')
export class StudentCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'student_id', nullable: true })
  studentId: number
  @ManyToOne(
    () => User,
    student => student.student_courses,
  )
  @JoinColumn({ name: 'student_id' })
  student: User

  @Column({ name: 'course_id', nullable: true })
  courseId: number
  @ManyToOne(
    () => Course,
    course => course.student_courses,
  )
  @JoinColumn({ name: 'lecturer_id' })
  course: Course
  
}