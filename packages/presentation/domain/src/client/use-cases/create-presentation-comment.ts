import { PresentationCommentOut, UseCase } from "@devmx/shared-api-interfaces";
import { CreatePresentationComment } from "../dtos";
import { PresentationCommentService } from "../services";

export class CreatePresentationCommentUseCase implements UseCase<CreatePresentationComment, PresentationCommentOut> {
  constructor(private presentationCommentService: PresentationCommentService) {}

  execute(data: CreatePresentationComment) {
    return this.presentationCommentService.create(data)
  }

}
