import { AccountOut } from "./account-out"
import { PresentationOut } from "./presentation-out"

export interface PresentationCommentOut {
  id: string

  text: string

  presentation: PresentationOut

  account: AccountOut
}
