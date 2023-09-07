import { PhotoType } from '@/types/photos'

class PhotosService {
  async getPhotos(): Promise<PhotoType[]> {
    const data = await fetch('https://jsonplaceholder.typicode.com/photos')
    return data.json()
  }
}

export default new PhotosService()
