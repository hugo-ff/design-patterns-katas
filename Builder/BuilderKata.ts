interface ComputerBuilder {
  reset(): void;
  addCpu(cpu?: string): void;
  addRam(ram?: string): void;
  addStorage(storage?: string): void;
  addGraphicsCard(graphicsCard?: string): void;
}

class Computer {
  private cpu: string = '';
  private ram: string = '';
  private storage: string = '';
  private graphicsCard: string = '';

  public setCpu(cpu: string): void {
    this.cpu = cpu;
  }

  public setRam(ram: string): void {
    this.ram = ram;
  }

  public setStorage(storage: string): void {
    this.storage = storage;
  }

  public setGraphicsCard(graphicsCard: string): void {
    this.graphicsCard = graphicsCard;
  }

  getCpu(): string {
    return this.cpu;
  }

  getRam(): string {
    return this.ram;
  }

  getStorage(): string {
    return this.storage;
  }

  getGraphicsCard(): string {
    return this.graphicsCard;
  }
}

export class GamingComputerBuilder implements ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  public reset() {
    this.computer = new Computer();
  }

  public addCpu(cpu: string): void {
    this.computer.setCpu(cpu);
  }

  public addRam(ram: string): void {
    this.computer.setRam(ram);
  }

  public addStorage(storage: string): void {
    this.computer.setStorage(storage);
  }

  public addGraphicsCard(graphicsCard: string): void {
    this.computer.setGraphicsCard(graphicsCard);
  }

  public getProduct(): Computer {
    return this.computer
  }
}

export class BusinessComputerBuilder implements ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  public reset() {
    this.computer = new Computer();
  }

  public addCpu(): void {
    this.computer.setCpu('Business-Class CPU');
  }

  public addRam(): void {
    this.computer.setRam('16GB DDR4');
  }

  public addStorage(): void {
    this.computer.setStorage('512GB SSD');
  }

  public addGraphicsCard(): void {
    this.computer.setGraphicsCard('Integrated Graphics');
  }

  public getProduct(): Computer {
    return this.computer;
  }
}
export class ComputerDirector {
  constructGamingComputer(builder: ComputerBuilder) {
    builder.reset();
    builder.addCpu('High-Performance Gaming CPU');
    builder.addRam('32GB DDR4');
    builder.addStorage('1TB SSD + 2TB HDD');
    builder.addGraphicsCard('NVIDIA RTX 3080');
  }

  constructBusinessComputer(builder: ComputerBuilder) {
    builder.reset();
    builder.addCpu();
    builder.addRam();
    builder.addStorage();
    builder.addGraphicsCard();
  }
}

const director = new ComputerDirector();

const gamingComputerBuilder = new GamingComputerBuilder();
director.constructGamingComputer(gamingComputerBuilder);
const gammingComputer = gamingComputerBuilder.getProduct();
gammingComputer.getCpu(); // High-Performance Gaming CPU
gammingComputer.getRam(); // 32GB DDR4
gammingComputer.getGraphicsCard(); // 1TB SSD + 2TB HDD
gammingComputer.getStorage(); // NVIDIA RTX 3080

const businessComputerBuilder = new BusinessComputerBuilder();
director.constructBusinessComputer(businessComputerBuilder);
const businessComputer = businessComputerBuilder.getProduct();
businessComputer.getCpu(); // Business-Class CPU
businessComputer.getRam(); // 16GB DDR4
businessComputer.getGraphicsCard(); // 512GB SSD
businessComputer.getStorage(); // Integrated Graphics
