import {
  Course,
  ProgrammingCourse,
  DesignCourse,
  LanguageCourse,
  CourseFactory,
  ProgrammingCourseFactory,
  DesignCourseFactory,
  LanguageCourseFactory,
} from './FactoryMethodKata';

describe('Online Course Platform', () => {
  test('Programming Course Factory creates a Programming Course', () => {
    const programmingCourseFactory: CourseFactory = new ProgrammingCourseFactory();
    const course: Course = programmingCourseFactory.createCourse('JavaScript Fundamentals', 18, 10, 'on demand video');

    expect(course).toBeInstanceOf(ProgrammingCourse);
    expect(course.title).toBe('JavaScript Fundamentals');
    expect(course.duration).toBe(18);
    expect(course.price).toBe(10);
    expect(course.format).toBe('on demand video');
  });

  test('Design Course Factory creates a Design Course', () => {
    const designCourseFactory: CourseFactory = new DesignCourseFactory();
    const course: Course = designCourseFactory.createCourse('UI/UX Design Basics', 24, 12, 'video');

    expect(course).toBeInstanceOf(DesignCourse);
    expect(course.title).toBe('UI/UX Design Basics');
    expect(course.duration).toBe(24);
    expect(course.price).toBe(12);
    expect(course.format).toBe('video');
  });

  test('Language Course Factory creates a Language Course', () => {
    const languageCourseFactory: CourseFactory = new LanguageCourseFactory();
    const course: Course = languageCourseFactory.createCourse('English advanced', 360, 20, 'ebook');

    expect(course).toBeInstanceOf(LanguageCourse);
    expect(course.title).toBe('English advanced');
    expect(course.duration).toBe(360);
    expect(course.price).toBe(20);
    expect(course.format).toBe('ebook');
  });
});
