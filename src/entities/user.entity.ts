import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Course } from './course.entity';
import { StudentCourse } from './student_courses.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', nullable: false })
  name: string;

  @Column({ name: 'surname', type: 'varchar', nullable: false })
  surname: string;

  @Column({ name: 'email', type: 'varchar', nullable: false })
  email: string;

  @Column({ name: 'role', nullable: false })
  role: number;

  @OneToMany(
    () => Course,
    course => course.lecturer,
  )
  courses: Course[]

  @OneToMany(
    () => StudentCourse,
    student_course => student_course.student,
  )
  student_courses: StudentCourse[]

}