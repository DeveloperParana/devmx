import { providePresentationHttpService } from '../infrastructure';


export function provideServices() {
  return [
    providePresentationHttpService()
  ]
}
