import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Especificação não existe");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };

function findByName(name: string) {
  throw new Error("Function not implemented.");
}
