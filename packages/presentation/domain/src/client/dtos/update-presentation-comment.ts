import { CreatePresentationComment } from "./create-presentation-comment";

export interface UpdatePresentationComment extends CreatePresentationComment {
  id: string

  account: string
}
