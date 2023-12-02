# S-tree

An S3 bucket explorer that mimics a filesystem.

## TODOS:

### Client <-> AWS API communication:

- [x] List objects
- [x] Read an object
- [x] Create an object
- [x] Delete an object
- [x] Validate credentials
- [x] Live bucket state update
    -   [x] Smaller refetch interval 
- [x] Single instance of client

### Bucket credentials handling:

- [x] UI form
- [x] Store credentials to localStorage after validation
- [x] Handle error
- [x] Retrieve credentials from localStorage
- [x] Show form when there are no credentials in localStorage

### Dir tree:

- [x] Display dir objects as a tree
- [x] Handle open/close dir
- [x] Handle dir selection
- [x] Handle onClick vs doubleclick
- [x] Add icons
- [x] Handle display name
- [x] Make section resizable
- [x] Handle scrolling
- [x] Handle error state
- [x] Handle loading state

### Explorer:

- [x] Child list
    - [x] Display current selected dir's direct children
    - [x] Add icons
    - [x] Handle display name
    - [x] Section title
    - [x] Navigate down a dir
    - [x] Handle error state
    - [x] Handle loading state
- [x] Breadcrumbs
    - [x] Breadcrumbs navigation
    - [x] Handle multiple bredcrumbs wrapping
- [ ] File reader
    - [x] Display file content
    - [x] Loading state
    - [ ] Empty state
    - [x] Formatting
    - [ ] Text coloring
- [x] Handle scrolling

### Actions menu:
- [x] Create file
    - [x] Form UI
    - [x] Form field validation
    - [x] Loading state
    - [x] Invalidate objects query
    - [x] Handle errors
- [x] Create directory
    - [x] Form UI
    - [x] Form field validation
    - [x] Loading state
    - [x] Invalidate objects query
    - [x] Handle errors
- [x] Delete object
    - [x] Form UI
    - [x] Form field validation
    - [x] Loading state
    - [x] Invalidate objects query
    - [x] Handle errors
- [x] UI
    - [ ] Tooltips for buttons
    - [x] Disable delete button when there isn't a selected file/dir

### Form:
- [x] Create reusable form component

### Modal: 
- [x] Implement a reusable Modal component
- [x] UI

### Bugs and refactoring:

- [x] Can create invalid dirs
- [x] Root prefix handling
- [x] Breadcrumbs Root click
- [x] Rename all variables that use some system name
- [x] Selecting text while resizing
- [x] Cannot delete objects by prefix (folder name)
- [x] Bucket name in dirTree is undefined
- [x] Object is in invalid state on Safari
- [ ] Breadcrumbs text-align left
- [ ] Tree items text align left
- [ ] Tree items icon shrink
- [ ] Tree items overflow x
- [ ] Empty dir state
- [ ] Empty file state
- [ ] Handle long names
- [x] Dirtree directories that doesn't have subdirs should not be expandable
- [ ] The current working directory should always be visible in
the tree view and should be “decorated” in some way.
- [x] Add favicon
- [x] User can delete the root object, hence everything in the bucket

### Nice to have
- [ ] When selecting a child from Explorer if parent is collapsed in dir tree - expand it
- [ ] Bundle delete objects
- [ ] React router for file explorer
- [ ] Invalidate credentials in localStorage (logout)
- [ ] Different views in explorer
