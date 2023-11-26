# S-tree

An S3 bucket explorer that mimics a filesystem.

## TODOS:

### Client <-> AWS API communication:

-   [x] List objects
-   [ ] Read an object
-   [ ] Create an object
-   [ ] Delete an object
-   [ ] Live bucket state update

### Bucket credentials handling:

-   [ ] UI form
-   [ ] Store/retrieve credentials from localStorage
-   [ ] Show form when there are no credentials in localStorage

### Dir tree:

-   [x] Display dir objects as a tree
-   [x] Handle open/close dir
-   [ ] Handle dir selection
-   [ ] UI/styles
    -   [x] Add icons
    -   [ ] Handle display name
-   [ ] Make section resizable
-   [ ] Handle scrolling
-   [ ] Handle error state
-   [ ] Handle loading state

### Explorer:

-   [ ] Display current selected dir's direct children
-   [ ] UI/styles
-   [ ] Display file contents
-   [ ] Create file
-   [ ] Delete file
-   [ ] Handle scrolling

### Misc:

-   [ ] Use React query for all requests
-   [x] Create custom hook for handling object listing and tree structure
-   [x] Setup state management
