export interface CrudRepositoryDTo<T> {
  create(item: T): Promise<T>;
  findOne(id: number): Promise<T | null>;
  findAll(): Promise<T[]>;
  update(id: number, item: Partial<T>): Promise<T | null>;
  delete(id: number): Promise<T>;
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
    const response = await this.model.findByPk(id);
    if (!response) return null;

    return this.model.update(item, { where: { id } });
  }

  async delete(id: number): Promise<T> {
    const response = this.model.destroy({ where: { id } });
    return response;
  }
}

export default CrudRepository;
