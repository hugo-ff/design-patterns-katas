export interface OrganizationUnit {
  getId(): string;
  displayDetails(indentation: number): string;
}

export class Employee implements OrganizationUnit {
  private id: string;
  private name: string;
  private jobTitle: string;

  constructor(id: string, name: string, jobTitle: string) {
    this.id = id;
    this.name = name;
    this.jobTitle = jobTitle;
  }

  getId(): string {
    return this.id;
  }

  displayDetails(indentation: number = 0): string {
    return(`
      ${' '.repeat(indentation)}Employee id: ${this.id}
      ${' '.repeat(indentation)}Employee name: ${this.name}
      ${' '.repeat(indentation)}Employee job title: ${this.jobTitle}
    `).trimEnd();
  }
}

export class Department implements OrganizationUnit {
  private id: string;
  private name: string;
  private organizationUnits: OrganizationUnit[];

  constructor(id: string, name: string, organizationUnits: OrganizationUnit[] = []) {
    this.id = id;
    this.name = name;
    this.organizationUnits = organizationUnits;
  }

  getId(): string {
    return this.id;
  }

  displayDetails(indentation: number = 0): string {
    const departmentDetails = this.organizationUnits.map(unit => unit.displayDetails(indentation + 2)).join('\n');

    return(`
      ${' '.repeat(indentation)}Department id: ${this.id}
      ${' '.repeat(indentation)}Department name: ${this.name}
      ${' '.repeat(indentation)}Department details:\n${departmentDetails}
    `).trimEnd();
  }

  addOrganizationUnit(org: OrganizationUnit) {
    this.organizationUnits.push(org);
  }

  removeOrganizationUnit(org: OrganizationUnit) {
    const index = this.organizationUnits.indexOf(org);
    if (index !== -1) {
      this.organizationUnits.splice(index, 1);
    }
  }
}

export class Organization implements OrganizationUnit {
  private id: string;
  private organizationName: string;
  private organizationUnits: OrganizationUnit[];

  constructor(id: string, organizationName: string, organizationUnits: OrganizationUnit[] = []) {
    this.id = id;
    this.organizationName = organizationName;
    this.organizationUnits = organizationUnits;
  }

  addOrganizationUnit(org: OrganizationUnit) {
    this.organizationUnits.push(org);
  }

  removeOrganizationUnit(org: OrganizationUnit) {
    const index = this.organizationUnits.indexOf(org);
    if (index !== -1) {
      this.organizationUnits.splice(index, 1);
    }
  }

  getId(): string {
    return this.id;
  }

  displayDetails(indentation: number = 0): string {
    const organizationDetails = this.organizationUnits.map(unit => unit.displayDetails(indentation + 2)).join('\n');

    return(`
      ${' '.repeat(indentation)}Organization name: ${this.organizationName}
      ${' '.repeat(indentation)}Organization details:\n${organizationDetails}
    `).trimEnd();
  }
}

const organization = new Organization(Math.floor(Math.random()).toString(), 'Composite Kata Org')
const hrDepartment = new Department(Math.floor(Math.random()).toString(), 'HR');
const itDepartment = new Department(Math.floor(Math.random()).toString(), 'IT');
organization.addOrganizationUnit(hrDepartment);
organization.addOrganizationUnit(itDepartment);

const hugo = new Employee(Math.floor(Math.random()).toString(), 'Hugo', 'Software developer');
const julieta = new Employee(Math.floor(Math.random()).toString(), 'Julieta', 'UX Designer');
const ignacio = new Employee(Math.floor(Math.random()).toString(), 'Ignacio', 'Recruiter');

itDepartment.addOrganizationUnit(hugo);
itDepartment.addOrganizationUnit(julieta);
hrDepartment.addOrganizationUnit(ignacio);

organization.displayDetails();
