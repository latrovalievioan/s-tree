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
-   [x] Handle dir selection
-   [ ] Handle onClick vs doubleclick
-   [ ] UI/styles
    -   [x] Add icons
    -   [x] Handle display name
-   [ ] Make section resizable
-   [ ] Handle scrolling
-   [ ] Handle error state
-   [ ] Handle loading state

### Explorer:

-   [x] Display current selected dir's direct children
-   [ ] UI/styles
    -   [x] Add icons
    -   [x] Handle display name
    -   [x] Section title
-   [ ] Display file contents
-   [x] Navigate down a dir
-   [ ] Breadcrumbs
    -   [x] Breadcrumbs navigation
    -   [ ] Handle multiple bredcrumbs wrapping
-   [ ] Create file
-   [ ] Delete file
-   [ ] Handle scrolling
    -   [ ] Sticky breadcrumbs

### Misc:

-   [ ] Use React query for all requests
-   [x] Create custom hook for handling object listing and tree structure
-   [x] Setup state management
