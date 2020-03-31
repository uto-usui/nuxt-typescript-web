interface windowType {
  w: number
  h: number
}

/**
 * state
 */
export interface S {
  isPageReady: boolean
  isMenuOpen: boolean
  pageName: string
  window: windowType
  scrollY: number
}

/**
 * getters
 */
export interface G {
  getIsMenuOpen: boolean
}
export interface RG {
  'global/getIsMenuOpen': G['getIsMenuOpen']
}

/**
 * mutations
 */
export interface M {
  isPageReady: boolean
  isMenuOpen: boolean
  pageName: string
  window: windowType
  scrollY: number
}
export interface RM {
  'global/isPageReady': M['isPageReady']
  'global/isMenuOpen': M['isMenuOpen']
  'global/pageName': M['pageName']
  'global/window': M['window']
  'global/scrollY': M['scrollY']
}

/**
 * actions
 */
export interface A {
  setIsPageReady: boolean
  setIsMenuOpen: boolean
  setPageName: string
  setWindow: windowType
  setScrollY: number
}
export interface RA {
  'global/setIsPageReady': A['setIsPageReady']
  'global/setIsMenuOpen': A['setIsMenuOpen']
  'global/setPageName': A['setPageName']
  'global/setWindow': A['setWindow']
  'global/setScrollY': A['setScrollY']
}
