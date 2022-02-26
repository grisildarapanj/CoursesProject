import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { StudentCourse } from './student_courses.entity';
import { User } from './user.entity';

@Entity('course')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'title', type: 'varchar', nullable: false })
  title: string;

  @Column({ name: 'nr_of_credits', nullable: false })
  nr_of_credits: number;

  @Column({ name: 'code', nullable: false })
  code: string;

  @Column({ name: 'lecturer_id', nullable: true })
  lecturerId: number
  @ManyToOne(
    () => User,
    lecturer => lecturer.courses,
  )
  @JoinColumn({ name: 'lecturer_id' })
  lecturer: User

  @OneToMany(
    () => StudentCourse,
    student_course => student_course.course,
  )
  student_courses: StudentCourse[]
}