# S-tree

An S3 bucket explorer that mimics a filesystem.

## TODOS:

### Client <-> AWS API communication:

- [x] List objects
- [x] Read an object
- [x] Create an object
- [x] Delete an object
- [x] Validate credentials
- [ ] Live bucket state update
    -   [ ] Smaller refetch interval 
- [x] Single instance of client

### Bucket credentials handling:

- [x] UI form
- [x] Store credentials to localStorage after validation
- [ ] Handle error
- [x] Retrieve credentials from localStorage
- [x] Show form when there are no credentials in localStorage

### Dir tree:

- [x] Display dir objects as a tree
- [x] Handle open/close dir
- [x] Handle dir selection
- [ ] Handle onClick vs doubleclick
- [ ] UI/styles
    - [x] Add icons
    - [x] Handle display name
- [x] Make section resizable
- [x] Handle scrolling
- [ ] Handle error state
- [ ] Handle loading state

### Explorer:

- [ ] Child list
    - [x] Display current selected dir's direct children
    - [x] Add icons
    - [x] Handle display name
    - [x] Section title
    - [x] Navigate down a dir
    - [ ] Handle error state
    - [ ] Handle loading state
- [x] Breadcrumbs
    - [x] Breadcrumbs navigation
    - [ ] Handle multiple bredcrumbs wrapping
- [x] File reader
    - [x] Display file content
    - [x] Loading state
    - [ ] Empty state
    - [x] Formatting
    - [ ] Text coloring
- [x] Handle scrolling

### Actions menu:
- [ ] Create file
    - [x] Form UI
    - [x] Form field validation
    - [x] Loading state
    - [x] Invalidate objects query
    - [ ] Handle errors
- [ ] Create directory
    - [x] Form UI
    - [x] Form field validation
    - [x] Loading state
    - [x] Invalidate objects query
    - [ ] Handle errors
- [ ] Delete object
    - [x] Form UI
    - [x] Form field validation
    - [x] Loading state
    - [x] Invalidate objects query
    - [ ] Handle errors
- [x] UI
    - [ ] Tooltips for buttons

### Form:
- [ ] Create reusable components for form
- [ ] Create reusable form component

### Modal: 
- [x] Implement a reusable Modal component
- [x] UI

### Bugs and refactoring:

- [x] Can create invalid dirs
- [x] Root prefix handling
- [x] Breadcrumbs Root click
- [ ] Rename all variables that use some system name
- [ ] Selecting text while resizing
- [x] Cannot delete objects by prefix (folder name)
- [ ] Bucket name in dirTree is undefined
- [x] Object is in invalid state on Safari
- [ ] Breadcrumbs text-align left
- [ ] Tree items text align left
- [ ] Tree items icon shrink
- [ ] Tree items overflow x
- [ ] Empty dir state
- [ ] Empty file state

### Nice to have
- [ ] When selecting a child from Explorer if parent is collapsed in dir tree - expand it
- [ ] Bundle delete objects
- [ ] React router for file explorer
- [ ] Invalidate credentials in localStorage (logout)
- [ ] Different views in explorer
