export type RootMenu = IMenuItem[]

export interface IMenuItem {
  menu: string
  dropdown?: Dropdown[]
}

export interface Dropdown {
  menuItem?: string
  slug?: string
  menuHead?: string
  submenu?: Submenu[]
}

export interface Submenu {
  pageSlug: string
  menuItem: string
  slug: string
}