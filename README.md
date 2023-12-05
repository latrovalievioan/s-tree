# S-tree

An S3 bucket object explorer.

## Run locally:
Prerequisites:
- `Node version > 14.19`

Instalation:
`npm i`

Run:
`npm run dev`

Test:
`npm run test`

For easier development, the Bucket credentials are prefilled from a `.env.local` file.
To enable this, create a `.env.local` file with the following content:

```
VITE_ACCESS_KEY_ID=
VITE_SECRET_ACCESS_KEY=
VITE_BUCKET=
VITE_REGION=
```

## Items for next iteration:

- Bundle delete objects
- React router for file explorer
- Invalidate credentials in localStorage (logout)
- Different views in explorer
- Syntax highlighting for file view
- Empty dir state
- Empty file state
- Update the contents of a file
- Rename an object
- Upload a file
- Better handling of buckets with more than 1000 objects (both performance optimization and request handling)

## Things that I would change from the specification for better UX/UI:

### Tree view
- Shows only directories.

I don't see a reason for the tree not to display files.
This would facilitate the user to navigate through the filesystem however he pleases.

- When a marked directory is clicked, it should be
expanded, and its subdirs should be displayed.
- If an expanded directory is clicked, it should be collapsed,
and all its subdirs should be hidden.
- If a directory is double-clicked, it should be selected as the
current directory and displayed in the other view.

I would create two separate buttons.
One would be responsible for expanding/collapsing the directories,
while the other would have the function to select a directory by a single click.
This would help us create a better UX since right now a double click will always trigger a single click.
Also there is no way for the user to know that to select a directory it should be double-clicked.

- The current working directory should always be visible in
the tree view.

This requirement creates some confusion.
Always visible means that even if the user wants to collapse the parent directory of the current working one, it would not collapse.
This creates inconsistency in the UX and confusion for the user.

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
- [x] Drop Breadcrumbs in favor of chevron navigation
- [x] File reader
    - [x] Display file content
    - [x] Loading state
    - [x] Formatting
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
- [x] Breadcrumbs text-align left
- [x] Tree items icon shrink
- [x] Tree items overflow x
- [x] Handle long names
- [x] Dirtree directories that doesn't have subdirs should not be expandable
- [x] The current working directory should always be visible in
the tree view
- [x] Add favicon
- [x] User can delete the root object, hence everything in the bucket
- [x] Selecting a dir from the explorer closes its parent in dirTree
- [x] Tooltips/titles for buttons
- [x] Add info icon to info texts in modal
- [x] Deleting a file named "test" will also delete the directory "test/" and all its subchildren or files starting with the prefix "test"
- [x] Add labels for certain input fields
- [x] The app only lists up to 1000 objects
- [x] The app doesn't list objects unless it receives 1000 objects from the API
