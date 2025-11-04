export default class Brand {
    constructor(name, description, image, url, website, needsWhiteBackground = true) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.url = url;
        this.website = website;
        this.needsWhiteBackground = needsWhiteBackground;
    }

}