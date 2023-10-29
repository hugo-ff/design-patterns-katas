import {
  GamingComputerBuilder,
  BusinessComputerBuilder,
  ComputerDirector,
} from './BuilderKata';

describe('ComputerBuilder', () => {
  it('should build a gaming computer with custom specifications', () => {
    const computerDirector = new ComputerDirector();
    const gamingComputerBuilder = new GamingComputerBuilder();

    computerDirector.constructGamingComputer(gamingComputerBuilder);
    const gamingComputer = gamingComputerBuilder.getProduct();

    // Assert specific details of the custom gaming computer
    expect(gamingComputer.getCpu()).toEqual('High-Performance Gaming CPU');
    expect(gamingComputer.getRam()).toEqual('32GB DDR4');
    expect(gamingComputer.getStorage()).toEqual('1TB SSD + 2TB HDD');
    expect(gamingComputer.getGraphicsCard()).toEqual('NVIDIA RTX 3080');
  });

  it('should build a business computer with custom specifications', () => {
    const computerDirector = new ComputerDirector();
    const businessComputerBuilder = new BusinessComputerBuilder();

    computerDirector.constructBusinessComputer(businessComputerBuilder);
    const businessComputer = businessComputerBuilder.getProduct();

    // Assert specific details of the custom business computer
    expect(businessComputer.getCpu()).toEqual('Business-Class CPU');
    expect(businessComputer.getRam()).toEqual('16GB DDR4');
    expect(businessComputer.getStorage()).toEqual('512GB SSD');
    expect(businessComputer.getGraphicsCard()).toEqual('Integrated Graphics');
  });

  it('should allow building computers with different specifications', () => {
    const computerDirector = new ComputerDirector();
    const gamingComputerBuilder = new GamingComputerBuilder();
    const businessComputerBuilder = new BusinessComputerBuilder();

    computerDirector.constructGamingComputer(gamingComputerBuilder);
    const gamingComputer = gamingComputerBuilder.getProduct();
    computerDirector.constructBusinessComputer(businessComputerBuilder);
    const businessComputer = businessComputerBuilder.getProduct();

    // Assert specific details of the custom gaming computer
    expect(gamingComputer.getCpu()).toEqual('High-Performance Gaming CPU');
    expect(gamingComputer.getRam()).toEqual('32GB DDR4');
    expect(gamingComputer.getStorage()).toEqual('1TB SSD + 2TB HDD');
    expect(gamingComputer.getGraphicsCard()).toEqual('NVIDIA RTX 3080');

    // Assert specific details of the custom business computer
    expect(businessComputer.getCpu()).toEqual('Business-Class CPU');
    expect(businessComputer.getRam()).toEqual('16GB DDR4');
    expect(businessComputer.getStorage()).toEqual('512GB SSD');
    expect(businessComputer.getGraphicsCard()).toEqual('Integrated Graphics');
  });
});
