export interface CrudRepositoryDTo<T> {
  create(item: T): Promise<T>;
  findOne(id: number): Promise<T | null>;
  findAll(): Promise<T[]>;
  update(id: number, item: Partial<T>): Promise<T | null>;
  delete(id: number): Promise<number>;
}

class CrudRepository<T> implements CrudRepositoryDTo<T> {
  private model: any;

  constructor(model: any) {
    this.model = model;
  }

  async create(item: T): Promise<T> {
    return this.model.create(item);
  }

  async findOne(id: number): Promise<T | null> {
    return this.model.findByPk(id);
  }

  async findAll(): Promise<T[]> {
    return this.model.findAll();
  }

  async update(id: number, item: T): Promise<T | null> {
    await this.model.update(item, { where: { id } });
    return this.model.findByPk(id);
  }

  async delete(id: number): Promise<number> {
    await this.model.destroy({ where: { id } });
    return id;
  }
}

export default CrudRepository;
