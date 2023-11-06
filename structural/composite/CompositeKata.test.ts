import {
  Employee,
  Department,
  Organization,
} from './CompositeKata';

describe('OrganizationUnit Classes', () => {
  let organization: Organization;

  beforeEach(() => {
    organization = new Organization('1', 'Composite Kata Org');
  });

  it('Adding and Displaying Employees', () => {
    const itDepartment = new Department(Math.floor(Math.random()).toString(), 'IT');
    const hugo = new Employee(Math.floor(Math.random()).toString(), 'Hugo', 'Software developer');
    const julieta = new Employee(Math.floor(Math.random()).toString(), 'Julieta', 'UX Designer');

    itDepartment.addOrganizationUnit(hugo);
    itDepartment.addOrganizationUnit(julieta);
    organization.addOrganizationUnit(itDepartment);

    const expectedOutput = `
      Organization name: Composite Kata Org
      Organization details:

        Department id: ${itDepartment.getId()}
        Department name: IT
        Department details:

          Employee id: ${hugo.getId()}
          Employee name: Hugo
          Employee job title: Software developer

          Employee id: ${julieta.getId()}
          Employee name: Julieta
          Employee job title: UX Designer`;

    expect(organization.displayDetails()).toEqual(expectedOutput);
  });

  it('Removing Employees', () => {
    const hrDepartment = new Department(Math.floor(Math.random()).toString(), 'HR');
    const julieta = new Employee(Math.floor(Math.random()).toString(), 'Julieta', 'UX Designer');

    hrDepartment.addOrganizationUnit(julieta);
    organization.addOrganizationUnit(hrDepartment);

    hrDepartment.removeOrganizationUnit(julieta);
    organization.removeOrganizationUnit(hrDepartment);

    const expectedOutput = `
      Organization name: Composite Kata Org
      Organization details:`;

    expect(organization.displayDetails()).toEqual(expectedOutput);
  });
});
