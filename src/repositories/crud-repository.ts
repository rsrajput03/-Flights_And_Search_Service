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
    const response = await this.model.create(item);
    return response;
  }

  async findOne(id: number): Promise<T | null> {
    const response = await this.model.findByPk(id);
    return response;
  }

  async findAll(): Promise<T[]> {
    const response = await this.model.findAll();
    return response;
  }

  async update(id: number, item: T): Promise<T | null> {
    const response = await this.model.update(item, { where: { id } });
    return response;
  }

  async delete(id: number): Promise<number> {
    const response = await this.model.destroy({ where: { id } });
    return response;
  }
}

export default CrudRepository;
