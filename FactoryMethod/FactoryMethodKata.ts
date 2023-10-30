export interface Course {
  title: string;
  duration: number;
  price: number;
  format: string;
  getCourseDescription(): string;
}

export class ProgrammingCourse implements Course {
  constructor(public title: string, public duration: number, public price: number, public format: string) {}

  getCourseDescription(): string {
    return `The ${this.title} is a ${this.format} course that has a duration of ${this.duration} hours and is $${this.price}.`;
  }
}

export class DesignCourse implements Course {
  constructor(public title: string, public duration: number, public price: number, public format: string) {}

  getCourseDescription(): string {
    return `The ${this.title} ${this.format} course has a duration of ${this.duration} hours and is $${this.price}.`;
  }
}

export class LanguageCourse implements Course {
  constructor(public title: string, public duration: number, public price: number, public format: string) {}

  getCourseDescription(): string {
    return `
      Title: ${this.title}
      Format: ${this.format}
      Number of pages: ${this.duration} pages
      Price: $${this.price}
    `;
  }
}

export abstract class CourseFactory {
  abstract createCourse(title: string, duration: number, price: number, format: string): Course;
}

export class LanguageCourseFactory extends CourseFactory {
  createCourse(title: string, duration: number, price: number, format: string): Course {
    return new LanguageCourse(title, duration, price, format);
  }
}

export class ProgrammingCourseFactory extends CourseFactory {
  createCourse(title: string, duration: number, price: number, format: string): Course {
    return new ProgrammingCourse(title, duration, price, format);
  }
}

export class DesignCourseFactory extends CourseFactory {
  createCourse(title: string, duration: number, price: number, format: string): Course {
    return new DesignCourse(title, duration, price, format);
  }
}

const programmingCourseFactory: CourseFactory = new ProgrammingCourseFactory();
const designCourseFactory: CourseFactory = new DesignCourseFactory();
const languageCourseFactory: CourseFactory = new LanguageCourseFactory();

const javascriptCourse = programmingCourseFactory.createCourse('JavaScript Fundamentals', 18, 10, 'on demand video');
javascriptCourse.getCourseDescription(); // Output: 'The JavaScript Fundamentals is a on demand video course that has a duration of 18 hours and is $10.'.

const uxuiCourse = designCourseFactory.createCourse('UI/UX Design Basics', 24, 12, 'video');
uxuiCourse.getCourseDescription(); // Output: 'The UI/UX Design Basics video course has a duration of 24 hours and is $12.' 

const englishCourse = languageCourseFactory.createCourse('English advanced', 360, 20, 'ebook');
englishCourse.getCourseDescription(); /* Output: `
Title: English advanced
Format: ebook
Number of pages: 360 pages
Price: $20` */
