export interface Brand {
  name: string
  description: string
  image: string
  url: string
  website: string
  needsWhiteBackground: boolean
}

export interface Project {
  name: string
  description: string
  image: string
  url: string
  technologies: string[]
  github: string
}

export function createBrand(
  name: string,
  description: string,
  image: string,
  url: string,
  website: string,
  needsWhiteBackground: boolean = true
): Brand {
  return { name, description, image, url, website, needsWhiteBackground }
}

export function createProject(
  name: string,
  description: string,
  image: string,
  url: string,
  technologies: string[],
  github: string
): Project {
  return { name, description, image, url, technologies, github }
}
