---
inject: true
to: README.md
append: true
---
- [Day <%= day %>: <%= title %>](day-<%= day %>-<%= h.changeCase.paramCase(title) %>/)