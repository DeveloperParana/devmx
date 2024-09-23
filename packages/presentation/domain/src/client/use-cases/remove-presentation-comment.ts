import { PresentationCommentOut, UseCase } from "@devmx/shared-api-interfaces";
import { PresentationCommentService } from "../services";

export class RemovePresentationCommentUseCase implements UseCase<string, PresentationCommentOut> {
  constructor(private presentationCommentService: PresentationCommentService) {}

  execute(id: string) {
    return this.presentationCommentService.remove(id)
  }

}
