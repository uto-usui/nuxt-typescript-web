// ______________________________________________________
//
export interface Todo {
  id: string
}
export interface S {
  todos: Todo[]
}
// ______________________________________________________
//
export interface G {
  todosCount: number
  getTodos: Todo[]
}
export interface RG {
  'sample/todosCount': G['todosCount']
  'sample/getTodos': G['getTodos']
}
// ______________________________________________________
//
export interface M {
  addTodo: { todo: Todo }
}
export interface RM {
  'sample/addTodo': M['addTodo']
}
// ______________________________________________________
//
export interface A {
  asyncAddTodo: { todo: Todo }
}
export interface RA {
  'sample/asyncAddTodo': A['asyncAddTodo']
}
