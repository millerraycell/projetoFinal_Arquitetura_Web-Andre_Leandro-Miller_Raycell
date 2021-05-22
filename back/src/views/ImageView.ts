import Image from "../models/ImageModel"

export default {
    render(image: Image){
        return {
            id: image.id,
            url: `http://locahost:3333/uploads/${image.path}`
        }
    },

    renderMany(images: Image[]){
        return images.map(image => this.render(image))
    }
}