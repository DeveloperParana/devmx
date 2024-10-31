import { provideAlbumHttpService } from "../infrastrucure";

export function provideServices() {
  return [
    provideAlbumHttpService()
  ]
}
