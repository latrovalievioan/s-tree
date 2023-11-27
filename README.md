# S-tree

An S3 bucket explorer that mimics a filesystem.

## TODOS:

### Client <-> AWS API communication:

- [x] List objects
- [x] Read an object
- [ ] Create an object
- [ ] Delete an object
- [ ] Live bucket state update
- [ ] Singleton client

### Bucket credentials handling:

- [ ] UI form
- [ ] Store/retrieve credentials from localStorage
- [ ] Show form when there are no credentials in localStorage

### Dir tree:

- [x] Display dir objects as a tree
- [x] Handle open/close dir
- [x] Handle dir selection
- [ ] Handle onClick vs doubleclick
- [ ] UI/styles
  - [x] Add icons
  - [x] Handle display name
- [x] Make section resizable
- [ ] Handle scrolling
- [ ] Handle error state
- [ ] Handle loading state

### Explorer:

- [x] Display current selected dir's direct children
- [ ] UI/styles
  - [x] Add icons
  - [x] Handle display name
  - [x] Section title
- [x] Navigate down a dir
- [ ] Breadcrumbs
  - [x] Breadcrumbs navigation
  - [ ] Handle multiple bredcrumbs wrapping
- [x] File reader
  - [x] Display file content
  - [ ] Loading state
  - [ ] Empty state
  - [ ] Text coloring
- [ ] Create file
- [ ] Delete file
- [ ] Handle scrolling
  - [ ] Sticky breadcrumbs

### Bugs and refactoring:

- [ ] Root prefix handling
- [ ] Breadcrumbs Root click
- [ ] Rename all variables that use some system name

### Nice to have

- [ ] When selecting a child from Explorer if parent is collapsed in dir tree - expand it
