import { PhotoType } from '@/types/photos'
import { environment } from '@/configuration'

class PhotosService {
  async getPhotos(): Promise<PhotoType[]> {
    const data = await fetch(`${environment.countriesURL}`)
    return data.json()
  }
}

export default new PhotosService()
